import { useState } from "react";
import { cn } from "@/utils/cn";

type ProjectMediaProps = {
  title: string;
  category: string;
  /** Screenshot. When missing or failing to load, a designed placeholder is shown. */
  image?: string;
  /** Set true for the first/largest image above the fold */
  priority?: boolean;
  className?: string;
};

/**
 * 16:10 media frame for a project. The aspect ratio is reserved up front so
 * nothing shifts while images load, and a broken image degrades to the
 * placeholder instead of a broken-image icon.
 */
function ProjectMedia({
  title,
  category,
  image,
  priority = false,
  className,
}: ProjectMediaProps) {
  const [failed, setFailed] = useState(false);
  const showImage = !!image && !failed;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-card border border-line bg-subtle",
        className
      )}
    >
      {showImage ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          width={1280}
          height={800}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover object-top transition-transform duration-500 ease-(--ease-soft) motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${title} preview coming soon`}
          className="flex size-full flex-col"
        >
          {/* Minimal browser frame */}
          <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-line px-3">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6 text-center">
            <span className="font-display text-lg font-bold text-fg sm:text-xl">
              {title}
            </span>
            <span className="text-xs uppercase tracking-[0.14em] text-muted">
              {category} · Preview coming soon
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectMedia;
