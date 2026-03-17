"use client";

import { motion } from "framer-motion";
import { band } from "@/isi_data/band";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);
  const paragraphs = band.description.trim().split("\n\n");

  return (
    <section className="relative bg-black text-white pt-20 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* KIRI — TEKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* HEADING */}
            <div className="mb-8 md:mb-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[2px] uppercase">
                Who Are We?
              </h2>

              <p className="text-zinc-500 mt-3 md:mt-4 tracking-widest text-[10px] md:text-sm">
                Architects of Sonic Violence
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base lg:text-lg whitespace-pre-line">
              {open ? band.description : paragraphs.slice(0, 2).join("\n\n")}
            </p>

            {/* TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="text-[10px] md:text-xs uppercase tracking-[3px] text-white/80 hover:text-white transition border-b border-white/20 hover:border-white pb-[2px]"
            >
              {open ? "CLOSE" : "MORE"}
            </button>

            {/* GENRE */}
            <p className="text-[10px] md:text-xs uppercase tracking-[4px] text-zinc-600">
              {band.genre.join(" • ")}
            </p>

            {/* META */}
            <div className="mt-6 space-y-4 text-xs md:text-sm uppercase tracking-wider">
              {/* FORMED */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Formed</span>
                <span className="text-white font-semibold">{band.formed}</span>
              </div>

              {/* ORIGIN */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Origin</span>
                <span className="text-white font-semibold">
                  {band.origin.city}, {band.origin.country}
                </span>
              </div>

              {/* LABEL */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Label</span>
                <span className="text-white font-semibold">{band.label}</span>
              </div>
            </div>
          </motion.div>

          {/* KANAN — VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src="/about.jpg"
                alt="About visual"
                className="w-full h-full object-contain md:object-cover grayscale contrast-125 brightness-[0.5]"
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
