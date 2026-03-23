"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => setNavOpen(!navOpen);


  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaUser /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto  flex justify-between items-center p-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-gray-800">
          Prins Usadadiya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`text-gray-700 group-hover:text-black transition`}
                >
                  {link.label}
                </span>

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={toggleNav}>
          {navOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-5">

              <div className="grid grid-cols-3 gap-4 place-items-center">

                {links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={toggleNav}
                      className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 w-full ${isActive
                        ? "bg-indigo-500 text-white shadow-md scale-105"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      {/* Icon */}
                      <span className="text-xl">
                        {link.icon}
                      </span>

                      {/* Text */}
                      <span className="text-xs font-medium text-center">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}