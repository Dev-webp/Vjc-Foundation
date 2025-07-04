"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface RouteContent {
  title: string;
  desc: string;
  buttonText: string;
  buttonLink: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsNavbarActive(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Causes", path: "/causes" },
    { name: "Blog", path: "/blog" },
  ];

  const routeBackgrounds: { [key: string]: string } = {
    "/": "/assets/home.jpg",
    "/about": "/assets/abo.png",
    "/causes": "/assets/w.png",
    "/blog": "/assets/hey.png",
    "/joinus": "/assets/dona.png",
  };

  const routeContent: { [key: string]: RouteContent } = {
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
    <motion.div
      key={pathname}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full tracking-wider font-comic leading-loose"
    >
      {currentBgImage && (
        <motion.div
          key={`${pathname}-bg`}
          initial={{ y: 100, opacity: 0 }}
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
            <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center px-10 text-white gap-10">
              <div
                className={`flex flex-col ${
                  pathname === "/"
                    ? "items-start lg:w-[50%] pl-0 lg:-ml-126"
                    : "items-center text-center px-6 md:px-32"
                }`}
              >
                <p
                  
                  className="mt-4 text-orange-500 font-comic font-semibold text-lg md:text-xl leading-loose max-w-2xl drop-shadow-md"
                >
                  {currentContent.title}
                </p>

                <h1 className="text-white text-4xl leading-normal md:text-6xl font-bold drop-shadow-md">
                  {currentContent.desc}
                </h1>
                <motion.a
                  href={currentContent.buttonLink}
                  key={`${pathname}-btn`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                  className="relative inline-block mt-6 font-semibold text-white bg-orange-500 rounded-full overflow-hidden shadow-lg group"
                >
                  <span className="absolute inset-0 w-full h-full bg-orange-600 transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 z-0" />
                  <span className="relative z-10 px-6 py-1 inline-block transition duration-200 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                    {currentContent.buttonText}
                  </span>
                </motion.a>
              </div>
            </div>
          )}
        </motion.div>
      )}

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
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative hidden lg:inline-block mt-2"
          >
            <Link
              href="/joinus"
              className="relative inline-block px-6 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-orange-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
              <span className="relative z-10">Join Us!</span>
            </Link>
          </motion.div>

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
    </motion.div>
  );
}
