import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio | Astil Shednov Motion Graphics",
  description:
    "Curated motion graphics, branding, and digital campaign works by Astil Shednov.",
};

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      {/* Page Header */}
      <section className="portfolio-header-section">
        <div className="portfolio-header-container">
          <h1 className="portfolio-main-title">A Glimpse Into My World</h1>
        </div>
      </section>

      {/* 4-Columns Showcase Grid */}
      <section className="portfolio-grid-section">
        <div className="portfolio-grid-container">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="portfolio-col-item group"
            >
              <div className="portfolio-col-image-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={950}
                  className="portfolio-col-image"
                  priority
                />
              </div>

              <div className="portfolio-col-bar">
                <span className="portfolio-col-name">{project.title}</span>
                <span className="portfolio-col-id">{project.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
