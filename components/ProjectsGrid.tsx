import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";

export function ProjectsGrid() {
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <ScrollReveal>
        <p className="text-eyebrow mb-3">More Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          More to explore
        </h2>
        <p className="mt-2 max-w-xl text-label-secondary">
          Additional software, tools, and libraries I&apos;ve built and shipped.
        </p>
      </ScrollReveal>

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rest.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
