"use client";

import { useEffect, useRef, useState } from "react";

export function useJourneyCarousel(totalCards: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrolled = viewportHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight + viewportHeight)));

      const newIndex = Math.min(
        Math.floor(progress * totalCards),
        totalCards - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalCards]);

  return { activeIndex, sectionRef };
}