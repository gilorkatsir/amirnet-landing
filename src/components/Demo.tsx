import { useState } from 'react';

const glass = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.07)',
} as const;

type Tab = 'flashcard' | 'quiz' | 'vocal';

export default function Demo() {
  const [tab, setTab] = useState<Tab>('flashcard');
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const switchTab = (t: Tab) => { setTab(t); setFlipped(false); setAnswer(null); };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'flashcard', label: 'כרטיסייה', icon: '📚' },
    { id: 'quiz', label: 'חידון', icon: '📝' },
    { id: 'vocal', label: 'הקשבה', icon: '🎧' },
  ];

  return (
    <section id="demo" style={{ padding: '5rem 1.25rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            נסה <span className="gradient-text">עכשיו</span>
          </h2>
          <p style={{ color: '#8e8e9a', fontSize: '1.125rem' }}>טעימה קטנה ממה שמחכה לך</p>
        </div>

        <div style={{ ...glass, borderRadius: '1.5rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          {/* Glow */}
          <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: '15rem', height: '15rem', borderRadius: '50%', background: 'radial-gradient(circle,rgba(139,92,246,0.15),transparent)', pointerEvents: 'none' }} />

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => switchTab(t.id)} style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500,
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                ...(tab === t.id
                  ? { background: 'linear-gradient(135deg,#fb923c,#ec4899,#9333ea)', color: 'white' }
                  : { ...glass, color: '#8e8e9a' }),
              }}>
                <span>{t.icon}</span><span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ minHeight: '16rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {tab === 'flashcard' && <Flashcard flipped={flipped} onFlip={() => setFlipped(!flipped)} />}
            {tab === 'quiz' && <Quiz answer={answer} onAnswer={setAnswer} />}
            {tab === 'vocal' && <Vocal playing={playing} onToggle={() => setPlaying(!playing)} />}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem', position: 'relative', zIndex: 1 }}>
            <p style={{ color: '#8e8e9a', marginBottom: '0.75rem', fontSize: '0.875rem' }}>אהבת? יש עוד הרבה</p>
            <a href="https://amirnet.vercel.app/login" className="gradient-bg" style={{ color: 'white', fontWeight: 600, padding: '0.625rem 1.5rem', borderRadius: '9999px', display: 'inline-block', textDecoration: 'none', fontSize: '0.875rem' }}>
              התחל בחינם
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Flashcard ── */
function Flashcard({ flipped, onFlip }: { flipped: boolean; onFlip: () => void }) {
  return (
    <div style={{ width: '100%', maxWidth: '20rem', margin: '0 auto', cursor: 'pointer' }} onClick={onFlip}>
      <div style={{ perspective: '800px' }}>
        <div style={{ position: 'relative', width: '100%', height: '13rem', transformStyle: 'preserve-3d', transition: 'transform 0.5s', transform: flipped ? 'rotateY(180deg)' : 'none' }}>
          <div style={{ ...glass, position: 'absolute', inset: 0, borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backfaceVisibility: 'hidden' }}>
            <span style={{ fontSize: '0.75rem', color: '#8e8e9a', marginBottom: '0.5rem' }}>לחץ להפוך</span>
            <span style={{ fontSize: '1.875rem', fontWeight: 700, color: '#fb923c' }}>Compelling</span>
            <span style={{ fontSize: '0.875rem', color: '#8e8e9a', marginTop: '0.25rem' }}>adjective</span>
          </div>
          <div style={{ ...glass, position: 'absolute', inset: 0, borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <span style={{ fontSize: '0.75rem', color: '#8e8e9a', marginBottom: '0.5rem' }}>תרגום</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8B5CF6' }}>משכנע, מרתק</span>
            <span style={{ fontSize: '0.875rem', color: '#8e8e9a', marginTop: '0.75rem', textAlign: 'center' }}>"The evidence was compelling"</span>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: '#8e8e9a', fontSize: '0.75rem', marginTop: '0.75rem' }}>לחץ על הכרטיסייה כדי להפוך</p>
    </div>
  );
}

/* ── Quiz ── */
function Quiz({ answer, onAnswer }: { answer: number | null; onAnswer: (i: number) => void }) {
  const correct = 2;
  const opts = ['emphasize', 'diminish', 'elaborate', 'contradict'];

  return (
    <div style={{ width: '100%', maxWidth: '26rem', margin: '0 auto' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.75rem', color: '#ec4899', fontWeight: 500 }}>Sentence Completion</span>
        <p style={{ fontSize: '1.0625rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
          The professor asked the student to ___ on her initial findings before submitting the paper.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {opts.map((o, i) => {
          const picked = answer === i;
          const done = answer !== null;
          const isRight = i === correct;
          let border = 'rgba(255,255,255,0.07)';
          let bg = 'transparent';
          if (done && picked && isRight) { border = '#22c55e'; bg = 'rgba(34,197,94,0.08)'; }
          else if (done && picked) { border = '#ef4444'; bg = 'rgba(239,68,68,0.08)'; }
          else if (done && isRight) { border = 'rgba(34,197,94,0.4)'; }

          return (
            <button key={i} onClick={() => !done && onAnswer(i)} style={{
              width: '100%', textAlign: 'right', padding: '0.875rem 1rem', borderRadius: '0.75rem',
              border: `1px solid ${border}`, background: bg, color: '#f0f0f5',
              cursor: done ? 'default' : 'pointer', transition: 'all 0.2s', fontSize: '0.9375rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span><span style={{ color: '#8e8e9a', marginLeft: '0.5rem' }}>{String.fromCharCode(65 + i)}.</span>{o}</span>
              {done && isRight && <span style={{ color: '#22c55e' }}>✓</span>}
              {done && picked && !isRight && <span style={{ color: '#ef4444' }}>✗</span>}
            </button>
          );
        })}
      </div>
      {answer !== null && (
        <div style={{
          marginTop: '0.75rem', padding: '0.75rem', borderRadius: '0.75rem', fontSize: '0.875rem',
          background: answer === correct ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
          color: answer === correct ? '#22c55e' : '#ef4444',
        }}>
          {answer === correct ? '🎉 נכון! "Elaborate" = לפרט, להרחיב' : '❌ התשובה הנכונה: "elaborate" — לפרט, להרחיב'}
        </div>
      )}
    </div>
  );
}

/* ── Vocal ── */
function Vocal({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <div style={{ width: '100%', maxWidth: '18rem', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ ...glass, borderRadius: '1rem', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', height: '3.5rem', marginBottom: '1.25rem' }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{
              width: '3px', borderRadius: '2px', transition: 'all 0.3s',
              background: playing ? '#8B5CF6' : 'rgba(142,142,154,0.25)',
              height: playing ? `${14 + Math.sin(i * 0.7) * 18}px` : `${6 + Math.sin(i * 0.5) * 4}px`,
              animation: playing ? `waveform 0.7s ease-in-out ${i * 0.04}s infinite alternate` : 'none',
            }} />
          ))}
        </div>
        <button onClick={onToggle} className="gradient-bg" style={{
          width: '3.5rem', height: '3.5rem', borderRadius: '50%', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
        }}>
          {playing
            ? <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
            : <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><polygon points="6,3 20,12 6,21" /></svg>}
        </button>
        <p style={{ color: '#8e8e9a', fontSize: '0.875rem', marginTop: '1rem' }}>Section 1 — British Accent</p>
      </div>
      <style>{`@keyframes waveform { 0% { transform: scaleY(0.6); } 100% { transform: scaleY(1.4); } }`}</style>
    </div>
  );
}
