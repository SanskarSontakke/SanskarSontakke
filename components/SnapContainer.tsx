"use client";

import { useEffect, useRef } from "react";

/**
 * CSS `scroll-snap-type: mandatory` only reliably snaps on slow, single wheel
 * notches — fast or continuous trackpad/mouse scrolling (multiple "bars" in
 * one gesture) blows straight past the snap points in most browsers. This
 * wraps the snap region with a wheel/touch/keyboard handler that always
 * resolves a scroll gesture to exactly one section step, animated manually,
 * so snapping is consistent regardless of input device or speed.
 */
export function SnapContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getSections = () =>
      Array.from(container.querySelectorAll<HTMLElement>(":scope > .snap-section"));

    const currentIndex = () => {
      const sections = getSections();
      const top = container.scrollTop;
      let closest = 0;
      let closestDist = Infinity;
      sections.forEach((section, i) => {
        const dist = Math.abs(section.offsetTop - top);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const goTo = (index: number) => {
      const sections = getSections();
      const clamped = Math.max(0, Math.min(sections.length - 1, index));
      const atTop = container.scrollTop <= 0;
      const atBottom =
        Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight;

      // Let the gesture escape the container (to the outer page scroll)
      // once we're already at its first/last section and the user keeps
      // going in that direction — this preserves the scroll-chaining
      // behavior into "More to explore" below.
      if (clamped === currentIndex() && ((atTop && index < 0) || (atBottom && index >= sections.length))) {
        return;
      }

      isAnimating.current = true;
      sections[clamped].scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        isAnimating.current = false;
      }, 650);
    };

    const onWheel = (e: WheelEvent) => {
      const atTop = container.scrollTop <= 0;
      const atBottom =
        Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight;

      // At the boundary, let scroll-chaining hand off to the page instead
      // of trapping the gesture.
      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        return;
      }

      e.preventDefault();
      if (isAnimating.current) return;
      goTo(currentIndex() + (e.deltaY > 0 ? 1 : -1));
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(e.key)) return;
      if (isAnimating.current) return;
      e.preventDefault();
      const dir = e.key === "ArrowUp" || e.key === "PageUp" ? -1 : 1;
      goTo(currentIndex() + dir);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 40) return;

      const atTop = container.scrollTop <= 0;
      const atBottom =
        Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight;
      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) return;

      goTo(currentIndex() + (deltaY > 0 ? 1 : -1));
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("keydown", onKeyDown);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("keydown", onKeyDown);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="snap-container" tabIndex={0}>
      {children}
    </div>
  );
}
