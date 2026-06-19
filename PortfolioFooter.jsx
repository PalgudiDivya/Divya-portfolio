import React from 'react';

export default function PortfolioFooter() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#0a0a0a', color: '#9ca3af', padding: '3rem 2rem 1.5rem', marginTop: '5rem', borderTop: '1px solid rgba(123,44,191,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', marginBottom: '2rem' }} className="footer-grid">
        <div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>
            Divya<span style={{ color: '#7B2CBF' }}>.dev</span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6 }}>Full-stack developer crafting intuitive digital experiences.</p>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[['about','About'],['portfolio','Portfolio'],['contact','Contact']].map(([id, label]) => (
              <a key={id} onClick={() => scrollTo(id)} style={{ color: '#9ca3af', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#7B2CBF'}
                onMouseLeave={e => e.target.style.color = '#9ca3af'}>{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: 'https://github.com/PalgudiDivya', icon: '🐙', title: 'GitHub' },
              { href: 'https://www.linkedin.com/in/divyapalgudi/', icon: '💼', title: 'LinkedIn' },
              { href: 'mailto:palgudidivya31@gmail.com', icon: '✉️', title: 'Email' },
            ].map(({ href, icon, title }) => (
              <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" title={title}
                style={{ width: 44, height: 44, border: '1px solid rgba(123,44,191,0.2)', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', textDecoration: 'none', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7B2CBF'; e.currentTarget.style.background = 'rgba(123,44,191,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(123,44,191,0.2)'; e.currentTarget.style.background = ''; }}
              >{icon}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(123,44,191,0.1)', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
        <p>© 2026 Divya Palgudi. Built with React & TanStack.</p>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}