import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const REQUIRED_FIELDS = [
  "name",
  "email",
  "phoneNumber",
  "airbnbLink",
  "address",
  "city",
  "state",
  "propertyType",
  "estimatedRevenue12Mo",
  "heardAbout",
] as const;

type RequiredField = (typeof REQUIRED_FIELDS)[number];

type IntakePayload = Record<RequiredField, string> & {
  anythingElse: string;
  website: string;
};

const FIELD_LABELS: Record<RequiredField, string> = {
  name: "Name",
  email: "E-mail",
  phoneNumber: "Phone Number",
  airbnbLink: "Airbnb Link",
  address: "Address",
  city: "City",
  state: "State",
  propertyType: "Type of Property",
  estimatedRevenue12Mo: "Estimated Revenue (Past 12 Months)",
  heardAbout: "How did you hear about Cloverbloom?",
};

const normalizeString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

const isValidUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const pickPayload = (body: Record<string, unknown>): IntakePayload => ({
  name: normalizeString(body.name),
  email: normalizeString(body.email),
  phoneNumber: normalizeString(body.phoneNumber),
  airbnbLink: normalizeString(body.airbnbLink),
  address: normalizeString(body.address),
  city: normalizeString(body.city),
  state: normalizeString(body.state),
  propertyType: normalizeString(body.propertyType),
  estimatedRevenue12Mo: normalizeString(body.estimatedRevenue12Mo),
  heardAbout: normalizeString(body.heardAbout),
  anythingElse: normalizeString(body.anythingElse),
  website: normalizeString(body.website),
});

const buildTextBody = (payload: IntakePayload) => {
  const lines = [
    "New Income Projection form submission",
    "",
    `Name: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Phone Number: ${payload.phoneNumber}`,
    `Airbnb Link: ${payload.airbnbLink}`,
    `Address: ${payload.address}`,
    `City: ${payload.city}`,
    `State: ${payload.state}`,
    `Type of Property: ${payload.propertyType}`,
    `Estimated Revenue (Past 12 Months): ${payload.estimatedRevenue12Mo}`,
    `How did you hear about Cloverbloom?: ${payload.heardAbout}`,
    `Any additional notes: ${payload.anythingElse || "N/A"}`,
    "",
    `Submitted At: ${new Date().toISOString()}`,
  ];
  return lines.join("\n");
};

const buildHtmlBody = (payload: IntakePayload) => {
  return `
    <h2>New Income Projection form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone Number:</strong> ${escapeHtml(payload.phoneNumber)}</p>
    <p><strong>Airbnb Link:</strong> ${escapeHtml(payload.airbnbLink)}</p>
    <p><strong>Address:</strong> ${escapeHtml(payload.address)}</p>
    <p><strong>City:</strong> ${escapeHtml(payload.city)}</p>
    <p><strong>State:</strong> ${escapeHtml(payload.state)}</p>
    <p><strong>Type of Property:</strong> ${escapeHtml(payload.propertyType)}</p>
    <p><strong>Estimated Revenue (Past 12 Months):</strong> ${escapeHtml(payload.estimatedRevenue12Mo)}</p>
    <p><strong>How did you hear about Cloverbloom?:</strong> ${escapeHtml(payload.heardAbout)}</p>
    <p><strong>Any additional notes:</strong> ${escapeHtml(payload.anythingElse || "N/A")}</p>
    <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
  `;
};

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = pickPayload(body);

  // Honeypot field for basic bot filtering.
  if (payload.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  for (const value of Object.values(payload)) {
    if (value.length > 2000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }
  }

  const missingFields = REQUIRED_FIELDS.filter((field) => !payload[field]);
  if (missingFields.length > 0) {
    const missingFieldLabels = missingFields.map((field) => FIELD_LABELS[field]).join(", ");
    return NextResponse.json(
      { error: `Missing required fields: ${missingFieldLabels}.` },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Please enter a valid e-mail address." }, { status: 400 });
  }

  if (!isValidUrl(payload.airbnbLink)) {
    return NextResponse.json({ error: "Please enter a valid Airbnb link." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const toEmail = process.env.INTAKE_TO_EMAIL ?? "garrett@cloverbloom.co";
  const fromEmail = process.env.INTAKE_FROM_EMAIL ?? "Cloverbloom Intake <onboarding@resend.dev>";

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `New Income Projection request from ${payload.name}`,
      text: buildTextBody(payload),
      html: buildHtmlBody(payload),
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "Unable to submit right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
