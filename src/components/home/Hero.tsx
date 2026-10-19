import { Download } from "lucide-react";
import { m, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
};

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="py-14 md:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <m.div variants={container} initial="hidden" animate="show">
          <m.p variants={item} className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-accent">
            {site.title} · {site.location}
          </m.p>
          <m.h1
            variants={item}
            id="hero-title"
            className="text-display max-w-[20ch] font-display font-bold text-fg"
          >
            I build web, mobile and desktop software that people rely on.
          </m.h1>
          <m.p variants={item} className="text-lead mt-6 max-w-xl text-muted">
            I’m {site.name}, a self-taught developer who enjoys solving complex
            problems with efficient, user-focused applications, from school and
            business systems to payment platforms.
          </m.p>
          <m.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/#projects" size="lg">
              View My Work
            </ButtonLink>
            <ButtonLink to="/#contact" variant="secondary" size="lg">
              Let’s Talk
            </ButtonLink>
          </m.div>
          <m.a
            variants={item}
            href={site.resumeUrl}
            download
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline"
          >
            <Download className="size-4" aria-hidden="true" />
            Download résumé (PDF)
          </m.a>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="overflow-hidden rounded-card border border-line bg-subtle">
            <img
              src={site.portrait.full}
              alt={`Portrait of ${site.name}`}
              width={800}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </m.div>
      </Container>
    </section>
  );
}

export default Hero;
