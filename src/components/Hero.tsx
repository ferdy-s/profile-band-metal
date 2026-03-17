"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { band } from "@/isi_data/band";
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // pointer parallax
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // audio toggle
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setMuted(!muted);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 30 }}
        className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* RED GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-black" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')]" />

      {/* SCANLINE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_bottom,transparent_50%,black_51%)] bg-[length:100%_4px]" />

      {/* SPOTLIGHT CURSOR */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${50 + pos.x}% ${
            50 + pos.y
          }%, transparent 100px, rgba(0,0,0,0.95) 400px)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* GLITCH TITLE */}
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-8xl font-black tracking-[1px] uppercase">
            {band.name}
          </h1>
        </div>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm md:text-lg tracking-[4px] uppercase text-gray-300"
        >
          {band.tagline}
        </motion.p>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-xs tracking-widest uppercase text-gray-400"
      >
        Scroll Down
      </motion.div>

      {/* AUDIO (optional) */}
      <audio ref={audioRef} loop src="/audio/ambient.mp3" />
    </section>
  );
}
