import { Cpu, Code2, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/content";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ScrollReveal";

const groupIcons = [Code2, Server, Cpu, Wrench, Wrench];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <ScrollReveal>
        <p className="text-eyebrow mb-3">Skills</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Software, systems, hardware
        </h2>
        <p className="mt-2 max-w-xl text-label-secondary">
          The stack underneath, and the stack underneath that.
        </p>
      </ScrollReveal>

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[i] ?? Cpu;
          return (
            <StaggerItem key={group.label}>
              <div className="surface-card h-full rounded-3xl p-8">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-2">
                    <Icon className="size-6 text-accent-blue" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-medium">{group.label}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-surface-2 px-4 py-1.5 text-sm text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
