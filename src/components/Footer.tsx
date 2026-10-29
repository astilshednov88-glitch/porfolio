import React from "react";
import Link from "next/link";
import GlobeIcon from "./GlobeIcon";

export default function Footer() {
  const marqueeText = "MOTION GRAPHICS DESIGNER ASTIL SHEDNOV • ";
  const repeatedMarquee = Array(8).fill(marqueeText).join("");

  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        {/* Brand / Logo */}
        <div className="footer-brand">
          <GlobeIcon size={28} className="footer-globe" />
          <span className="footer-brand-name">ASTIL SHEDNOV</span>
        </div>

        {/* Contact & Legal Card */}
        <div className="footer-info-card">
          {/* Address Row */}
          <div className="footer-info-row">
            <div className="footer-row-left">
              <span className="dot dot-lime" />
              <span className="footer-label">Address</span>
            </div>
            <div className="footer-row-right">
              <p className="footer-val">
                Kochi, Kerala
              </p>
            </div>
          </div>

          {/* Tel Row */}
          <div className="footer-info-row">
            <div className="footer-row-left">
              <span className="dot dot-blue" />
              <span className="footer-label">Ph no</span>
            </div>
            <div className="footer-row-right">
              <a href="tel:+918138087163" className="footer-link">
                +91 8138087163
              </a>
            </div>
          </div>

          {/* Email Row */}
          <div className="footer-info-row">
            <div className="footer-row-left">
              <span className="dot dot-magenta" />
              <span className="footer-label">Email id</span>
            </div>
            <div className="footer-row-right">
              <a href="mailto:astilshednov88@gmail.com" className="footer-link">
                astilshednov88@gmail.com
              </a>
            </div>
          </div>

          {/* Legal / Policy Row */}
          <div className="footer-info-row footer-legal-row">
            <div className="footer-legal-item">
              <span className="dot dot-white" />
              <Link href="#privacy" className="footer-legal-link">
                Privacy Policy
              </Link>
            </div>
            <div className="footer-legal-item">
              <span className="dot dot-white" />
              <Link href="#accessibility" className="footer-legal-link">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Running Headline Marquee */}
      <div className="footer-marquee-container" aria-hidden="true">
        <div className="footer-marquee-track">
          <span>{repeatedMarquee}</span>
          <span>{repeatedMarquee}</span>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom-container">
        <p className="footer-copyright">
          © 2035 by Astil Shednov. Recreated in Next.js.
        </p>
      </div>
    </footer>
  );
}
