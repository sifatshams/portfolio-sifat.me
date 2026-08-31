"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { TypewriterClient } from "@/components/ui/typewriter-client";
import { SITE } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

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

        {/* Animated Mac Code Window */}
        <motion.div
          style={{ y: imageY }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* Slow rotating ambient glow ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 -z-10 rounded-full opacity-40 blur-[70px]"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(62,224,137,0.5), rgba(45,212,191,0.12), transparent, rgba(62,224,137,0.5))",
            }}
          />

          {/* Base glow */}
          <div className="absolute -inset-8 -z-10 rounded-full bg-accent/15 blur-[90px]" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glass highlight along the top edge */}
            <div className="pointer-events-none absolute -top-px left-6 right-24 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Mac Window */}
            <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-[#07100d]/95 shadow-[0_0_60px_rgba(62,224,137,0.14)] backdrop-blur-xl">
              {/* Faint texture so the panel doesn't read flat */}
              <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-[0.12]" />

              {/* Mac Header with tabs */}
              <div className="relative flex h-12 items-center gap-4 border-b border-white/10 bg-white/[0.03] px-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
                </div>

                <div className="ml-2 flex items-center gap-1 font-mono text-xs">
                  <span className="hidden items-center rounded-t-md px-2.5 py-1 text-white/25 sm:flex">
                    about.ts
                  </span>
                  <span className="flex items-center gap-1.5 rounded-t-md border-b-2 border-accent bg-white/[0.04] px-2.5 py-1 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    developer.ts
                  </span>
                </div>

                <div className="ml-auto flex items-center gap-2 font-mono text-[10px] text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  LIVE
                </div>
              </div>

              {/* Code Area */}
              <div className="relative min-h-[330px] p-6 sm:p-8">
                <div className="flex gap-5 font-mono text-sm leading-7 sm:text-[15px]">
                  <div className="select-none text-white/20">
                    {Array.from({ length: 7 }, (_, i) => (
                      <div key={i}>{String(i + 1).padStart(2, "0")}</div>
                    ))}
                  </div>

                  <div className="min-w-0 flex-1 whitespace-pre-wrap break-words">
                    <CodeTyping />
                  </div>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="relative flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-[10px] text-muted">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="h-3 w-3" />
                  main
                </span>
                <span className="text-accent">Sifat Bin Anwar</span>
                <span>TypeScript</span>
              </div>
            </div>

            {/* Soft mirrored reflection under the window */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-full mt-2 h-24 overflow-hidden rounded-2xl opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]"
            >
              <div className="scale-y-[-1] rounded-2xl border border-accent/20 bg-[#07100d]">
                <div className="h-12 border-b border-white/10 bg-white/[0.03]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CodeTyping() {
  const code = `const developer = {
  name: "Sifat Bin Anwar",
  role: "Full-Stack Developer",
  stack: ["React", "Next.js", "Node.js"],
  database: ["MongoDB", "PostgreSQL"],
  loves: "clean code & great UX"
};`;

  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < code.length) {
      timeout = setTimeout(() => {
        setText(code.slice(0, text.length + 1));
      }, 32);
    } else if (!deleting && text.length === code.length) {
      timeout = setTimeout(() => setDeleting(true), 2800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(code.slice(0, text.length - 1));
      }, 14);
    } else {
      timeout = setTimeout(() => setDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, code]);

  return (
    <>
      <SyntaxHighlightedCode text={text} />
      <span className="ml-1 animate-pulse text-accent">▋</span>
    </>
  );
}

function SyntaxHighlightedCode({ text }: { text: string }) {
  const parts = text.split(
    /(\"[^\"]*\"|\b(?:const|return)\b|\b(?:name|role|stack|database|loves)\b)/g
  );

  return (
    <>
      {parts.map((part, index) => {
        if (/^\"[^\"]*\"$/.test(part)) {
          return (
            <span key={index} className="text-emerald-300">
              {part}
            </span>
          );
        }

        if (/^(const|return)$/.test(part)) {
          return (
            <span key={index} className="text-purple-300">
              {part}
            </span>
          );
        }

        if (/^(name|role|stack|database|loves)$/.test(part)) {
          return (
            <span key={index} className="text-cyan-300">
              {part}
            </span>
          );
        }

        return (
          <span key={index} className="text-foreground/80">
            {part}
          </span>
        );
      })}
    </>
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
