"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobeIcon from "./GlobeIcon";
import ConnectModal from "./ConnectModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <GlobeIcon size={24} />
            <span className="brand-name">ASTIL SHEDNOV</span>
          </Link>

          {/* Desktop Nav Pills */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-pill ${isActive ? "nav-pill-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="header-actions">
            <button
              onClick={() => setIsConnectOpen(true)}
              className="connect-btn"
              aria-label="Open Let's Connect dialog"
            >
              Let&apos;s Connect
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <nav className="mobile-nav-links">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? "mobile-active" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                className="connect-btn mobile-connect-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConnectOpen(true);
                }}
              >
                Let&apos;s Connect
              </button>
            </nav>
          </div>
        )}
      </header>

      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </>
  );
}
