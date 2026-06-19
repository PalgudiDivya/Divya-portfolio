import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Master's in Computer and Information Science",
    school: 'Southeast Missouri State University',
    duration: 'Aug 2024 – May 2026',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    degree: "Bachelor's in Electronics and Communication Engineering",
    school: 'JNTUK Affiliated Mallineni Perumallu Educational Society',
    duration: 'Aug 2019 – May 2023',
    color: 'from-purple-400 to-pink-500',
  },
];

const certs = [
  { name: 'Responsive Web Design', issuer: 'FreeCodeCamp', color: 'from-cyan-400 to-teal-400' },
  { name: 'Front End Development', issuer: 'Oasis Infobyte', color: 'from-purple-400 to-pink-400' },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-[#07101e]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-cyan-400 tracking-[0.3em] mb-3">[ ACADEMIC BACKGROUND ]</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-gray-400 font-mono text-xs tracking-widest mb-6">DEGREES</h3>
            <div className="space-y-5">
              {education.map((ed, index) => (
                <motion.div
                  key={ed.degree}
                  className="flex gap-4 rounded-3xl border border-white/8 bg-white/3 p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${ed.color} flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold leading-snug">{ed.degree}</h4>
                    <p className="text-gray-400 text-sm mt-1">{ed.school}</p>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${ed.color} text-xs font-mono mt-2`}>{ed.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-gray-400 font-mono text-xs tracking-widest mb-6">CERTIFICATIONS</h3>
            <div className="space-y-5">
              {certs.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="flex gap-4 rounded-3xl border border-white/8 bg-white/3 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                    <span className={`inline-block mt-2 rounded-full px-3 py-0.5 text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>Certified</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}