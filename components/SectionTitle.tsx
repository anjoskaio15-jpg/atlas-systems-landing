type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="atlas-title-gradient font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="atlas-support-text mt-5 max-w-2xl text-base leading-8 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
