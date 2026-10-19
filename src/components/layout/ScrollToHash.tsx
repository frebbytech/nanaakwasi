import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Client-side navigation does not scroll to #anchors or reset scroll on its
 * own. This handles both, so section links no longer cause a full reload.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a frame so lazy-rendered routes have mounted their sections.
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
