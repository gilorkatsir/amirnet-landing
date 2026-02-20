import { useState } from 'react';

const glass = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.07)',
} as const;

const features = [
  { label: 'מילים', free: '30', premium: '800+' },
  { label: 'שאלות', free: '10', premium: '264' },
  { label: 'תרגול AI', free: '1/יום', premium: 'ללא הגבלה' },
  { label: 'פרקי הקשבה', free: '4', premium: '28' },
  { label: 'מעקב התקדמות', free: '✓', premium: '✓' },
  { label: 'PWA + אופליין', free: '✓', premium: '✓' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = annual ? 19.9 : 29.9;

  return (
    <section id="pricing" style={{ padding: '5rem 1.25rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            תוכניות <span className="gradient-text">ומחירים</span>
          </h2>
          <p style={{ color: '#8e8e9a', fontSize: '1.125rem', marginBottom: '1.5rem' }}>התחל בחינם. שדרג כשתרצה.</p>

          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', color: !annual ? '#f0f0f5' : '#8e8e9a' }}>חודשי</span>
            <button onClick={() => setAnnual(!annual)} style={{
              position: 'relative', width: '3rem', height: '1.5rem', borderRadius: '9999px',
              border: 'none', cursor: 'pointer', background: annual ? '#8B5CF6' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s',
            }}>
              <div style={{
                position: 'absolute', top: '3px', width: '1.125rem', height: '1.125rem',
                borderRadius: '50%', background: 'white', transition: 'transform 0.3s',
                transform: annual ? 'translateX(3px)' : 'translateX(27px)',
              }} />
            </button>
            <span style={{ fontSize: '0.875rem', color: annual ? '#f0f0f5' : '#8e8e9a' }}>
              שנתי
              {annual && <span style={{ marginRight: '0.375rem', fontSize: '0.7rem', background: 'rgba(34,197,94,0.15)', color: '#22c55e', padding: '2px 8px', borderRadius: '9999px' }}>חסכון 33%</span>}
            </span>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="pricing-grid">
          {/* Free */}
          <div style={{ ...glass, borderRadius: '1.25rem', padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>חינמי</h3>
            <p style={{ color: '#8e8e9a', fontSize: '0.875rem', marginBottom: '1.25rem' }}>מושלם להתחלה</p>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="font-display" style={{ fontSize: '2.25rem' }}>₪0</span>
              <span style={{ color: '#8e8e9a', fontSize: '0.875rem', marginRight: '0.25rem' }}>/לתמיד</span>
            </div>
            <a href="https://amirnet.vercel.app/login" style={{
              display: 'block', width: '100%', textAlign: 'center', padding: '0.75rem',
              borderRadius: '9999px', fontWeight: 600, color: '#f0f0f5', textDecoration: 'none', ...glass,
            }}>התחל עכשיו</a>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span style={{ color: '#8e8e9a' }}>{f.label}</span>
                  <span>{f.free}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium */}
          <div style={{
            borderRadius: '1.25rem', padding: '1.75rem', position: 'relative',
            background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(24px)',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#12121a,#12121a),linear-gradient(135deg,#fb923c,#ec4899,#9333ea)',
            backgroundOrigin: 'border-box', backgroundClip: 'padding-box,border-box',
          }}>
            <div style={{
              position: 'absolute', top: '-0.625rem', right: '1.25rem',
              background: 'linear-gradient(135deg,#fb923c,#ec4899,#9333ea)',
              color: 'white', fontSize: '0.75rem', fontWeight: 700,
              padding: '0.2rem 0.875rem', borderRadius: '9999px',
            }}>הכי פופולרי</div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', marginTop: '0.375rem' }}>פרימיום</h3>
            <p style={{ color: '#8e8e9a', fontSize: '0.875rem', marginBottom: '1.25rem' }}>גישה מלאה לכל התכנים</p>
            <div style={{ marginBottom: '1.25rem' }}>
              {annual && <span style={{ color: '#8e8e9a', fontSize: '1rem', textDecoration: 'line-through', marginLeft: '0.375rem' }}>₪29.9</span>}
              <span className="font-display gradient-text" style={{ fontSize: '2.25rem' }}>₪{price.toFixed(1)}</span>
              <span style={{ color: '#8e8e9a', fontSize: '0.875rem', marginRight: '0.25rem' }}>/חודש</span>
            </div>
            <a href="https://amirnet.vercel.app/login" style={{
              display: 'block', width: '100%', textAlign: 'center', padding: '0.75rem',
              borderRadius: '9999px', fontWeight: 600, color: 'white', textDecoration: 'none',
              background: 'linear-gradient(135deg,#fb923c,#ec4899,#9333ea)',
              animation: 'pulse-glow 2.5s ease-in-out infinite',
            }}>שדרג עכשיו</a>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span style={{ color: '#8e8e9a' }}>{f.label}</span>
                  <span style={{ fontWeight: 600, color: '#8B5CF6' }}>{f.premium}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
