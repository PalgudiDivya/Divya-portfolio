import React from 'react';

const services = [
  { icon: '💻', title: 'Frontend Development', desc: 'React, Angular, Vue, TypeScript, responsive UI, and cross-browser compatibility.' },
  { icon: '⚙️', title: 'Backend & APIs', desc: 'Node.js, REST API development, integration, and database management (PostgreSQL, MySQL, Firebase).' },
  { icon: '📱', title: 'Responsive Web Design', desc: 'Mobile-first design, modern CSS frameworks, and pixel-perfect implementations.' },
  { icon: '☁️', title: 'Cloud Deployment', desc: 'AWS, Azure, CI/CD pipelines, and static hosting (Netlify, GitHub Pages).' },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', background: '#F8F9FA' }}>
      <h2 style={sectionTitle}>What I Offer</h2>
      <div style={{ width: 60, height: 3, background: '#7B2CBF', borderRadius: 2, margin: '-2rem auto 3rem' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {services.map((s) => (
          <div key={s.title} style={{
            background: 'white', borderRadius: '1rem', padding: '2rem 1.5rem',
            textAlign: 'center', border: '1px solid #E9ECEF',
            transition: 'all 0.4s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)'; e.currentTarget.style.borderColor = '#9D4EDD'; e.currentTarget.style.boxShadow = '0 40px 80px rgba(123,44,191,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = '#E9ECEF'; e.currentTarget.style.boxShadow = ''; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#212529' }}>{s.title}</h3>
            <p style={{ color: '#6C757D', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionTitle = { fontSize: '2.2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.8rem', color: '#212529' };