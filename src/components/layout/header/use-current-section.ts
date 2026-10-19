import { useEffect, useRef, useState } from "react";

/** Home-page sections that can name the header, in page order. */
export const SECTION_IDS = [
  "projects",
  "services",
  "expertise",
  "about",
  "reviews",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_TITLES: Record<SectionId, string> = {
  projects: "Projects",
  services: "Services",
  expertise: "Expertise",
  about: "About",
  reviews: "Reviews",
  contact: "Contact",
};

export type CurrentSection = {
  /** "" while the hero, the footer or a non-home page is in view */
  id: SectionId | "";
  /** 1 = user scrolled down, -1 = user scrolled up */
  direction: 1 | -1;
};

/**
 * Tracks which home-page section is under the upper part of the viewport and
 * which way the user last scrolled. The hero (above the first section) and
 * the footer (below the last) both resolve to "".
 */
export function useCurrentSection(enabled: boolean): CurrentSection {
  const [state, setState] = useState<CurrentSection>({ id: "", direction: 1 });
  const lastY = useRef(0);
  const dir = useRef<1 | -1>(1);

  useEffect(() => {
    if (!enabled) {
      setState((s) => (s.id === "" ? s : { ...s, id: "" }));
      return;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) > 1) dir.current = y > lastY.current ? 1 : -1;
      lastY.current = y;

      const vh = window.innerHeight;
      let id: SectionId | "" = "";
      for (const sid of SECTION_IDS) {
        const el = document.getElementById(sid);
        if (el && el.getBoundingClientRect().top <= vh * 0.4) id = sid;
      }
      // Once the footer is clearly entering the viewport, go back to the name.
      const footer = document.querySelector("footer");
      if (footer && footer.getBoundingClientRect().top <= vh * 0.8) id = "";

      setState((s) =>
        s.id === id && s.direction === dir.current ? s : { id, direction: dir.current }
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    lastY.current = window.scrollY;
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return state;
}
