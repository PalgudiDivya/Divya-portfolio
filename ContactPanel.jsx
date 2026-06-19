import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Mail, Phone } from 'lucide-react';

export default function ContactPanel() {
  const email = 'palgudidivya31@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/divyapalgudi/';
  const resumeText = `DIVYA PALGUDI\nEmail: palgudidivya31@gmail.com | Phone: (917) 960-9827 | LinkedIn: ${linkedIn}\n\nFull-Stack Developer experienced with React, JavaScript, TypeScript, Node.js, Python, REST APIs, PostgreSQL, MySQL, Firebase, AWS, Docker, GitHub Actions, Jenkins, Agile workflows, performance optimization, and AI-assisted development tools.\n\nExperience\nPark My Ride LLC, Texas — Frontend Developer — September 2025 – May 2026\nGao Tek — Software Engineer — November 2023 – June 2024\nNeo Docto — Web Developer — November 2022 – September 2023\n\nProjects\nReal Estate Platform — Property listings, filtering, Google Maps integration, interactive agent contact.\nJob Portal Jolly — Authentication, resume uploads, dynamic listings, search, and automated data handling.\n\nEducation\nMaster's in Computer and Information Science — Southeast Missouri State University — August 2024 – May 2026\nBachelor's in Electronics and Communication Engineering — JNTUK Affiliated Mallineni Perumallu Educational Society — August 2019 – May 2023`;
  const resumeHref = `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`;

  return (
    <section id="contact" className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-card/35 p-6 md:p-12 text-center backdrop-blur-2xl shadow-[0_0_90px_hsl(var(--primary)/0.14)]">
      <div className="absolute inset-0 hologram-scan opacity-60" />
      <motion.div className="relative mx-auto max-w-3xl" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono text-xs tracking-[0.35em] text-primary">[CONTACT_INITIATE]</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-light text-foreground">Let's Build Something Amazing Together</h2>
        <div className="mt-8 rounded-[2rem] border border-primary/15 bg-background/45 p-6 text-left font-mono">
          <p className="text-primary">&gt; profile --open</p>
          <p className="mt-4 text-foreground">Divya Palgudi</p>
          <p className="text-muted-foreground">Full-Stack Developer</p>
          <div className="mt-5 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> {email}</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> (917) 960-9827</p>
            <p className="flex items-center gap-3"><Linkedin className="h-4 w-4 text-primary" /> {linkedIn}</p>
          </div>
        </div>
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <a href={resumeHref} download="Divya_Palgudi_Resume.txt" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]">
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a href={linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm text-primary transition hover:bg-primary/10">
            <Linkedin className="h-4 w-4" /> View LinkedIn
          </a>
          <a href={`mailto:${email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-sm text-foreground transition hover:bg-accent/10">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}