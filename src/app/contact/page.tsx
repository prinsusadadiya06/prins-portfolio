"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen md:pt-16 pt-16 flex items-center justify-center px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">

        {/* Background floating blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-pink-500/20 rounded-full top-[-50px] left-[-50px] filter blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-yellow-400/20 rounded-full bottom-[-100px] right-[-100px] filter blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
        />

        {/* Form Card */}
        <motion.div
          className="relative z-10 w-full max-w-3xl p-10 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
            Contact Me
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="peer w-full p-4 rounded-xl outline-none bg-white/50 border border-white/30 placeholder-transparent focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              />
              <label className={`absolute left-4 text-white text-sm transition-all
              ${name ? "-top-2 text-pink-400 text-sm" : "top-4 text-gray-200 text-base"}`}>
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="peer w-full p-4 rounded-xl outline-none bg-white/50 border border-white/30 placeholder-transparent focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              />
              <label className={`absolute left-4 text-white text-sm transition-all
              ${email ? "-top-2 text-pink-400 text-sm" : "top-4 text-gray-200 text-base"}`}>
                Your Email
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
                className="peer w-full p-4 rounded-xl outline-none bg-white/50 border border-white/30 placeholder-transparent focus:ring-2 focus:ring-pink-400 focus:border-pink-400 h-32 resize-none transition"
              />
              <label className={`absolute left-4 text-white text-sm transition-all
              ${message ? "-top-2 text-pink-400 text-sm" : "top-4 text-gray-200 text-base"}`}>
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 192, 203, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 py-4 px-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}