export type Project = {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  status?: "wip" | "live";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "card-price",
    title: "Card Price Agent",
    blurb: "Estimates today’s value from recent SOLD comps with sources.",
    image: "/thumbs/card-price.png",
    tags: ["Next.js", "AgentKit", "Vercel"],
    liveUrl: "/card-price",
    repoUrl: "https://github.com/sherwin25/card-price-agent",
    status: "wip",
    featured: true,
  },
];
