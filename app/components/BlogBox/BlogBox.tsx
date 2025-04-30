"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../BlogData/BlogData";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const blogSectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    blogSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={blogSectionRef} className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Latest Blogs</h2>
        <p className="text-gray-600 max-w-xl mx-auto tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Stay updated with our latest articles, insights, and news.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {selectedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <span className="text-orange-500 font-medium hover:underline cursor-pointer">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center border ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            } hover:bg-orange-400 hover:text-white transition`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
