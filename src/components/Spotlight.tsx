"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const div = divRef.current;
      if (!div) return;

      const x = e.clientX;
      const y = e.clientY;

      div.style.setProperty("--mouse-x", `${x}px`);
      div.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{
        // A larger, subtle glow that follows the pointer.
        // Uses the sky-500 color (approx) but very transparent.
        background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(14, 165, 233, 0.15), transparent 40%)`,
      }}
    />
  );
}
