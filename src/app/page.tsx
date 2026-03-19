"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import Footer from "./components/Footer";


export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A fully responsive Personal Portfolio built with React.js and Tailwind CSS.",
      imgSrc: "/portfolio.png",
      demoLink:
        "https://prinsusadadiya06.github.io/PrinsUsadadiya-Resume/",
      codeLink:
        "https://github.com/prinsusadadiya06/PrinsUsadadiya-Resume",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive E-commerce Website built with React.js and Tailwind CSS.",
      imgSrc: "/ecommerce.png",
      demoLink:
        "https://prinsusadadiya06.github.io/FlipcartClone-Website/",
      codeLink:
        "https://github.com/prinsusadadiya06/FlipcartClone-Website",
    },
    {
      title: "Food Portfolio",
      description:
        "A fully responsive Food Portfolio built with React.js and Tailwind CSS.",
      imgSrc: "/foodportfolio.png",
      demoLink:
        "https://prinsusadadiya06.github.io/FoodPortfolio/",
      codeLink:
        "https://github.com/prinsusadadiya06/FoodPortfolio",
    },
    {
      title: "Internet Research Studio",
      description:
        "A fully responsive Internet Research Studio Web built with HTML,CSS.",
      imgSrc: "/internet.png",
      demoLink:
        "https://prinsusadadiya06.github.io/InternetReserachStudio-Website/",
      codeLink:
        "https://github.com/prinsusadadiya06/InternetReserachStudio-Website",
    },
    {
      title: "Car Rent Website",
      description:
        "A fully responsive Car Rent Web built with HTML,CSS.",
      imgSrc: "/carrent.png",
      demoLink:
        "https://prinsusadadiya06.github.io/CarRent-Website/",
      codeLink:
        "https://github.com/prinsusadadiya06/CarRent-Website",
    },
    {
      title: "Ice Cream Website",
      description:
        "A fully responsive Ice Cream Web built with HTML,CSS and Javascript.",
      imgSrc: "/icecream.png",
      demoLink:
        "https://prinsusadadiya06.github.io/Icecream-Website/",
      codeLink:
        "https://github.com/prinsusadadiya06/Icecream-Website",
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