import React from "react";
import Image from "next/image";
import PinkGrid from "@/components/PinkGrid";
import Marquee from "@/components/Marquee";
import { servicesList } from "@/data/projects";

export const metadata = {
  title: "About | Astil Shednov Creative Journey",
  description:
    "Learn about Astil Shednov, a motion graphics designer dedicated to bringing bold ideas into vibrant visual stories.",
};

export default function AboutPage() {
  const toolkit = [
    { col1: "Motion Graphics & Animation", col2: "Video Editing" },
    { col1: "AI Video & Image Generation", col2: "Social Media Content" },
    { col1: "Creative Direction & Visual Storytelling", col2: "Corporate & Explainer Videos" },
    { col1: "Visual Effects & Compositing", col2: "" },
  ];

  return (
    <div className="about-page">
      {/* 1. TOP CREATIVE JOURNEY HERO */}
      <section className="about-hero-section" aria-label="About Hero">
        <div className="about-hero-container">
          {/* Left Column: Blue Title Box + Pink Grid */}
          <div className="about-hero-left">
            <div className="about-blue-box">
              <h1 className="about-hero-title">
                Diving Deeper Into
                <br />
                My Creative Journey
              </h1>
            </div>

            <PinkGrid variant="about" />
          </div>

          {/* Right Column: Portrait & Guiding Beliefs */}
          <div className="about-hero-right">
            <div className="about-portrait-card">
              <Image
                src="/images/custom-hero.jpeg"
                alt="Astil Shednov - Motion Graphics Designer"
                width={800}
                height={750}
                priority
                className="about-portrait-image"
              />
            </div>

            <div className="about-philosophy-card">
              <div className="about-philosophy-item">
                <span className="dot dot-magenta" />
                <p className="about-philosophy-text">
                  My passion lies in the intersection of strategy and spectacle.
                  With a background in graphic design and a love for digital
                  innovation, I build brand worlds that are not only beautiful but
                  also deeply purposeful.
                </p>
              </div>

              <div className="about-philosophy-item">
                <span className="dot dot-lime" />
                <p className="about-philosophy-text">
                  I believe great design stems from curiosity, collaboration, and
                  a touch of the unexpected, a philosophy I bring to every
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES BANNER MARQUEE */}
      <section className="marquee-section" aria-label="Services Ticker">
        <Marquee
          badgeText="Services"
          items={servicesList}
          speedSeconds={32}
        />
      </section>

      {/* 3. 3D TERRAIN & FOUNDATION SECTION (VIDEO BACKGROUND) */}
      <section className="about-foundation-section" aria-label="Education & Foundation">
        <div className="foundation-image-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/about-terrain.jpg"
            className="foundation-video"
          >
            <source src="/images/about-terrain.mp4" type="video/mp4" />
            <Image
              src="/images/about-terrain.jpg"
              alt="3D digital landscape visualizing creative foundation"
              width={1600}
              height={900}
              className="foundation-image"
            />
          </video>
        </div>

        {/* Dual Floating Cards: Experience & Foundation */}
        <div className="foundation-cards-wrapper">
          {/* Card 1: Professional Experience */}
          <div className="foundation-card experience-card">
            <div className="foundation-card-header">
              <span className="dot dot-magenta" />
              <h3 className="foundation-card-title">Professional Experience</h3>
            </div>

            <div className="foundation-entries">
              <div className="foundation-entry">
                <h4 className="foundation-degree">
                  Motion Graphics Artist &amp; AI Generalist
                </h4>
                <p className="foundation-school">
                  Beyond Experience Studio | Bangalore | Jul 2025 – Aug 2026
                </p>
              </div>

              <div className="foundation-entry">
                <h4 className="foundation-degree">Motion Graphics Artist</h4>
                <p className="foundation-school">
                  Creative Dreams | Kochi | Jun 2021 – May 2025 (3 Years 11 Months)
                </p>
              </div>

              <div className="foundation-entry">
                <h4 className="foundation-degree">Motion Graphics Artist</h4>
                <p className="foundation-school">
                  Blackbird Creative Hub | Kochi | Mar 2020 – Apr 2021 (1 Year 1 Month)
                </p>
              </div>

              <div className="foundation-entry">
                <h4 className="foundation-degree">Motion Graphics Artist</h4>
                <p className="foundation-school">
                  Telikoz Infotech | Infopark Phase III | Trivandrum | Jun 2019 – Dec 2019 (7 Months)
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: My Foundation */}
          <div className="foundation-card education-card">
            <div className="foundation-card-header">
              <span className="dot dot-lime" />
              <h3 className="foundation-card-title">My Foundation</h3>
            </div>

            <div className="foundation-entries">
              <div className="foundation-entry">
                <h4 className="foundation-degree">
                  C-Tech Higher Diploma in 3D &amp; Visual Effects
                </h4>
                <p className="foundation-school">
                  Image Creative Education | 2017 – 2019
                </p>
              </div>

              <div className="foundation-entry">
                <h4 className="foundation-degree">Higher Secondary</h4>
                <p className="foundation-school">
                  NIOS Higher Secondary School | 2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MY TOOLKIT SECTION */}
      <section className="toolkit-section" aria-label="Skills & Toolkit">
        <div className="toolkit-container">
          <div className="toolkit-badge-wrap">
            <div className="pill-badge">
              <span className="dot dot-magenta" />
              <span className="pill-text">My Toolkit</span>
            </div>
          </div>

          <div className="toolkit-grid">
            {toolkit.map((row, idx) => (
              <div key={idx} className="toolkit-row">
                <div
                  className="toolkit-cell"
                  style={row.col2 ? undefined : { gridColumn: "span 2", borderRight: "none" }}
                >
                  {row.col1}
                </div>
                {row.col2 ? <div className="toolkit-cell">{row.col2}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
