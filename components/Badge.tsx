type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "free" | "locked" | "accent";
};

const tones = {
  default: "border-line bg-panel text-muted",
  free: "border-signal/40 bg-signal/10 text-signal",
  locked: "border-ember/40 bg-ember/10 text-ember",
  accent: "border-mist/20 bg-mist/10 text-mist",
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
