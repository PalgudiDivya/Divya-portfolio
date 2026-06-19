import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Experience', 'Stack', 'Projects', 'Education', 'Contact'];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const goTo = (label) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-full border border-primary/20 bg-background/35 px-4 py-3 backdrop-blur-2xl shadow-[0_0_40px_hsl(var(--primary)/0.12)]">
        <button onClick={() => goTo('About')} className="font-display text-sm tracking-[0.28em] text-primary">DIVYA</button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button key={link} onClick={() => goTo(link)} className="px-4 py-2 text-xs font-mono text-muted-foreground transition hover:text-primary">
              [{link}]
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(true)} className="md:hidden rounded-full border border-primary/20 p-2 text-primary">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-3xl p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setOpen(false)} className="ml-auto flex rounded-full border border-primary/25 p-3 text-primary">
              <X className="h-5 w-5" />
            </button>
            <div className="mt-16 grid gap-4">
              {links.map((link, index) => (
                <motion.button key={link} onClick={() => goTo(link)} className="rounded-3xl border border-primary/20 bg-card/40 p-6 text-left font-display text-3xl text-foreground" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.05 }}>
                  <span className="text-primary">0{index + 1}</span> {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}