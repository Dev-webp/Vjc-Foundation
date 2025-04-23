"use client";
import { motion } from "framer-motion";

import React, { useRef } from "react";
import { FaRegCheckCircle, FaHandsHelping } from "react-icons/fa";
import { GiMoneyStack, GiHand } from "react-icons/gi"; // Updated to use GiHand
import { useInView } from "framer-motion";
import "@fontsource/roboto";

const FixedBackgroundComponent = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <>
      {/* Background Section */}
      <div
  className="relative h-[500px] lg:p-10 2xl:px-32 text-white font-['Roboto']"
  style={{
    backgroundImage: "url(/assets/chari.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center 0%", // Moves background down
    backgroundAttachment: "fixed",
  }}
>
        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content over image */}
        <div className="relative z-20 h-full flex flex-col justify-center px-10">
          {/* Left aligned content */}
          <div className=" text-center">
            <p
              className="text-white uppercase tracking-widest font-semibold mt-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              VJC Foundation
            </p>
            <h1 className="font-bold mt-4 text-4xl">
              The Smallest Act of Kindness is Worth More Than the Grandest
              Intention
            </h1>
            <motion.button
              className="mt-6 tracking-widest py-2 px-6 bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:bg-orange-700 hover:scale-105 hover:shadow-xl focus:outline-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                alert("Thank you for wanting to become a volunteer!")
              }
            >
              Become a Volunteer
            </motion.button>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default FixedBackgroundComponent;
