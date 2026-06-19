import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroCinematic from '@/components/portfolio/HeroCinematic';
import PortfolioNav from '@/components/portfolio/PortfolioNav';
import HeroSection from '@/components/portfolio/HeroSection';
import StatsSection from '@/components/portfolio/StatsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ContactSection from '@/components/portfolio/ContactSection';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';

export default function Home() {
  const [portfolioReady, setPortfolioReady] = useState(false);

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F8F9FA', color: '#212529', lineHeight: 1.6 }}>
      {/* Cinematic bike ride video intro — untouched */}
      <HeroCinematic onReveal={() => setPortfolioReady(true)} />

      {/* Portfolio — revealed after video, white/purple theme */}
      <AnimatePresence>
        {portfolioReady && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <PortfolioNav />
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ServicesSection />
            <ContactSection />
            <PortfolioFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}