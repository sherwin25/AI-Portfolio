import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  const badge =
    p.status === "live"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  return (
    <article className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${badge}`}>
            {p.status ?? "wip"}
          </span>
        </div>
        <p className="opacity-80 text-sm mb-3">{p.blurb}</p>
        {p.tags?.length ? (
          <div className="flex flex-wrap gap-2 mb-3">
            {p.tags.map((t) => (
              <span key={t} className="text-xs bg-gray-100 rounded px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div className="flex items-center gap-4 text-sm">
          {p.liveUrl && (
            <Link href={p.liveUrl} className="underline">
              Live
            </Link>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" className="underline">
              Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
