import { useEffect } from "react";

const BASE = "Nana Akwasi";

/** Sets a per-route document title, e.g. "Projects | Nana Akwasi". */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} — Software Developer`;
  }, [title]);
}
