import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'Park My Ride LLC',
    location: 'Texas, USA',
    role: 'Frontend Developer',
    duration: 'Sep 2025 – May 2026',
    color: 'from-cyan-400 to-blue-500',
    highlights: [
      'Developed responsive web interfaces using React, JavaScript, TypeScript, HTML5, and CSS3.',
      'Built customer-facing applications integrated with RESTful APIs.',
      'Created reusable UI components improving maintainability and efficiency.',
      'Implemented dynamic dashboards and real-time data-driven features.',
      'Improved application performance, responsiveness, and cross-browser compatibility.',
      'Collaborated in Agile sprint environments with developers, QA, and stakeholders.',
      'Supported cloud-based deployment processes and version control with Git.',
    ],
  },
  {
    company: 'Gao Tek',
    location: 'New Delhi, India',
    role: 'Software Engineer',
    duration: 'Nov 2023 – Jun 2024',
    color: 'from-purple-400 to-pink-500',
    highlights: [
      'Built frontend applications using React and Angular.',
      'Created reusable, modular UI components.',
      'Integrated REST APIs for dynamic real-time data.',
      'Contributed across development, testing, debugging, and deployment.',
      'Improved responsive design across desktop, tablet, and mobile.',
      'Collaborated with QA and engineering teams in Agile sprints.',
    ],
  },
  {
    company: 'Neo Docto',
    location: 'Bangalore, India',
    role: 'Web Developer',
    duration: 'Nov 2022 – Sep 2023',
    color: 'from-green-400 to-cyan-400',
    highlights: [
      'Developed responsive web features using HTML, CSS, and JavaScript.',
      'Implemented search and filtering functionality.',
      'Worked with SQL and NoSQL databases.',
      'Supported AWS deployment activities.',
      'Used Docker and Kubernetes for containerized workflows.',
      'Contributed to CI/CD using GitHub Actions and Jenkins.',
    ],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-24 bg-[#07101e]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-cyan-400 tracking-[0.3em] mb-3">[ WORK HISTORY ]</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="rounded-3xl border border-white/8 bg-white/3 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpanded(expanded === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/3 transition"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-medium text-sm`}>{exp.company}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin className="h-3 w-3" />{exp.location}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="h-3 w-3" />{exp.duration}</span>
                    </div>
                  </div>
                </div>
                {expanded === index ? <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />}
              </button>

              {expanded === index && (
                <motion.div
                  className="px-6 pb-6 border-t border-white/5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}