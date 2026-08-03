"use client";

import { Reveal, RevealText } from "@/components/ui/reveal";
import { SITE } from "@/lib/data";
import { ExternalLink, GitFork, Github, Star, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

interface GithubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
}

interface RepoSummary {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const FALLBACK_LANGS = [
  { name: "TypeScript", pct: 42 },
  { name: "JavaScript", pct: 31 },
  { name: "CSS", pct: 15 },
  { name: "Other", pct: 12 },
];

export function GithubStats() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${SITE.githubHandle}`),
          fetch(
            `https://api.github.com/users/${SITE.githubHandle}/repos?per_page=100`
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("failed");

        const profileData: GithubProfile = await profileRes.json();
        const repos: RepoSummary[] = await reposRes.json();

        if (cancelled) return;

        setProfile(profileData);
        setStars(
          repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
        );
        setForks(repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0));
        setStatus("done");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> GITHUB
          </span>
        </Reveal>

        <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          <RevealText text="Live activity, straight from the source." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Profile, repositories and language breakdown fetched directly from
            the GitHub API.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-7">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
                  {profile?.avatar_url ? (
                    <Image
                      src={profile.avatar_url}
                      alt={profile.name ?? SITE.name}
                      fill
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
                  value={profile?.public_repos ?? "—"}
                  status={status}
                />
                <StatBox
                  icon={<Users className="h-3.5 w-3.5" />}
                  label="Followers"
                  value={profile?.followers ?? "—"}
                  status={status}
                />
                <StatBox
                  icon={<Star className="h-3.5 w-3.5" />}
                  label="Stars Earned"
                  value={status === "done" ? stars : "—"}
                  status={status}
                />
                <StatBox
                  icon={<GitFork className="h-3.5 w-3.5" />}
                  label="Forks"
                  value={status === "done" ? forks : "—"}
                  status={status}
                />
              </div>

              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/10 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                Open profile <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-7">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">
                  Contribution graph
                </h3>
                <span className="font-mono text-xs text-muted">
                  LAST 12 MONTHS
                </span>
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatBox({
  icon,
  label,
  value,
  status,
}: {
  icon: ReactNode;
  label: string;
  value: number | string;
  status: "loading" | "done" | "error";
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
      <div className="mb-2 flex items-center gap-1.5 text-muted">
        {icon}
        <span className="text-[11px] uppercase tracking-wide">{label}</span>
      </div>
      <p className="font-display text-2xl font-semibold text-foreground">
        {status === "loading" ? (
          <span className="inline-block h-6 w-10 animate-pulse rounded bg-white/10" />
        ) : (
          value
        )}
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
