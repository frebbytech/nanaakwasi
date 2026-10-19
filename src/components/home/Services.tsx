import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/site";

function Services() {
  return (
    <Section id="services" labelledBy="services-title" tone="subtle">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="How I can help"
          description="Pick a service to start a conversation. I’ll reply with questions and a proposed approach."
        />
        <ul className="border-t border-line">
          {services.map((s) => (
            <Reveal
              as="li"
              key={s.id}
              className="flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-fg">{s.title}</h3>
                <p className="mt-2 text-muted">{s.description}</p>
              </div>
              <Link
                to="/#contact"
                state={{ service: s.title }}
                className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-hover hover:underline"
              >
                Enquire
                <span className="sr-only"> about {s.title}</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Services;
