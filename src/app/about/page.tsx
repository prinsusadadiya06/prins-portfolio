"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const skills = [
    { icon: <FaReact size={40} className="text-cyan-500" />, name: "React" },
    { icon: <FaNodeJs size={40} className="text-green-600" />, name: "Node.js" },
    { icon: <FaDatabase size={40} className="text-yellow-600" />, name: "MongoDB" },
    { icon: <FaJsSquare size={40} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
    { icon: <SiNextdotjs size={40} className="text-black" />, name: "Next.js" },
    { icon: <SiTypescript size={40} className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiTailwindcss size={40} className="text-teal-400" />, name: "Tailwind CSS" },
    { icon: <SiExpress size={40} className="text-gray-700" />, name: "Express.js" },
    { icon: <SiMongodb size={40} className="text-green-500" />, name: "MongoDB" },
  ];

  return (
    <>
      <Navbar />
      <div className="relative max-w-7xl mx-auto p-6 md:p-12">

        {/* Hero Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:mt-10 mt-12 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-shrink-0 relative w-48 h-48">
            <Image
              src="/profileimg.jpg"
              alt="Prins Profile"
              fill
              className="rounded-full shadow-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Hi! I’m <span className="font-semibold text-indigo-600">Prins Usadadiya</span>, a MERN Stack Developer and
              Next.js enthusiast. I build <span className="text-indigo-500 font-medium">interactive</span> and
              <span className="text-indigo-500 font-medium"> responsive web experiences</span> that companies love.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-indigo-600">My Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="absolute -inset-1  blur-xl opacity-20 animate-pulse rounded-xl"></div>
                {skill.icon}
                <span className="mt-2 font-semibold z-10 relative">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </>
  );
}