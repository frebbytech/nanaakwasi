import type { ReactNode } from "react";
import { m } from "framer-motion";

const tags = {
  div: m.div,
  li: m.li,
  article: m.article,
} as const;

type RevealProps = {
  children: ReactNode;
  as?: keyof typeof tags;
  className?: string;
  /** Seconds. Use small steps (0.05–0.1) to stagger siblings. */
  delay?: number;
  /** Vertical travel in px. Keep it small. */
  y?: number;
};

/**
 * Fades and lifts content in once as it enters the viewport.
 * Reduced-motion users get no movement (MotionConfig in the root layout
 * strips transforms) and the content is never left hidden.
 */
function Reveal({ children, as = "div", className, delay = 0, y = 14 }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
