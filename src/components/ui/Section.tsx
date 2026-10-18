import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Container from "./Container";

type SectionProps = {
  id?: string;
  /** id of the heading that names this section (for assistive tech) */
  labelledBy?: string;
  children: ReactNode;
  className?: string;
  /** Slightly different surface for visual rhythm without heavy colour blocks */
  tone?: "default" | "subtle";
  /** Hairline divider above the section (default true) */
  bordered?: boolean;
};

/** One vertical rhythm for every section: py-20 mobile, py-28 desktop. */
function Section({
  id,
  labelledBy,
  children,
  className,
  tone = "default",
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-20 md:py-28",
        tone === "subtle" ? "bg-subtle" : "bg-bg",
        bordered && "border-t border-line",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
