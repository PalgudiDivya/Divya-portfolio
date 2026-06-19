import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Map, BriefcaseBusiness } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Real Estate Platform',
    icon: Map,
    description: 'Developed property listing pages with advanced filtering, Google Maps integration, and interactive agent communication. Optimized rendering performance and user interactions.',
    tech: ['React', 'JavaScript', 'Google Maps API', 'HTML', 'CSS'],
    link: 'https://palgudidivya.github.io',
  },
  {
    title: 'Job Portal Jolly',
    icon: BriefcaseBusiness,
    description: 'Built a full-stack job portal with user authentication, resume uploads, dynamic listings, search functionality, and automated data handling.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Python', 'PHP'],
    link: 'https://palgudidivya.github.io',
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="rounded-[2rem] border border-primary/15 bg-card/30 p-6 md:p-10 backdrop-blur-2xl">
      <SectionHeader eyebrow="FEATURED_PROJECTS" title="Product Showreel" description="Futuristic project windows highlighting shipped web applications and practical engineering outcomes." />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map(({ title, icon: Icon, description, tech, link }, index) => (
          <motion.article key={title} className="group relative overflow-hidden rounded-[2rem] border border-primary/15 bg-background/40 p-6 min-h-[24rem] transition hover:border-primary/55 hover:shadow-[0_0_70px_hsl(var(--primary)/0.16)]" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <div className="absolute inset-x-8 top-8 h-40 rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-sm" />
            <div className="relative h-44 rounded-[1.5rem] border border-primary/15 bg-background/45 p-4 hologram-scan">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-primary" /><span className="h-3 w-3 rounded-full bg-accent" /><span className="h-3 w-3 rounded-full bg-muted" /></div>
              <Icon className="absolute bottom-5 right-5 h-16 w-16 text-primary/70" />
              <div className="mt-8 space-y-3"><div className="h-3 w-4/5 rounded bg-primary/30" /><div className="h-3 w-2/3 rounded bg-accent/25" /><div className="h-3 w-1/2 rounded bg-primary/20" /></div>
            </div>
            <h3 className="mt-6 font-display text-3xl text-foreground">{title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-primary">
              {tech.map((item) => <span key={item} className="rounded-full border border-primary/15 px-3 py-1.5">{item}</span>)}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-3 text-sm text-primary transition hover:bg-primary hover:text-primary-foreground">
              Open Project <ExternalLink className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}