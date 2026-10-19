import type { Project } from "@/data/projects";
import ProjectMedia from "@/components/ui/ProjectMedia";
import ProjectLinks from "@/components/ui/ProjectLinks";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";

/** Full project entry: media, category, description, stack and real links. */
function ProjectEntry({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="group flex flex-col">
      <ProjectMedia
        title={project.title}
        category={project.category}
        image={project.image}
      />
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-accent">
        {project.category}
        {project.year ? ` · ${project.year}` : ""}
      </p>
      <h3 className="mt-1 font-display text-xl font-bold text-fg">{project.title}</h3>
      <p className="mt-3 text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
      <ProjectLinks project={project} className="mt-2" />
    </Reveal>
  );
}

export default ProjectEntry;
