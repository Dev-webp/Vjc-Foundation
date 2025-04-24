"use client";

import React, { useRef } from "react";
import { FaRegCheckCircle, FaHandsHelping } from "react-icons/fa";
import { GiMoneyStack, GiHand } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import "@fontsource/roboto";

const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FixedBackgroundComponent = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { icon: <GiMoneyStack size={40} />, number: "$60M", label: "FUND RAISED" },
    {
      icon: <FaRegCheckCircle size={40} />,
      number: "9,200",
      label: "COMPLETED PROJECTS",
    },
    { icon: <GiHand size={40} />, number: "5,800", label: "DONATION" },
    { icon: <FaHandsHelping size={40} />, number: "2,750", label: "VOLUNTEER" },
  ];
  const textRef = useRef(null);
  const headingRef = useRef(null);
  return (
    <div
      className="relative h-screen lg:p-10 2xl:p-32 text-white font-['Roboto']"
      style={{
        backgroundImage: "url(/assets/save.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-orange-500/50 z-10"></div>

      {/* Content over image */}
      <div className="relative z-20 h-full flex flex-col justify-center px-10">
        <div className="max-w-[500px]">
          <motion.p
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white uppercase tracking-widest text-sm mt-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Great Reviews for our services
          </motion.p>
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-bold mt-4 text-4xl"
          >
            Technical Statistics
          </motion.h1>
        </div>

        {/* Stats Boxes */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-[1200px]"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={boxVariants}
              className="bg-white/10 p-8 lg:p-10 rounded-2xl text-center backdrop-blur-md text-white shadow-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                {item.number}
              </h2>
              <p className="uppercase tracking-wider text-sm lg:text-base font-semibold">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FixedBackgroundComponent;
