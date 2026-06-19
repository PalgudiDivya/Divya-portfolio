import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const education = [
  ['Master\'s in Computer and Information Science', 'Southeast Missouri State University', 'August 2024 – May 2026'],
  ['Bachelor\'s in Electronics and Communication Engineering', 'JNTUK Affiliated Mallineni Perumallu Educational Society', 'August 2019 – May 2023'],
];

const certs = [['Responsive Web Design', 'FreeCodeCamp'], ['Front End Development', 'Oasis Infobyte']];

export default function EducationCertifications() {
  return (
    <section id="education" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[2rem] border border-primary/15 bg-card/30 p-6 md:p-8 backdrop-blur-2xl">
        <SectionHeader eyebrow="EDUCATION" title="Academic Terminal" />
        <div className="space-y-4 font-mono">
          {education.map(([degree, school, duration], index) => (
            <motion.div key={degree} className="rounded-3xl border border-primary/15 bg-background/40 p-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <GraduationCap className="h-6 w-6 text-primary" />
              <p className="mt-4 text-lg text-foreground">&gt; {degree}</p>
              <p className="mt-2 text-sm text-muted-foreground">{school}</p>
              <p className="mt-1 text-xs text-primary">{duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div id="certifications" className="rounded-[2rem] border border-primary/15 bg-card/30 p-6 md:p-8 backdrop-blur-2xl">
        <SectionHeader eyebrow="CERTIFICATIONS" title="Achievement Badges" />
        <div className="grid gap-4">
          {certs.map(([name, issuer], index) => (
            <motion.div key={name} className="rounded-3xl border border-primary/15 bg-primary/5 p-5" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Award className="h-7 w-7 text-primary" />
              <p className="mt-4 font-display text-2xl text-foreground">{name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}