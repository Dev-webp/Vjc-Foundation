"use client";
import React from "react";

const Blogboy = () => {
  return (
    <div className="px-4 py-8 flex flex-col md:flex-row lg:px-32 xl:px-48 items-center justify-between gap-6">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 text-left">
      <h2 className="text-2xl lg:text-3xl lg:leading-12 font-bold mb-4 text-orange-600">
  Empowering Underprivileged and Orphaned Children Through Education
</h2>
<p className=" text-black tracking-widest leading-7" style={{ fontFamily: "Poppins, sans-serif" }}>
  At VJC Foundation, we are committed to uplifting children living in poverty and orphanages by providing them with access to quality education, food, and emotional support. Our mission is to create a brighter future where every child has the opportunity to learn, grow, and thrive.
</p>

      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
  <img
    src="/assets/boybg6.png"
    alt="Blog Banner"
    className="w-[300px] h-auto object-cover rounded-lg"
  />
</div>

    </div>
  );
};

export default Blogboy;
