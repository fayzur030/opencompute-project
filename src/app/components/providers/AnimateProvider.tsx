"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { LazyMotion, domAnimation } from "framer-motion";

export default function AnimateProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Lenis Smooth Scroll Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth cubic easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}