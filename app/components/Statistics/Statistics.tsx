"use client";

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
          {/* Left aligned content */}
          <div className="max-w-[500px]">
            <p
              className="text-white uppercase tracking-widest text-sm mt-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Great Reviews for our services
            </p>
            <h1 className="font-bold mt-4 text-4xl">Technical Statistics</h1>
          </div>

          {/* Stats Boxes */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2  md:grid-cols-4 gap-6 mt-12 max-w-[1200px] transition-all duration-700 ease-out ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {[ 
              { icon: <GiMoneyStack size={40} />, number: "$60M", label: "FUND RAISED" },
              { icon: <FaRegCheckCircle size={40} />, number: "9,200", label: "COMPLETED PROJECTS" },
              { icon: <GiHand size={40} />, number: "5,800", label: "DONATION" },  // Updated icon for Donation
              { icon: <FaHandsHelping size={40} />, number: "2,750", label: "VOLUNTEER" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-8 lg:p-10 rounded-2xl text-center backdrop-blur-md text-white shadow-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">{item.number}</h2>
                <p className="uppercase tracking-wider text-sm lg:text-base font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedBackgroundComponent;
