import React from "react";

interface PinkGridProps {
  className?: string;
  variant?: "hero" | "banner" | "about";
}

export default function PinkGrid({ className = "", variant = "hero" }: PinkGridProps) {
  if (variant === "banner") {
    return (
      <div className={`pink-grid-accent ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 480 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pink-grid-svg"
        >
          <defs>
            <pattern
              id="pink-dots-banner"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                fill="none"
                stroke="#e02477"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.85"
              />
            </pattern>
          </defs>
          <path
            d="M 0 0 H 380 V 60 H 480 V 80 H 0 Z"
            fill="url(#pink-dots-banner)"
            stroke="#e02477"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div className={`pink-grid-about ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 600 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pink-grid-svg"
        >
          <defs>
            <pattern
              id="pink-dots-about"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                fill="none"
                stroke="#e02477"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.85"
              />
            </pattern>
          </defs>
          {/* Modular stepped block pattern matching the Wix layout */}
          <rect x="0" y="48" width="120" height="360" fill="url(#pink-dots-about)" stroke="#e02477" strokeWidth="1.2" />
          <rect x="120" y="96" width="168" height="312" fill="url(#pink-dots-about)" stroke="#e02477" strokeWidth="1.2" />
          <rect x="288" y="0" width="168" height="264" fill="url(#pink-dots-about)" stroke="#e02477" strokeWidth="1.2" />
          <rect x="360" y="264" width="240" height="180" fill="url(#pink-dots-about)" stroke="#e02477" strokeWidth="1.2" />
          {/* Cutout boxes to create the stepped architectural silhouette */}
          <rect x="96" y="168" width="120" height="120" fill="#ffffff" />
          <rect x="336" y="312" width="96" height="96" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  // Hero variant: matches the exact stepped wireframe grid seen around "Visionary Art Direction"
  return (
    <div className={`pink-grid-hero ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 680 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pink-grid-svg"
      >
        <defs>
          <pattern
            id="pink-dots-hero"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0.5"
              y="0.5"
              width="21"
              height="21"
              fill="none"
              stroke="#e02477"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
              opacity="0.85"
            />
          </pattern>
        </defs>
        
        {/* Large stepped polygon */}
        <path
          d="M 0 66
             H 220 V 0 H 660 V 462 H 572 V 520 H 176 V 462 H 66 V 396 H 0 Z"
          fill="url(#pink-dots-hero)"
          stroke="#e02477"
          strokeWidth="1.2"
        />

        {/* Clear interior cutouts matching Wix's design */}
        <rect x="88" y="154" width="132" height="110" fill="#ffffff" stroke="#e02477" strokeWidth="1.2" />
        <rect x="286" y="264" width="154" height="132" fill="#ffffff" stroke="#e02477" strokeWidth="1.2" />
        <rect x="462" y="110" width="154" height="132" fill="#ffffff" stroke="#e02477" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
