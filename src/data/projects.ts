// src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  blurb: string;
  status: "live" | "wip";
  image?: string; // optional: "/images/card-price-agent.png" (place file in /public/images)
  repoUrl: string;
  liveUrl?: string; // live demo link
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "card-price-agent",
    title: "Card Price Agent",
    blurb:
      "Search-only demo restricted to trading cards. It queries trusted marketplaces and shows real links.",
    status: "live",
    // image: "/images/card-price-agent.png", // uncomment if you add an image to /public/images
    repoUrl: "https://github.com/sherwin25/card-price-agent",
    liveUrl: "https://card-price-agent.vercel.app/",
    tags: ["Next.js", "TypeScript", "Vercel", "Agents"],
    featured: true,
  },
  {
    id: "flashcard-tutor",
    title: "Flashcard Tutor",
    blurb:
      "AI-assisted flashcard generator with local deck storage, import/export, and a polished study UI.",
    status: "live",
    // image: "/images/flashcard-tutor.png",
    repoUrl: "https://github.com/sherwin25/flashcard-tutor",
    liveUrl: "https://flashcard-tutor.vercel.app/",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    featured: true,
  },
  {
    id: "festive-calendar",
    title: "Festive Calendar",
    blurb:
      "A playful, holiday-themed calendar with interactive confetti effects and month navigation.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/festive-calendar",
    liveUrl: "https://surewin-festive-calendar.vercel.app/",
    tags: ["Next.js", "TypeScript", "CSS", "Confetti"],
    featured: true,
  },

  // Add more projects below as you build them…
  // {
  //   id: "another-agent",
  //   title: "Another Agent Project",
  //   blurb: "Short description of what it does.",
  //   status: "wip",
  //   repoUrl: "https://github.com/sherwin25/another-agent",
  //   liveUrl: "https://surewin-another-agent.vercel.app/",
  //   tags: ["OpenAI", "AgentKit"],
  //   featured: false,
  // },
];
