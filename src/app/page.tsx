// src/app/page.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="relative min-h-screen text-slate-900 dark:text-slate-100">
      <div
        aria-hidden
        className="fixed inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950"
      />
      <div aria-hidden className="aurora-layer" />
      <div aria-hidden className="aurora-layer aurora-layer--alt" />
      <Spotlight />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-45 mix-blend-soft-light"
      />

      <div className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pt-32 pb-16">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/50 bg-white/70 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-white/20" />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <header className="space-y-5 text-center md:text-left">
                <span className="inline-flex items-center gap-3 rounded-full bg-sky-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-sky-600 dark:bg-sky-500/10 dark:text-sky-200">
                  Portfolio & resume hub
                </span>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  A <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text font-bold">Technical Product Manager</span> who
                  <span className="block mt-2">builds to validate.</span>
                </h1>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg md:mx-0">
                  I bridge the gap between product vision and engineering reality. I don&apos;t just write specs—I &quot;vibe code&quot; working prototypes to test hypotheses, explore new AI capabilities, and understand the technical trade-offs firsthand.
                  <br/><br/>
                  From designing <strong>Postgres</strong> schemas to tweaking <strong>Tailwind</strong> micro-interactions, I get my hands dirty to ensure the products we build are feasible, viable, and delightful. This portfolio contains my technical experiments and proofs-of-concept.
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    href="https://github.com/sherwin25"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200/50 transition hover:scale-[1.01] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 dark:shadow-sky-900/40"
                  >
                    GitHub
                  </a>
                </div>
              </header>

              <aside className="space-y-4 rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-inner shadow-sky-100/40 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-none">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                  Snapshot
                </h2>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li>
                    • <strong>Technical Fluency</strong>: Deep understanding of the stack (Next.js, SQL, Auth) to partner effectively with engineers.
                  </li>
                  <li>
                    • <strong>Rapid Prototyping</strong>: Turning product requirements into live software to validate &quot;vibe&quot; and feasibility.
                  </li>
                  <li>
                    • <strong>AI-Native Product Sense</strong>: Hands-on experience integrating Agents and LLMs into real user flows.
                  </li>
                  <li>
                    • <strong>Execution Focused</strong>: Moving ideas from &quot;What if&quot; to &quot;Vercel Deployment&quot; in record time.
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {featured.length > 0 && (
          <section className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Spotlight builds
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="mx-auto mt-16 max-w-6xl px-6 pb-20">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                More experiments
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Iterations, prototypes, and in-progress ideas worth watching.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
