"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "div" | "a";
  type?: "button" | "submit";
  strength?: number;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className,
  onClick,
  as = "button",
  type = "button",
  strength = 0.35,
  href,
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: relX * strength, y: relY * strength });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className="inline-block"
      data-cursor-hover
    >
      {as === "button" ? (
        <button onClick={onClick} className={cn(className)} type={type}>
          {children}
        </button>
      ) : as === "a" ? (
        <a
          href={href}
          download={download}
          target={target}
          rel={rel}
          onClick={onClick}
          className={cn(className)}
        >
          {children}
        </a>
      ) : (
        <div onClick={onClick} className={cn(className)}>
          {children}
        </div>
      )}
    </motion.div>
  );
}
