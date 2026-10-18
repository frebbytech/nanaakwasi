import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  /** Small label above the title, e.g. "Selected work" */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Pass the same value to <Section labelledBy> */
  id?: string;
  className?: string;
};

/** Left-aligned section heading. Always an <h2>; the page's single <h1> is the hero. */
function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-title">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lead text-muted">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
