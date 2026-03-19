"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const socials = [
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaGithub, link: "https://github.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
  ];

  return (
    <section className="h-screen flex flex-col md:flex-row items-center md:top-0 top-13 justify-center px-6 md:px-12 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">

      {/* Profile Image */}
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-48 h-48 md:w-72 md:h-72 rounded-full md:top-0 top-10 overflow-hidden shadow-2xl mb-6 md:mb-0 md:mr-12 flex-shrink-0"
      >
        <Image
          src="/profileimg.jpg"
          alt="Prins Profile"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 max-w-xl md:pt-0 pt-10 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
          Hey, I'm Prins
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
          MERN Stack Developer & Next.js Enthusiast.<br className="hidden md:block" />
          Crafting modern, responsive, and interactive web experiences using React, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start text-2xl">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                whileHover={{ scale: 1.3, y: -5 }}
                className="hover:text-yellow-300 transition duration-300"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-8 text-white text-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>
    </section>
  );
}