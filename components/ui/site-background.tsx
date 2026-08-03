export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* faint animated grid */}
      <div
        className="absolute inset-0 opacity-[0.35] [background-size:64px_64px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* slow-drifting gradient glows */}
      <div className="absolute left-[-10%] top-[-10%] h-[50vw] w-[50vw] animate-float rounded-full bg-accent/[0.06] blur-[120px]" />
      <div
        className="absolute bottom-[-15%] right-[-10%] h-[45vw] w-[45vw] animate-float rounded-full bg-accent/[0.05] blur-[140px]"
        style={{ animationDelay: "-3s", animationDuration: "9s" }}
      />

      {/* static noise for texture/depth */}
      <div className="absolute inset-0 bg-noise opacity-[0.025] mix-blend-overlay" />
    </div>
  );
}
