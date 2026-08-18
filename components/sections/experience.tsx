"use client";

import { Reveal, RevealText } from "@/components/ui/reveal";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> EXPERIENCE
          </span>
        </Reveal>

        <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          <RevealText text="A short, honest timeline." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Client work, contract engagements and the self-directed years that
            built the foundation.
          </p>
        </Reveal>

        <div className="relative mt-16 space-y-8">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1}>
              <div className="group relative pl-0 sm:pl-10">
                {/* base gray line last item */}
                {i !== EXPERIENCE.length - 1 && (
                  <span
                    className="absolute left-[9px] top-3 hidden w-px bg-white/10 sm:block"
                    style={{ height: "calc(100% + 2rem)" }}
                    aria-hidden="true"
                  />
                )}

                {/* hover green overlay line */}
                {i !== EXPERIENCE.length - 1 && (
                  <span
                    className="absolute left-[9px] top-3 hidden w-px bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block"
                    style={{ height: "calc(100% + 2rem)" }}
                    aria-hidden="true"
                  />
                )}

                {/* circle */}
                <span
                  className={`absolute left-0 top-3 hidden h-[18px] w-[18px] items-center justify-center rounded-full sm:flex transition-all duration-300 ${
                    item.current
                      ? "bg-accent/15 ring-2 ring-accent"
                      : "bg-white/5 ring-2 ring-white/20"
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      item.current
                        ? "bg-accent"
                        : "bg-white/40 group-hover:bg-accent"
                    }`}
                  />
                </span>

                <div className="rounded-2xl border border-white/10 bg-card p-7 sm:p-8">
                  <span className="font-mono text-xs tracking-wide text-accent">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.place}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
