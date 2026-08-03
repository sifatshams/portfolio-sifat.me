"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

const MOTION_TAGS = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  section: motion.section,
} as const;

type SpotlightTag = keyof typeof MOTION_TAGS;

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: SpotlightTag;
  tilt?: boolean;
  tiltStrength?: number;
  hoverLabel?: string;
  id?: string;
}

export function SpotlightCard({
  children,
  className,
  as = "div",
  tilt = true,
  tiltStrength = 6,
  hoverLabel,
  id,
}: SpotlightCardProps) {
  const MotionComponent = MOTION_TAGS[as];
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const tiltEnabled = tilt && !prefersReducedMotion;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.4 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [0, 1], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(springX, [0, 1], [-tiltStrength, tiltStrength]);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    el.style.setProperty("--spot-x", `${x * 100}%`);
    el.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <MotionComponent
      ref={ref as any}
      id={id}
      data-cursor-hover
      data-cursor-text={hoverLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tiltEnabled
          ? {
              rotateX,
              rotateY,
              transformPerspective: 900,
            }
          : undefined
      }
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "spotlight-card group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition-[border-color,box-shadow] duration-300 hover:border-accent/35 hover:shadow-[0_20px_60px_-15px_rgba(62,224,137,0.25)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(62,224,137,0.14), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: 1,
          background:
            "radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(94,247,163,0.55), transparent 70%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        className="relative z-10 h-full"
        style={tiltEnabled ? { transform: "translateZ(30px)" } : undefined}
      >
        {children}
      </div>
    </MotionComponent>
  );
}
