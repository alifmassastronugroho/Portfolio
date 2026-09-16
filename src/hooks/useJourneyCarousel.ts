"use client";

import { useEffect, useRef, useState } from "react";

export function useJourneyCarousel(totalCards: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartY = useRef<number | null>(null);
  const isMoving = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const moveToChapter = (direction: number) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = Math.max(section.offsetHeight - viewportHeight, 1);
      const isInsideSection = rect.top <= 1 && rect.bottom >= viewportHeight - 1;

      if (!isInsideSection || isMoving.current) return false;

      const currentProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      const currentIndex = Math.min(
        Math.floor(currentProgress * totalCards),
        totalCards - 1
      );
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= totalCards) return false;

      isMoving.current = true;
      window.scrollTo({
        top: window.scrollY + rect.top + (nextIndex * scrollableHeight) / totalCards,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });

      window.setTimeout(() => {
        isMoving.current = false;
      }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 150 : 500);

      return true;
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableHeight = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      const newIndex = Math.min(
        Math.floor(progress * totalCards),
        totalCards - 1
      );

      setActiveIndex(newIndex);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 1) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const rect = section.getBoundingClientRect();
      const isInsideSection = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;

      if (!isInsideSection) return;

      if (moveToChapter(direction)) event.preventDefault();
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchY = event.touches[0]?.clientY;
      const distance = touchStartY.current - (touchY ?? touchStartY.current);
      if (Math.abs(distance) < 10) return;

      const rect = section.getBoundingClientRect();
      const scrollableHeight = Math.max(section.offsetHeight - window.innerHeight, 1);
      const currentProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      const currentIndex = Math.min(
        Math.floor(currentProgress * totalCards),
        totalCards - 1
      );
      const nextIndex = currentIndex + (distance > 0 ? 1 : -1);

      if (nextIndex >= 0 && nextIndex < totalCards) event.preventDefault();
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchEndY = event.changedTouches[0]?.clientY;
      const distance = touchStartY.current - (touchEndY ?? touchStartY.current);
      touchStartY.current = null;

      const swipeThreshold = Math.max(24, Math.min(60, window.innerHeight * 0.06));
      if (Math.abs(distance) < swipeThreshold) return;

      if (moveToChapter(distance > 0 ? 1 : -1)) event.preventDefault();
    };

    const handleTouchCancel = () => {
      touchStartY.current = null;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    section.addEventListener("touchend", handleTouchEnd, { passive: false });
    section.addEventListener("touchcancel", handleTouchCancel);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      section.removeEventListener("touchend", handleTouchEnd);
      section.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [totalCards]);

  return { activeIndex, sectionRef };
}