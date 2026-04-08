"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  imgSrc: string;
  demoLink: string;
  codeLink: string;
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  demoLink,
}: ProjectProps) {
  return (
    <motion.div
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden 
      bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-110 transition duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

        {/* Title on Image */}
        <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold z-10">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <p className="text-gray-300 text-sm flex-grow line-clamp-3">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex mt-5">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 text-center text-white font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}