"use client";

import { Reveal, RevealText } from "@/components/ui/reveal";
import { ABOUT_PILLARS } from "@/lib/data";
import { Compass, Eye, Target } from "lucide-react";

const ICONS = { mission: Target, vision: Eye, mindset: Compass };

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> ABOUT
          </span>
        </Reveal>

        <h2 className="max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          <RevealText text="Engineering that respects the person on the other side of the screen." />
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                I started my web development journey in 2022 with a genuine
                curiosity about how websites and applications work. What began
                with learning the fundamentals gradually evolved into a focused
                path toward becoming a full stack web developer, with a
                particular interest in backend development and application
                architecture.
              </p>

              <p>
                Over the years, I have built a strong foundation in JavaScript
                and modern web technologies, working extensively with React.js,
                Next.js, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs,
                and JWT-based authentication. I learn by building,
                experimenting, debugging, and continuously improving my
                understanding of how each layer of an application works
                together.
              </p>

              <p>
                My strongest area is backend development, where I enjoy
                designing RESTful APIs, structuring databases, implementing
                authentication and authorization, handling CRUD operations, and
                building scalable server side logic. At the same time, I care
                about creating clean, responsive and user-friendly interfaces
                with modern frontend technologies.
              </p>

              <p>
                Alongside self-directed learning, I completed a Full Stack Web
                Development with MERN course through Ostad and have continued
                learning through resources such as W3Schools and Learn With
                Sumit. I have also strengthened my skills through hands-on
                projects, problem solving, and consistent practice rather than
                relying only on theoretical knowledge.
              </p>

              <p className="flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-wide text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Currently focused on backend engineering &amp; full stack
                development
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {ABOUT_PILLARS.map((pillar, i) => {
              const Icon = ICONS[pillar.key as keyof typeof ICONS];
              return (
                <Reveal key={pillar.key} delay={0.15 + i * 0.08}>
                  <div className="group rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-accent/30">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
