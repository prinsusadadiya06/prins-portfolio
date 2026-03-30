"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    lname: "",
    email: "",
    sub: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, lname, email, sub, message } = form;

    if (!name || !lname || !email || !sub || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.send(
        "service_57cqghn",
        "template_ojvzmnk",
        form,
        "r8GFG6CFhuqB1pYgn"
      );

      toast.success("Message sent successfully", {
        id: loadingToast,
      });

      setForm({
        name: "",
        lname: "",
        email: "",
        sub: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send", {
        id: loadingToast,
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen md:pt-16 pt-16 flex items-center justify-center px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">

        {/* Background blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-pink-500/20 rounded-full top-[-50px] left-[-50px] blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-yellow-400/20 rounded-full bottom-[-100px] right-[-100px] blur-3xl"
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-white">
            Contact Me
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* First + Last Name */}
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={form.name}
                onChange={handleChange}
                className="w-1/2 p-4 rounded-xl bg-white/70 text-black placeholder-gray-600 outline-none border border-gray-300"
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={form.lname}
                onChange={handleChange}
                className="w-1/2 p-4 rounded-xl bg-white/70 text-black placeholder-gray-600 outline-none border border-gray-300"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/70 text-black placeholder-gray-600 outline-none border border-gray-300"
            />

            {/* Subject */}
            <input
              type="text"
              name="sub"
              placeholder="Subject"
              value={form.sub}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/70 text-black placeholder-gray-600 outline-none border border-gray-300"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/70 text-black placeholder-gray-600 outline-none border border-gray-300 h-32 resize-none"
            />

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </>
  );
}