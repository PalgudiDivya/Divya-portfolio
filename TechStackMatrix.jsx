import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const groups = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'jQuery'],
  Backend: ['Node.js', 'Python', 'REST APIs', 'API Integration'],
  Databases: ['PostgreSQL', 'MySQL', 'Firebase', 'Firestore'],
  'Cloud & DevOps': ['AWS', 'Docker', 'GitHub Actions', 'Jenkins', 'Kubernetes'],
  'AI Tools': ['Cursor', 'Claude Code', 'Codex', 'LLM Workflows'],
  Tools: ['Git', 'GitHub', 'Jira', 'VS Code', 'Postman', 'Slack'],
};

export default function TechStackMatrix() {
  return (
    <section id="stack" className="rounded-[2rem] border border-primary/15 bg-card/30 p-6 md:p-8 backdrop-blur-2xl xl:sticky xl:top-24">
      <SectionHeader eyebrow="TECH_STACK" title="Skill Matrix" />
      <div className="space-y-5">
        {Object.entries(groups).map(([group, skills], groupIndex) => (
          <motion.div key={group} className="rounded-3xl border border-primary/10 bg-background/35 p-4" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: groupIndex * 0.05 }}>
            <p className="font-mono text-xs tracking-[0.2em] text-primary">{group}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-sm text-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}