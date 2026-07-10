"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import type { Project } from "@/lib/content";
import { springSnappy } from "@/lib/motion";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={springSnappy}
      className="surface-card surface-card-hover flex h-full flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] w-full bg-surface-2">
        <Image
          src={project.media.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-foreground/70 transition-colors hover:text-foreground"
            aria-label={`Open ${project.title} repository`}
          >
            <FolderGit2 className="size-4" strokeWidth={1.75} />
          </a>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-label-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-surface-2 p-3 text-xs text-foreground/80">
          <Sparkles className="mt-0.5 size-3.5 shrink-0 text-accent-blue" strokeWidth={1.75} />
          <span>{project.highlight}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-2 px-3 py-1 text-xs text-label-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
          >
            Live demo
            <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
