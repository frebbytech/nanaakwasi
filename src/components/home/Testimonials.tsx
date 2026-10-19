import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/data/site";

function Avatar({ person }: { person: Testimonial }) {
  const [failed, setFailed] = useState(false);
  const initials = person.author
    .replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex size-14 items-center justify-center rounded-full border border-line bg-accent-soft font-display font-bold text-accent"
      >
        {initials}
      </span>
    );
  }
  return (
    <img
      src={person.avatar}
      alt=""
      width={56}
      height={56}
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-14 rounded-full border border-line object-cover"
    />
  );
}

const navButton =
  "inline-flex size-11 items-center justify-center rounded-control border border-line text-fg transition-colors hover:border-accent hover:text-accent";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  return (
    <Section id="reviews" labelledBy="reviews-title">
      <SectionHeading
        id="reviews-title"
        eyebrow="Client feedback"
        title="What clients and colleagues say"
      />

      <div className="mt-12 max-w-3xl" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
      <m.figure
        key={current.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25 }}
      >
        <blockquote className="font-display text-xl font-semibold leading-relaxed text-fg md:text-2xl">
          “{current.quote}”
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <Avatar key={current.id} person={current} />
          <div>
            <p className="font-semibold text-fg">{current.author}</p>
            <p className="text-sm text-muted">{current.role}</p>
          </div>
        </figcaption>
      </m.figure>
      </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <button
          type="button"
          className={navButton}
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={navButton}
          onClick={() => setIndex((i) => (i + 1) % total)}
          aria-label="Next testimonial"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
        <p className="ml-2 text-sm text-muted" aria-hidden="true">
          {index + 1} / {total}
        </p>
      </div>
    </Section>
  );
}

export default Testimonials;
