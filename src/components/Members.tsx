"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Member = {
  name: string;
  role: string;
  image: string;
  accent: string;
};

const members: Member[] = [
  {
    name: "Putra",
    role: "Vocals",
    image: "/members/putra.jpg",
    accent: "from-red-900 to-black",
  },
  {
    name: "Dafa",
    role: "Drums",
    image: "/members/dafa.jpg",
    accent: "from-red-900 to-black",
  },
  {
    name: "Ferdy",
    role: "Lead Guitar",
    image: "/members/ferdy.jpg",
    accent: "from-red-900 to-black",
  },
  {
    name: "Faldo",
    role: "Rhythm Guitar",
    image: "/members/faldo.jpg",
    accent: "from-red-900 to-black",
  },
  {
    name: "Wildan",
    role: "Bass",
    image: "/members/wildan.jpg",
    accent: "from-red-900 to-black",
  },
];

export default function Members() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-8 bg-black overflow-hidden">
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]" />

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-6xl font-black tracking-[6px] uppercase">
          The Member
        </h2>
        <p className="text-gray-500 mt-4 tracking-widest text-xs md:text-sm">
          Architects of Sonic Violence
        </p>
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-4 scrollbar-hide">
        {members.map((m, i) => (
          <div
            key={i}
            className="snap-center min-w-[80%] h-[380px] relative group"
          >
            <Card m={m} i={i} active={active} setActive={setActive} />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
        {members.map((m, i) => (
          <Card key={i} m={m} i={i} active={active} setActive={setActive} />
        ))}
      </div>
    </section>
  );
}

/* =========================
   CARD COMPONENT
========================= */

function Card({
  m,
  i,
  active,
  setActive,
}: {
  m: Member;
  i: number;
  active: number | null;
  setActive: (i: number | null) => void;
}) {
  return (
    <motion.div
      onMouseEnter={() => setActive(i)}
      onMouseLeave={() => setActive(null)}
      className="relative group h-[380px] overflow-hidden cursor-pointer rounded-2xl"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${m.image})` }}
        animate={{
          scale: active === i ? 1.2 : 1.05,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* DARK */}
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition" />

      {/* GRADIENT */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${m.accent} opacity-30 group-hover:opacity-60 transition`}
      />

      {/* GLASS EFFECT */}
      <div className="absolute inset-0 backdrop-blur-[1px] opacity-20" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.h3
          animate={{ y: active === i ? -10 : 0 }}
          className="text-xl font-bold tracking-widest uppercase"
        >
          {m.name}
        </motion.h3>

        <motion.p
          animate={{ opacity: active === i ? 1 : 0.6 }}
          className="text-sm text-gray-300 tracking-widest"
        >
          {m.role}
        </motion.p>
      </div>

      {/* HOVER PANEL */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: active === i ? "0%" : "100%" }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/95 z-20 flex flex-col justify-end p-6"
      >
        <h3 className="text-2xl font-black uppercase tracking-[4px]">
          {m.name}
        </h3>

        <p className="text-red-500 text-sm tracking-widest mb-4">{m.role}</p>

        <p className="text-gray-400 text-xs leading-relaxed">
          Core member of Pussy Destroyer. Delivering relentless energy,
          precision, and brutality in every performance.
        </p>

        <div className="mt-4 h-[2px] w-full bg-red-700" />
      </motion.div>

      {/* BORDER */}
      <div className="absolute inset-0 border border-transparent group-hover:border-red-800 transition rounded-2xl" />
    </motion.div>
  );
}
