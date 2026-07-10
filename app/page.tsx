import { HeroSection } from "@/components/HeroSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { SnapContainer } from "@/components/SnapContainer";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { AcademicsSection } from "@/components/AcademicsSection";
import { ResearchInterestsSection } from "@/components/ResearchInterestsSection";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main className="flex flex-1 flex-col">
      <SnapContainer>
        <HeroSection />
        {featured.map((project, i) => (
          <FeaturedProject
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
            divider={i > 0}
          />
        ))}
      </SnapContainer>
      <ProjectsGrid />
      <SkillsSection />
      <AcademicsSection />
      <ResearchInterestsSection />
      <Footer />
    </main>
  );
}
