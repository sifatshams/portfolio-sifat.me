"use client";

import { Reveal, RevealText } from "@/components/ui/reveal";
import { CERTIFICATES, SERVICES } from "@/lib/data";
import { ArrowUpRight, Award, BookOpen } from "lucide-react";

export function Certificates() {
  return (
    <>
      {/* CERTIFICATES & LEARNING SECTIONs */}
      <section id="certificates" className="relative pt-28 sm:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              CERTIFICATES & LEARNING
            </span>
          </Reveal>

          <h2 className="max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            <RevealText text="Certifications, learning journeys, and resources that shaped my development path." />
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              A collection of completed certifications and learning resources
              that helped me build strong foundations in modern full-stack web
              development.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CERTIFICATES.map((cert, i) => {
              const isCertificate = cert.type === "Certificate";
              const hasUrl = cert.url && cert.url !== "#";

              return (
                <Reveal key={cert.code} delay={i * 0.08}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card p-7 transition-colors hover:border-accent/25">
                    <div>
                      {/* Top */}
                      <div className="mb-8 flex items-start justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          {isCertificate ? (
                            <Award className="h-5 w-5" />
                          ) : (
                            <BookOpen className="h-5 w-5" />
                          )}
                        </span>

                        <span
                          className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                            isCertificate
                              ? "border-accent/20 bg-accent/5 text-accent"
                              : "border-white/10 bg-white/5 text-muted"
                          }`}
                        >
                          {cert.type}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-display text-xl font-medium text-foreground">
                          {cert.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

                        <div className="mt-3 font-mono text-xs text-muted/70">
                          {cert.year}
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="font-mono text-[11px] text-muted/70">
                        {cert.code}
                      </span>

                      {hasUrl ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-hover
                          className="flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                        >
                          {isCertificate ? "View Certificate" : "View Resource"}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-sm font-medium text-muted/50">
                          {isCertificate ? "Certificate" : "Learning"}
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
