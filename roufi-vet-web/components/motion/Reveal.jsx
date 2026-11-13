"use client";

import { motion } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1];

// Trigger once the element's top passes ~88% of the viewport height.
// Using a margin rather than an `amount` keeps very tall elements working.
const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" };

function getMotionTag(as) {
  return motion[as] ?? motion.div;
}

/** Fades and lifts its children into view on scroll. */
export function Reveal({ as = "div", children, className, delay = 0, y = 28, duration = 0.9, ...rest }) {
  const Tag = getMotionTag(as);
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE_OUT, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent for staggered reveals. Children should be <StaggerItem>. */
export function Stagger({ as = "div", children, className, stagger = 0.09, delay = 0, ...rest }) {
  const Tag = getMotionTag(as);
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", children, className, y = 28, ...rest }) {
  const Tag = getMotionTag(as);
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
