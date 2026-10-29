import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const instant = false;

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Astil Shednov" };
  return {
    title: `${project.title} | Astil Shednov`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Left Column: Title & Editorial Narrative */}
        <div className="project-detail-left">
          <Link href="/portfolio" className="project-back-link">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <h1 className="project-detail-title">{project.title}</h1>

          <p className="project-detail-description">{project.description}</p>

          {/* Project Specs Table */}
          <div className="project-specs-card">
            {project.type ? (
              <div className="project-spec-row">
                <span className="spec-label">{project.typeLabel || "Type"}</span>
                <span className="spec-value">{project.type}</span>
              </div>
            ) : project.category ? (
              <div className="project-spec-row">
                <span className="spec-label">Category</span>
                <span className="spec-value">{project.category}</span>
              </div>
            ) : null}

            {project.services ? (
              <div className="project-spec-row">
                <span className="spec-label">Services</span>
                <span className="spec-value">{project.services}</span>
              </div>
            ) : project.discipline ? (
              <div className="project-spec-row">
                <span className="spec-label">Discipline</span>
                <span className="spec-value">{project.discipline}</span>
              </div>
            ) : project.focus ? (
              <div className="project-spec-row">
                <span className="spec-label">Focus</span>
                <span className="spec-value">{project.focus}</span>
              </div>
            ) : null}

            <div className="project-spec-row">
              <span className="spec-label">Client</span>
              <span className="spec-value">{project.client}</span>
            </div>
            <div className="project-spec-row">
              <span className="spec-label">Year</span>
              <span className="spec-value">{project.year}</span>
            </div>
            <div className="project-spec-row">
              <span className="spec-label">Role</span>
              <span className="spec-value">{project.role}</span>
            </div>
            <div className="project-spec-row">
              <span className="spec-label">Core Challenge</span>
              <span className="spec-value">{project.challenge}</span>
            </div>
            <div className="project-spec-row">
              <span className="spec-label">Outcome</span>
              <span className="spec-value">{project.outcome}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="project-tags-wrap">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tag-pill">
                <span className="dot dot-magenta" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Project Visual or Video */}
        <div className="project-detail-right">
          {project.video ? (
            <div className="project-video-card">
              <video
                controls
                controlsList="nodownload"
                disablePictureInPicture
                playsInline
                autoPlay
                muted
                loop
                poster={project.image}
                className="project-main-video"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="project-video-caption">
                <span className="dot dot-lime" />
                <span>
                  {project.slug === "motion-graphics-showreel"
                    ? "1080p High-Definition Motion Showreel"
                    : `${project.title} • Video Showcase`}
                </span>
              </div>
            </div>
          ) : (
            <div className="project-hero-visual-card">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={1100}
                priority
                className="project-hero-image"
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Visual Stills / Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery-section" aria-label="Visual Gallery">
          <div className="project-gallery-header">
            <div className="pill-badge">
              <span className="dot dot-magenta" />
              <span className="pill-text">Showcase Stills & Keyframes</span>
            </div>
            <h2 className="project-gallery-heading">Visual Highlights</h2>
          </div>

          <div className="project-gallery-grid">
            {project.gallery.map((stillImg, idx) => (
              <div key={idx} className="project-gallery-card group">
                <Image
                  src={stillImg}
                  alt={`${project.title} Still ${idx + 1}`}
                  width={900}
                  height={650}
                  className="project-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next / Prev Navigation (Placed After Visual Highlights) */}
      <nav className="project-nav-actions" aria-label="Project Navigation">
        <Link
          href={`/portfolio/${prevProject.slug}`}
          className="project-nav-btn"
        >
          <ArrowLeft size={16} />
          <span>Previous: {prevProject.title}</span>
        </Link>
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="project-nav-btn next-btn"
        >
          <span>Next: {nextProject.title}</span>
          <ArrowRight size={16} />
        </Link>
      </nav>
    </div>
  );
}
