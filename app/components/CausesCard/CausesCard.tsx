'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { causes } from '../data/causeData';

export default function CausesSection() {
  return (
    <section className="px-4 py-12">
      {/* Hero / Intro */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Causes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto tracking-widest" style={{ fontFamily: "Poppins, sans-serif" }}>
          At VJC Foundation, we are committed to providing education, care, and support for orphan children to help them achieve their dreams.
        </p>
      </div>

      {/* Cause Cards */}
      <div className="grid gap-8 px-8 xl:px-28 md:grid-cols-2 lg:grid-cols-3">
        {causes.map((cause, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 w-full">
              <Image
                src={cause.image}
                alt={cause.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cause.title}</h3>
              <p className="text-gray-600 tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
                {cause.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
