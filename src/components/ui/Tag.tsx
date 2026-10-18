import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type TagProps = {
  children: ReactNode;
  className?: string;
};

/** Small technology / category label. Square-ish corners, hairline border. */
function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-control border border-line px-2.5 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
