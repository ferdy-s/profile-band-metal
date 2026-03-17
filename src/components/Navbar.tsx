"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
import { band } from "@/isi_data/band";

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Members", id: "members" },
  { name: "Discography", id: "discography" },
  { name: "Tour", id: "tour" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => document.getElementById(l.id));
      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/70 border-b border-red-900/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => scrollTo("hero")}
            className="cursor-pointer relative group"
          >
            <h1 className="text-lg md:text-xl font-black tracking-[4px] uppercase relative">
              {band.name}
            </h1>

            {/* GLITCH EFFECT */}
            <span className="absolute left-0 top-0 text-red-600 opacity-0 group-hover:opacity-70 translate-x-[2px]">
              {band.name}
            </span>
            <span className="absolute left-0 top-0 text-blue-500 opacity-0 group-hover:opacity-70 -translate-x-[2px]">
              {band.name}
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative group text-sm tracking-widest uppercase"
              >
                {link.name}

                {/* underline brutal */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-700 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            {/* SOCIAL */}
            <div className="flex gap-4 ml-6 text-lg">
              <FaSpotify className="hover:text-green-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer z-50"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`w-6 h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"}`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition ${open && "opacity-0"}`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`}
              />
            </div>
          </div>
        </div>

        {/* NOISE OVERLAY */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]" />
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
          >
            {/* brutal background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="relative z-10 text-center space-y-8"
            >
              {links.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-3xl uppercase tracking-[6px] hover:text-red-600 transition"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}

              {/* SOCIAL */}
              <div className="flex justify-center gap-6 text-2xl mt-10">
                <FaSpotify />
                <FaInstagram />
                <FaYoutube />
              </div>
            </motion.div>

            {/* texture */}
            <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
