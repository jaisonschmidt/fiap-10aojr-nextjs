import type { Project } from "@/data/resume";
import { Section } from "./Section";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section title="Projetos">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h3 className="font-semibold">
                {project.url ? (
                  <a
                    href={project.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="text-sm text-zinc-700">{project.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
