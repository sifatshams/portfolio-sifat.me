"use client";

import { NAV_LINKS, SITE } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent ring-1 ring-accent/30">
                {SITE.initials}
              </span>
              <span className="font-display text-[15px] font-medium text-foreground">
                Sifat<span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full stack web developer building scalable, high-performance
              products from {SITE.country}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                data-cursor-hover
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
              Get in touch
            </p>
            <a
              href={`mailto:${SITE.email}`}
              data-cursor-hover
              className="text-sm text-foreground/90 transition-colors hover:text-accent"
            >
              {SITE.email}
            </a>
            <p className="mt-2 text-sm text-muted">
              {SITE.country} · Remote worldwide
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            data-cursor-hover
            aria-label="Back to top"
            className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
