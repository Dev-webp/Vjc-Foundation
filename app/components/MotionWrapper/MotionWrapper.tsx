"use client";

import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const MotionWrapper = ({ children, className, ...rest }: MotionWrapperProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
