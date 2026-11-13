"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

// The first page load renders without an entrance fade, so content is visible
// before hydration. Later client-side navigations fade the new page in.
let hasNavigated = false;

export default function Template({ children }) {
  const animateIn = hasNavigated;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
