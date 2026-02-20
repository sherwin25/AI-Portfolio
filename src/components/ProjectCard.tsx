// src/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const badge = p.status === "live" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800";
  const badgeLabel = p.status === "live" ? "Live" : "WIP";

  return (
    <article
      className="h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/75"
    >
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.title} preview`}
          width={1200}
          height={630}
          className="h-40 w-full object-cover"
        />
      ) : null}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badge}`}>
            {badgeLabel}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{p.blurb}</p>

        {p.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
            {p.tags.map((t) => (
              <li
                key={t}
                className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {p.liveUrl ? (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo for ${p.title} in a new tab`}
              className="rounded-lg border border-sky-600 bg-sky-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              Live demo
            </a>
          ) : null}

          <Link
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open repository for ${p.title} in a new tab`}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Repo
          </Link>
        </div>
      </div>
    </article>
  );
}
