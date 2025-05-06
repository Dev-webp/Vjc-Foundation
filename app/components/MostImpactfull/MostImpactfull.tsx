import React from 'react';
import Image from 'next/image';

const AwardSection = () => {
  return (
    <section className="flex flex-col bg-[#faf6f0] py-20   lg:flex-row w-full">
      {/* Left side content */}
      <div className="flex flex-col justify-center px-4 py-20 lg:px-16 xl:px-32 bg-[#faf6f0] p-10 lg:w-1/2">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wider  text-orange-600 leading-tight" >
            MOST IMPACTFUL NGO OF THE YEAR <br /> FOR MISSION EDUCATION PROGRAMME
          </h2>
          <p className="text-gray-700 mt-6 tracking-widest  leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            This award celebrates the tireless efforts of our team, supporters, and community 
            in making quality education accessible to underprivileged children across India 
            through our flagship programme Mission Education.
          </p>
         
        </div>
      </div>

      {/* Right side image */}
      <div className="lg:w-1/2 w-full h-[400px] lg:h-auto relative">
        <Image
          src="/assets/mostimpactfull.png" 
          alt="Award Ceremony"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AwardSection;
