import { useEffect } from "react";

const BASE = "Nana Akwasi";
const ORIGIN = "https://www.nanaakwasi.dev";

/** Sets a per-route document title and canonical URL. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} — Software Developer`;
    const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) link.href = ORIGIN + window.location.pathname;
  }, [title]);
}
