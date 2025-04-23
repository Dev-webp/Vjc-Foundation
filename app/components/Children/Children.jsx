"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col  lg:px-20 xl:px-32 pt-10 lg:flex-row items-center justify-center bg-[#faf6f0]"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <img
          src="/assets/children.jpg"
          alt="Children"
          className="w-full h-full px-3 object-cover"
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full lg:w-1/2 p-5 lg:p-16 text-[#333]"
      >
        <p
          className="text-sm text-orange-500 pt-10 uppercase font-semibold mb-2 tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Welcome to VJC Foundation
        </p>
        <h1 className="text-4xl md:text-5xl pt-3 font-semibold mb-6 font-handwritten">
          Do You Care Our Children?
        </h1>
        <p
          className="text-gray-500 tracking-widest"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia...
        </p>
        <p
          className="text-gray-500 mt-6 tracking-widest"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia...
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative inline-block mt-6 px-6 py-3 font-semibold text-white bg-orange-500 rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-orange-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
          <span className="relative z-10">Be A Volunteer</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
