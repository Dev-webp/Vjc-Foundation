"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const pathname = usePathname();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarActive(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Causes", path: "/causes" },
    { name: "Blog", path: "/blog" },
  ];

  const routeBackgrounds = {
    "/": "/assets/home.jpg",
    "/about": "/assets/hey.png",
    "/causes": "/assets/w.png",
    "/blog": "/assets/b.png",
    "/joinus": "/assets/join.png",
  };

  const routeContent = {
    "/": {
      title: "Raising Hope",
      desc: "To the Homeless & Hopeless People",
      buttonText: "Join Us →",
      buttonLink: "/joinus",
    },
    "/about": {
      title: "About VJC",
      desc: "Uplifting Lives, Empowering Futures.",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    "/causes": {
      title: "Our Causes",
      desc: "Join us in creating a positive impact across the globe.",
      buttonText: "Support Now",
      buttonLink: "/causes",
    },
    "/blog": {
      title: "Latest Blog",
      desc: "Stay updated with trends, tips, and inspiring stories.",
      buttonText: "Read Blog",
      buttonLink: "/blog",
    },
    "/joinus": {
      title: "Join the Movement",
      desc: "Be a part of something meaningful. Start today.",
      buttonText: "Sign Up",
      buttonLink: "/joinus",
    },
  };

  const currentBgImage = routeBackgrounds[pathname];
  const currentContent = routeContent[pathname];

  return (
    <div className="relative w-full tracking-wider font-comic leading-loose">
      {currentBgImage && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-screen"
        >
          <div className="absolute top-0 left-0 w-full h-20 z-10" />

          <Image
            src={currentBgImage}
            alt="Page Background"
            fill
            priority
            quality={90}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/30 z-10 h-full w-full" />

          {currentContent && (
            <div className="absolute inset-0 z-20  flex flex-col md:flex-row items-center justify-center px-10 text-white gap-10">
              {/* Hero Content */}
              <div
                className={`flex flex-col ${
                  pathname === "/"
                    ? "items-start lg:w-[50%] pl-0 lg:-ml-126"
                    : "items-center text-center px-6 md:px-32"
                }`}
              >
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="mt-4 text-orange-500 font-comic font-semibold text-lg md:text-xl leading-loose max-w-2xl drop-shadow-md"
                >
                  {currentContent.title}
                </motion.p>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-white text-4xl leading-normal md:text-6xl font-bold drop-shadow-lg"
                >
                  {currentContent.desc}
                </motion.h1>
                <motion.a
                  href={currentContent.buttonLink}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-6 rounded-full shadow-lg transition"
                >
                  {currentContent.buttonText}
                </motion.a>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`px-6 md:px-16 lg:px-32 fixed z-40 top-0 left-0 w-full flex items-center py-4 text-white uppercase transition-all duration-500 ${
          isPageLoaded && (isNavbarActive || isMenuOpen)
            ? "bg-gray-900"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-12 w-24"
          >
            <Image
              src="/assets/vjc-logo.png"
              alt="Logo"
              fill
              sizes="96px"
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        <div className="hidden lg:flex items-center justify-center flex-1 space-x-20 font-bold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-orange-600 transition-all duration-300 ${
                pathname === link.path
                  ? "text-orange-600 font-extrabold underline pointer-events-none"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-4">
          {/* Desktop Button */}
          <Link
            href="/joinus"
            className="hidden lg:inline-block px-6 py-2.5 text-sm bg-orange-500 text-white font-semibold rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-orange-400/50 hover:shadow-lg"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-110">
              Join Us!
            </span>
          </Link>

          {/* Mobile Button */}
          <Link
            href="/joinus"
            className="lg:hidden inline-block px-4.5 py-2 text-xs bg-orange-500 text-white font-semibold rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-orange-400/50 hover:shadow-lg"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-110">
              Join Us!
            </span>
          </Link>

          <motion.button
            className="block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ scale: 1 }}
            animate={{
              scale: isMenuOpen ? 1.1 : 1,
              rotate: isMenuOpen ? 180 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-gray-900 bg-opacity-95 flex flex-col text-center p-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-3 text-lg font-semibold transition-all duration-300 ${
                  pathname === link.path
                    ? "text-orange-600 font-extrabold underline pointer-events-none"
                    : "text-white hover:text-orange-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
