"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (activeSection) setActive(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const targetId = href.replace("#", "");
    setActive(targetId);

    const el =
      document.getElementById(targetId) || document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const RESUME_URL = "/sifats-official-resume.pdf";
  const RESUME_FILENAME = "Sifat-Bin-Anwar-Resume.pdf";

  // Mobile/Tablet (<lg): open in new tab
  // Desktop (>=lg): force download with filename
  const handleResumeClick = () => {
    if (typeof window === "undefined") return;

    if (window.innerWidth < 1024) {
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      setMobileOpen(false);
      return;
    }

    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "pt-3" : "pt-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300",
            isScrolled
              ? "border-white/10 bg-background/70 shadow-card"
              : "border-white/5 bg-background/30"
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5"
            data-cursor-hover
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent ring-1 ring-accent/30">
              {SITE.initials}
            </span>

            <span className="font-display text-[15px] font-medium tracking-tight text-foreground">
              Sifat<span className="text-accent">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                      isActive
                        ? "text-background"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-[13px] font-medium text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <MagneticButton
              as="button"
              type="button"
              onClick={handleResumeClick}
              className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-background transition-transform"
            >
              <FileDown className="h-3.5 w-3.5" /> Resume
            </MagneticButton>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 rounded-2xl border border-white/10 bg-background/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium",
                      active === link.href.replace("#", "")
                        ? "bg-accent text-background"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex gap-2 border-t border-white/10 pt-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 py-2.5 text-sm font-medium"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={handleResumeClick}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent py-2.5 text-sm font-semibold text-background"
              >
                <FileDown className="h-3.5 w-3.5" /> Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
