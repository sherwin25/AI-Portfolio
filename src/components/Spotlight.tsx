export default function Spotlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background:
          "radial-gradient(680px circle at 18% 12%, rgba(14, 165, 233, 0.12), transparent 55%), radial-gradient(520px circle at 84% 20%, rgba(244, 114, 182, 0.1), transparent 55%)",
      }}
    />
  );
}
