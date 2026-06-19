const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'React, TypeScript, JavaScript expert',
  'Node.js REST API development',
  'PostgreSQL, MySQL, Firebase databases',
  'AWS, Docker, CI/CD pipelines',
  'AI-assisted development (Cursor, Claude Code)',
  'Agile / Scrum environments',
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-[#07101e]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: visual card */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-72 md:w-80 rounded-3xl overflow-hidden border border-cyan-400/20 shadow-[0_0_60px_hsl(183,100%,50%,0.12)]">
              <img
                src="https://media.db.com/images/public/6a2d804ed4518b4f62c6728b/d2de441ba_generated_image.png"
                alt="Divya Palgudi"
                className="w-full object-cover"
              />
            </div>
            {/* Floating experience badge */}
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-cyan-400/25 bg-[#050a14] px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold text-cyan-400">3+</p>
              <p className="text-xs text-gray-400 mt-0.5">Years of<br />Experience</p>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-cyan-400 tracking-[0.3em] mb-3">[ ABOUT ME ]</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Passionate About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Building</span> Great Software
            </h2>
            <p className="text-gray-400 leading-8 mb-6">
              Full-Stack Developer with experience building responsive, scalable web applications using React, JavaScript, TypeScript, Node.js, and Python. Skilled in developing modern user interfaces, integrating REST APIs, and working with databases including PostgreSQL, MySQL, and Firebase.
            </p>
            <p className="text-gray-400 leading-8 mb-8">
              Comfortable working with AI-assisted development tools and passionate about creating user-focused applications with clean design, strong functionality, and cross-browser compatibility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}