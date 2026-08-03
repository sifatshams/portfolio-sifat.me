"use client";

import { Reveal, RevealText } from "@/components/ui/reveal";
import { SKILLS, STATS } from "@/lib/data";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="group rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-accent/30">
                <p className="font-display text-4xl font-semibold text-accent sm:text-[2.75rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs text-muted">{stat.sublabel}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> TECH STACK
          </span>
        </Reveal>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            <RevealText text="The tools I reach for, and the reason I reach for them." />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              A focused stack, learned deeply rather than broadly — enough range
              to own a product end to end without hand-offs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 5) * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6"
                data-cursor-hover
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors group-hover:bg-accent/20" />
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 font-mono text-[11px] font-semibold text-accent">
                    {skill.code}
                  </span>
                  <span className="font-mono text-xs text-muted/70">
                    {skill.index}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {skill.name}
                </h3>
                <p className="text-xs text-muted">{skill.role}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
