type SectionNumberProps = {
  number: string;
  label: string;
};

export function SectionNumber({ number, label }: SectionNumberProps) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
      <span className="font-mono text-signal">{number}</span>
      <span>{label}</span>
    </div>
  );
}
