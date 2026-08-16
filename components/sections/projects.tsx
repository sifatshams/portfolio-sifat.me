"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProjectMockup } from "@/components/ui/project-mockup";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> FEATURED
            WORK
          </span>
        </Reveal>

        <h2 className="max-w-2xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          <RevealText text="Three builds that show how I think about product engineering." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Each one shipped with its own architecture decisions, performance
            budget and design system.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-card transition-colors hover:border-accent/25 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "order-1 lg:order-2" : "order-1"}>
                  <ProjectMockup variant={project.accentImage} />
                </div>

                <div
                  className={`flex flex-col justify-center gap-5 p-8 sm:p-10 ${
                    i % 2 === 1 ? "order-2 lg:order-1" : "order-2"
                  }`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <h3 className="font-display text-3xl font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    {project.liveUrl !== "#" ? (
                      <MagneticButton
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background"
                      >
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </MagneticButton>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex cursor-not-allowed items-center gap-1.5 rounded-full bg-accent/30 px-5 py-2.5 text-sm font-semibold text-muted opacity-60"
                      >
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </button>
                    )}
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-white/25"
                    >
                      <Github className="h-4 w-4" /> Source
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
