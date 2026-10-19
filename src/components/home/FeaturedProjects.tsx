import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectMedia from "@/components/ui/ProjectMedia";
import ProjectLinks from "@/components/ui/ProjectLinks";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import { allProjects, professionalProjects } from "@/data/projects";

/** Order chosen from the projects that already have real screenshots. */
const FEATURED_ID = "gpc-pins";
const LIST_IDS = [
  "frebbys-school-portal",
  "think-and-act-sales-inventory",
  "sikadua-cocoa",
  "bamfo-herbal-center",
  "kumawu-technical-institute",
];

function FeaturedProjects() {
  const featured = professionalProjects.find((p) => p.id === FEATURED_ID)!;
  const rows = LIST_IDS.map((id) =>
    professionalProjects.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Selected work"
        title="Software built for real organisations"
        description="Systems for schools, businesses, healthcare and payments, from first requirements to deployment."
      />

      <Reveal as="article" className="group mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <ProjectMedia
          title={featured.title}
          category={featured.category}
          image={featured.image}
          priority
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            {featured.category}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-fg">
            {featured.title}
          </h3>
          <p className="mt-4 text-muted">{featured.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {featured.technologies.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <ProjectLinks project={featured} className="mt-4" />
        </div>
      </Reveal>

      <ul className="mt-14 border-t border-line">
        {rows.map((p) => (
          <Reveal
            as="li"
            key={p.id}
            className="group grid gap-4 border-b border-line py-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                {p.category}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-fg transition-colors duration-200 group-hover:text-accent">
                {p.title}
              </h3>
            </div>
            <div>
              <p className="line-clamp-4 text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {p.technologies.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
              <ProjectLinks project={p} className="mt-2" />
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink to="/portfolio" variant="secondary" size="lg">
          View all {allProjects.length} projects
        </ButtonLink>
      </div>
    </Section>
  );
}

export default FeaturedProjects;
