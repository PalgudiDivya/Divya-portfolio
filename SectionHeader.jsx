import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div className="mb-8 md:mb-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
      <p className="font-mono text-xs tracking-[0.35em] text-primary">[{eyebrow}]</p>
      <h2 className="mt-3 font-display text-4xl md:text-6xl font-light tracking-tight text-foreground">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-base md:text-lg leading-8 text-muted-foreground">{description}</p>}
    </motion.div>
  );
}