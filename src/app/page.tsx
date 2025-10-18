// src/app/page.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen relative overflow-hidden bg-grid-subtle">
      {/* Ambient top glow (subtle, static) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[320px]
                   bg-[radial-gradient(60%_60%_at_50%_20%,rgba(250,204,21,0.22),transparent_70%)]
                   blur-2xl"
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs opacity-80">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
          Agentic portfolio
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Sherwin — <span className="text-yellow-500">AI Projects</span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base opacity-85 leading-relaxed">
          I build focused demos with AI agents and modern web tools. Lots of it
          is <em>vibe-coded</em>—fast iterations guided by curiosity—then
          refined into clean, reproducible projects. Click through to try live
          versions and browse the code.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={
              featured[0]?.liveUrl ??
              "https://surewin-card-price-agent.vercel.app/"
            }
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-black text-white px-4 py-2 text-sm hover:opacity-90 active:scale-[0.99] transition"
          >
            View latest live demo
          </a>
          <a
            href="https://github.com/sherwin25"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border px-4 py-2 text-sm hover:bg-white/60 dark:hover:bg-neutral-900/50 active:scale-[0.99] transition"
          >
            GitHub
          </a>
        </div>

        {/* Shimmer line */}
        <div className="mx-auto mt-10 h-[2px] w-48 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60" />
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold mb-3">Featured</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="mx-auto my-12 h-px max-w-6xl bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

      {/* All Projects */}
      {others.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-xl font-semibold mb-3">All Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom ambient spark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28
                   bg-[radial-gradient(40%_40%_at_50%_80%,rgba(250,204,21,0.16),transparent_70%)]
                   animate-float"
      />
    </main>
  );
}
