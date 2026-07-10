import Image from "next/image";
import { Telescope } from "lucide-react";
import { researchInterests } from "@/lib/content";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";

export function ResearchInterestsSection() {
  return (
    <section id="research" className="w-full px-6 py-32 sm:px-10 lg:px-16 xl:px-24">
      <ScrollReveal>
        <p className="text-eyebrow mb-4 text-sm">Research Interests</p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Astrophysics, on the side
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-label-secondary">
          Gravitational waves, exoplanets, and lunar impacts.
        </p>
      </ScrollReveal>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {researchInterests.map((paper) => (
          <StaggerItem key={paper.title}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-1">
              <Image
                src={paper.image}
                alt={paper.title}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Telescope className="mb-4 size-7 text-accent-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-medium leading-snug">{paper.title}</h3>
                <p className="mt-3 text-base text-label-secondary">{paper.topic}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
