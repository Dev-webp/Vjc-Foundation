"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const SlideSection = () => {
  const slides = [
    {
      id: 1,
      category: "Education",
      title: "Give Food to Homeless Children",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      raised: 9800,
      goal: 15000,
      image: "/assets/school.jpg",
    },
    {
      id: 2,
      category: "Health",
      title: "Medical Care for Children",
      desc: "Another description about helping children with medical needs in distant places.",
      raised: 12500,
      goal: 20000,
      image: "/assets/medical.png",
    },
    {
      id: 3,
      category: "Shelter",
      title: "Build Homes for Families",
      desc: "Helping homeless families find shelter and rebuild their lives with dignity.",
      raised: 32000,
      goal: 50000,
      image: "/assets/shelter.png",
    },
    {
      id: 4,
      category: "Environment",
      title: "Clean Water for Rural Areas",
      desc: "Providing clean water solutions to communities in need.",
      raised: 8000,
      goal: 20000,
      image: "/assets/envi.png",
    },
    {
      id: 5,
      category: "Disaster Relief",
      title: "Help Earthquake Victims",
      desc: "Providing emergency supplies to victims of natural disasters.",
      raised: 15000,
      goal: 30000,
      image: "/assets/disaster.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(1);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start(entry.isIntersecting
          ? { opacity: 1, y: 0, transition: { duration: 1 } }
          : { opacity: 0, y: 50 });
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  useEffect(() => {
    const updateSlideCount = () => {
      const width = window.innerWidth;
      setSlideCount(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
    };

    updateSlideCount();
    window.addEventListener("resize", updateSlideCount, { passive: true });
    return () => window.removeEventListener("resize", updateSlideCount);
  }, []);

  const visibleSlides = useMemo(() => {
    return Array.from({ length: slideCount }, (_, i) => slides[(currentIndex + i) % slides.length]);
  }, [currentIndex, slideCount, slides]);

  return (
    <div ref={sectionRef} className="flex flex-col bg-[#faf6f0] items-center py-12">
      <motion.div
        className="text-center mb-10"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
      >
        <p className="font-semibold text-orange-500 uppercase tracking-widest" style={{ fontFamily: "Poppins, sans-serif" }}>
          Our Causes
        </p>
        <h1 className="text-4xl mt-4 md:text-5xl xl:text-6xl font-bold font-[cursive] leading-snug">
          Our Causes & Help Us
        </h1>
      </motion.div>

      <div className="relative w-full max-w-7xl px-4">
        <div className={`grid grid-cols-1 ${slideCount === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6`}>
          {visibleSlides.map((slide, index) => {
            const percentage = Math.round((slide.raised / slide.goal) * 100);
            return (
              <motion.div
                key={slide.id}
                className="group bg-white pt-6 rounded-lg shadow-lg"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="relative w-full h-96 px-6 mb-4">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="rounded-lg object-cover"
                    priority={index === 0}
                  />
                </div>
                <h2 className="text-2xl font-bold px-6 text-gray-800 mb-2">{slide.category}</h2>
                <h3 className="text-xl font-semibold px-6 text-orange-600 mb-4">{slide.title}</h3>
                <p className="text-gray-600 mb-6 px-6">{slide.desc}</p>

                <div className="group-hover:bg-orange-400 px-2 w-full mt-4">
                  <div className="p-4">
                    <div className="mb-2">
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-sky-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="text-right mt-1 text-sm font-medium text-sky-500">{percentage}%</div>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm">
                      <div>
                        <span className="font-bold">Raised:</span> ${slide.raised.toLocaleString()}
                      </div>
                      <div>
                        <span className="font-bold">Goal:</span> ${slide.goal.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-6 h-2 bg-gray-300 rounded-full overflow-hidden relative"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-orange-500"
                initial={{ width: 0 }}
                animate={{ width: currentIndex === index ? "100%" : 0 }}
                transition={{ duration: currentIndex === index ? 4 : 0, ease: "linear" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
