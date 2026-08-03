"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ProjectMockupProps {
  variant: "kanban" | "commerce" | "api";
}

export function ProjectMockup({ variant }: ProjectMockupProps) {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center bg-gradient-to-br from-surface to-background p-6 sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      {variant === "kanban" && <KanbanMockup />}
      {variant === "commerce" && <CommerceMockup />}
      {variant === "api" && <ApiMockup />}
    </div>
  );
}

function MockWindow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-background/80 shadow-card backdrop-blur"
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      {children}
    </motion.div>
  );
}

function KanbanMockup() {
  const columns = [
    { name: "Backlog", count: 5 },
    { name: "In Progress", count: 4 },
    { name: "Review", count: 3 },
    { name: "Done", count: 6 },
  ];
  return (
    <MockWindow>
      <div className="grid grid-cols-4 gap-2 p-3">
        {columns.map((col) => (
          <div key={col.name} className="space-y-1.5">
            <div className="flex items-center justify-between px-0.5">
              <span className="text-[9px] font-medium text-muted">
                {col.name}
              </span>
              <span className="text-[9px] text-muted/60">{col.count}</span>
            </div>
            {Array.from({ length: 2 }).map((_, j) => (
              <div
                key={j}
                className="h-10 rounded-md border border-white/5 bg-white/[0.03] p-1.5"
              >
                <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-accent/30" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function CommerceMockup() {
  return (
    <MockWindow>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-white/10" />
          <div className="h-6 w-16 rounded-md bg-accent/20" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5"
            >
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
              <div className="mt-2 h-4 w-3/4 rounded-full bg-accent/40" />
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-6 w-6 shrink-0 rounded-md bg-white/[0.05]" />
              <div className="h-1.5 flex-1 rounded-full bg-white/10" />
              <div className="h-1.5 w-8 rounded-full bg-accent/30" />
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  );
}

function ApiMockup() {
  const lines = ["GET /v1/usage", "POST /v1/keys", "GET /v1/logs?limit=20"];
  return (
    <MockWindow>
      <div className="space-y-2 p-4 font-mono text-[10px]">
        {lines.map((line, i) => (
          <div
            key={line}
            className="flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-2"
          >
            <span
              className={`rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                i === 1
                  ? "bg-accent/20 text-accent"
                  : "bg-white/10 text-foreground/70"
              }`}
            >
              {i === 1 ? "POST" : "GET"}
            </span>
            <span className="text-muted">{line.split(" ")[1]}</span>
          </div>
        ))}
        <div className="mt-3 rounded-md bg-black/40 p-2.5 text-[9px] leading-relaxed text-accent/80">
          {'{ "status": "ok", "latency_ms": 42 }'}
        </div>
      </div>
    </MockWindow>
  );
}
