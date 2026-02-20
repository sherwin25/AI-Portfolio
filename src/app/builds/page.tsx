import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const spotlightIds = [
  "feature-flag-dashboard",
  "auto-spec-agent",
  "enterprise-platform",
] as const;
const spotlightIdSet = new Set<string>(spotlightIds);

const spotlightBuilds = spotlightIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const additionalBuilds = projects.filter(
  (project) => !spotlightIdSet.has(project.id),
);

export const metadata: Metadata = {
  title: "All Builds | Portfolio & Resume Hub",
  description:
    "Full build archive including AI prototypes, technical product demos, and validation experiments by Sherwin.",
  openGraph: {
    title: "All Builds | Portfolio & Resume Hub",
    description:
      "Full build archive including AI prototypes, technical product demos, and validation experiments by Sherwin.",
    url: "https://surewin-ai-portfolio.vercel.app/builds",
    siteName: "Sherwin Portfolio",
    type: "website",
  },
};

export default function BuildsPage() {
  return (
    <main className="relative min-h-screen text-slate-900 dark:text-slate-100">
      <div
        aria-hidden
        className="fixed inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-24">
        <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/75">
          <h1 className="text-3xl font-semibold sm:text-4xl">View all builds</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            Complete list of product prototypes and technical experiments. Each card links to the live demo and repository when available.
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Back to homepage
          </Link>
        </header>

        <section className="mt-10 [contain-intrinsic-size:1px_900px] [content-visibility:auto]">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Spotlight builds
          </h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightBuilds.map((project) => (
              <ProjectCard key={project.id} p={project} />
            ))}
          </div>
        </section>

        {additionalBuilds.length > 0 && (
          <section className="mt-12 [contain-intrinsic-size:1px_1200px] [content-visibility:auto]">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              More builds
            </h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {additionalBuilds.map((project) => (
                <ProjectCard key={project.id} p={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
