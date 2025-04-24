"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans px-6 lg:px-20 xl:px-32 pt-16 pb-8">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/vjc-logo.png"
            alt="VJC Foundation Logo"
            width={160}
            height={60}
            className="mb-6"
          />
          <p className="text-gray-300 leading-relaxed">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts...
          </p>
          <div className="flex gap-3 mt-6">
            <button className="bg-orange-400 cursor-pointer p-2 rounded text-white hover:bg-orange-500 transition">
              <FaTwitter />
            </button>
            <button className="bg-orange-400 p-2 cursor-pointer rounded text-white hover:bg-orange-500 transition">
              <FaFacebookF />
            </button>
            <button className="bg-orange-400 p-2 cursor-pointer rounded text-white hover:bg-orange-500 transition">
              <FaInstagram />
            </button>
          </div>
        </motion.div>

        {/* Middle Column - Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-6">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <Image
                  src={`/assets/blog${i + 1}.jpg`}
                  alt="Post"
                  width={72}
                  height={72}
                  className="object-cover rounded"
                />
                <div>
                  <p className="flex items-center text-gray-400 text-sm gap-2">
                    <FaCalendarAlt /> Feb. 22, 2021 <FaUser /> Admin
                  </p>
                  <h4 className="text-white text-md mt-1">
                    Ecological System Responsible for Green Energy
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Have a Questions?</h3>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" /> 203 Fake St. Mountain View,
              San Francisco, California, USA
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt /> +2 392 3929 210
            </p>
            <p className="flex items-center gap-3">
              <FaPaperPlane /> info@yourdomain.com
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        Copyright ©2025 All rights reserved | This template is made with 💙 by
        Colorlib
      </div>
    </footer>
  );
};

export default Footer;
