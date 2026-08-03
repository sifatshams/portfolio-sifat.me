"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { TypewriterClient } from "@/components/ui/typewriter-client";
import { SITE } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";

const ParticleField = dynamic(
  () =>
    import("@/components/ui/particle-field").then((mod) => mod.ParticleField),
  {
    ssr: false,
  }
);

// Tech badges placed smoothly around the geometric frame
const SKILL_BADGES = [
  { label: "Express", className: "-top-3 left-6" },
  { label: "Next.js", className: "top-1/4 -right-5" },
  { label: "TypeScript", className: "top-2/3 -left-6" },
  { label: "Node.js", className: "bottom-12 -right-4" },
  { label: "MongoDB", className: "-bottom-3 left-1/3" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />

      <ParticleField count={30} />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: textY, opacity }}>
          <Reveal>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for new projects
              </span>

              <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {SITE.country}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-1">
              <p className="font-mono text-sm tracking-wider text-muted uppercase">
                Hi, I&apos;m
              </p>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="text-foreground">Sifat Bin </span>
                <span className="bg-gradient-to-r from-accent via-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Anwar
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="mt-3 font-display text-xl font-medium text-accent sm:text-2xl md:text-3xl">
              {SITE.role}
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-4 flex items-center gap-2 font-mono text-sm text-muted">
              <span className="text-accent">&gt;</span>
              <TypewriterLine />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              I specialize in building scalable backend systems and high-performance APIs, while delivering complete full-stack applications with modern frontend experiences, clean architecture robust security and efficient data management.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                as="a"
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background shadow-glow transition-transform"
              >
                View Projects <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href="https://wa.me/8801778625668"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20 hover:border-emerald-500/50"
              >
                <MessageCircle className="h-4 w-4 fill-emerald-400/20" />
                Hire Me
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-white/20"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </MagneticButton>

              <div className="flex items-center gap-2">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </motion.div>

        {/* Tech Cyberpunk/Hex Glass Frame Concept */}
        <motion.div
          style={{ y: imageY }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[390px]"
        >
          {/* Neon Backdrop Glow */}
          <div className="absolute -inset-3 rounded-[35px] bg-gradient-to-tr from-accent/30 via-emerald-500/15 to-teal-300/10 blur-2xl opacity-75" />

          {/* Floating Frame Base */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Outer Tech Border Frame with Notched Corners */}
            <div className="relative rounded-[28px] border-2 border-accent/30 bg-background/40 p-3.5 backdrop-blur-2xl shadow-[0_0_40px_rgba(62,224,137,0.12)] transition-all duration-500 hover:border-accent/60">
              {/* Corner Accents (Subtle UI brackets) */}
              <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-accent" />

              {/* Inner Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-card ring-1 ring-white/10">
                <Image
                  src="/profile.png"
                  alt="Sifat Bin Anwar — Full Stack Web Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 390px"
                  className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Gradient Shade on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/20" />

                {/* Status Bar */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-mono text-accent backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  ONLINE
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around Frame */}
            {SKILL_BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                className={`absolute z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-background/90 px-3.5 py-1.5 shadow-2xl backdrop-blur-md ${badge.className}`}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-xs font-semibold tracking-wide text-foreground">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TypewriterLine() {
  const words = ["MERN Stack Developer", "Next.js", "TypeScript", "Clean Code"];

  return (
    <span className="text-foreground/90 font-semibold">
      <TypewriterClient words={words} />
    </span>
  );
}
