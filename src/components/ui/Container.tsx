import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Page-width wrapper: 1152px max with responsive gutters. */
function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
