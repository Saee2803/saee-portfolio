"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring for the outer ring (trails the dot)
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const onOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [handleMouseMove]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot – follows cursor instantly */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full
                   bg-primary-500 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          opacity: 1,
        }}
        initial={{ width: 8, height: 8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Outer ring – trails with spring physics */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full
                   border-2 border-primary-400/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          borderColor: isHovering
            ? "rgba(99, 102, 241, 0.9)"
            : "rgba(129, 140, 248, 0.5)",
          boxShadow: isHovering
            ? "0 0 20px 4px rgba(99, 102, 241, 0.3)"
            : "0 0 0px 0px rgba(99, 102, 241, 0)",
        }}
        initial={{ width: 36, height: 36, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      />
    </>
  );
}
