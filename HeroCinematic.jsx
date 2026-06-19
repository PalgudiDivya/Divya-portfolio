const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorPlay } from 'lucide-react';

const videoUrl =
  'https://media.db.com/videos/public/user_6a204029037b880203203aea/e580b654b_Woman_riding_bike_to_office_202606130915.mp4';

// Phases:
// 0 – video playing fullscreen, no UI interruption
// 1 – video ended, "Open Portfolio" button shown
// 2 – button clicked, laptop zoom + flash
// 3 – portfolio revealed (notifies parent)

export default function HeroCinematic({ onReveal }) {
  const videoRef = useRef(null);
  const [phase, setPhase] = useState(0);

  // Detect video end
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onEnd = () => setPhase(1);
    vid.addEventListener('ended', onEnd);
    return () => vid.removeEventListener('ended', onEnd);
  }, []);

  // Phase 2: immediately reveal portfolio and begin fade-out
  useEffect(() => {
    if (phase === 2) {
      onReveal?.();
      const t = setTimeout(() => setPhase(4), 700);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Fully unmounted — portfolio is visible
  if (phase >= 4) return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ pointerEvents: phase >= 3 ? 'none' : 'all' }}
    >
      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Minimal vignette only – never blocks video */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Tiny corner HUD during playback */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            className="absolute bottom-8 right-6 rounded-2xl border border-white/15 bg-black/35 px-5 py-4 backdrop-blur-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.4 }}
          >
            <p className="font-display text-base tracking-[0.22em] text-white">DIVYA PALGUDI</p>
            <p className="mt-1 text-xs font-mono text-cyan-400">Full-Stack Developer</p>
            <p className="mt-0.5 text-[10px] font-mono text-white/50">React • TypeScript • Node.js • AWS</p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              <span className="font-mono text-[9px] text-white/40">SYSTEM_INITIALIZING</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 1: Video ended → Open Portfolio button ── */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dark overlay so button is readable */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-display text-4xl md:text-6xl font-light tracking-[0.18em] text-white">
                  DIVYA PALGUDI
                </p>
                <p className="mt-3 font-mono text-sm tracking-[0.35em] text-cyan-400">
                  FULL-STACK DEVELOPER
                </p>
                <p className="mt-2 font-mono text-xs text-white/40">
                  React • TypeScript • Node.js • AWS • Python
                </p>
              </motion.div>

              {/* Glowing divider line */}
              <motion.div
                className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />

              {/* Open Portfolio button */}
              <motion.button
                onClick={() => setPhase(2)}
                className="group relative flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-8 py-4 font-mono text-sm tracking-[0.2em] text-cyan-300 backdrop-blur-xl transition-all hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_48px_hsl(183,100%,50%,0.4)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <MonitorPlay className="h-5 w-5" />
                OPEN PORTFOLIO
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" />
              </motion.button>

              <motion.p
                className="font-mono text-[10px] text-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                [ CLICK TO ENTER THE INTERFACE ]
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 2: Fade out the whole overlay → expose portfolio ── */}
      {phase === 2 && (
        <motion.div
          className="absolute inset-0 z-20 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </div>
  );
}