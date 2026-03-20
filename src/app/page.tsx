"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import Footer from "./components/Footer";


export default function Home() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A fully responsive personal portfolio built with Next.js and Tailwind CSS.",
      imgSrc: "/portfolio.png",
      demoLink: "https://prinsusadadiya-resume.vercel.app/",
      codeLink: "https://github.com/prinsusadadiya06/PrinsUsadadiya-Resume",
    },
    {
      title: "Ice Cream Website",
      description: "Ice cream shop website built with Next.js and Tailwind CSS.",
      imgSrc: "/icecream.png",
      demoLink: "https://icecream-website-nu.vercel.app/",
      codeLink: "https://github.com/prinsusadadiya06/Icecream-Website",
    },
    {
      title: "Food Portfolio",
      description: "Full-stack blog platform built with Reac.js and Tailwind CSS.",
      imgSrc: "/foodportfolio.png",
      demoLink: "https://food-portfolio-mauve.vercel.app/",
      codeLink: "https://github.com/prinsusadadiya06/FoodPortfolio",
    },
    {
      title: "Car Rent Website",
      description: "Car rental platform built with Next.js and MongoDB.",
      imgSrc: "/carrent.png",
      demoLink: "https://carrent-website-two.vercel.app/",
      codeLink: "https://github.com/prinsusadadiya06/CarRent-Website",
    },
    {
      title: "E-commerce Website",
      description: "MERN stack e-commerce app with JWT authentication.",
      imgSrc: "/ecommerce.png",
      demoLink: "https://flipcart-clone-website.vercel.app/",
      codeLink: "https://github.com/prinsusadadiya06/FlipcartClone-Website",
    },

    {
      title: "Internet Research Studio",
      description: "Full-stack website built with Next.js and Tailwind CSS.",
      imgSrc: "/internet.png",
      demoLink: "https://internetresearchstudio-website.vercel.app/",
      codeLink: "https://github.com/prinsusadadiya06/InternetReserachStudio-Website",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto md:px-6 px-2 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}