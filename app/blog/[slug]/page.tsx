"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../../components/BlogData/BlogData";
import BlogContent from "@/app/components/BlogContent/BlogContent";
import Blogboy from "../../components/Blogboy/Blogboy";

const BlogDetail = () => {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600">Sorry, the blog youre looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      {/* === Image with overlay === */}
      <div className="relative w-full md:h-svh">
        <Image
          src={post.imageUrl || "/assets/default-image.jpg"}
          alt={post.title}
          width={1920}
          height={1080}
          className="w-full md:h-svh object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* === Blog content === */}
      <div className="relative z-10">
        <BlogContent slug={slug || ""} />
        <Blogboy />
      </div>
    </div>
  );
};

export default BlogDetail;
