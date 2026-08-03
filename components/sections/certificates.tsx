"use client";

import { Reveal, RevealText } from "@/components/ui/reveal";
import { CERTIFICATES, SERVICES } from "@/lib/data";
import { ArrowUpRight, Award } from "lucide-react";

export function Certificates() {
  return (
    <>
      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="relative pt-28 sm:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />{" "}
              CERTIFICATES
            </span>
          </Reveal>

          <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            <RevealText text="Programmes I finished end to end, each one tied to something I later shipped." />
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CERTIFICATES.map((cert, i) => (
              <Reveal key={cert.code} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card p-7">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {cert.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[11px] text-muted/70">
                      {cert.code}
                    </span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-1 text-sm font-medium text-accent"
                    >
                      View <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative pb-28 pt-28 sm:pb-36 sm:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> SERVICES
            </span>
          </Reveal>
          <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            <RevealText text="What I can take off your plate." />
          </h2>

          <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-white/10 sm:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="group h-full border-b border-white/10 bg-card p-8 transition-colors hover:bg-white/[0.03] sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <span className="font-mono text-xs text-accent">
                    {service.index}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
