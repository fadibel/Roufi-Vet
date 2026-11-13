"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Moves its content slightly slower than the page while the container scrolls
 * out of view. The inner layer is taller than the container, so no gap shows.
 * Intended for hero images at the top of a page.
 */
export function Parallax({ children, className, strength = 10 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${strength}%`]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className="absolute inset-x-0 bottom-0 -top-[12%] will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
