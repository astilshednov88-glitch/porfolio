import React from "react";
import Image from "next/image";
import Link from "next/link";
import PinkGrid from "@/components/PinkGrid";
import Marquee from "@/components/Marquee";
import { projects, servicesList } from "@/data/projects";

export const metadata = {
  title: "Astil Shednov | Motion Graphics Designer",
  description:
    "Motion graphics designer who translates bold ideas into vibrant visual stories, memorable identities, and digital campaigns.",
};

export default function HomePage() {
  const recentProjects = [
    {
      name: "Motion Graphics Showreel",
      date: "Featured 2026",
      dotClass: "dot-magenta",
      slug: "motion-graphics-showreel",
    },
    {
      name: "Sporto Neo Rib Vest / AI Advertising Campaign",
      date: "Campaign 2026",
      dotClass: "dot-blue",
      slug: "sporto-neo-rib-vest",
    },
    {
      name: "NTT DATA Business Solutions / Corporate Brand Film",
      date: "Corporate 2026",
      dotClass: "dot-lime",
      slug: "ntt-data-business-solutions",
    },
    {
      name: "Knightsbridge Resort / Social Media Advertisement",
      date: "Commercial 2026",
      dotClass: "dot-sage",
      slug: "knightsbridge-resort",
    },
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Hero">
        <div className="hero-container">
          {/* Left Column: Big Blue Box + Pink Wireframe Graphic */}
          <div className="hero-left-col">
            <div className="hero-blue-box">
              <h1 className="hero-title">
                Motion Graphics
                <br />
                Designer
              </h1>
            </div>

            {/* Pink modular wireframe pixel grid */}
            <PinkGrid variant="hero" />

            {/* Bottom row under the grid */}
            <div className="hero-subrow">
              <p className="hero-tagline">
                Crafting Worlds,
                <br />
                One Pixel at a Time
              </p>
              <Link href="/portfolio" className="hero-view-work-link">
                View My Work
              </Link>
            </div>
          </div>

          {/* Right Column: Project Highlights List & Main Portrait Image */}
          <div className="hero-right-col">
            {/* Project List Box */}
            <div className="hero-projects-card">
              {recentProjects.map((proj, idx) => (
                <Link
                  key={idx}
                  href={`/portfolio/${proj.slug}`}
                  className="hero-project-row"
                >
                  <div className="hero-project-info">
                    <span className={`dot ${proj.dotClass}`} />
                    <span className="hero-project-name">{proj.name}</span>
                  </div>
                  <span className="hero-project-date">{proj.date}</span>
                </Link>
              ))}
            </div>

            {/* Portrait Image */}
            <div className="hero-image-wrapper">
              <Image
                src="/images/custom-hero.jpeg"
                alt="Astil Shednov - Motion Graphics Designer"
                width={800}
                height={1000}
                priority
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="intro-section" aria-label="Introduction">
        <div className="intro-container">
          <div className="intro-badge-wrapper">
            <div className="pill-badge intro-badge">
              <span className="dot dot-magenta" />
              <span className="pill-text">A Brief Introduction</span>
            </div>
          </div>
          <div className="intro-content">
            <p className="intro-statement">
              I’m a Motion Graphics Designer with 7+ years of experience
              creating engaging animations, cinematic visuals, brand films, and
              digital content. I combine creative storytelling, design, and
              AI-powered workflows to bring ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* 3. "A GLIMPSE INTO MY WORLD" SHOWCASE SECTION */}
      <section className="glimpse-section" aria-label="Selected Works">
        <div className="glimpse-header-wrapper">
          <PinkGrid variant="banner" />
          <h2 className="glimpse-heading">A Glimpse into My World</h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="glimpse-grid">
          {projects.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="glimpse-card group"
            >
              <div className="glimpse-image-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={750}
                  className="glimpse-image"
                />
              </div>
              <div className="glimpse-card-caption">
                <span className="glimpse-card-title">{item.title}</span>
                <span className="glimpse-card-id">{item.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SERVICES TICKER MARQUEE */}
      <section className="marquee-section" aria-label="Services Ticker">
        <Marquee
          badgeText="Services"
          items={servicesList}
          speedSeconds={35}
        />
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="cta-section" aria-label="Call to Action">
        <div className="cta-container">
          {/* Background wide photo */}
          <div className="cta-image-wrapper">
            <Image
              src="/images/custom-cta.jpeg"
              alt="Astil Shednov creative showcase"
              width={1600}
              height={900}
              className="cta-image"
            />
          </div>

          {/* Floating Callout Card */}
          <div className="cta-overlay-card">
            <div className="cta-card-header">
              <span className="dot dot-magenta" />
              <h3 className="cta-card-title">Have a project in mind?</h3>
            </div>
            <p className="cta-card-body">
              I’m always excited to hear about new creative challenges. Let’s
              create something bold together.
            </p>
            <div className="cta-btn-wrapper">
              <Link href="/contact" className="cta-btn">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
