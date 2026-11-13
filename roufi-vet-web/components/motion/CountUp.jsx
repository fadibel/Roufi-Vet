"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts from 0 to `to` the first time it scrolls into view.
 * The server renders the final number, so the value is correct without JS.
 */
export function CountUp({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  // Reset to 0 after hydration, but only if the number is still off-screen.
  useEffect(() => {
    if (reduceMotion || inView) return;
    setValue(0);
    setArmed(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [armed, inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
