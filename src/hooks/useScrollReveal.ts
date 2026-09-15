"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            const children = entry.target.querySelectorAll(".stagger-item");
            children.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
              child.classList.add("visible");
            });
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}