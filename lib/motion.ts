import type { Transition } from "framer-motion";

/** Apple "smooth" spring — default reveals, no bounce. */
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 170,
  damping: 26,
};

/** Apple "snappy" spring — hover/press micro-interactions. */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const pressScale = { scale: 0.97 };
