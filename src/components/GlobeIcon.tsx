import React from "react";

export default function GlobeIcon({ className = "globe-icon", size = 22 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" />
      {/* Horizontal latitude lines */}
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M4.5 7h15" />
      <path d="M4.5 17h15" />
      {/* Vertical longitude ellipse lines */}
      <ellipse cx="12" cy="12" rx="5" ry="10" />
      <ellipse cx="12" cy="12" rx="8" ry="10" strokeDasharray="1 1" opacity="0.6" />
    </svg>
  );
}
