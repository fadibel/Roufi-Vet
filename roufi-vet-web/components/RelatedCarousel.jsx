"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Horizontal, snap-scrolling row with previous/next buttons.
 * Works with touch, trackpad and keyboard (the list is focusable).
 */
export default function RelatedCarousel({ children, label }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const track = trackRef.current;
    track?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  const buttonClass =
    "grid size-12 place-items-center rounded-full border border-stone-300 bg-white text-stone-800 transition-[background-color,border-color,color,opacity] duration-300 hover:border-roufi-green hover:bg-roufi-green hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <div className="mb-6 hidden justify-end gap-2 sm:flex">
        <button type="button" onClick={() => scroll(-1)} disabled={!canPrev} className={buttonClass} aria-label="Previous services">
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scroll(1)} disabled={!canNext} className={buttonClass} aria-label="Next services">
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label={label}
        className={cn(
          "no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 pt-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-12 lg:scroll-px-12 lg:px-12",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roufi-green/40"
        )}
      >
        {children}
      </ul>
    </div>
  );
}
