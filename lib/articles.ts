export type ArticleBodyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
      ordered?: boolean;
    }
  | {
      type: "resourceList";
      title?: string;
      items: {
        label: string;
        url: string;
      }[];
    }
  | {
      type: "quote";
      text: string;
      citation?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      credit?: string;
    };

export type ArticleImage = {
  src: string;
  alt: string;
  credit?: string;
};

export type ArticleCta = {
  title: string;
  description: string;
  buttonLabel?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  tags: string[];
  coverImage: ArticleImage;
  cta: ArticleCta;
  published: boolean;
  body: ArticleBodyBlock[];
};

const articleCollection: Article[] = [
  {
    slug: "complete-2026-guide-short-term-rentals-san-diego",
    title: "Airbnb Management in San Diego (2026): STRO, TOT & Market Data Guide",
    description:
      "A verified, data-driven guide to San Diego Airbnb management in 2026. Includes STRO licensing tiers, TOT tax rates, enforcement rules, and industry market context.",
    excerpt:
      "The complete 2026 guide to short-term rentals in San Diego, including STRO licensing, TOT obligations, enforcement standards, and practical execution priorities.",
    author: "Cloverbloom",
    publishedAt: "2026-02-27",
    updatedAt: "2026-02-27",
    readingTime: "6 min read",
    tags: ["San Diego", "STRO", "TOT", "Compliance", "Market Data"],
    coverImage: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Jolla%20Cove%2C%20San%20Diego.jpg",
      alt: "La Jolla Cove coastline in San Diego, California",
      credit: "Wikimedia Commons / Stephen Bay (San Diego local photographer)",
    },
    cta: {
      title: "Turn Compliance Into Performance.",
      description:
        "Get a San Diego-specific performance review to identify pricing inefficiencies, operational gaps, and measurable upside for your short-term rental.",
      buttonLabel: "Get My STR Review",
    },
    published: true,
    body: [
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "San Diego remains one of California's most competitive short-term rental markets. However, success in 2026 depends on more than location and guest demand. Regulatory compliance, accurate tax handling, and operational discipline are foundational requirements for sustainable performance.",
      },
      {
        type: "paragraph",
        text: "This guide outlines verified legal requirements, current tax structures, enforcement considerations, and relevant industry data for San Diego Airbnb operators.",
      },
      {
        type: "quote",
        text: "This article is for informational purposes only and should not be considered legal or tax advice.",
      },
      {
        type: "heading",
        text: "1. San Diego Short-Term Residential Occupancy (STRO) Licensing",
      },
      {
        type: "paragraph",
        text: "San Diego regulates short-term rentals under its Short-Term Residential Occupancy (STRO) ordinance. All hosts operating rentals of less than one month must obtain an STRO license prior to operating.",
      },
      {
        type: "paragraph",
        text: "The City organizes licenses into four tiers depending on property type and use:",
      },
      {
        type: "list",
        items: [
          "Tier 1: Home sharing (host remains onsite)",
          "Tier 2: Home sharing with additional allowances",
          "Tier 3: Whole-home rentals (outside Mission Beach)",
          "Tier 4: Whole-home rentals (Mission Beach only)",
        ],
      },
      {
        type: "paragraph",
        text: "Key regulatory elements for Tier 3 and Tier 4 operators:",
      },
      {
        type: "list",
        items: [
          "Minimum 2-night stay requirement",
          "Minimum 90 days of utilization per year",
          "Tier 3 licenses capped at 1% of San Diego housing units outside Mission Beach",
          "Tier 4 licenses capped at 30% of housing units within the Mission Beach Community Planning Area",
        ],
      },
      {
        type: "resourceList",
        title: "Primary Source",
        items: [
          {
            label: "City of San Diego STRO Program",
            url: "https://www.sandiego.gov/treasurer/short-term-residential-occupancy",
          },
        ],
      },
      {
        type: "heading",
        text: "2. Transient Occupancy Tax (TOT) Structure (2026)",
      },
      {
        type: "paragraph",
        text: "San Diego requires operators to collect and remit Transient Occupancy Tax (TOT). Effective May 1, 2025, the City implemented zone-based TOT rates, which continue into 2026.",
      },
      {
        type: "list",
        items: ["11.75%", "12.75%", "13.75%"],
      },
      {
        type: "paragraph",
        text: "The applicable rate depends on the property's tax zone.",
      },
      {
        type: "paragraph",
        text: "Important clarification: The Tourism Marketing District (TMD) assessment applies only to lodging businesses with 70 or more rooms and must be reported separately from TOT if applicable.",
      },
      {
        type: "resourceList",
        title: "Primary Source",
        items: [
          {
            label: "City of San Diego TOT Overview",
            url: "https://www.sandiego.gov/treasurer/taxesfees/tot",
          },
        ],
      },
      {
        type: "heading",
        text: "3. Enforcement & Good Neighbor Standards",
      },
      {
        type: "paragraph",
        text: "San Diego enforces compliance through its Good Neighbor framework. Operators are responsible for managing noise levels, preventing parking violations, ensuring occupancy limits are respected, and responding to complaints in a timely manner.",
      },
      {
        type: "paragraph",
        text: "Administrative citations for violations such as excessive noise can reach up to $1,000 per incident.",
      },
      {
        type: "resourceList",
        title: "Primary Source",
        items: [
          {
            label: "STRO Good Neighbor Guidelines (PDF)",
            url: "https://www.sandiego.gov/sites/default/files/stro-good-neighbor-guidelines.pdf",
          },
        ],
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pacific%20Beach%2C%20San%20Diego%2C%20California%20%2815660257352%29.jpg",
        alt: "Pacific Beach shoreline in San Diego, California",
        caption: "Pacific Beach shoreline in San Diego, California.",
        credit: "Wikimedia Commons / Ken Lund",
      },
      {
        type: "heading",
        text: "4. San Diego STR Market Context (Industry Estimates)",
      },
      {
        type: "paragraph",
        text: "While the City does not publish official revenue averages for STR operators, industry data platforms provide broader context.",
      },
      {
        type: "list",
        items: [
          "U.S. short-term rental occupancy often ranges around 50 to 60% depending on market and season.",
          "The global vacation rental market exceeds $90B in annual revenue.",
          "Data platforms such as AirDNA and PriceLabs report ongoing volatility in ADR (average daily rate) and occupancy across 2024 to 2025.",
        ],
      },
      {
        type: "paragraph",
        text: "These figures represent industry estimates and may vary significantly based on neighborhood, property size, amenities, and operational management.",
      },
      {
        type: "resourceList",
        title: "Industry Sources",
        items: [
          {
            label: "AirDNA Market Research",
            url: "https://www.airdna.co/",
          },
          {
            label: "PriceLabs STR Trends",
            url: "https://hello.pricelabs.co/",
          },
          {
            label: "Mashvisor Reports",
            url: "https://www.mashvisor.com/blog/",
          },
          {
            label: "Airbnb Newsroom and Public Data",
            url: "https://news.airbnb.com/",
          },
        ],
      },
      {
        type: "heading",
        text: "5. From Compliance to Performance",
      },
      {
        type: "paragraph",
        text: "Regulatory compliance determines whether you are allowed to operate.",
      },
      {
        type: "paragraph",
        text: "It does not determine how well you perform.",
      },
      {
        type: "paragraph",
        text: "In a capped market like San Diego, where Tier 3 licenses are limited and Mission Beach inventory is constrained, competitive advantage shifts away from access and toward execution.",
      },
      {
        type: "paragraph",
        text: "Performance in 2026 is driven by:",
      },
      {
        type: "list",
        items: [
          "Dynamic pricing aligned with real-time demand",
          "Minimum-stay optimization around event calendars",
          "Listing conversion strategy (titles, thumbnails, positioning)",
          "Response time and review velocity systems",
          "Guest experience consistency and issue resolution",
        ],
      },
      {
        type: "paragraph",
        text: "Two compliant properties in the same neighborhood can produce materially different results based on operational structure alone.",
      },
      {
        type: "paragraph",
        text: "Industry data platforms and revenue managers frequently report performance gaps between self-managed listings and professionally optimized listings in the range of 25-35% variance in annual revenue, depending on market and asset class. While results vary by property, structured pricing systems, operational response frameworks, and listing optimization often materially improve both occupancy and ADR.",
      },
      {
        type: "paragraph",
        text: "Compliance keeps you in the market.",
      },
      {
        type: "paragraph",
        text: "Execution determines your return.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "San Diego's short-term rental environment in 2026 is defined by regulation stability and operational competition.",
      },
      {
        type: "paragraph",
        text: "STRO licensing, zone-based TOT rates, and enforcement standards create the framework. Within that framework, revenue performance depends on pricing discipline, listing optimization, and proactive guest oversight.",
      },
      {
        type: "paragraph",
        text: "For owners who want clarity on where their property stands, whether in compliance risk, pricing inefficiency, or revenue opportunity, a structured performance review can identify measurable upside.",
      },
      {
        type: "paragraph",
        text: "Cloverbloom Property Solutions focuses exclusively on San Diego short-term rental performance. Through pricing strategy, operational systems, listing restructuring, and disciplined guest communication, our objective is simple: convert regulatory eligibility into optimized revenue performance.",
      },
    ],
  },
  {
    slug: "san-diego-str-outlook-2026",
    title: "San Diego Airbnb Market Outlook 2026: STR Data & Trends",
    description:
      "An analytical overview of San Diego County's short-term rental market in 2026, including supply caps, seasonality dynamics, pricing pressure, neighborhood segmentation, and performance risks.",
    excerpt:
      "A high-level market perspective for existing hosts on San Diego County supply caps, demand cycles, pricing volatility, and the operational factors driving outperformance in 2026.",
    author: "Cloverbloom",
    publishedAt: "2026-02-28",
    updatedAt: "2026-02-28",
    readingTime: "7 min read",
    tags: ["San Diego", "Market Outlook", "STR Trends", "Revenue Strategy"],
    coverImage: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Diego%20Skyline%20Image.jpg",
      alt: "Downtown San Diego skyline view",
      credit: "Wikimedia Commons / Eric youtse",
    },
    cta: {
      title: "Benchmark Your Property for 2026.",
      description:
        "Get a structured outlook review of your ADR, occupancy pattern, listing conversion, and pricing alignment against current San Diego County market dynamics.",
      buttonLabel: "Get My Market Outlook Review",
    },
    published: true,
    body: [
      {
        type: "paragraph",
        text: "A High-Level Market Perspective for Existing Hosts",
      },
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "San Diego County enters 2026 with a structurally different short-term rental environment than it had pre-regulatory implementation. Regulatory clarity has stabilized the market, supply growth has slowed, and demand remains resilient but increasingly segmented.",
      },
      {
        type: "paragraph",
        text: "For existing hosts, the question is no longer whether San Diego is viable. It is whether your property is positioned to outperform within a capped and competitive structure.",
      },
      {
        type: "paragraph",
        text: "This report outlines the major forces shaping San Diego County's STR landscape in 2026. It is written as a high-level outlook for operators and should not be interpreted as legal or tax advice.",
      },
      {
        type: "heading",
        text: "1. Supply Stabilization in a Capped Environment",
      },
      {
        type: "paragraph",
        text: "San Diego's licensing framework introduced tiers and caps that materially changed supply dynamics for whole-home operators. The most practical market implication is that inventory is not expanding freely, which shifts competition away from simple being listed and toward execution quality.",
      },
      {
        type: "heading",
        text: "2. Demand Profile: Resilient but Cyclical",
      },
      {
        type: "paragraph",
        text: "San Diego County benefits from diversified demand drivers: year-round tourism, convention and business travel, military presence, and major annual events. Demand remains resilient, but it is increasingly seasonal and event-driven.",
      },
      {
        type: "paragraph",
        text: "In 2026, performance risk increases for operators who price statically or fail to adjust minimum stays and availability around demand spikes and troughs.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Diego%27s%20Skyline.jpg",
        alt: "San Diego skyline from the bay area",
        caption: "San Diego skyline viewed from the bay area.",
        credit: "Wikimedia Commons / CrispyCream27",
      },
      {
        type: "heading",
        text: "3. Neighborhood & Performance Segmentation (2026)",
      },
      {
        type: "paragraph",
        text: "San Diego County's STR market is best understood through performance tiers rather than zip codes alone. The revenue spread between top performers and under-optimized listings is substantial, often larger than many neighborhood-to-neighborhood differences.",
      },
      {
        type: "heading",
        text: "County-Wide Performance Benchmarks",
      },
      {
        type: "paragraph",
        text: "Based on recent industry analysis covering approximately 9,000+ listings in the region, revenue performance tends to cluster into tiers (gross revenue before expenses):",
      },
      {
        type: "list",
        items: [
          "Top 10% of listings: ~$12,700+ monthly revenue (~$152,000+ annually)",
          "Top 25% of listings: ~$7,800+ monthly revenue (~$93,000+ annually)",
          "Median listing: ~$4,500-$4,900 monthly revenue (~$57,000-$59,000 annually)",
          "Bottom 25% of listings: ~$2,300+ monthly revenue (~$27,000+ annually)",
        ],
      },
      {
        type: "paragraph",
        text: "This spread illustrates a material performance gap inside the same regulatory environment. The difference between a median performer and a top-quartile performer can exceed ~$30,000-$40,000 annually.",
      },
      {
        type: "heading",
        text: "Premium Coastal Zones",
      },
      {
        type: "paragraph",
        text: "Premium coastal submarkets, for example La Jolla and select coastal properties, have demonstrated revenue potential exceeding ~$100,000 annually for well-managed assets. Prime-location listings have been reported generating ~$12,000+ monthly under optimized conditions.",
      },
      {
        type: "paragraph",
        text: "These properties tend to benefit from higher ADR ceilings, affluent guest segments, and stronger compression pricing in peak periods. However, location alone does not guarantee top-tier performance.",
      },
      {
        type: "heading",
        text: "Urban & Beach Micro-Markets",
      },
      {
        type: "paragraph",
        text: "Mission Beach, Pacific Beach, and Downtown remain high-demand submarkets. While exact revenue outcomes vary by property type and positioning, the same performance stratification applies: top-quartile listings materially outperform median listings within the same neighborhood.",
      },
      {
        type: "paragraph",
        text: "Key takeaway: revenue variance is often operational, not purely geographic.",
      },
      {
        type: "heading",
        text: "4. Pricing Volatility & ADR Compression Risk",
      },
      {
        type: "paragraph",
        text: "National STR platforms and operators have noted continued ADR fluctuation and sensitivity to overpricing. In capped markets like San Diego, ADR compression risk may arise less from new supply and more from aggressive repricing among existing, licensed operators.",
      },
      {
        type: "paragraph",
        text: "Operators relying on static base rates risk underperforming during peak compression windows, missing event-driven upside, and overpricing during demand troughs.",
      },
      {
        type: "heading",
        text: "5. Operational Sophistication Is Now the Differentiator",
      },
      {
        type: "paragraph",
        text: "With inventory constraints and increased competition among licensed operators, 2026 advantage is driven by operational structure. High-performing properties typically exhibit:",
      },
      {
        type: "list",
        items: [
          "Dynamic pricing systems tied to demand signals",
          "Minimum-stay optimization around event calendars",
          "Listing restructuring to improve conversion (titles, photos, positioning)",
          "Fast response times and review velocity systems",
          "Consistent guest experience and issue resolution",
        ],
      },
      {
        type: "paragraph",
        text: "In a constrained environment, small improvements compound. A modest ADR lift combined with improved occupancy can materially change annual revenue outcomes.",
      },
      {
        type: "heading",
        text: "6. Risk Factors to Monitor in 2026",
      },
      {
        type: "paragraph",
        text: "Existing hosts should monitor:",
      },
      {
        type: "list",
        items: [
          "Potential changes to licensing frameworks or enforcement practices",
          "Any City-level adjustments to TOT structures",
          "Economic softening impacting discretionary leisure travel",
          "Insurance cost escalation and coverage limitations",
          "Increased competition within capped license tiers",
        ],
      },
      {
        type: "paragraph",
        text: "Regulatory stability reduces uncertainty, but it does not eliminate policy or market risk.",
      },
      {
        type: "heading",
        text: "7. Strategic Outlook for Existing Hosts",
      },
      {
        type: "paragraph",
        text: "San Diego County's STR market in 2026 can be summarized as structurally capped, demand-resilient, and operationally competitive. The highest returns increasingly correlate with execution quality rather than passive participation.",
      },
      {
        type: "heading",
        text: "Closing Perspective",
      },
      {
        type: "paragraph",
        text: "For existing hosts, the most valuable exercise in 2026 is auditing performance: ADR relative to neighborhood ceilings, minimum-stay impacts, response-time effects on review velocity, and pricing alignment with demand spikes.",
      },
      {
        type: "paragraph",
        text: "If you want a structured, data-backed evaluation of where your property stands relative to San Diego market conditions, a performance review can surface measurable upside and risk exposure.",
      },
    ],
  },
  {
    slug: "san-diego-measure-c-tot-update",
    title:
      "San Diego Transient Occupancy Tax (TOT) Update 2025-2026: Measure C Explained",
    description:
      "Effective May 1, 2025, San Diego implemented new zone-based Transient Occupancy Tax rates under Measure C (11.75%, 12.75%, 13.75%). Learn what this means for STR operators.",
    excerpt:
      "A practical Measure C update for San Diego STR operators covering zone-based TOT rates, tax-zone lookup workflow, and 2026 operating implications.",
    author: "Cloverbloom",
    publishedAt: "2025-09-04",
    updatedAt: "2025-09-04",
    readingTime: "6 min read",
    tags: ["San Diego", "Measure C", "TOT", "2025-2026"],
    coverImage: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20Cliffs%2C%20San%20Diego.jpg",
      alt: "Sunset Cliffs neighborhood in San Diego, California",
      credit: "Wikimedia Commons / Stephen Bay (San Diego local photographer)",
    },
    cta: {
      title: "Make Sure Your TOT Setup Is Correct.",
      description:
        "Get a structured review of your zone classification, platform tax settings, and pricing model impact under Measure C.",
      buttonLabel: "Review My TOT Setup",
    },
    published: true,
    body: [
      {
        type: "paragraph",
        text: "Effective May 1, 2025, San Diego's Transient Occupancy Tax (TOT) structure changed significantly.",
      },
      {
        type: "paragraph",
        text: "Voters approved Measure C, restructuring how TOT is applied across the City by dividing San Diego into three distinct tax zones, each with its own rate.",
      },
      {
        type: "paragraph",
        text: "For short-term rental operators, this change directly impacts nightly pricing, revenue modeling, and guest-facing tax transparency.",
      },
      {
        type: "heading",
        text: "What Is Measure C?",
      },
      {
        type: "paragraph",
        text: "Measure C is a voter-approved initiative that restructured San Diego's Transient Occupancy Tax.",
      },
      {
        type: "paragraph",
        text: "Instead of a uniform citywide rate, San Diego is now divided into three tax zones, each with a different TOT percentage.",
      },
      {
        type: "paragraph",
        text: "As of May 1, 2025, the rates are:",
      },
      {
        type: "list",
        items: ["11.75%", "12.75%", "13.75%"],
      },
      {
        type: "paragraph",
        text: "The applicable rate depends on the geographic tax zone in which the lodging property is located.",
      },
      {
        type: "heading",
        text: "Why This Matters for STR Operators",
      },
      {
        type: "paragraph",
        text: "Transient Occupancy Tax is collected on stays of less than one month.",
      },
      {
        type: "paragraph",
        text: "For STR hosts and operators:",
      },
      {
        type: "list",
        items: [
          "TOT is added to the guest's total bill.",
          "The operator is responsible for proper collection and remittance.",
          "The correct rate must be applied based on the property's tax zone.",
        ],
      },
      {
        type: "paragraph",
        text: "Failure to apply the correct zone rate could create compliance risk.",
      },
      {
        type: "heading",
        text: "How to Determine Your Tax Zone",
      },
      {
        type: "paragraph",
        text: "The City provides an interactive tax zone lookup map that allows property owners to determine which zone applies to their address.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Visit the City's interactive TOT tax zone map.",
          "Enter your property address.",
          "Confirm the assigned tax zone.",
          "Apply the corresponding TOT percentage (11.75%, 12.75%, or 13.75%).",
        ],
      },
      {
        type: "paragraph",
        text: "Operators should verify this directly through the official City tool rather than relying on third-party summaries.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Geisel%20Library%2C%20UC%20San%20Diego.jpg",
        alt: "Geisel Library at UC San Diego in La Jolla",
        caption: "Geisel Library on the UC San Diego campus in La Jolla.",
        credit: "Wikimedia Commons / Stephen Bay (San Diego local photographer)",
      },
      {
        type: "heading",
        text: "Official Measure C Resources",
      },
      {
        type: "list",
        items: [
          "Measure C Frequently Asked Questions",
          "Measure C News Release - March 20, 2025",
          "Measure C Tax Zone Boundaries Shapefile Download (Search: Transient_Occupancy_Tax_Zone_SD)",
        ],
      },
      {
        type: "paragraph",
        text: "The shapefile is particularly relevant for developers, analysts, and operators integrating geospatial tax data into compliance or pricing systems.",
      },
      {
        type: "heading",
        text: "Operational Implications for 2026",
      },
      {
        type: "heading",
        text: "1. Revenue Modeling",
      },
      {
        type: "paragraph",
        text: "Higher TOT does not reduce gross booking revenue directly, but it increases the total cost to guests. In competitive submarkets, guest sensitivity to total price may influence booking velocity.",
      },
      {
        type: "heading",
        text: "2. Pricing Strategy",
      },
      {
        type: "paragraph",
        text: "Operators should review:",
      },
      {
        type: "list",
        items: [
          "Whether nightly rates require adjustment",
          "How cleaning fees + TOT affect total checkout price",
          "Event-based pricing thresholds under new tax rates",
        ],
      },
      {
        type: "heading",
        text: "3. Compliance Oversight",
      },
      {
        type: "paragraph",
        text: "Hosts must ensure:",
      },
      {
        type: "list",
        items: [
          "Correct zone classification",
          "Updated platform tax settings",
          "Proper remittance under revised rates",
        ],
      },
      {
        type: "heading",
        text: "Strategic Considerations",
      },
      {
        type: "paragraph",
        text: "San Diego's shift to zone-based TOT introduces geographic variation in effective tax burden.",
      },
      {
        type: "paragraph",
        text: "Operators in higher-rate zones may experience slightly higher guest-facing totals, increasing the importance of listing optimization and pricing precision.",
      },
      {
        type: "heading",
        text: "Final Takeaway",
      },
      {
        type: "paragraph",
        text: "Measure C materially changed San Diego's Transient Occupancy Tax structure beginning May 1, 2025.",
      },
      {
        type: "paragraph",
        text: "Key actions for STR operators:",
      },
      {
        type: "list",
        items: [
          "Confirm your property's tax zone",
          "Apply the correct TOT rate (11.75%, 12.75%, or 13.75%)",
          "Adjust pricing models if necessary",
          "Monitor City guidance for future amendments",
        ],
      },
      {
        type: "paragraph",
        text: "Regulatory precision is foundational. Once tax compliance is correct, performance optimization becomes the next lever.",
      },
    ],
  },
  {
    slug: "post-may-1-2025-san-diego-str-operator-playbook",
    title: "Post-May 1, 2025 Playbook for San Diego STR Operators",
    description:
      "A 2025 operator playbook for San Diego hosts after the city's May 1 changes, covering quote accuracy, calendar strategy, reporting cadence, and risk controls.",
    excerpt:
      "What strong operators changed after May 1, 2025: tighter quote logic, cleaner reporting rhythm, and operational systems built for net performance, not just occupancy.",
    author: "Cloverbloom",
    publishedAt: "2025-08-06",
    updatedAt: "2025-08-06",
    readingTime: "6 min read",
    tags: ["San Diego", "Operations", "May 2025", "Host Playbook"],
    coverImage: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bioluminescence%20in%20San%20Diego.jpg",
      alt: "Bioluminescent waves at Torrey Pines State Beach in San Diego",
      credit: "Wikimedia Commons / Stephen Bay (San Diego local photographer)",
    },
    cta: {
      title: "Pressure-Test Your Operator Playbook.",
      description:
        "See where your 2025 workflow is leaking revenue across pricing, tax handling, and response systems, then prioritize the highest-impact fixes.",
      buttonLabel: "Get My Playbook Audit",
    },
    published: true,
    body: [
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Once May 1, 2025 passed, San Diego hosts moved from planning mode to execution reality. The operators who adapted fastest were not necessarily the largest. They were the ones who turned the city change into a repeatable workflow across pricing, quoting, guest communication, and monthly close.",
      },
      {
        type: "paragraph",
        text: "This playbook captures the practical adjustments that mattered most in 2025 for already-active hosts.",
      },
      {
        type: "heading",
        text: "1. Compliance Became a Daily System, Not a Checkbox",
      },
      {
        type: "paragraph",
        text: "After May 1, a common failure pattern was treating tax changes as accounting-only work. In practice, they touched listing settings, channel sync behavior, and owner statements. The most reliable teams documented one clear workflow and assigned ownership at each step.",
      },
      {
        type: "heading",
        text: "2. Quote Accuracy Became a Conversion Lever",
      },
      {
        type: "paragraph",
        text: "Guests compare final checkout cost, not just headline nightly rate. When quote structure and tax handling were clear and predictable, operators saw fewer booking-drop surprises and fewer post-booking disputes.",
      },
      {
        type: "list",
        items: [
          "Validate total checkout math on every active channel",
          "Keep listing copy aligned with current fee and tax reality",
          "Audit high-conversion listing variants monthly",
          "Resolve guest price questions with one standardized script",
        ],
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Imperial%20Beach%20Pier.jpg",
        alt: "Imperial Beach Pier in South San Diego County at sunset",
        caption: "Imperial Beach Pier in South San Diego County at sunset.",
        credit: "Wikimedia Commons / Stephen Bay (San Diego local photographer)",
      },
      {
        type: "heading",
        text: "3. Calendar Strategy Needed Faster Iteration",
      },
      {
        type: "paragraph",
        text: "In a capped market, small calendar decisions compound quickly. Operators that reviewed minimum stays and event windows weekly captured more upside than teams relying on static templates.",
      },
      {
        type: "list",
        items: [
          "Adjust minimum stays around event-driven demand windows",
          "Monitor lead-time shifts and reprice early, not late",
          "Treat occupancy and ADR together, not as separate targets",
          "Document each pricing change to evaluate impact cleanly",
        ],
      },
      {
        type: "heading",
        text: "4. Monthly Close Rhythm Was a Performance Tool",
      },
      {
        type: "paragraph",
        text: "Strong operators did not wait until quarter-end to catch issues. They built a monthly close cadence that tied channel payouts, tax assumptions, and owner reporting into one repeatable process.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Export booking and payout data by channel",
          "Reconcile tax and fee assumptions at the listing level",
          "Identify outlier reservations with abnormal net margins",
          "Publish owner statement with clear tax and operating splits",
          "Capture corrective actions before next cycle",
        ],
      },
      {
        type: "heading",
        text: "5. Risk Signals to Track Each Month",
      },
      {
        type: "list",
        items: [
          "Rising booking-to-cancellation friction tied to final price surprises",
          "Consistent variance between expected and realized net payout",
          "Unexplained ADR decline despite stable demand periods",
          "Slipping response-time standards during high-volume weeks",
          "Recurring guest complaints about check-in clarity or support speed",
        ],
      },
      {
        type: "heading",
        text: "6. What Separated Strong 2025 Operators",
      },
      {
        type: "paragraph",
        text: "The best-performing operators after May 1 were not improvising daily. They ran clear systems, tracked exceptions, and corrected quickly. In a constrained market, that consistency was the difference between average and top-quartile outcomes.",
      },
      {
        type: "resourceList",
        title: "City Sources",
        items: [
          {
            label: "City of San Diego TOT Overview",
            url: "https://www.sandiego.gov/treasurer/taxesfees/tot",
          },
          {
            label: "STRO Good Neighbor Guidelines (PDF)",
            url: "https://www.sandiego.gov/sites/default/files/stro-good-neighbor-guidelines.pdf",
          },
        ],
      },
      {
        type: "heading",
        text: "Closing Perspective",
      },
      {
        type: "paragraph",
        text: "From a 2025 perspective, May 1 was a structural inflection point. Hosts who translated policy changes into disciplined operations created a measurable edge in net performance and review stability.",
      },
      {
        type: "paragraph",
        text: "If your process still feels reactive, a focused audit can identify where your setup is losing money and where small operational corrections can compound quickly.",
      },
    ],
  },
];

const sortByMostRecent = (a: Article, b: Article) => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
};

export const getPublishedArticles = (): Article[] => {
  return articleCollection.filter((article) => article.published).sort(sortByMostRecent);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return getPublishedArticles().find((article) => article.slug === slug);
};

export const getArticleSlugs = (): string[] => {
  return getPublishedArticles().map((article) => article.slug);
};
