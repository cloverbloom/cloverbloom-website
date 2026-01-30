"use client";

import React from "react";

type BadgeTagProps = {
  className?: string;
};

export default function BadgeTag({ className }: BadgeTagProps) {
  return (
    <div
      className={`flex items-center space-x-2.5 rounded-full border border-[#2154D6]/30 bg-[#2154D6]/15 p-1 text-sm text-[#2154D6] ${className ?? ""}`}
    >
      <div className="flex items-center space-x-1 rounded-3xl border border-[#2154D6] bg-[#2154D6] px-3 py-1 text-white">
        <p className="font-semibold">Copied!</p>
      </div>
      <p className="pr-3">Contact information copied to clipboard</p>
    </div>
  );
}
