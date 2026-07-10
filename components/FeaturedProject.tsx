"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import type { Project } from "@/lib/content";
import { springSmooth, springSnappy, pressScale } from "@/lib/motion";

export function FeaturedProject({
  project,
  reverse = false,
  divider = false,
}: {
  project: Project;
  reverse?: boolean;
  divider?: boolean;
}) {
  return (
    <div
      className={`snap-section relative h-dvh w-full overflow-hidden ${
        divider ? "hairline-t" : ""
      }`}
    >
      {/* Media layer — full-bleed, zoomed slightly to crop out any letterboxing in the source clip and fill the section completely */}
      <div className="absolute inset-0 overflow-hidden bg-surface-1">
        {project.media.video ? (
          <video
            className="absolute inset-0 size-full scale-110 object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            poster={project.media.poster}
            onEnded={(e) => {
              // Belt-and-suspenders on top of the `loop` attribute — some
              // AI-generated MP4 encodes don't restart reliably on `loop`
              // alone, so force a manual restart when playback ends.
              const video = e.currentTarget;
              video.currentTime = 0;
              void video.play();
            }}
          >
            <source src={project.media.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.media.image}
            alt={project.title}
            fill
            className="scale-110 object-cover"
            sizes="100vw"
          />
        )}
      </div>

      {/* Content layer — text sits directly on the media; only a subtle panel behind the text block for legibility, not a full veil */}
      <div
        className={`relative z-10 flex h-full items-end justify-start ${
          reverse ? "sm:justify-end" : "sm:justify-start"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={springSmooth}
          className={`glass-panel m-6 max-h-[calc(100dvh-3rem)] max-w-xl overflow-y-auto rounded-3xl bg-black/30 p-8 text-left backdrop-blur-md sm:m-10 sm:max-h-[calc(100dvh-5rem)] sm:p-10 lg:m-14 lg:max-h-[calc(100dvh-7rem)] ${
            reverse ? "sm:text-right" : "sm:text-left"
          }`}
        >
          <p className="text-eyebrow mb-3">Featured Project</p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-label-secondary">
            {project.description}
          </p>

          <div
            className={`mt-5 flex items-start gap-2.5 rounded-2xl bg-black/30 p-4 text-left text-sm text-foreground/85 ${
              reverse ? "sm:flex-row-reverse sm:text-right" : "sm:text-left"
            }`}
          >
            <Sparkles className="mt-0.5 size-4 shrink-0 text-accent-blue" strokeWidth={1.75} />
            <span>{project.highlight}</span>
          </div>

          <div
            className={`mt-5 flex flex-wrap justify-start gap-1.5 ${
              reverse ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-black/30 px-3 py-1 text-xs text-label-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className={`mt-7 flex flex-wrap items-center justify-start gap-3 ${
              reverse ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={pressScale}
              transition={springSnappy}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent-blue px-5 text-sm font-medium text-white"
            >
              <FolderGit2 className="size-4" strokeWidth={1.75} />
              Repository
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={pressScale}
                transition={springSnappy}
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-black/30 px-5 text-sm font-medium text-foreground/90"
              >
                Live demo
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
