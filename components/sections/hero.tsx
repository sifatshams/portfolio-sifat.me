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
import { useRef } from "react";

const ParticleField = dynamic(
  () =>
    import("@/components/ui/particle-field").then((mod) => mod.ParticleField),
  {
    ssr: false,
  }
);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />

      {/* particles */}
      <ParticleField count={30} />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* content */}
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
              I specialize in building scalable backend systems and
              high-performance APIs, while delivering complete full-stack
              applications with modern frontend experiences, clean architecture
              robust security and efficient data management.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                as="a"
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background shadow-glow transition-transform"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
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

        {/* hero image */}
        <motion.div
          style={{ y: imageY }}
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center"
        >
          {/* dark ambient glow */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-950/70 blur-[110px]"
          />

          {/* soft green glow */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[55%] -z-10 h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-900/45 blur-[90px]"
          />

          {/* subtle center light */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[48%] -z-10 h-[35%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-800/25 blur-[70px]"
          />

          {/* floating image */}
          <motion.div
            animate={{
              y: [0, -9, 0, 7, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full"
          >
            {/* image shadow */}
            <div
              aria-hidden
              className="absolute bottom-[8%] left-1/2 h-16 w-[55%] -translate-x-1/2 rounded-full bg-black/50 blur-3xl"
            />

            {/* image */}
            <img
              src="/hero-portrait.png"
              alt="Sifat Bin Anwar"
              className="relative z-10 mx-auto block w-full max-w-[540px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)]"
            />
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
