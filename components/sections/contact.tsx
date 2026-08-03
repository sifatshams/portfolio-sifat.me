"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { SITE } from "@/lib/data";
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      form.subject || "Project inquiry"
    )}&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )}`;
    window.location.href = mailto;
    setTimeout(() => setFormState("sent"), 600);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> CONTACT
          </span>
        </Reveal>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            <RevealText text="Let's build something worth shipping." />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              I reply to every serious message within 24 hours — freelance
              projects, full-time roles or collaboration.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent">
                  <Mail className="h-3.5 w-3.5" /> Email
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-[15px] font-medium text-foreground">
                    {SITE.email}
                  </span>
                  <button
                    onClick={handleCopy}
                    data-cursor-hover
                    aria-label="Copy email address"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-accent" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent">
                  <MapPin className="h-3.5 w-3.5" /> Based in
                </p>
                <p className="flex items-center gap-2 text-[15px] font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-muted" /> {SITE.country} ·
                  Remote worldwide
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-card py-6 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-card py-6 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  data-cursor-hover
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-card py-6 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Mail className="h-5 w-5" /> Mail
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-card p-7 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject">
                  <input
                    value={form.subject}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, subject: e.target.value }))
                    }
                    placeholder="Project, role or idea"
                    className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell me what you're building..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/50"
                  />
                </Field>
              </div>

              <MagneticButton
                as="button"
                type="submit"
                className="mt-6 flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-opacity disabled:opacity-60"
              >
                <span className="flex items-center gap-2">
                  {formState === "sending" ? (
                    "Opening mail client..."
                  ) : formState === "sent" ? (
                    "Message ready"
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message
                    </>
                  )}
                </span>
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
