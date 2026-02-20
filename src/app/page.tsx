// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Spotlight from "@/components/Spotlight";

const spotlightIds = [
  "feature-flag-dashboard",
  "auto-spec-agent",
  "enterprise-platform",
] as const;
const spotlightIdSet = new Set<string>(spotlightIds);

export const metadata: Metadata = {
  title: "Portfolio & Resume Hub | Sherwin",
  description:
    "Technical Product Manager portfolio featuring rapid product prototypes, AI-native workflows, and shipped demos focused on validation and execution.",
  openGraph: {
    title: "Portfolio & Resume Hub | Sherwin",
    description:
      "Technical Product Manager portfolio featuring rapid product prototypes, AI-native workflows, and shipped demos focused on validation and execution.",
    url: "https://surewin-ai-portfolio.vercel.app",
    siteName: "Sherwin Portfolio",
    type: "website",
  },
};

export default function Home() {
  const spotlightBuilds = spotlightIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is (typeof projects)[number] => Boolean(project));
  const others = projects.filter((project) => !spotlightIdSet.has(project.id));

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

      <div className="relative z-10 pb-20">
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-28 sm:pt-32">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/75 p-8 shadow-lg backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-slate-900/65">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-white/20" />
            <div className="relative grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
              <header className="space-y-6 text-center lg:text-left">
                <p className="inline-flex items-center rounded-full bg-sky-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 dark:bg-sky-500/10 dark:text-sky-200">
                  Portfolio &amp; Resume Hub
                </p>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  Technical Product Manager who builds to validate
                </h1>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:mx-0">
                  I bridge product vision and engineering execution by prototyping quickly—especially with AI/LLMs—to test hypotheses, learn faster, and de-risk builds.
                </p>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:mx-0">
                  From Postgres schemas to Tailwind UX, I get hands-on to make sure what we ship is feasible, measurable, and user-friendly.
                </p>
                <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                  <a
                    href="https://github.com/sherwin25"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Sherwin GitHub profile in a new tab"
                    className="inline-flex items-center rounded-lg border border-sky-600 bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                  >
                    GitHub
                  </a>
                  <Link
                    href="/builds"
                    className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    View all builds
                  </Link>
                </div>
              </header>

              <aside className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/75">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
                  Snapshot
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Technical fluency:</strong> Next.js, SQL, auth, integrations to partner effectively with engineers
                  </li>
                  <li>
                    <strong>Rapid prototyping:</strong> requirements → deployed demos to validate feasibility and UX
                  </li>
                  <li>
                    <strong>AI-native product sense:</strong> agents/LLMs in real workflows with measurable outcomes
                  </li>
                  <li>
                    <strong>Execution:</strong> concept → shipped demo quickly
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {spotlightBuilds.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pt-2 [contain-intrinsic-size:1px_900px] [content-visibility:auto]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                Spotlight builds
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Selected demos that show technical product execution.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {spotlightBuilds.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="mx-auto mt-14 max-w-6xl px-6 [contain-intrinsic-size:1px_320px] [content-visibility:auto]">
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/75">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                More builds
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Browse {others.length} additional builds on a dedicated page to keep this homepage focused.
              </p>
              <Link
                href="/builds"
                className="mt-4 inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                View all builds
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
