"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-zinc-800 pb-2">
      <span className="text-zinc-500 uppercase tracking-wider">{label}</span>
      <span className="text-white font-medium text-right">{value}</span>
    </div>
  );
}

type Release = {
  title: string;
  year: number;
  cover: string;
  audio: string;
  type: string;
  genre: string;
  description: string;
  detail: string;
  createdBy: string;
  label: string;
  license: string;
  duration: string;
  releaseDate: string;
};

const release: Release = {
  title: "False Preacher",
  year: 2025,
  cover: "/album/false-preacher.png",
  audio: "/audio/false-preacher.mp4",
  type: "Single",
  genre: "Deathcore",
  createdBy: "Pussy Destroyer",
  label: "Independent",
  license: "All Rights Reserved",
  duration: "3:08",
  releaseDate: "March 2025",
  description:
    "A condemnation of false prophets who manipulate faith into control, masking corruption behind sacred authority.",
  detail:
    "False Preacher explores the psychological and societal decay caused by manipulative religious figures. Through aggressive breakdowns, dissonant riffs, and relentless vocals, the track portrays a corrupted leader who twists belief into submission, leading followers into chaos and destruction. The composition emphasizes tension through abrupt tempo shifts, low-tuned guitars, and percussive brutality, reinforcing the theme of domination and collapse of belief systems.",
};

export default function Discography() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-12 bg-black overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-black tracking-[6px] uppercase">
          Release
        </h2>
        <p className="text-gray-500 mt-3 tracking-widest text-xs md:text-sm">
          Sonic Manifestation of Brutality
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          onClick={() => setOpen(true)}
          className="grid md:grid-cols-2 gap-12 items-start cursor-pointer group"
        >
          {/* COVER */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500"
              style={{ backgroundImage: `url(${release.cover})` }}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition" />

            {/* PLAY */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-red-700/80 flex items-center justify-center backdrop-blur-md">
                <FaPlay />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[3px]">
                {release.title}
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                {release.type} • {release.genre} • {release.year}
              </p>
            </div>

            {/* META GRID */}
            <div className="grid grid-cols-2 gap-y-3 text-xs border-t border-zinc-800 pt-4">
              <p className="text-zinc-500">Release Date</p>
              <p className="text-white">{release.releaseDate}</p>

              <p className="text-zinc-500">Created By</p>
              <p className="text-white">{release.createdBy}</p>

              <p className="text-zinc-500">Label</p>
              <p className="text-white">{release.label}</p>

              <p className="text-zinc-500">License</p>
              <p className="text-white">{release.license}</p>

              <p className="text-zinc-500">Duration</p>
              <p className="text-white">{release.duration}</p>
            </div>

            {/* SHORT DESCRIPTION */}
            <p className="text-zinc-300 leading-relaxed text-sm border-l border-red-800 pl-4">
              {release.description}
            </p>

            <button className="border border-red-800 px-6 py-2 text-sm uppercase tracking-widest hover:bg-red-900/30 transition">
              Explore Release
            </button>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-16">
              {/* HEADER */}
              <div className="flex justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-black uppercase">
                    {release.title}
                  </h2>
                  <p className="text-zinc-400 text-sm">
                    {release.type} • {release.genre} • {release.year}
                  </p>
                </div>

                <button onClick={() => setOpen(false)}>✕</button>
              </div>

              {/* CONTENT */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* COVER */}
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{ backgroundImage: `url(${release.cover})` }}
                />

                <div className="space-y-10">
                  {/* CONCEPT */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] tracking-[3px] text-zinc-500 uppercase">
                      Concept
                    </h4>

                    <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed border-l border-red-900 pl-4">
                      {release.detail}
                    </p>
                  </div>

                  {/* AUDIO */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] tracking-[3px] text-zinc-500 uppercase">
                      Audio
                    </h4>

                    {/* PLAYER WRAPPER */}
                    <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900/30 backdrop-blur-sm mt-4">
                      <audio
                        src={release.audio}
                        controls
                        className="w-full"
                        onPlay={() => setPlaying(true)}
                        onPause={() => setPlaying(false)}
                      />

                      {/* STATUS */}
                      <div className="flex justify-between items-center mt-5 text-xs">
                        <span className="text-zinc-500 uppercase tracking-widest">
                          Status
                        </span>
                        <span className="text-white font-medium">
                          {playing ? "Playing" : "Paused"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* META DATA */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] tracking-[3px] text-zinc-500 uppercase">
                      Release Info
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm">
                      <MetaItem label="Format" value="Digital Release" />
                      <MetaItem label="Status" value="Demo" />
                      <MetaItem label="Label" value={release.label} />
                      <MetaItem label="License" value={release.license} />
                      <MetaItem label="Created By" value={release.createdBy} />
                      <MetaItem label="Duration" value={release.duration} />
                      <MetaItem
                        label="Release Date"
                        value={release.releaseDate}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCANLINE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_bottom,transparent_50%,black_51%)] bg-[length:100%_4px]" />
    </section>
  );
}
