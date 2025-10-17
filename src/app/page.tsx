import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI Projects Portfolio</h1>
      <p className="opacity-80 max-w-2xl">
        Explore AI-powered projects — click a card to view live demos or the
        GitHub repository.
      </p>

      {featured.length ? (
        <section className="grid sm:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </section>
      ) : null}

      {rest.length ? (
        <section className="grid sm:grid-cols-2 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </section>
      ) : null}
    </main>
  );
}
