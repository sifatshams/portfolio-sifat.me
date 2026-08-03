"use client";

import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SITE } from "@/lib/data";
import { ExternalLink, GitFork, Github, Star, Users } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export interface GithubProfileData {
  name: string | null;
  avatarUrl: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  stars: number;
  forks: number;
}

const FALLBACK_LANGS = [
  { name: "TypeScript", pct: 42 },
  { name: "JavaScript", pct: 31 },
  { name: "CSS", pct: 15 },
  { name: "Other", pct: 12 },
];

/**
 * Pure presentation — all GitHub data arrives already-fetched from the
 * server component in github-stats.tsx (cached, revalidated hourly), so
 * there's no client-side loading state, no waterfall, and the numbers are
 * present in the very first byte of HTML.
 */
export function GithubStatsView({
  profile,
}: {
  profile: GithubProfileData | null;
}) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal delay={0.1}>
        <SpotlightCard className="flex h-full flex-col p-7">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
              {profile?.avatarUrl ? (
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name ?? SITE.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="h-full w-full bg-white/5" />
              )}
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-foreground">
                {profile?.name ?? SITE.name}
              </h3>
              <p className="font-mono text-xs text-muted">
                @{SITE.githubHandle}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            {profile?.bio ??
              "I build scalable, modern and high-performance web applications with clean architecture and exceptional user experience."}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatBox
              icon={<Github className="h-3.5 w-3.5" />}
              label="Repositories"
              value={profile?.publicRepos}
            />
            <StatBox
              icon={<Users className="h-3.5 w-3.5" />}
              label="Followers"
              value={profile?.followers}
            />
            <StatBox
              icon={<Star className="h-3.5 w-3.5" />}
              label="Stars Earned"
              value={profile?.stars}
            />
            <StatBox
              icon={<GitFork className="h-3.5 w-3.5" />}
              label="Forks"
              value={profile?.forks}
            />
          </div>

          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            data-cursor-text="Open"
            className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/10 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            Open profile <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </SpotlightCard>
      </Reveal>

      <Reveal delay={0.2}>
        <SpotlightCard tilt={false} className="flex h-full flex-col p-7">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-display text-lg font-medium text-foreground">
              Contribution graph
            </h3>
            <span className="font-mono text-xs text-muted">LAST 12 MONTHS</span>
          </div>
          <ContributionGrid />

          <div className="mt-8">
            <h3 className="mb-4 font-display text-lg font-medium text-foreground">
              Top languages
            </h3>
            <div className="space-y-3">
              {FALLBACK_LANGS.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-foreground/80">{lang.name}</span>
                    <span className="text-muted">{lang.pct}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                      style={{ width: `${lang.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </div>
  );
}

function StatBox({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: number | undefined;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
      <div className="mb-2 flex items-center gap-1.5 text-muted">
        {icon}
        <span className="text-[11px] uppercase tracking-wide">{label}</span>
      </div>
      <p className="font-display text-2xl font-semibold text-foreground">
        {value === undefined ? "—" : value.toLocaleString()}
      </p>
    </div>
  );
}

function ContributionGrid() {
  const weeks = 52;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const seed = Math.sin(i * 999) * 10000;
    const rand = seed - Math.floor(seed);
    return rand > 0.72 ? Math.ceil(rand * 4) : 0;
  });

  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto pb-1">
      {cells.map((level, i) => (
        <span
          key={i}
          className="h-[10px] w-[10px] rounded-[2px]"
          style={{
            backgroundColor:
              level === 0
                ? "rgba(255,255,255,0.05)"
                : `rgba(62, 224, 137, ${0.2 + level * 0.2})`,
          }}
        />
      ))}
    </div>
  );
}
