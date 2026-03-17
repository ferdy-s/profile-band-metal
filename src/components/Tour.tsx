"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Show = {
  id: number;
  title: string;
  location: string;
  images: string[];
  date: string;
};

const shows: Show[] = [
  {
    id: 1,
    title: "Jungkir Balik & I Hate Monday",
    location: "Jakarta Selatan",
    images: [
      "/tour/jaktim-upcoming.jpg",
      "/tour/jaktim-upcoming.jpg",
      "/tour/jaktim-upcoming.jpg",
    ],
    date: "2025",
  },
  {
    id: 2,
    title: "Malam Gembira & USV",
    location: "Jakarta Timur",
    images: ["/tour/jaktim-upcoming2.jpg", "/tour/jaktim-upcoming2.jpg"],
    date: "2025",
  },
  {
    id: 3,
    title: "Bekreasi Kreatif Space",
    location: "Bekasi",
    images: ["/tour/bekreasi.jpg"],
    date: "2025",
  },
  {
    id: 4,
    title: "Sahur On The Rock",
    location: "Bekasi",
    images: ["/tour/sotr.jpg"],
    date: "2025",
  },
  {
    id: 5,
    title: "Symphony Of The Future",
    location: "Lounge 78",
    images: ["/tour/sotf.jpg"],
    date: "2025",
  },
];

export default function Tour() {
  const [active, setActive] = useState<Show | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <section className="relative py-14 bg-black overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-black tracking-[6px] uppercase">
          Live Rituals
        </h2>
        <p className="text-gray-500 mt-3 tracking-widest text-xs md:text-sm">
          Stages of Chaos and Destruction
        </p>
      </div>

      {/* INSTAGRAM FEED (4:5) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 px-4 max-w-7xl mx-auto">
        {shows.map((show) => (
          <div
            key={show.id}
            onClick={() => {
              setActive(show);
              setIndex(0);
            }}
            className="relative aspect-[4/5] cursor-pointer group overflow-hidden"
          >
            {/* IMAGE */}
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500"
              style={{ backgroundImage: `url(${show.images[0]})` }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

            {/* INFO */}
            <div className="absolute bottom-3 left-3 right-3 text-[10px] md:text-xs uppercase tracking-wider">
              <p className="text-white font-semibold line-clamp-1">
                {show.title}
              </p>
              <p className="text-zinc-400">
                {show.location} • {show.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODERN SLIDER VIEWER */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HEADER */}
            <div className="p-4 flex justify-between items-center border-b border-zinc-800">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  {active.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {active.location} • {active.date}
                </p>
              </div>

              <button
                onClick={() => setActive(null)}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* SLIDER */}
            <div className="flex-1 overflow-hidden relative">
              <motion.div
                className="flex h-full"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: "spring", stiffness: 220, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60 && index < active.images.length - 1) {
                    setIndex((prev) => prev + 1);
                  }
                  if (info.offset.x > 60 && index > 0) {
                    setIndex((prev) => prev - 1);
                  }
                }}
              >
                {active.images.map((img, i) => (
                  <div
                    key={i}
                    className="min-w-full flex items-center justify-center"
                  >
                    <div
                      className="w-full max-w-[500px] aspect-[4/5] bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* INDICATOR */}
            <div className="flex justify-center gap-2 py-4">
              {active.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-6 transition ${
                    i === index ? "bg-white" : "bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_bottom,transparent_50%,black_51%)] bg-[length:100%_4px]" />
    </section>
  );
}
