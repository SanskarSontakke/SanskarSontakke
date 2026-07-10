"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FolderGit2 } from "lucide-react";
import { profile } from "@/lib/content";
import { springSmooth, springSnappy, pressScale } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex h-dvh flex-col items-start justify-center overflow-hidden px-6 text-left sm:items-center sm:text-center"
    >
      {/* Media layer — ambient background video, gradient fallback while asset pipeline is empty */}
      <div className="bg-spotlight absolute inset-0 bg-black">
        <video
          className="absolute inset-0 size-full scale-110 object-cover opacity-70 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/img/posters/hero.jpg"
        >
          <source src="/assets/video/hero-ambient.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      {/* Content layer — text sits directly on media (deference), no glass box */}
      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.1 }}
          className="text-eyebrow mb-5"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.18 }}
          className="text-gradient-accent text-6xl font-semibold tracking-tight sm:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.26 }}
          className="mt-4 text-xl text-foreground/85 sm:text-2xl"
        >
          {profile.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.34 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-label-secondary sm:mx-auto"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.42 }}
          className="mt-10 flex flex-wrap items-center justify-start gap-3 sm:justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={pressScale}
            transition={springSnappy}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-blue px-6 text-[15px] font-medium text-white shadow-lg shadow-accent-blue/30"
          >
            View Projects
            <ArrowDownRight className="size-4" strokeWidth={1.75} />
          </motion.a>
          <motion.a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={pressScale}
            transition={springSnappy}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-[15px] font-medium text-foreground/90 backdrop-blur-sm"
          >
            <FolderGit2 className="size-4" strokeWidth={1.75} />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
