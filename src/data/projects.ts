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
    id: "prioritization-poker",
    title: "Prioritization Poker",
    blurb:
      "Collaborative estimation game with live Fibonacci voting and discussion. Built to expose scope disagreements early and improve planning alignment.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/Prioritization-Poker",
    liveUrl: "https://prioritization-poker.vercel.app/",
    tags: ["Next.js", "Supabase", "Realtime", "Tailwind"],
    featured: false,
  },
  {
    id: "feature-flag-dashboard",
    title: "Feature Flag Dashboard",
    blurb:
      "Feature rollout console with targeting controls, staged releases, and kill-switch behavior. Built to validate safer releases and experiment workflows before production rollout.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/feature-flag-dashboard",
    liveUrl: "https://surewin-feature-flag-dashboard.vercel.app/",
    tags: ["Next.js", "localStorage", "Feature Flags", "Tailwind"],
    featured: true,
  },
  {
    id: "enterprise-platform",
    title: "Enterprise Multi-Tenant Platform",
    blurb:
      "Infrastructure demo that automates tenant provisioning with quotas, RBAC, and policy defaults. Designed to support tenant isolation and governance constraints.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/enterprise-platform-demo",
    liveUrl: "https://enterprise-platform-demo.vercel.app/",
    tags: ["Terraform", "Kubernetes", "OpenShift", "Governance"],
    featured: true,
  },
  {
    id: "auto-spec-agent",
    title: "Auto-Spec Agent",
    blurb:
      "Converts feature ideas into first-pass specs with stories, schema drafts, and ER diagrams. Built to reduce ambiguity before engineering handoff.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/auto-spec-agent",
    liveUrl: "https://auto-spec-agent.vercel.app/",
    tags: ["Next.js", "OpenAI", "Supabase", "Mermaid.js"],
    featured: true,
  },
  {
    id: "relay-messenger",
    title: "Relay Messenger",
    blurb:
      "Real-time chat app with authentication, friend requests, and permission-aware messaging. Used to validate auth boundaries and realtime UX behavior.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/relay-messenger",
    liveUrl: "https://relay-messenger.vercel.app/",
    tags: ["Next.js", "Supabase", "Auth", "Realtime"],
    featured: false,
  },
  {
    id: "feedback-flow",
    title: "Smart Feedback Board",
    blurb:
      "Public feedback board with automatic categorization and moderation support. Built to test faster triage workflows and improve signal quality.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/feedback-flow",
    liveUrl: "https://surewin-feedback-flow.vercel.app/",
    tags: ["Next.js", "AI Agent", "CRUD", "Postgres"],
    featured: false,
  },
  {
    id: "card-price-agent",
    title: "Card Price Agent",
    blurb:
      "Search-only trading card assistant that aggregates listings from trusted marketplaces. Built to validate constrained retrieval and source transparency.",
    status: "live",
    // image: "/images/card-price-agent.png", // uncomment if you add an image to /public/images
    repoUrl: "https://github.com/sherwin25/card-price-agent",
    liveUrl: "https://card-price-agent.vercel.app/",
    tags: ["Next.js", "TypeScript", "Vercel", "Agents"],
    featured: false,
  },
  {
    id: "flashcard-tutor",
    title: "Flashcard Tutor",
    blurb:
      "AI-assisted flashcard generator with local deck storage and import/export. Used to test fast study flows and practical content generation quality.",
    status: "live",
    // image: "/images/flashcard-tutor.png",
    repoUrl: "https://github.com/sherwin25/flashcard-tutor",
    liveUrl: "https://flashcard-tutor.vercel.app/",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    featured: false,
  },
  {
    id: "festive-calendar",
    title: "Festive Calendar",
    blurb:
      "Interactive calendar with month navigation and lightweight celebration effects. Built to practice UI state handling and animation performance.",
    status: "live",
    repoUrl: "https://github.com/sherwin25/festive-calendar",
    liveUrl: "https://surewin-festive-calendar.vercel.app/",
    tags: ["Next.js", "TypeScript", "CSS", "Confetti"],
    featured: false,
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
