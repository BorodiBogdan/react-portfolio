import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    obs.observe(el);

    // Safety net: if the element somehow never intersects (scripted scrolls,
    // headless screenshots, search engine snapshots), reveal after a beat.
    const fallback = window.setTimeout(() => {
      el.classList.add("is-visible");
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      obs.disconnect();
    };
  }, []);
  return ref;
}
