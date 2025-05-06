'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { causes } from '../data/causeData';

export default function CausesSection() {
  return (
    <section className="px-4 py-32 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Causes</h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto tracking-widest"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          At VJC Foundation, we are committed to providing education, care, and support for orphan children to help them achieve their dreams.
        </p>
      </div>

      {/* Modern Card Grid */}
      <div className="grid gap-32 px-8 xl:px-26 md:grid-cols-2 lg:grid-cols-3">
        {causes.map((cause, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-visible group transition-all duration-300 hover:shadow-2xl"

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <div className="relative h-96 w-86">
              <Image
                src={cause.image}
                alt={cause.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110  rounded-md"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute -bottom-10 -right-10 lg:-right-20 lg:-bottom-14 w-80 h-56 bg-[#505868]/90 p-6 text-white shadow-xl z-10">

              <span className="inline-block bg-black text-xs px-3 py-1 rounded-full mb-3">
                Case study
              </span>
              <h3 className="text-lg font-semibold leading-snug line-clamp-2 mb-2">
                {cause.title}
              </h3>
             
              <p className="text-gray-200 tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
                {cause.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
