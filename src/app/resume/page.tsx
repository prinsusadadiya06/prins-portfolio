"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ResumePage() {
    const skillGroups = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML", level: 95 },
                { name: "CSS", level: 95 },
                { name: "JavaScript", level: 80 },
                { name: "TypeScript", level: 95 },
                { name: "React", level: 95 },
                { name: "Next.js", level: 92 },
                { name: "Tailwind CSS", level: 95 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 70 },
                { name: "Express.js", level: 68 },
            ],
        },
        {
            title: "Database",
            skills: [{ name: "MongoDB", level: 70 }],
        },
    ];

    return (
        <>
            <Navbar />

            <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] text-white px-4 md:px-10 py-16">

                {/* Glow */}
                <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-cyan-400/30 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-400/30 blur-[150px] rounded-full" />

                <div className="relative z-10">

                    {/* Heading */}
                    <motion.h1
                        className="text-3xl md:text-4xl mt-10 font-bold text-center mb-12 bg-gradient-to-r from-white to-slate-200 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        My Resume
                    </motion.h1>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mb-12">

                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.08, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.2 }}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                        >
                            View Resume
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.08, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.3 }}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 shadow-lg"
                        >
                            Download
                        </motion.a>

                    </div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

                        {/* LEFT */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition duration-300"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                        >

                            {/* Profile */}
                            <div className="text-center">
                                <img
                                    src="/profileimg.jpg"
                                    alt="profile"
                                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-white/40"
                                />
                                <h2 className="text-xl font-semibold">Prins Usadadiya</h2>
                                <p className="text-gray-200 text-sm">MERN Stack Developer</p>

                                <p className="text-gray-200 text-sm mt-2">
                                    Passionate MERN Stack Developer building modern, scalable web applications.
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="mt-6 space-y-6">
                                {skillGroups.map((group, index) => (
                                    <div key={index}>
                                        <h3 className="text-sm font-semibold text-white/80 mb-3">
                                            {group.title}
                                        </h3>

                                        {group.skills.map((skill, i) => (
                                            <div key={i} className="mb-3">
                                                <div className="flex justify-between text-sm">
                                                    <span>{skill.name}</span>
                                                    <span className="text-gray-200">
                                                        {skill.level}%
                                                    </span>
                                                </div>

                                                <div className="w-full h-2 bg-white/20 rounded-full mt-1 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1 }}
                                                        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-400"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Download */}
                            <a
                                href="/resume.pdf"
                                download
                                className="block mt-6 text-center py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition shadow-lg"
                            >
                                Download Resume
                            </a>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            className="lg:col-span-2 space-y-8"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                        >

                            {/* Experience */}
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition duration-300">
                                <h3 className="text-xl font-semibold mb-4">Experience</h3>

                                <div className="border-l-2 border-white/40 pl-4 space-y-6">
                                    <div>
                                        <h4 className="font-semibold">MERN Stack Developer</h4>
                                        <p className="text-sm text-gray-200">
                                            lembits Technolab Pvt. Ltd. • 2025 – Present
                                        </p>

                                        <ul className="text-gray-100 text-sm list-disc pl-5 space-y-1 mt-2">
                                            <li>Developing full-stack applications using MongoDB, Express.js, React, and Node.js</li>
                                            <li>Building responsive UI with Next.js and Tailwind CSS</li>
                                            <li>Designing and integrating REST APIs</li>
                                            <li>Improving performance and user experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition duration-300">
                                <h3 className="text-xl font-semibold mb-4">Education</h3>

                                <div className="space-y-6">

                                    {/* BSc */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            B.Sc in Information Technology <span className="text-sm">(Completed)</span>
                                        </h4>

                                        <ul className="mt-2 space-y-1 text-sm text-gray-200 list-disc pl-5">
                                            <li>Shastri Swami Shri Dharmajivandasji IT College, Junagadh</li>
                                            <li>Bhakta Kavi Narsinh Mehta University</li>
                                        </ul>

                                        <p className="text-gray-100 text-sm mt-2">
                                            Focused on web development, database management, and software engineering fundamentals.
                                        </p>
                                    </div>

                                    {/* MCA */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            Master of Computer Applications (MCA) <span className="text-sm">(Running)</span>
                                        </h4>

                                        <ul className="mt-2 space-y-1 text-sm text-gray-200 list-disc pl-5">
                                            <li>Kalol Institute of Technology & Research Center</li>
                                            <li>Gujarat Technological University (GTU)</li>
                                        </ul>

                                        <p className="text-gray-100 text-sm mt-2">
                                            Currently pursuing MCA with specialization in full-stack development, focusing on modern technologies like React, Next.js, and Node.js.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Resume Preview */}
                            {/* <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">
                                <iframe src="/resume.pdf" className="w-full h-[500px]" />
                            </div> */}

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}