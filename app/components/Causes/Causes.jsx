"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

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
    const next = (currentIndex + 1) % slides.length;
    setCurrentIndex(next);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  useEffect(() => {
    const updateSlideCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlideCount(3);
      } else if (width >= 768) {
        setSlideCount(2);
      } else {
        setSlideCount(1);
      }
    };

    updateSlideCount();
    window.addEventListener("resize", updateSlideCount);
    return () => window.removeEventListener("resize", updateSlideCount);
  }, []);

  const getVisibleSlides = () => {
    let visible = [];
    for (let i = 0; i < slideCount; i++) {
      const index = (currentIndex + i) % slides.length;
      visible.push(slides[index]);
    }
    return visible;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="flex flex-col bg-[#faf6f0] items-center py-12" ref={sectionRef}>
      <motion.div
        className="text-center mb-10"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
      >
        <p
          className="font-semibold text-orange-500 uppercase tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Our Causes
        </p>
        <h1 className="text-4xl mt-4 md:text-5xl xl:text-6xl font-bold font-[cursive] leading-snug">
          Our Causes & Help Us
        </h1>
      </motion.div>

      <div className="relative w-full max-w-7xl px-4">
        <div className={`grid grid-cols-1 ${slideCount === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6`}>
          {visibleSlides.map((slide) => {
            const percentage = Math.round((slide.raised / slide.goal) * 100);
            return (
              <AnimatePresence key={slide.id}>
                <motion.div
                  key={slide.id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-96 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{slide.category}</h2>
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">{slide.title}</h3>
                  <p className="text-gray-600 mb-6">{slide.desc}</p>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-sky-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="text-right mt-1 text-sm font-medium text-sky-500">
                      {percentage}%
                    </div>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm">
                    <div>
                      <span className="font-bold">Raised:</span> ${slide.raised.toLocaleString()}
                    </div>
                    <div>
                      <span className="font-bold">Goal:</span> ${slide.goal.toLocaleString()}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-6 h-2 bg-gray-300 rounded-full overflow-hidden relative"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-orange-500"
                initial={{ width: 0 }}
                animate={{
                  width: currentIndex === index ? "100%" : 0,
                }}
                transition={{
                  duration: currentIndex === index ? 4 : 0,
                  ease: "linear",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
