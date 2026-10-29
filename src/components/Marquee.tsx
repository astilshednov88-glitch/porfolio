"use client";

import React from "react";

interface MarqueeProps {
  badgeText?: string;
  items: string[];
  separator?: string;
  speedSeconds?: number;
  reverse?: boolean;
}

export default function Marquee({
  badgeText = "Recognized By",
  items,
  separator = " * ",
  speedSeconds = 32,
  reverse = false,
}: MarqueeProps) {
  // Triple the items to ensure unbroken seamless looping
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      {badgeText && (
        <div className="marquee-badge-container">
          <div className="pill-badge marquee-badge">
            <span className="dot dot-lime" />
            <span className="pill-text">{badgeText}</span>
          </div>
        </div>
      )}
      <div className="marquee-track-container">
        <div
          className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {repeated.map((item, idx) => (
            <span key={idx} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-separator">{separator}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
