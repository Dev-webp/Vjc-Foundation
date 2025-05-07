"use client";

import { motion } from "framer-motion";

export default function WhatIsHunger() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl lg:text-3xl lg:leading-12 font-bold mb-4 text-orange-600">
          What Is Hunger ?
        </h2>
        <p className=" text-black tracking-widest leading-7" style={{ fontFamily: "Poppins, sans-serif" }}>
          Hunger is more than just the feeling of an empty stomach — it’s the pain, fatigue, and helplessness that come from prolonged lack of nutritious food.
        </p>
        <p className=" text-black tracking-widest leading-7" style={{ fontFamily: "Poppins, sans-serif" }}>
          Around the world, over{" "}
          <span className="font-semibold text-orange-500" >343 million people</span> are suffering from acute food insecurity. At our foundation, we are committed to fighting this crisis by providing access to safe, nutritious food and creating sustainable solutions. Together, we believe in a world where no one has to go to bed hungry.
        </p>
      </motion.div>
    </section>
  );
}
