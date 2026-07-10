import { Medal } from "lucide-react";
import { academics } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AcademicsSection() {
  return (
    <section id="academics" className="w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <ScrollReveal>
        <p className="text-eyebrow mb-3">Academics</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Competitions & recognitions
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="surface-card mt-10 overflow-hidden rounded-3xl">
        {academics.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-center gap-4 px-5 py-4 ${
              i !== academics.length - 1 ? "hairline-b" : ""
            }`}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-2">
              <Medal className="size-4.5 text-accent-blue" strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-label-secondary">
                {[item.detail, item.year].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
