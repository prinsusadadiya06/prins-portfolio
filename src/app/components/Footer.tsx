"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaGithub, link: "https://github.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaEnvelope, link: "mailto:prins@example.com" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        {/* About / Branding */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-indigo-500">Prins Usadadiya</h2>
          <p className="text-gray-400">
            MERN Stack Developer & Next.js Enthusiast. Crafting modern, responsive, and interactive web experiences.
          </p>

          <div className="flex gap-4 mt-2 text-xl">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href={social.link}
                  target="_blank"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">Quick Links</h3>
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact / Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">Get in Touch</h3>
          <p className="text-gray-400">
            Have a project in mind or just want to say hi? Send me a message!
          </p>
          <Link
            href="\contact"
            className="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Prins Usadadiya. All rights reserved.
      </div>
    </footer>
  );
}