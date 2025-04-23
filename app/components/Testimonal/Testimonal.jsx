"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import "@fontsource/roboto";

const testimonials = [
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    title: "Marketing Manager",
    image: "/assets/testimonal1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
    name: "Anna Baker",
    title: "Product Designer",
    image: "/assets/testimonal2.jpg",
  },
  {
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lacinia.",
    name: "John Doe",
    title: "Developer",
    image: "/assets/testimonal3.jpg",
  },
  {
    text: "Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.",
    name: "Sarah Connor",
    title: "Project Manager",
    image: "/assets/testimonal4.jpg",
  },
  {
    text: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.",
    name: "Michael Smith",
    title: "UX Expert",
    image: "/assets/testimonal5.jpg",
  },
];

const FixedBackgroundComponent = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <div className="relative h-auto text-white z-10 font-['Roboto']">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center z-0 bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url(/assets/group.png)" }}
        ></div>
        <div className="absolute inset-0 bg-orange-500/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 lg:px-20 py-20">
        {/* Heading */}
        <div className="max-w-[600px] mb-12">
          <p
            className="uppercase font-semibold tracking-widest text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Testimonl
          </p>
          <h1 className="font-bold text-4xl mt-4">What People Says</h1>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          allowTouchMove={false}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true, // Enables clickable pagination dots
            type: 'bullets', // Ensures the dots are displayed
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mt-10 z-10 min-h-[290px] text-white shadow-xl px-6 pt-10 pb-10 relative h-full flex flex-col justify-between overflow-visible">
                {/* Quotation bubble */}
                <div className="absolute -top-6 left-8 z-50 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-[#d7902f] text-4xl font-bold leading-none">
                    “
                  </span>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 text-base mt-4 mb-6 leading-relaxed">
                  {t.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-18 h-18 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-orange-500">{t.name}</h4>
                    <p className="text-sm text-gray-600 opacity-80">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
      
    </div>
    
  );
};

export default FixedBackgroundComponent;
