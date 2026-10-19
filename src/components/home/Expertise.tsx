import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { expertise } from "@/data/site";

function Expertise() {
  return (
    <Section id="expertise" labelledBy="expertise-title">
      <SectionHeading
        id="expertise-title"
        eyebrow="Technical expertise"
        title="Tools I work with"
        description="Technologies used across the projects and roles listed on this site."
      />
      <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.07} className="border-t border-line pt-5">
            <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              {group.title}
            </dt>
            <dd className="mt-4">
              <ul className="space-y-2 text-fg">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}

export default Expertise;
