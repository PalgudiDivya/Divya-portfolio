import React, { useRef } from 'react';

const projects = [
  {
    featured: true,
    title: 'Cardealing — Car Marketplace',
    desc: 'Full-stack car marketplace with dynamic listings, search/filter by price & make, image upload preview, modal car detail view, contact forms, and local storage persistence.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop',
    demo: 'https://palgudidivya.github.io/carmarketing/',
    code: 'https://github.com/PalgudiDivya/carmarketing',
  },
  {
    title: 'Real Estate Listings',
    desc: 'Property listing pages with Google Maps integration, agent contact, and optimized data rendering.',
    tech: ['JavaScript', 'Google Maps', 'CSS'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    demo: 'https://palgudidivya.github.io/Estate/',
    code: 'https://github.com/PalgudiDivya/Real-Estate',
  },
  {
    title: 'Job Portal Jolly',
    desc: 'Full-stack job portal with user authentication, resume uploads, and powerful search/filter capabilities.',
    tech: ['JavaScript', 'Python', 'PHP', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    demo: 'https://palgudidivya.github.io/job-website/',
    code: 'https://github.com/PalgudiDivya/Jolly',
  },
  {
    title: "FAQ's System",
    desc: 'Interactive FAQ with form validation and structured collapsible content.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    demo: 'https://palgudidivya.github.io/faq/',
    code: 'https://github.com/PalgudiDivya/faq',
  },
  {
    title: 'Query Submission Form',
    desc: 'Polished interactive form with built-in validation and clean UX.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    demo: 'https://palgudidivya.github.io/form/',
    code: 'https://github.com/PalgudiDivya/form',
  },
  {
    title: 'Omelet Recipe Page',
    desc: 'Recipe webpage featuring preparation steps, ingredients, cooking instructions, and nutritional info.',
    tech: ['HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop',
    demo: 'https://palgudidivya.github.io/omelet/',
    code: 'https://github.com/PalgudiDivya/omelet',
  },
];

function TiltCard({ children, featured }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    card.style.boxShadow = `0 30px 70px rgba(123,44,191,0.35), 0 0 0 1px rgba(157,78,221,0.4)`;
    card.style.borderColor = '#9D4EDD';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.boxShadow = '0 4px 12px rgba(101,68,162,0.08)';
    card.style.borderColor = '#E9ECEF';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'white',
        borderRadius: '1rem',
        border: '1px solid #E9ECEF',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(101,68,162,0.08)',
        transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        gridColumn: featured ? '1 / -1' : undefined,
        display: featured ? 'grid' : 'block',
        gridTemplateColumns: featured ? '1.1fr 1fr' : undefined,
        position: 'relative',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="portfolio" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={sectionTitle}>My Portfolio</h2>
      <div style={{ width: 60, height: 3, background: '#7B2CBF', borderRadius: 2, margin: '-2rem auto 1.5rem' }} />
      <p style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 2.5rem', color: '#6C757D', fontSize: '1rem', lineHeight: 1.7 }}>
        A selection of projects showcasing full-stack development, responsive design, and interactive UIs.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="projects-grid">
        {projects.map((p) => (
          <TiltCard key={p.title} featured={p.featured}>
            {p.featured && (
              <div style={{
                position: 'absolute', top: '1.5rem', left: '1.5rem',
                background: 'rgba(123,44,191,0.1)', border: '1px solid #9D4EDD',
                color: '#7B2CBF', padding: '0.5rem 1rem', borderRadius: '1rem',
                fontSize: '0.85rem', fontWeight: 600, zIndex: 10,
              }}>★ Featured</div>
            )}
            <div style={{ padding: '1.4rem' }}>
              <div style={{
                width: '100%', minHeight: p.featured ? 300 : 220,
                backgroundImage: `url(${p.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: '1.25rem',
                boxShadow: '0 18px 32px rgba(123,44,191,0.16)',
              }} />
            </div>
            <div style={{ padding: p.featured ? '2rem' : '1.75rem' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: '#212529' }}>{p.title}</div>
              <p style={{ color: '#212529', lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
                {p.tech.map(t => (
                  <span key={t} style={{ background: '#F8F9FA', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontFamily: 'monospace' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href={p.demo} target="_blank" rel="noreferrer" style={btnLink}>🔗 Live Demo</a>
                <a href={p.code} target="_blank" rel="noreferrer" style={btnLinkSecondary}>💻 Code</a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > div[style*="1 / -1"] { grid-column: 1 !important; grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const sectionTitle = { fontSize: '2.2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.8rem', color: '#212529' };
const btnLink = { display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#7B2CBF', color: 'white', textDecoration: 'none', fontWeight: 600, padding: '0.7rem 1.4rem', borderRadius: '0.6rem', fontSize: '0.95rem', transition: 'all 0.3s ease' };
const btnLinkSecondary = { display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'white', color: '#212529', textDecoration: 'none', fontWeight: 600, padding: '0.7rem 1.4rem', borderRadius: '0.6rem', fontSize: '0.95rem', border: '1px solid rgba(123,44,191,0.12)', transition: 'all 0.3s ease' };