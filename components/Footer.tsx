import { FolderGit2, Mail } from "lucide-react";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="w-full px-6 pb-36 pt-12 sm:px-10 lg:px-16 xl:px-24">
      <div className="surface-card flex flex-col items-center gap-4 rounded-3xl px-8 py-14 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="max-w-md text-label-secondary">
          Open to collaborations across web, embedded, and everything in between.
        </p>
        <a
          href="mailto:reactiquiz@gmail.com"
          className="mt-3 inline-flex h-12 items-center gap-2 rounded-full bg-accent-blue px-6 text-[15px] font-medium text-white"
        >
          <Mail className="size-4" strokeWidth={1.75} />
          Email me
        </a>
        <div className="mt-2 flex items-center gap-3">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex size-11 items-center justify-center rounded-full bg-surface-2 text-foreground/80 transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <FolderGit2 className="size-4.5" strokeWidth={1.75} />
          </a>
        </div>
        <p className="mt-4 text-xs text-label-secondary/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
