"use client";

import { cn } from "@/lib/utils";
import { useState, type CSSProperties, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Duration of one full loop, in seconds. Lower = faster. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Infinite auto-scrolling row, built on the `marquee` keyframe already
 * defined in tailwind.config.ts. The content is rendered twice back to
 * back and the wrapper animates exactly -50%, so the instant the first
 * copy scrolls offscreen the second copy is sitting exactly where the
 * first one started — a seamless loop with a single CSS transform
 * animation (compositor-only, no JS on every frame).
 *
 * The row is also a native horizontally-scrollable container, so trackpad
 * users and touch users can drag through it directly.
 */
export function Marquee({
  children,
  duration = 28,
  reverse = false,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  const trackStyle: CSSProperties = {
    animationDuration: `${duration}s`,
    animationDirection: reverse ? "reverse" : "normal",
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <div
      className={cn(
        "relative overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      onTouchStart={() => pauseOnHover && setPaused(true)}
      onTouchEnd={() => pauseOnHover && setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div
        className="flex w-max animate-marquee items-center gap-4"
        style={trackStyle}
      >
        <div className="flex shrink-0 items-center gap-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
