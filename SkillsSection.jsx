import React from 'react';

const skills = ['React', 'Angular', 'TypeScript', 'JavaScript (ES6)', 'Node.js', 'Python', 'HTML5/CSS3', 'Tailwind CSS', 'REST APIs', 'PostgreSQL / MySQL', 'Firebase', 'Git & GitHub', 'AWS / Azure'];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', background: '#F8F9FA' }}>
      <h2 style={sectionTitle}>Technical Skills</h2>
      <div style={{ content: '""', display: 'block', width: 60, height: 3, background: '#7B2CBF', borderRadius: 2, margin: '-2rem auto 3rem' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        {skills.map((skill) => (
          <span key={skill} style={{
            background: 'white', border: '1px solid #E9ECEF',
            padding: '0.6rem 1.2rem', borderRadius: '2rem',
            fontSize: '0.9rem', fontWeight: 500,
            transition: 'all 0.3s ease', cursor: 'default',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#7B2CBF'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#7B2CBF'; e.currentTarget.style.transform = 'scale(1.12) translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(123,44,191,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#212529'; e.currentTarget.style.borderColor = '#E9ECEF'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

const sectionTitle = {
  fontSize: '2.2rem', fontWeight: 700, textAlign: 'center',
  marginBottom: '0.8rem', color: '#212529',
};