import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/utils/cn";

const linkClass =
  "inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-hover hover:underline";

/** Live / source links. Rendered only when a real URL exists. */
function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { liveUrl, sourceUrl, title } = project;
  if (!liveUrl && !sourceUrl) return null;

  const isApk = !!liveUrl && liveUrl.toLowerCase().endsWith(".apk");

  return (
    <div className={cn("flex flex-wrap gap-x-5", className)}>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {isApk ? "Download app" : "Visit live site"}
          <span className="sr-only"> for {title} (opens in a new tab)</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      )}
      {sourceUrl && (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Source code
          <span className="sr-only"> for {title} (opens in a new tab)</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
