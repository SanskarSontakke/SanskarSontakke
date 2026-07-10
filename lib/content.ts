export type ProjectMedia = {
  image: string;
  video?: string;
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  highlight: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
  media: ProjectMedia;
};

export type Academic = {
  title: string;
  detail: string;
  year: string;
};

export type ResearchInterest = {
  title: string;
  topic: string;
  image: string;
};

export const profile = {
  name: "Sanskar Sontakke",
  headline: "Full-Stack Developer & Hardware Tinkerer",
  bio: "I architect and deploy high-performance software systems across web, mobile, desktop, and embedded platforms — turning complex problems into precise, seamless digital experiences. Coding since age 9, currently bridging low-level systems understanding with modern full-stack tools.",
  portfolioUrl: "https://sanskarsontakke.vercel.app/",
  githubUrl: "https://github.com/SanskarSontakke",
};

export const projects: Project[] = [
  {
    id: "inkling-forge",
    title: "Inkling Forge",
    description:
      "A premium webcomics and sequential art publishing platform with a Neubrutalist design system, a secured admin portal, and a 50x-optimized PDF-to-WebP extraction pipeline.",
    highlight:
      "Poppler-accelerated PDF extraction pipeline that converts uploads to mobile-optimized WebP frames in under 3 seconds.",
    stack: ["Next.js", "React 19", "TypeScript", "SQLite", "Tailwind CSS", "dnd-kit"],
    repoUrl: "https://github.com/SanskarSontakke/Inkling-Forge",
    featured: true,
    media: {
      image: "/assets/img/projects/inkling-forge.jpg",
      video: "/assets/video/inkling-forge.mp4",
      poster: "/assets/img/posters/inkling-forge.jpg",
    },
  },
  {
    id: "gw150914-experience",
    title: "GW150914: Multisensory Astrophysics Experience",
    description:
      "Translates the raw LIGO strain data from the first observed black-hole merger into synchronized audio, visuals, and mobile haptic feedback — no app install required.",
    highlight:
      "Real-time PWM haptic synchronization via navigator.vibrate(), driven by a Hilbert-transform amplitude envelope sampled at 20 Hz.",
    stack: ["JavaScript", "Web Audio API", "Python (DSP)", "gwpy / pycbc"],
    repoUrl: "https://github.com/SanskarSontakke/gw150914-experience",
    liveUrl: "https://sanskarsontakke.github.io/gw150914-experience/",
    featured: true,
    media: {
      image: "/assets/img/projects/gw150914-experience.jpg",
      video: "/assets/video/gw150914.mp4",
      poster: "/assets/img/posters/gw150914.jpg",
    },
  },
  {
    id: "photography-portfolio",
    title: "Photography Portfolio",
    description:
      "A high-end, creative photography portfolio with a parallax hero, magnetic custom cursor, and a bento-grid gallery.",
    highlight:
      "Scroll-driven parallax and a bespoke cursor system built entirely with Framer Motion primitives.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    repoUrl: "https://github.com/SanskarSontakke/Photography-Sanskar",
    media: { image: "/assets/img/projects/photography-portfolio.jpg" },
  },
  {
    id: "bigkuery-calculator",
    title: "BigKuery Calculator",
    description:
      "An arbitrary-precision scientific calculator with a Pratt-parser math engine, symbolic variables, and an infinite whiteboard canvas of draggable calculation cards.",
    highlight:
      "Multi-pass, bidirectional variable solver — defining a variable on one card live-updates every other card referencing it.",
    stack: ["Python", "PyQt6", "mpmath"],
    repoUrl: "https://github.com/SanskarSontakke/BigKuery-Calculator",
    featured: true,
    media: {
      image: "/assets/img/featured/bigkuery.jpg",
      video: "/assets/video/bigkuery.mp4",
      poster: "/assets/img/posters/bigkuery.jpg",
    },
  },
  {
    id: "onyx-forge",
    title: "Onyx Forge",
    description:
      "An AI image-generation platform for product marketing banners, giving fine-grained photographic control over Gemini and Imagen model outputs.",
    highlight:
      "Prompt auto-enhancement that expands simple descriptions into detailed, camera-aware generation prompts.",
    stack: ["Next.js", "React 19", "Tailwind CSS", "Google Gemini / Imagen"],
    repoUrl: "https://github.com/SanskarSontakke/Onyx-Forge",
    media: { image: "/assets/img/projects/onyx-forge.jpg" },
  },
  {
    id: "neural-tic-tac-toe",
    title: "Neural Tic-Tac-Toe",
    description:
      "A Q-learning reinforcement-learning sandbox with a real-time neural heatmap and a 'God Mode' trainer capable of a billion episodes via Web Workers.",
    highlight:
      "Symmetry-optimized Q-learning that converges roughly 8x faster by exploiting board spatial symmetry.",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "Web Workers", "Chart.js"],
    repoUrl: "https://github.com/SanskarSontakke/Neural-Tic-Tac-Toe",
    media: { image: "/assets/img/projects/neural-tic-tac-toe.jpg" },
  },
  {
    id: "change-colour-c-lib",
    title: "Change Colour C Lib",
    description:
      "A lightweight C/C++ library for ANSI terminal text coloring and styling, usable from both C and C++ projects.",
    highlight:
      "Clean extern \"C\" wrapper design allows the same static library to link cleanly into both C and C++ builds.",
    stack: ["C", "C++", "Makefile"],
    repoUrl: "https://github.com/SanskarSontakke/Change-Colour-C-Lib",
    media: { image: "/assets/img/projects/change-colour-c-lib.jpg" },
  },
  {
    id: "loading-screen-c-lib",
    title: "Loading Screen C Lib",
    description:
      "A production-ready C/C++ CLI library for progress bars and spinners, with multiple render styles and cross-platform terminal support.",
    highlight:
      "Cross-platform Virtual Terminal Processing support brings Unicode block and Braille-dot progress bars to native Windows terminals.",
    stack: ["C", "CMake"],
    repoUrl: "https://github.com/SanskarSontakke/Loading-Screen-C-Lib",
    media: { image: "/assets/img/projects/loading-screen-c-lib.jpg" },
  },
];

export const academics: Academic[] = [
  {
    title: "Dr. Homi Bhabha Balvaidnyanik Competition — Silver Medalist",
    detail: "Rank 4 in Maharashtra",
    year: "Class 9, 2026",
  },
  {
    title: "IMO Gold Medalist — International Rank 2",
    detail: "International Mathematical Olympiad",
    year: "Class 9",
  },
  {
    title: "IMO & NSO Gold Medal",
    detail: "International Mathematical & Science Olympiads",
    year: "Class 7",
  },
  {
    title: "MOMS Examination — State Rank 2",
    detail: "Maharashtra Olympiad of Mathematical Sciences",
    year: "",
  },
  {
    title: "Pragya Competition 2024 — First Prize",
    detail: "",
    year: "2024",
  },
];

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["C", "C++", "Python", "TypeScript", "JavaScript", "Dart"],
  },
  {
    label: "Frontend & Frameworks",
    skills: ["React", "Next.js", "Flutter", ".NET MAUI"],
  },
  {
    label: "Backend & Platforms",
    skills: ["Node.js", "Firebase", "Supabase", "Vercel", "SQLite"],
  },
  {
    label: "Embedded & Hardware",
    skills: [
      "ESP32",
      "Arduino",
      "Raspberry Pi",
      "Embedded Systems",
      "Hardware Engineering",
      "Data Recovery",
      "HDD Refurbishment",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "Linux", "Gemini API"],
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    title: "Translating Gravitational-Wave Signals into Synchronized Audio-Haptic Experiences",
    topic:
      "Mapping LIGO gravitational-wave strain data to real-time mobile haptic and audio feedback.",
    image: "/assets/img/research/gw-haptics.jpg",
  },
  {
    title: "A Hierarchical Bayesian Synthesis of Habitable-Zone Definitions Across Exoplanet Surveys",
    topic:
      "Reconciling divergent habitable-zone boundary definitions across exoplanet survey catalogs with hierarchical Bayesian modeling.",
    image: "/assets/img/research/habitable-zone.jpg",
  },
  {
    title: "A Hierarchical Bayesian Synthesis of Lunar Impact-Flash Luminous Efficiency",
    topic:
      "Estimating luminous efficiency distributions for lunar impact flashes from heterogeneous observational datasets.",
    image: "/assets/img/research/lunar-flash.jpg",
  },
];
