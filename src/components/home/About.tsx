import { Download } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { education, experience, site } from "@/data/site";

function About() {
  return (
    <Section id="about" labelledBy="about-title" tone="subtle">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About" title="Hi, I’m Nana Akwasi" />
          <p className="mt-6 text-muted">
            I’m a software developer with experience building modern, scalable and
            efficient software. I enjoy learning new technologies, solving
            problems creatively and collaborating with others to build products
            that make a positive impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.resumeUrl} download>
              <Download className="size-4" aria-hidden="true" />
              My Resume
            </ButtonLink>
            <ButtonLink to="/#contact" variant="secondary">
              Let’s Talk
            </ButtonLink>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Experience
            </h3>
            <ol className="mt-4 border-t border-line">
              {experience.map((job) => (
                <Reveal as="li" key={job.title + job.place} className="border-b border-line py-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
                    <h4 className="font-display text-lg font-bold text-fg">{job.title}</h4>
                    <p className="text-sm text-muted">{job.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-fg">{job.place}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-line">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Education
            </h3>
            <ul className="mt-4 border-t border-line">
              {education.map((ed) => (
                <Reveal as="li" key={ed.title} className="border-b border-line py-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
                    <h4 className="font-display text-lg font-bold text-fg">{ed.title}</h4>
                    <p className="text-sm text-muted">{ed.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {ed.place}
                    {ed.note ? ` · ${ed.note}` : ""}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
