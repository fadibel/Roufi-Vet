"use client";

import { MotionConfig } from "framer-motion";

/** Disables transform animations for visitors who prefer reduced motion. */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
