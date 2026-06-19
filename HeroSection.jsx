import React from 'react';

export default function HeroSection() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://damp-shadow-82.linkyhost.com';
    link.download = 'Divya_Palgudi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      minHeight: '90vh', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: '4rem',
      padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto',
      animation: 'fadeInUp 0.8s ease-out',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Hi, I'm <span style={{ background: 'linear-gradient(135deg, #7B2CBF, #9D4EDD)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Divya Palgudi</span>
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#7B2CBF', fontWeight: 600, marginBottom: '1.5rem' }}>Full-Stack Developer</p>
        <p style={{ fontSize: '1.1rem', color: '#6C757D', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Building scalable web applications with React, TypeScript, and a passion for intuitive digital experiences.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('portfolio')} style={btnPrimary}>View Portfolio</button>
          <button onClick={downloadResume} style={btnOutline}>Download Resume</button>
          <button onClick={() => scrollTo('contact')} style={btnOutline}>Contact Me</button>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
        <img
          src="https://ui-avatars.com/api/?background=7B2CBF&color=fff&rounded=true&size=300&bold=true&name=Divya+Palgudi"
          alt="Divya Palgudi"
          style={{
            width: 300, height: 300, borderRadius: '50%', objectFit: 'cover',
            boxShadow: '0 20px 60px rgba(123,44,191,0.3)',
            transition: 'all 0.4s ease',
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.1)'; e.target.style.boxShadow = '0 40px 100px rgba(123,44,191,0.5)'; }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 20px 60px rgba(123,44,191,0.3)'; }}
        />
      </div>
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width: 768px) {
          #home { flex-direction: column !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}

const btnPrimary = {
  background: '#7B2CBF', color: 'white', border: 'none',
  padding: '0.75rem 1.8rem', borderRadius: '2rem', fontWeight: 600,
  cursor: 'pointer', fontSize: '1rem', transition: 'all 0.3s ease',
};

const btnOutline = {
  background: 'transparent', border: '1.5px solid #7B2CBF', color: '#7B2CBF',
  padding: '0.75rem 1.8rem', borderRadius: '2rem', fontWeight: 600,
  cursor: 'pointer', fontSize: '1rem', transition: 'all 0.25s ease',
};