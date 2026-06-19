import React from 'react';

const stats = [
  { icon: '💼', number: '3+', label: 'Years Experience' },
  { icon: '🚀', number: '10+', label: 'Projects Built' },
  { icon: '🛠️', number: '5+', label: 'Tech Stacks' },
  { icon: '🎓', number: 'MS', label: 'In Progress' },
];

export default function StatsSection() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(123,44,191,0.05), rgba(157,78,221,0.05))',
      padding: '4rem 2rem',
      borderTop: '1px solid #E9ECEF', borderBottom: '1px solid #E9ECEF',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {stats.map((s) => (
          <div key={s.label} style={{
            textAlign: 'center', padding: '2rem', background: 'white',
            borderRadius: '1rem', border: '1px solid #E9ECEF',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.4s ease', cursor: 'default',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 30px 70px rgba(123,44,191,0.2)'; e.currentTarget.style.borderColor = '#9D4EDD'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#E9ECEF'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#7B2CBF', marginBottom: '0.5rem' }}>{s.number}</div>
            <div style={{ color: '#6C757D', fontWeight: 500, fontSize: '0.95rem' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}