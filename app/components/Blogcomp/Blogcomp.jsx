"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const posts = [
  {
    image: "/assets/blog1.jpg",
    title: "Give Hope to the People Need Most",
    date: "Feb. 22, 2021",
    comments: 3,
    author: "Admin",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    image: "/assets/blog2.jpg",
    title: "Give Hope to the People Need Most",
    date: "Feb. 22, 2021",
    comments: 3,
    author: "Admin",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    image: "/assets/blog3.jpg",
    title: "Give Hope to the People Need Most",
    date: "Feb. 22, 2021",
    comments: 3,
    author: "Admin",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const PostCards = () => {
  return (
    <section className="bg-[#f9f6f2] px-6 py-12 lg:px-24">
      <p
        className="text-sm text-orange-500 text-center pt-10 uppercase font-semibold mb-2 tracking-widest"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Our Blog
      </p>
      <h1 className="text-4xl text-center md:text-5xl pt-3 font-semibold mb-6 font-handwritten">
        Recent From Blog
      </h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {posts.map((post, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="px-6 pb-6 pt-4">
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🧑</span> {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">📅</span> {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">💬</span>{" "}
                    {post.comments} Comments
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-[#111] font-handwritten">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">{post.description}</p>

                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PostCards;
