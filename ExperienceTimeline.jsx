import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    company: 'Park My Ride LLC, Texas',
    role: 'Frontend Developer',
    duration: 'September 2025 – May 2026',
    highlights: ['Developed responsive React, JavaScript, TypeScript, HTML5, and CSS3 interfaces.', 'Built customer-facing applications integrated with RESTful APIs.', 'Created reusable UI components, dashboards, and dynamic data-driven features.', 'Improved performance, responsiveness, authentication workflows, and cloud deployment support.'],
  },
  {
    company: 'Gao Tek',
    role: 'Software Engineer',
    duration: 'November 2023 – June 2024',
    highlights: ['Built frontend applications using React and Angular.', 'Created reusable UI components and integrated REST APIs.', 'Contributed across development, testing, debugging, and deployment.', 'Improved responsive design while collaborating with QA and engineering teams.'],
  },
  {
    company: 'Neo Docto',
    role: 'Web Developer',
    duration: 'November 2022 – September 2023',
    highlights: ['Developed responsive web features using HTML, CSS, and JavaScript.', 'Implemented search and filtering systems.', 'Worked with SQL and NoSQL databases.', 'Supported AWS deployments, Docker, Kubernetes, GitHub Actions, and Jenkins workflows.'],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="rounded-[2rem] border border-primary/15 bg-card/30 p-6 md:p-8 backdrop-blur-2xl">
      <SectionHeader eyebrow="EXPERIENCE_TIMELINE" title="Professional Journey" />
      <div className="relative pl-5 md:pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {experiences.map((item, index) => (
          <motion.article key={item.company} className="relative mb-6 rounded-3xl border border-primary/15 bg-background/45 p-5 md:p-6 transition hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_0_45px_hsl(var(--primary)/0.12)]" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <span className="absolute -left-[1.95rem] top-7 h-4 w-4 rounded-full border border-primary bg-background shadow-[0_0_24px_hsl(var(--primary))]" />
            <p className="font-mono text-xs text-primary">{item.duration}</p>
            <h3 className="mt-2 font-display text-2xl text-foreground">{item.role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
              {item.highlights.map((highlight) => <li key={highlight}>→ {highlight}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}