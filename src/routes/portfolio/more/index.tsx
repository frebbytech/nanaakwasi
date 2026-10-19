import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectEntry from "@/components/portfolio/ProjectEntry";
import { ButtonLink } from "@/components/ui/Button";
import { personalProjects, professionalProjects } from "@/data/projects";
import { usePageTitle } from "@/hooks/usePageTitle";

function MorePortfolio() {
  usePageTitle("Projects");

  return (
    <>
      <Section bordered={false} labelledBy="portfolio-title" className="pb-12 md:pb-16">
        <h1 id="portfolio-title" className="text-display max-w-[18ch] font-display font-bold text-fg">
          Projects
        </h1>
        <p className="text-lead mt-5 max-w-2xl text-muted">
          Professional work for clients and organisations, plus personal projects
          where I explore ideas and designs.
        </p>
      </Section>

      <Section labelledBy="pro-title">
        <SectionHeading id="pro-title" eyebrow="Professional" title="Client and organisation work" />
        <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {professionalProjects.map((p) => (
            <ProjectEntry key={p.id} project={p} />
          ))}
        </div>
      </Section>

      <Section labelledBy="personal-title" tone="subtle">
        <SectionHeading id="personal-title" eyebrow="Personal" title="Side projects and experiments" />
        <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {personalProjects.map((p) => (
            <ProjectEntry key={p.id} project={p} />
          ))}
        </div>
      </Section>

      <Section labelledBy="cta-title">
        <SectionHeading
          id="cta-title"
          title="Have a project in mind?"
          description="Tell me what you need and I’ll reply with questions and a proposed approach."
        />
        <div className="mt-8">
          <ButtonLink to="/#contact" size="lg">
            Start a project
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}

export default MorePortfolio;
