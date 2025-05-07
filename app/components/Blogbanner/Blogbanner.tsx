"use client";

import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CallToAction() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/joinus"); // Adjust this route as needed
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-50 py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.5] font-bold text-center">
        <span className="bg-gradient-to-r from-orange-500 to-gray-800 bg-clip-text text-transparent">
          Ready to make a real difference? Join us in actively supporting those in need.
        </span>
      </h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block"
      >
        <button
          onClick={handleClick}
          className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg text-lg flex items-center gap-2"
        >
          DONATE NOW <FaHeart className="text-white" />
        </button>
      </motion.div>
    </div>
  );
}
