// src/components/ProjectCard.tsx
"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { useRef } from "react";

export default function ProjectCard({ p }: { p: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Optional: simple light-follow effect using CSS variables
  function handleMouseMove(e: React.MouseEvent) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }

  const badge =
    p.status === "live"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-md transition
                 hover:-translate-y-[3px] hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900/70
                 before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:transition-opacity before:duration-500
                 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(56,189,248,0.3),transparent_60%)]
                 hover:before:opacity-100"
    >
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
      ) : null}

      <div className="p-4 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${badge}`}>
            {p.status === "live" ? "live" : "wip"}
          </span>
        </div>

        <p className="opacity-80 text-sm mb-3">{p.blurb}</p>

        {p.tags?.length ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 dark:bg-gray-800 rounded px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex gap-2">
          {p.liveUrl ? (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 rounded bg-black text-white hover:opacity-90 transition"
            >
              Live demo
            </a>
          ) : null}

          <Link
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-2 rounded border hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
          >
            Repo
          </Link>
        </div>
      </div>
    </article>
  );
}
