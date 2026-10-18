import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

export type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap " +
  "transition-colors duration-150 ease-(--ease-soft) " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover active:bg-accent-hover",
  secondary:
    "border border-line text-fg hover:border-accent hover:text-accent active:bg-accent-soft",
  ghost: "text-accent hover:text-accent-hover underline-offset-4 hover:underline",
};

// md = 44px tall (touch-friendly), lg = 48px
const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleProps = {}) {
  const sizing = variant === "ghost" ? "h-auto px-0 text-sm" : sizes[size];
  return cn(base, variants[variant], sizing, className);
}
