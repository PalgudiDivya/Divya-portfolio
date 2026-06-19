import React, { useRef, useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');
  const formRef = useRef();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://damp-shadow-82.linkyhost.com';
    link.download = 'Divya_Palgudi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    if (name.value && email.value && message.value) {
      window.location.href = `mailto:palgudidivya31@gmail.com?subject=Portfolio Contact from ${name.value}&body=${encodeURIComponent(message.value)}`;
      setStatus('✅ Thank you! I will get back to you soon.');
      e.target.reset();
      setTimeout(() => setStatus(''), 4000);
    } else {
      setStatus('❌ Please fill out all fields.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={sectionTitle}>Get In Touch</h2>
      <div style={{ width: 60, height: 3, background: '#7B2CBF', borderRadius: 2, margin: '-2rem auto 3rem' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="contact-grid">
        {/* Info */}
        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid #E9ECEF' }}>
          <h3 style={{ marginBottom: '1rem', color: '#212529' }}>Let's Connect</h3>
          {[
            { icon: '📧', text: 'palgudidivya31@gmail.com', href: 'mailto:palgudidivya31@gmail.com' },
            { icon: '📞', text: '(917) 960-9827', href: 'tel:+19179609827' },
            { icon: '💻', text: 'github.com/PalgudiDivya', href: 'https://github.com/PalgudiDivya' },
            { icon: '🔗', text: 'linkedin.com/in/divyapalgudi', href: 'https://www.linkedin.com/in/divyapalgudi/' },
          ].map(({ icon, text, href }) => (
            <p key={text} style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem', wordBreak: 'break-all' }}>
              <span>{icon}</span>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: '#7B2CBF', textDecoration: 'none' }}>{text}</a>
            </p>
          ))}
          <button onClick={downloadResume} style={{ ...btnPrimary, marginTop: '1.5rem' }}>📄 Download Resume</button>
        </div>

        {/* Form */}
        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid #E9ECEF' }}>
          <form ref={formRef} onSubmit={handleSubmit}>
            {['name', 'email'].map((field) => (
              <div key={field} style={{ marginBottom: '1rem' }}>
                <input type={field === 'email' ? 'email' : 'text'} name={field}
                  placeholder={field === 'name' ? 'Your Name' : 'Your Email'} required
                  style={inputStyle} onFocus={e => e.target.style.borderColor = '#7B2CBF'} onBlur={e => e.target.style.borderColor = '#E9ECEF'} />
              </div>
            ))}
            <div style={{ marginBottom: '1rem' }}>
              <textarea name="message" rows={4} placeholder="Your Message" required
                style={{ ...inputStyle, resize: 'none' }} onFocus={e => e.target.style.borderColor = '#7B2CBF'} onBlur={e => e.target.style.borderColor = '#E9ECEF'} />
            </div>
            <button type="submit" style={{ ...btnPrimary, width: '100%' }}>Send Message</button>
          </form>
          {status && <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: status.includes('✅') ? '#7B2CBF' : 'red' }}>{status}</p>}
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

const sectionTitle = { fontSize: '2.2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.8rem', color: '#212529' };
const btnPrimary = { background: '#7B2CBF', color: 'white', border: 'none', padding: '0.75rem 1.8rem', borderRadius: '2rem', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' };
const inputStyle = { width: '100%', padding: '0.8rem', border: '1px solid #E9ECEF', borderRadius: '0.5rem', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', transition: 'border 0.2s ease', boxSizing: 'border-box' };