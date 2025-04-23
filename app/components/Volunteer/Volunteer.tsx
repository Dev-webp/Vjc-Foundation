"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

interface VolunteerCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ name, title, image, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl mt-10 lg:mt-auto shadow-md text-center p-6 w-full max-w-xs hover:shadow-2xl hover:bg-orange-200 transition-all duration-300"
      initial={{ opacity: 0, rotateY: -180 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }} // This ensures the animation triggers only once
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
    >
      <div className="flex justify-center -mt-20">
        <div className="w-48 h-48 relative rounded-full border-4 border-white shadow-md overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-orange-500 font-semibold mb-4">{title}</p>
      <div className="flex justify-center gap-4 text-white text-lg mb-4">
        <div className="bg-yellow-500 p-2 rounded-full hover:scale-110 transition">
          <FaTwitter />
        </div>
        <div className="bg-yellow-500 p-2 rounded-full hover:scale-110 transition">
          <FaFacebookF />
        </div>
        <div className="bg-yellow-500 p-2 rounded-full hover:scale-110 transition">
          <FaGoogle />
        </div>
        <div className="bg-yellow-500 p-2 rounded-full hover:scale-110 transition">
          <FaInstagram />
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

const Volunteers: React.FC = () => {
  const controls = useAnimation();

  const volunteers = [
    {
      name: "Jason Smith",
      title: "Volunteer",
      image: "/volunteers/vol2.png",
      description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
    {
      name: "Anne Hayes",
      title: "Volunteer",
      image: "/volunteers/vol1.png",
      description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
    {
      name: "Martha Smith",
      title: "Volunteer",
      image: "/volunteers/vol3.png",
      description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
    {
      name: "Mike Tyson",
      title: "Volunteer",
      image: "/volunteers/vol4.png",
      description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    },
  ];

  return (
    <section className="bg-[#f6f3ed] py-16 px-4">
      <motion.div
        className="text-center mt-10"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="font-semibold text-orange-500 uppercase tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Meet Our Volunteer
        </p>
        <h1 className="text-4xl mt-4 md:text-5xl xl:text-6xl font-bold font-[cursive] leading-snug">
          Our Volunteer
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto flex justify-center mt-6 sm:mt-8 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-4 gap-20 lg:gap-8 justify-center">
          {volunteers.map((vol, i) => (
            <VolunteerCard key={i} {...vol} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
