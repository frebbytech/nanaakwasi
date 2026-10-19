import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/utils/cn";

/** Real button, removed from the tab order and hidden until the page has scrolled. */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      hidden={!visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-4 z-40 inline-flex size-11 items-center justify-center rounded-control border border-line bg-surface text-fg shadow-card transition-colors hover:border-accent hover:text-accent sm:right-6"
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;
