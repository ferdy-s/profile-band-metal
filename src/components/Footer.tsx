"use client";

import { FaSpotify, FaInstagram, FaYoutube, FaBandcamp } from "react-icons/fa";
import { band } from "@/isi_data/band";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-700 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* MAIN */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* NAME */}
          <h2 className="text-lg md:text-xl font-black tracking-[6px] uppercase">
            {band.name}
          </h2>

          {/* TAGLINE */}
          <p className="text-zinc-500 text-xs max-w-md leading-relaxed">
            A sonic entity forged in chaos delivering relentless brutality and
            distortion.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 text-base pt-1">
            <a className="text-zinc-500 hover:text-green-500 transition">
              <FaSpotify />
            </a>

            <a className="text-zinc-500 hover:text-pink-500 transition">
              <FaInstagram />
            </a>

            <a className="text-zinc-500 hover:text-red-600 transition">
              <FaYoutube />
            </a>

            <a className="text-zinc-500 hover:text-zinc-300 transition">
              <FaBandcamp />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-6 h-[1px] bg-zinc-900" />

        {/* COPYRIGHT */}
        <div className="text-center text-[10px] text-zinc-500 tracking-widest">
          © {new Date().getFullYear()} {band.name}
        </div>
      </div>

      {/* SCANLINE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,black_51%)] bg-[length:100%_4px]" />
    </footer>
  );
}
