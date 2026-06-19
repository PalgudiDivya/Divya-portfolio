import React, { useState } from 'react';

export default function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'sticky', top: 0,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E9ECEF',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div style={{
        fontWeight: 700, fontSize: '1.5rem',
        background: 'linear-gradient(135deg, #7B2CBF, #9D4EDD)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
      }}>Divya Palgudi</div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', flexWrap: 'wrap' }}>
        {[['home','Home'],['about','About'],['skills','Skills'],['portfolio','Portfolio'],['services','Services'],['contact','Contact']].map(([id, label]) => (
          <li key={id}>
            <a onClick={() => scrollTo(id)} style={{ textDecoration: 'none', fontWeight: 500, color: '#212529', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#7B2CBF'}
              onMouseLeave={e => e.target.style.color = '#212529'}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}