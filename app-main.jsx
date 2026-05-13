/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio,
   Nav, Hero, StackSection, Stats, Services,
   ACCENT_OPTIONS, BG_OPTIONS, TWEAK_DEFAULTS, CompoundMark, CompoundLogo,
   CALENDLY, useScrollReveal */

const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

// ─────────────────────────────────────────────────────────────────────
// PROCESS — 4-step horizontal timeline
// ─────────────────────────────────────────────────────────────────────
function Process({ accent }) {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];

  var steps = [
    {
      k: '01',
      title: 'Discover',
      time: 'Week 0 — half day',
      desc: 'We shadow the work. Map the tools, the tickets, the time sinks. Walk out with the three highest-leverage automations ranked by hours-saved-per-dollar.',
    },
    {
      k: '02',
      title: 'Design',
      time: 'Week 1',
      desc: 'One-page spec per automation: trigger, steps, edge cases, success metric. You sign off before a single line is written.',
    },
    {
      k: '03',
      title: 'Build',
      time: 'Weeks 2–4',
      desc: 'Two-week sprints. Live demo every Friday. Anything we ship is in your repos, your tools, your control — no agency lock-in.',
    },
    {
      k: '04',
      title: 'Hand off',
      time: 'Week 5+',
      desc: 'Written docs, recorded training, and 90 days of priority Slack support. Then we leave you alone — unless you want round two.',
    },
  ];

  return (
    <section id="process" ref={ref} style={{
      padding: '120px 0',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(32px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 760 }}>
          <span className="section-label"><span className="dot" />PROCESS</span>
          <h2 style={{
            marginTop: 16,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 500,
          }}>
            Four weeks to your first
            <br />
            <span className="serif-italic" style={{ color: accent }}>real</span> automation.
          </h2>
        </div>

        {/* Timeline track */}
        <div style={{ position: 'relative' }}>
          {/* horizontal line — hidden on mobile */}
          <svg className="process-timeline-svg" style={{
            position: 'absolute',
            top: 32, left: 0, right: 0,
            height: 2,
            width: '100%',
            zIndex: 0,
          }} preserveAspectRatio="none" viewBox="0 0 1000 2">
            <line x1="40" y1="1" x2="960" y2="1" stroke="var(--border-strong)" strokeWidth="1"/>
            <line x1="40" y1="1" x2="960" y2="1" stroke={accent} strokeWidth="1"
              strokeDasharray="4 8" opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite"/>
            </line>
          </svg>

          <div className="process-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            position: 'relative',
            zIndex: 1,
          }}>
            {steps.map(function (s, i) {
              return (
                <div key={s.k} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  opacity: 0,
                  animation: visible ? `rise 0.65s ${0.1 + i * 0.13}s cubic-bezier(0.2,0.7,0.2,1) both` : 'none',
                }}>
                  <div style={{
                    width: 64, height: 64,
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: `1px solid ${i === 0 ? accent : 'var(--border-strong)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 28,
                    position: 'relative',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}>
                    <span className="mono" style={{
                      fontSize: 14,
                      color: i === 0 ? accent : 'var(--text-muted)',
                      fontWeight: 500,
                    }}>{s.k}</span>
                    {i === 0 && (
                      <span style={{
                        position: 'absolute',
                        inset: -6,
                        borderRadius: '50%',
                        border: `1px solid ${accent}`,
                        opacity: 0.3,
                        animation: 'process-ping 2.4s ease-out infinite',
                      }} />
                    )}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 6 }}>{s.title}</h3>
                  <span className="mono" style={{
                    fontSize: 12,
                    color: 'var(--text-dim)',
                    letterSpacing: '0.04em',
                    marginBottom: 14,
                    textTransform: 'uppercase',
                  }}>{s.time}</span>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes process-ping {
          0% { transform: scale(0.8); opacity: 0.4; }
          80%, 100% { transform: scale(1.6); opacity: 0; }
        }
        @media (max-width: 640px) {
          .process-timeline-svg { display: none; }
          .process-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// CASE STUDY SPOTLIGHT
// ─────────────────────────────────────────────────────────────────────
function CaseStudy({ accent }) {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];

  return (
    <section id="work" ref={ref} style={{
      padding: '60px 0 120px',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(32px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      <div className="container">
        <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="section-label"><span className="dot" />A RECENT BUILD</span>
            <h2 style={{
              marginTop: 16,
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              fontWeight: 500,
              maxWidth: 720,
            }}>
              How a Series&nbsp;B fintech traded
              <br />
              <span className="serif-italic" style={{ color: accent }}>37 hours</span> of weekly review for four.
            </h2>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--text-muted)',
            fontSize: 14,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'color 0.15s ease',
          }}
          onMouseOver={function (e) { e.currentTarget.style.color = 'var(--text)'; }}
          onMouseOut={function (e) { e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            Discuss your project
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div style={{
          border: '1px solid var(--border)',
          borderRadius: 24,
          background: 'var(--surface)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }} className="case-grid">
          {/* Left: copy */}
          <div style={{ padding: '48px 48px 48px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
              <span className="tag accent">FINTECH</span>
              <span className="tag">KYC AUTOMATION</span>
              <span className="tag">8-WEEK BUILD</span>
            </div>

            <h3 style={{
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: 18,
            }}>
              AI-assisted KYC document review for a Series&nbsp;B lending platform.
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
              An 80-person ops team was spending 41 weekly hours visually checking
              ID, address proof, and bank statements. We shipped a Claude-powered
              triage layer that scores docs, flags only the ambiguous 6%,
              and routes the rest straight through.
            </p>

            {/* metric pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 32 }}>
              {[
                { v: '90%', l: 'fewer manual reviews' },
                { v: '$312k', l: 'annualised savings' },
                { v: '6 wks', l: 'to full rollout' },
              ].map(function (m) {
                return (
                  <div key={m.l} style={{
                    padding: '16px 14px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseOver={function (e) { e.currentTarget.style.borderColor = accent + '60'; }}
                  onMouseOut={function (e) { e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', color: accent, marginBottom: 4 }}>{m.v}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.l}</div>
                  </div>
                );
              })}
            </div>

            <blockquote style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 16, marginTop: 'auto' }}>
              <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--text)', marginBottom: 12, fontStyle: 'italic' }}>
                "We kept waiting for the catch. Eight weeks in, the catch was
                that we now had eight engineers free to ship product."
              </p>
              <footer style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                — Director of Ops, Series B fintech
              </footer>
            </blockquote>
          </div>

          {/* Right: visualization */}
          <div style={{
            background: 'var(--bg)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 48,
            borderLeft: '1px solid var(--border)',
            minHeight: 480,
          }}>
            <CaseStudyChart accent={accent} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .case-grid { grid-template-columns: 1fr !important; }
          .case-grid > div:last-child { border-left: none !important; border-top: 1px solid var(--border) !important; min-height: 360px !important; }
          .case-grid > div:first-child { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function CaseStudyChart({ accent }) {
  var data = [41, 40, 41, 38, 32, 24, 17, 11, 7, 5, 4, 4];
  var max = 42;
  var W = 360;
  var H = 320;
  var padX = 30;
  var padY = 30;
  var barW = (W - padX * 2) / data.length - 4;

  var ref = useRef2(null);
  var [animated, setAnimated] = useState2(false);

  useEffect2(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { setAnimated(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H + 50}`} style={{ width: '100%', maxWidth: 420 }}>
      <text x={padX} y={20} fontSize="11" fill="#9C9CA6" fontFamily="JetBrains Mono, monospace" letterSpacing="0.05em">WEEKLY REVIEW HOURS</text>
      <text x={W - padX} y={20} fontSize="11" fill="#9C9CA6" textAnchor="end" fontFamily="JetBrains Mono, monospace" letterSpacing="0.05em">12 WEEKS</text>

      {[0, 0.25, 0.5, 0.75, 1].map(function (p, i) {
        return React.createElement('line', { key: i, x1: padX, x2: W - padX, y1: padY + (H - padY) * p, y2: padY + (H - padY) * p, stroke: '#26262B', strokeDasharray: '2 4' });
      })}

      {data.map(function (v, i) {
        var fullH = (v / max) * (H - padY);
        var h = animated ? fullH : 0;
        var x = padX + i * (barW + 4);
        var y = H - h;
        var isAfter = i >= 4;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={h} rx={2}
              fill={isAfter ? accent : '#3A3A42'}
              opacity={isAfter ? (0.4 + (i - 3) * 0.08) : 0.9}
              style={{ transition: `height 0.8s ${i * 0.05}s cubic-bezier(0.2,0.7,0.2,1), y 0.8s ${i * 0.05}s cubic-bezier(0.2,0.7,0.2,1)` }}
            />
          </g>
        );
      })}

      <line x1={padX + 4 * (barW + 4)} x2={padX + 4 * (barW + 4)} y1={padY} y2={H + 10} stroke={accent} strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      <text x={padX + 4 * (barW + 4) + 8} y={padY + 12} fontSize="10" fill={accent} fontFamily="JetBrains Mono, monospace" letterSpacing="0.04em">AUTOMATION LIVE</text>

      <line x1={padX} x2={W - padX} y1={H} y2={H} stroke="#3A3A42"/>

      {[0, 5, 11].map(function (i) {
        return React.createElement('text', {
          key: i,
          x: padX + i * (barW + 4) + barW / 2,
          y: H + 18,
          fontSize: '10', fill: '#5C5C66', textAnchor: 'middle',
          fontFamily: 'JetBrains Mono, monospace',
        }, 'W' + (i + 1));
      })}

      <g transform={`translate(${padX}, ${H + 40})`}>
        <rect x={0} y={0} width={10} height={10} fill="#3A3A42" rx={2}/>
        <text x={16} y={9} fontSize="10" fill="#9C9CA6" fontFamily="Geist, sans-serif">manual</text>
        <rect x={70} y={0} width={10} height={10} fill={accent} rx={2}/>
        <text x={86} y={9} fontSize="10" fill="#9C9CA6" fontFamily="Geist, sans-serif">automated</text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
// PRICING TEASER
// ─────────────────────────────────────────────────────────────────────
function PricingTeaser({ accent }) {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];

  var tiers = [
    {
      name: 'Audit',
      price: 'Free',
      sub: '30-min call',
      desc: 'We map your stack, identify three highest-leverage automations, and email you a written plan within 48 hours.',
      cta: 'Book the audit',
      featured: false,
    },
    {
      name: 'Sprint',
      price: '$14k',
      sub: 'per automation',
      desc: 'One automation, end-to-end. Discovery → design → build → hand-off in 4 weeks. Flat fee, no surprises.',
      cta: 'Start a sprint',
      featured: true,
    },
    {
      name: 'Embedded',
      price: '$22k',
      sub: 'per month',
      desc: 'A senior automation engineer embedded with your team. Rolling roadmap, weekly demos, monthly retros.',
      cta: 'Talk to us',
      featured: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} style={{
      padding: '60px 0 120px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(32px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <span className="section-label"><span className="dot" />PRICING</span>
          <h2 style={{
            marginTop: 16,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 500,
          }}>
            Flat fees. Predictable hours.
            <br />
            <span className="serif-italic" style={{ color: accent }}>No retainers</span> you don't use.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {tiers.map(function (t, i) {
            return (
              <div key={t.name} className="lift" style={{
                padding: 36,
                border: t.featured ? `1px solid ${accent}` : '1px solid var(--border)',
                background: t.featured ? `linear-gradient(180deg, ${accent}0F, var(--surface) 60%)` : 'var(--surface)',
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                position: 'relative',
                opacity: 0,
                animation: visible ? `rise 0.65s ${0.08 + i * 0.12}s cubic-bezier(0.2,0.7,0.2,1) both` : 'none',
              }}>
                {t.featured && (
                  <span className="mono" style={{
                    position: 'absolute',
                    top: 16, right: 16,
                    fontSize: 10,
                    color: accent,
                    letterSpacing: '0.06em',
                    background: accent + '15',
                    padding: '3px 8px',
                    borderRadius: 4,
                  }}>MOST BOOKED</span>
                )}
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 14, letterSpacing: '-0.01em' }}>{t.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text)' }}>{t.price}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>/ {t.sub}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.55, flex: 1 }}>{t.desc}</p>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${t.featured ? 'btn-primary' : 'btn-dark'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// CTA / CONTACT
// ─────────────────────────────────────────────────────────────────────
function CTA({ accent }) {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];
  var [email, setEmail] = useState2('');
  var [sent, setSent] = useState2(false);
  var [loading, setLoading] = useState2(false);

  var submit = function (e) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setLoading(true);
    // Simulate a brief delay then show success + open Calendly
    setTimeout(function () {
      setLoading(false);
      setSent(true);
      setTimeout(function () {
        window.open(CALENDLY, '_blank', 'noopener,noreferrer');
      }, 800);
    }, 600);
  };

  return (
    <section id="contact" ref={ref} style={{
      padding: '120px 0',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(32px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      <div className="container">
        <div style={{
          position: 'relative',
          border: '1px solid var(--border)',
          borderRadius: 28,
          background: 'var(--surface)',
          padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 56px)',
          overflow: 'hidden',
        }}>
          {/* Decorative glow */}
          <svg style={{
            position: 'absolute',
            top: -100, right: -100,
            width: 400, height: 400,
            opacity: 0.5,
            pointerEvents: 'none',
          }} viewBox="0 0 400 400">
            <defs>
              <radialGradient id="cta-glow" cx="0.5" cy="0.5">
                <stop offset="0%" stopColor={accent} stopOpacity="0.28"/>
                <stop offset="60%" stopColor={accent} stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#cta-glow)"/>
          </svg>

          <div style={{
            position: 'absolute',
            bottom: -40, left: -40,
            opacity: 0.06,
            pointerEvents: 'none',
          }}>
            <CompoundMark size={280} accent={accent} base="#FFFFFF"/>
          </div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
            <span className="section-label"><span className="dot" />CONTACT</span>
            <h2 style={{
              marginTop: 16,
              fontSize: 'clamp(32px, 5vw, 64px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              fontWeight: 500,
              marginBottom: 20,
            }}>
              Tell us where
              <br />
              <span className="serif-italic" style={{ color: accent }}>the hours</span> go.
            </h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(15px, 2vw, 17px)',
              lineHeight: 1.55,
              marginBottom: 36,
              maxWidth: 540,
            }}>
              Drop your work email. We'll book a free 30-minute audit call
              and identify your three highest-leverage automations — no sales pitch.
            </p>

            {sent ? (
              <div style={{
                padding: 24,
                background: 'var(--bg)',
                border: `1px solid ${accent}`,
                borderRadius: 16,
                maxWidth: 540,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                animation: 'rise 0.4s cubic-bezier(0.2,0.7,0.2,1) both',
              }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: '50%',
                  background: accent,
                  color: 'var(--accent-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 500, marginBottom: 4 }}>Got it — opening your booking link…</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                    Or{' '}
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ color: accent, textDecoration: 'none' }}>
                      click here to book your free audit call
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', gap: 8, maxWidth: 540, flexWrap: 'wrap' }}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={function (e) { setEmail(e.target.value); }}
                  className="field"
                  style={{ flex: 1, minWidth: 200 }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s ease' }}
                >
                  {loading ? 'Booking…' : 'Book my free audit'}
                  {!loading && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}

            {/* Trust signals */}
            <div style={{ marginTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap', color: 'var(--text-dim)', fontSize: 13 }}>
              {[
                { icon: 'M3 4h10v8H3z|M3 4l5 4 5-4', label: 'team@compound.ai' },
                { icon: 'M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z|M8 5v3l2 2', label: '24-hour reply' },
                { icon: 'M3 8l3 3 7-7', label: 'No sales calls' },
              ].map(function (item) {
                return (
                  <span key={item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      {item.icon.split('|').map(function (d, j) {
                        return React.createElement('path', { key: j, d: d, stroke: 'currentColor', strokeWidth: '1.4', strokeLinecap: 'round', strokeLinejoin: 'round' });
                      })}
                    </svg>
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────
function Footer({ accent }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '56px 0 40px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 56,
        }} className="footer-grid">
          <div>
            <CompoundLogo height={28} accent={accent}/>
            <p style={{ marginTop: 18, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, maxWidth: 280 }}>
              AI automation for teams that have outgrown spreadsheets but
              don't need a whole platform.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: 24, fontSize: 13, padding: '10px 16px' }}
            >
              Book a free audit
            </a>
          </div>

          {[
            { h: 'Services', l: [
              { t: 'Workflow automation', href: '#services' },
              { t: 'AI agents', href: '#services' },
              { t: 'Data & reporting', href: '#services' },
              { t: 'Integrations', href: '#services' },
            ]},
            { h: 'Company', l: [
              { t: 'Process', href: '#process' },
              { t: 'Case studies', href: '#work' },
              { t: 'Pricing', href: '#pricing' },
              { t: 'Contact', href: '#contact' },
            ]},
            { h: 'Contact', l: [
              { t: 'team@compound.ai', href: 'mailto:team@compound.ai' },
              { t: 'Book a call', href: CALENDLY, external: true },
              { t: 'San Francisco · Remote', href: '#' },
              { t: 'X / LinkedIn', href: '#' },
            ]},
          ].map(function (col) {
            return (
              <div key={col.h}>
                <h4 className="mono" style={{
                  fontSize: 11, color: 'var(--text-dim)', textTransform: 'uppercase',
                  letterSpacing: '0.08em', fontWeight: 500, marginBottom: 18,
                }}>{col.h}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.l.map(function (item) {
                    return (
                      <li key={item.t}>
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14, transition: 'color 0.15s ease' }}
                          onMouseOver={function (e) { e.currentTarget.style.color = 'var(--text)'; }}
                          onMouseOut={function (e) { e.currentTarget.style.color = 'var(--text-muted)'; }}
                        >{item.t}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div style={{
          paddingTop: 28,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          color: 'var(--text-dim)',
          fontSize: 12.5,
        }}>
          <span className="mono">© 2026 COMPOUND AUTOMATION INC.</span>
          <span className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 6, height: 6,
              borderRadius: '50%',
              background: accent,
              boxShadow: `0 0 8px ${accent}`,
              animation: 'status-pulse 3s ease-in-out infinite',
            }}/>
            ALL SYSTEMS NOMINAL
          </span>
        </div>
      </div>

      <style>{`
        @keyframes status-pulse {
          0%, 100% { box-shadow: 0 0 6px var(--accent); }
          50% { box-shadow: 0 0 16px var(--accent), 0 0 32px var(--accent-glow); }
        }
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────────
function App() {
  var tweakResult = useTweaks(TWEAK_DEFAULTS);
  var t = tweakResult[0]; var setTweak = tweakResult[1];
  var accent = t.accent;
  var bg = t.bgTone;
  var density = t.density || 'comfortable';

  useEffect2(function () {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-glow', accent + '2D');
    document.documentElement.style.setProperty('--bg', bg);
  }, [accent, bg]);

  useEffect2(function () {
    document.documentElement.style.fontSize = density === 'compact' ? '15px' : '16px';
  }, [density]);

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Nav accent={accent}/>
      <Hero accent={accent}/>
      <StackSection/>
      <Stats accent={accent}/>
      <Services accent={accent}/>
      <Process accent={accent}/>
      <CaseStudy accent={accent}/>
      <PricingTeaser accent={accent}/>
      <CTA accent={accent}/>
      <Footer accent={accent}/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent color" />
        <TweakColor
          label="Accent"
          value={accent}
          options={ACCENT_OPTIONS}
          onChange={function (v) { setTweak('accent', v); }}
        />
        <TweakSection label="Background tone" />
        <TweakColor
          label="Background"
          value={bg}
          options={BG_OPTIONS}
          onChange={function (v) { setTweak('bgTone', v); }}
        />
        <TweakSection label="Density" />
        <TweakRadio
          label="Spacing"
          value={density}
          options={['compact', 'comfortable']}
          onChange={function (v) { setTweak('density', v); }}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
