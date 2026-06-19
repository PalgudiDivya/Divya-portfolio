import React from 'react';

const education = [
  { date: 'Aug 2024 – Present', title: "Master's in Computer & Information Science", subtitle: 'Southeast Missouri State University' },
  { date: 'Aug 2019 – May 2023', title: "Bachelor's in Electronics & Communication Engineering", subtitle: "JNTUK — Mallineni Perumallu Educational Society's" },
];

const experience = [
  { date: 'Feb 2026 – May 2026', title: 'Frontend Developer', subtitle: 'Park My Ride LLC, Texas', desc: 'Building responsive interfaces and optimizing user flows.' },
  { date: 'Nov 2023 – June 2024', title: 'Software Engineer', subtitle: 'Neo Docto, Bangalore, India', desc: 'Developed scalable web features and integrated REST APIs.' },
  { date: 'Nov 2022 – Sep 2023', title: 'Web Developer', subtitle: 'Gao Tek, New York', desc: 'Crafted responsive UIs and improved site performance.' },
];

const certs = [
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp' },
  { title: 'Front End Development', issuer: 'Oasis Info Byte' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={sectionTitle}>About Me</h2>
      <div style={{ content: '""', display: 'block', width: 60, height: 3, background: '#7B2CBF', borderRadius: 2, margin: '-2rem auto 3rem' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }} className="edu-exp-grid">
        {/* Education */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: '#212529' }}>🎓 Education</h3>
          <div style={{ position: 'relative', paddingLeft: 0 }}>
            <div style={{ position: 'absolute', left: 29, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #7B2CBF, rgba(123,44,191,0.2))' }} />
            {education.map((e) => (
              <div key={e.title} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <div style={markerStyle}>🎓</div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <div style={{ color: '#7B2CBF', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>{e.date}</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#212529', marginBottom: '0.3rem' }}>{e.title}</div>
                  <div style={{ color: '#6C757D', fontSize: '0.9rem' }}>{e.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: '#212529' }}>👩🏻💻 Experience</h3>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 29, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #7B2CBF, rgba(123,44,191,0.2))' }} />
            {experience.map((e) => (
              <div key={e.title} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <div style={markerStyle}>👩🏻💻</div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <div style={{ color: '#7B2CBF', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>{e.date}</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#212529', marginBottom: '0.3rem' }}>{e.title}</div>
                  <div style={{ color: '#6C757D', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{e.subtitle}</div>
                  <div style={{ color: '#6C757D', fontSize: '0.9rem', lineHeight: 1.4 }}>{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '2px solid #E9ECEF' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: '#212529' }}>🎖️ Certifications</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {certs.map((c) => (
            <div key={c.title} style={{
              display: 'flex', gap: '1.5rem', alignItems: 'center',
              background: 'white', border: '1px solid #E9ECEF', borderRadius: '0.8rem',
              padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(123,44,191,0.15)'; e.currentTarget.style.borderColor = '#9D4EDD'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#E9ECEF'; }}
            >
              <div style={{ width: 60, height: 60, minWidth: 60, background: '#7B2CBF', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🎖️</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#212529', marginBottom: '0.3rem' }}>{c.title}</div>
                <div style={{ color: '#6C757D', fontSize: '0.9rem' }}>{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const sectionTitle = {
  fontSize: '2.2rem', fontWeight: 700, textAlign: 'center',
  marginBottom: '0.8rem', color: '#212529', position: 'relative',
};

const markerStyle = {
  width: 60, height: 60, minWidth: 60,
  background: '#7B2CBF', borderRadius: '50%',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.5rem', boxShadow: '0 4px 12px rgba(123,44,191,0.2)',
  position: 'relative', zIndex: 10,
};