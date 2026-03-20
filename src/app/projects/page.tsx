"use client";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
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
      <div className="max-w-7xl mx-auto p-4 md:p-12">
        <motion.h1
          className="text-3xl md:text-4xl font-bold md:mt-10 mt-15 mb-4 text-center text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}