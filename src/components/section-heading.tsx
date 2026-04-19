type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      <span className="inline-flex rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800 shadow-sm backdrop-blur">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-emerald-900/75 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
