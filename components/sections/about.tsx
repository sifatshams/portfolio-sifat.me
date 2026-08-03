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
                I started with a curiosity for how interfaces work and ended up
                caring just as much about the systems behind them. Today I
                design and build full stack products end to end — schema, API,
                interface and the details in between.
              </p>
              <p>
                Four years ago I wrote my first line of JavaScript to fix a
                broken layout on a friend&apos;s website. That single fix turned
                into a habit: understand the problem, read the source, ship
                something better than before.
              </p>
              <p>
                Since then I&apos;ve delivered dashboards, APIs, auth systems
                and marketing sites for founders and small teams. I work in
                TypeScript by default, keep architecture boring where it should
                be, and reserve the creative energy for the parts users actually
                feel — motion, hierarchy and response time.
              </p>
              <p>
                I care about accessibility, Core Web Vitals and code that the
                next developer can read without a meeting. If a decision
                can&apos;t be explained in a sentence, it usually isn&apos;t the
                right one.
              </p>
              <p className="flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-wide text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Currently exploring edge runtimes &amp; DX tooling
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
