import { Moon, Sun } from "lucide-react";
import { cn } from "@/utils/cn";
import { useTheme } from "@/theme/use-theme";

type ThemeToggleProps = {
  className?: string;
};

function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-control border border-line text-muted",
        "transition-colors duration-150 hover:border-accent hover:text-accent",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
