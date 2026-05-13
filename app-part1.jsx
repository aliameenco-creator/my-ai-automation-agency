/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio,
   OpenAI, ClaudeAI, Cursor, Github, Grok, Replicate, GoogleWordmark,
   Anthropic, Vercel, Figma, Notion, CompoundMark, CompoundLogo */

const { useState, useEffect, useRef } = React;

const CALENDLY = 'https://calendly.com/access-aliameen/30min';

// ─── Scroll reveal hook ───────────────────────────────────────────────
function useScrollReveal(threshold) {
  threshold = threshold || 0.1;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: threshold });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);
  return [ref, visible];
}

// ─────────────────────────────────────────────────────────────────────
// TWEAKABLE DEFAULTS
// ─────────────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#CDFF3F",
  "bgTone": "#0A0A0B",
  "density": "comfortable"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#CDFF3F",
  "#7AF0C2",
  "#FFB547",
  "#7BB7FF",
];
const BG_OPTIONS = [
  "#0A0A0B",
  "#000000",
  "#15151A",
];

// ─────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────
function Nav({ accent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(function () {
    var on = function () { setScrolled(window.scrollY > 12); };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return function () { window.removeEventListener('scroll', on); };
  }, []);

  var links = ['Services', 'Process', 'Work', 'Pricing'];

  return React.createElement('header', {
    style: {
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled || menuOpen ? 'rgba(10,10,11,0.92)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(150%)' : 'none',
      WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(150%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }
  },
    React.createElement('div', {
      className: 'container',
      style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }
    },
      React.createElement('a', { href: '#', style: { textDecoration: 'none' } },
        React.createElement(CompoundLogo, { height: 26, accent: accent })
      ),
      React.createElement('nav', { style: { display: 'flex', gap: 32 }, className: 'nav-links' },
        links.map(function (l) {
          return React.createElement('a', {
            key: l,
            href: '#' + l.toLowerCase(),
            style: { color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14.5, fontWeight: 400, transition: 'color 0.15s ease' },
            onMouseOver: function (e) { e.currentTarget.style.color = 'var(--text)'; },
            onMouseOut: function (e) { e.currentTarget.style.color = 'var(--text-muted)'; },
          }, l);
        })
      ),
      React.createElement('a', {
        href: CALENDLY,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'btn btn-primary nav-cta',
        style: { padding: '9px 18px', fontSize: 14 }
      },
        'Book an audit',
        React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 16 16', fill: 'none' },
          React.createElement('path', { d: 'M3 8h10M9 4l4 4-4 4', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' })
        )
      ),
      React.createElement('button', {
        className: 'nav-hamburger',
        onClick: function () { setMenuOpen(function (o) { return !o; }); },
        'aria-label': 'Toggle menu',
        style: { background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: 5 }
      },
        React.createElement('span', { style: { display: 'block', width: 22, height: 1.5, background: 'var(--text)', transition: 'transform 0.25s ease', transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' } }),
        React.createElement('span', { style: { display: 'block', width: 22, height: 1.5, background: 'var(--text)', transition: 'opacity 0.25s ease', opacity: menuOpen ? 0 : 1 } }),
        React.createElement('span', { style: { display: 'block', width: 22, height: 1.5, background: 'var(--text)', transition: 'transform 0.25s ease', transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' } })
      )
    ),
    React.createElement('div', {
      className: 'nav-mobile-menu',
      style: {
        maxHeight: menuOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.38s cubic-bezier(0.2,0.7,0.2,1)',
        borderTop: menuOpen ? '1px solid var(--border)' : '1px solid transparent',
      }
    },
      React.createElement('div', { style: { padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: 4 } },
        links.map(function (l) {
          return React.createElement('a', {
            key: l,
            href: '#' + l.toLowerCase(),
            onClick: function () { setMenuOpen(false); },
            style: { color: 'var(--text-muted)', textDecoration: 'none', fontSize: 16, padding: '12px 0', borderBottom: '1px solid var(--border)', transition: 'color 0.15s ease' },
            onMouseOver: function (e) { e.currentTarget.style.color = 'var(--text)'; },
            onMouseOut: function (e) { e.currentTarget.style.color = 'var(--text-muted)'; },
          }, l);
        }),
        React.createElement('a', {
          href: CALENDLY,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'btn btn-primary',
          style: { marginTop: 14, textAlign: 'center', justifyContent: 'center' },
          onClick: function () { setMenuOpen(false); }
        }, 'Book a free audit')
      )
    ),
    React.createElement('style', null, `
      @media (max-width: 880px) {
        .nav-links { display: none !important; }
        .nav-cta { display: none !important; }
        .nav-hamburger { display: flex !important; }
      }
      @media (min-width: 881px) {
        .nav-mobile-menu { display: none !important; }
      }
    `)
  );
}

// ─────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────
function Hero({ accent }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 180,
      paddingBottom: 120,
      overflow: 'hidden',
      backgroundImage: "url('./hero section image.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center 30%',
    }}>
      {/* Dark overlay — gradient for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, rgba(10,10,11,0.75) 0%, rgba(10,10,11,0.88) 55%, rgba(10,10,11,1) 100%)',
        zIndex: 0,
      }} />

      <div className="grid-backdrop" style={{ zIndex: 1, opacity: 0.45 }} />

      {/* Floating accent orb */}
      <div style={{
        position: 'absolute',
        top: -180,
        right: -180,
        width: 620, height: 620,
        background: `radial-gradient(circle, ${accent}22 0%, transparent 65%)`,
        pointerEvents: 'none',
        filter: 'blur(24px)',
        zIndex: 1,
        animation: 'float-orb 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: 400, height: 400,
        background: `radial-gradient(circle, ${accent}0F 0%, transparent 70%)`,
        pointerEvents: 'none',
        filter: 'blur(32px)',
        zIndex: 1,
        animation: 'float-orb 12s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Status pill */}
        <div className="rise" style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '7px 16px 7px 12px',
            borderRadius: 999,
            background: 'rgba(19,19,22,0.75)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}>
            <span style={{ position: 'relative', width: 7, height: 7, borderRadius: '50%', background: accent }}>
              <span style={{
                position: 'absolute', inset: -3, borderRadius: '50%',
                background: accent, opacity: 0.35,
                animation: 'pulse-ring 2.2s ease-out infinite',
              }} />
            </span>
            <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              NOW BOOKING — Q3 2026 ENGAGEMENTS
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="rise" style={{
          textAlign: 'center',
          fontSize: 'clamp(40px, 7.5vw, 96px)',
          lineHeight: 1.02,
          letterSpacing: '-0.035em',
          fontWeight: 500,
          maxWidth: 1100,
          margin: '0 auto',
          color: 'var(--text)',
          animationDelay: '0.08s',
          textShadow: '0 4px 48px rgba(0,0,0,0.6)',
        }}>
          Automate the busywork.
          <br />
          <span className="serif-italic" style={{ fontWeight: 400, letterSpacing: '-0.01em', fontSize: '1.05em' }}>
            Compound
          </span>{' '}
          <span style={{ color: accent, textShadow: `0 0 60px ${accent}55` }}>the hours.</span>
        </h1>

        {/* Sub */}
        <p className="rise" style={{
          textAlign: 'center',
          fontSize: 'clamp(16px, 2.5vw, 19px)',
          lineHeight: 1.6,
          color: 'rgba(245,245,245,0.78)',
          maxWidth: 600,
          margin: '28px auto 0',
          animationDelay: '0.16s',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          We design, build, and ship AI workflows for growing teams — the kind
          that quietly return 20+ hours a week and pay for themselves before month two.
        </p>

        {/* CTAs */}
        <div className="rise" style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          marginTop: 44,
          flexWrap: 'wrap',
          animationDelay: '0.24s',
        }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-cta-primary">
            Book a free 30-min audit
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work" className="btn btn-ghost hero-cta-ghost">See what we've shipped</a>
        </div>

        {/* Scroll indicator */}
        <div className="rise" style={{ display: 'flex', justifyContent: 'center', marginTop: 64, animationDelay: '0.4s' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--text-dim)', animation: 'scroll-bounce 2s ease-in-out infinite' }}>
            <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>scroll</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Hero diagram */}
        <div className="rise" style={{ marginTop: 80, animationDelay: '0.36s' }}>
          <AutomationDiagram accent={accent} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.4; }
          80%, 100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-28px) scale(1.04); }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        .hero-cta-primary {
          box-shadow: 0 0 0 1px var(--accent), 0 16px 48px -8px rgba(205,255,63,0.35) !important;
          transition: transform 0.15s ease, filter 0.15s ease, box-shadow 0.15s ease !important;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 0 0 1px var(--accent), 0 20px 56px -4px rgba(205,255,63,0.5) !important;
          filter: brightness(1.08) !important;
        }
        .hero-cta-ghost {
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          background: rgba(255,255,255,0.06) !important;
        }
        @media (max-width: 600px) {
          .hero-cta-primary, .hero-cta-ghost { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// AUTOMATION DIAGRAM
// ─────────────────────────────────────────────────────────────────────
function AutomationDiagram({ accent }) {
  return (
    <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', padding: '24px 0' }}>
      <svg viewBox="0 0 1080 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity="0" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="card-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B1B1F" />
            <stop offset="100%" stopColor="#131316" />
          </linearGradient>
          <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[
          'M 180 70  C 320 70, 380 180, 520 180',
          'M 180 180 C 320 180, 380 180, 520 180',
          'M 180 290 C 320 290, 380 180, 520 180',
          'M 560 180 C 700 180, 760 70, 900 70',
          'M 560 180 C 700 180, 760 180, 900 180',
          'M 560 180 C 700 180, 760 290, 900 290',
        ].map(function (d, i) {
          return React.createElement('g', { key: i },
            React.createElement('path', { d: d, stroke: '#26262B', strokeWidth: '1.5', fill: 'none' }),
            React.createElement('path', { d: d, stroke: 'url(#flow-line)', strokeWidth: '2', fill: 'none', strokeDasharray: '6 14', style: { animation: `dash-flow ${4 + i * 0.3}s linear infinite` } })
          );
        })}

        {[
          { y: 70, label: 'Gmail', sub: '432 inbound' },
          { y: 180, label: 'Slack', sub: '#support' },
          { y: 290, label: 'HubSpot', sub: 'new leads' },
        ].map(function (n, i) {
          return React.createElement('g', { key: i },
            React.createElement('rect', { x: '48', y: n.y - 26, width: '132', height: '52', rx: '10', fill: 'url(#card-fade)', stroke: '#2A2A30', strokeWidth: '1' }),
            React.createElement('circle', { cx: '68', cy: n.y, r: '5', fill: accent }),
            React.createElement('text', { x: '86', y: n.y - 4, fill: '#F5F5F5', fontSize: '13', fontWeight: '500', fontFamily: 'Geist, sans-serif' }, n.label),
            React.createElement('text', { x: '86', y: n.y + 13, fill: '#9C9CA6', fontSize: '11', fontFamily: 'JetBrains Mono, monospace' }, n.sub)
          );
        })}

        <g filter="url(#hub-glow)">
          <rect x="500" y="140" width="100" height="80" rx="14" fill="#15151A" stroke={accent} strokeWidth="1.5" />
          <g transform="translate(550, 180)">
            <path d="M -16 8 L 0 -4 L 16 8" stroke={accent} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="1" />
            <path d="M -16 2 L 0 -10 L 16 2" stroke={accent} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <path d="M -16 -4 L 0 -16 L 16 -4" stroke={accent} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
          </g>
        </g>
        <text x="550" y="244" fill="#9C9CA6" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace" letterSpacing="0.05em">COMPOUND AGENT</text>

        {[
          { y: 70, label: 'Reply drafted', sub: '0.4s avg' },
          { y: 180, label: 'Ticket triaged', sub: 'tier-1 auto' },
          { y: 290, label: 'CRM enriched', sub: '14 fields' },
        ].map(function (n, i) {
          return React.createElement('g', { key: i },
            React.createElement('rect', { x: '900', y: n.y - 26, width: '138', height: '52', rx: '10', fill: 'url(#card-fade)', stroke: '#2A2A30', strokeWidth: '1' }),
            React.createElement('circle', { cx: '920', cy: n.y, r: '5', fill: 'none', stroke: accent, strokeWidth: '1.5' }),
            React.createElement('circle', { cx: '920', cy: n.y, r: '2', fill: accent }),
            React.createElement('text', { x: '938', y: n.y - 4, fill: '#F5F5F5', fontSize: '13', fontWeight: '500', fontFamily: 'Geist, sans-serif' }, n.label),
            React.createElement('text', { x: '938', y: n.y + 13, fill: '#9C9CA6', fontSize: '11', fontFamily: 'JetBrains Mono, monospace' }, n.sub)
          );
        })}
      </svg>

      <style>{`
        @keyframes dash-flow { to { stroke-dashoffset: -200; } }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────────────
function Marquee({ children, reverse, gap, fade }) {
  reverse = reverse || false;
  gap = gap || 80;
  fade = fade !== false;
  var items = React.Children.toArray(children);
  return (
    <div className={`marquee-wrap ${fade ? 'fade' : ''}`}>
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {[0, 1].map(function (set) {
          return (
            <div key={set} className="marquee-group" style={{ gap: gap + 'px', paddingRight: gap }}>
              {items.map(function (child, i) {
                return (
                  <div key={i} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                    {child}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StackSection() {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];
  return (
    <section ref={ref} style={{
      padding: '40px 0 100px',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(24px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-dim)',
          fontSize: 13,
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          The stack we automate with
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <Marquee gap={80} fade>
          <OpenAI size={40} />
          <ClaudeAI size={40} />
          <Replicate size={40} />
          <Cursor size={40} />
          <Github size={40} />
          <Grok size={40} />
          <GoogleWordmark size={40} />
        </Marquee>
        <Marquee reverse gap={80} fade>
          <Anthropic size={40} />
          <Vercel size={40} />
          <Figma size={40} />
          <Notion size={40} />
          <OpenAI size={40} />
          <Replicate size={40} />
          <Cursor size={40} />
        </Marquee>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// STATS — with count-up animation
// ─────────────────────────────────────────────────────────────────────
function StatCard({ v, unit, label, index }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(v);
  const fired = useRef(false);

  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !fired.current) {
        fired.current = true;
        obs.disconnect();
        var str = String(v);
        var prefix = str.charAt(0) === '$' ? '$' : '';
        var suffix = str.charAt(str.length - 1) === '×' ? '×' : '';
        var num = parseFloat(str.replace(/[$×]/g, ''));
        var isFloat = str.indexOf('.') !== -1;
        var dur = 1800;
        var t0 = performance.now();
        function tick(now) {
          var p = Math.min((now - t0) / dur, 1);
          var ease = 1 - Math.pow(1 - p, 4);
          var val = ease * num;
          setDisplay(prefix + (isFloat ? val.toFixed(1) : Math.round(val)) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="stat-cell" style={{
      padding: '40px 32px',
      opacity: 0,
      animation: 'rise 0.65s ' + (0.05 + index * 0.1) + 's cubic-bezier(0.2,0.7,0.2,1) both',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 18 }}>
        <span style={{
          fontSize: 56,
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: 'var(--text)',
          fontVariantNumeric: 'tabular-nums',
        }}>{display}</span>
        <span className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{unit}</span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.45 }}>{label}</p>
    </div>
  );
}

function Stats({ accent }) {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];
  var stats = [
    { v: '28', unit: 'hrs / week', label: 'Returned per ops team, on average' },
    { v: '$9.40', unit: 'per task', label: 'AI-assisted vs $47 fully manual' },
    { v: '14', unit: 'days', label: 'From discovery to first automation live' },
    { v: '6.2', unit: '× ROI', label: 'Median first-year return on spend' },
  ];

  return (
    <section ref={ref} style={{
      position: 'relative',
      padding: '100px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(30px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 56,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div style={{ maxWidth: 560 }}>
            <span className="section-label"><span className="dot" />THE MATH</span>
            <h2 style={{
              marginTop: 16,
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              fontWeight: 500,
            }}>
              Small automations,{' '}
              <span className="serif-italic" style={{ color: accent }}>compounding</span> weekly.
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: 360, fontSize: 15.5, lineHeight: 1.55 }}>
            Numbers from twelve client engagements in the last 18 months. We share the
            methodology — and the failures — in the audit.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 0,
          border: '1px solid var(--border)',
          borderRadius: 16,
          overflow: 'hidden',
          background: 'var(--bg)',
        }}>
          {stats.map(function (s, i) {
            return React.createElement(StatCard, Object.assign({ key: i, index: i }, s, { accent: accent }));
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .stat-cell { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .stat-cell:last-child { border-bottom: none !important; }
        }
        @media (min-width: 761px) {
          .stat-cell:not(:last-child) { border-right: 1px solid var(--border) !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────
function Services({ accent }) {
  var result = useScrollReveal(0.05);
  var ref = result[0]; var visible = result[1];
  var services = [
    {
      title: 'Workflow automation',
      desc: 'Multi-step pipelines across your tools — CRM, helpdesk, billing, docs. One trigger, twenty steps done.',
      tags: ['Make', 'n8n', 'Zapier+'],
      icon: React.createElement(ServiceIconWorkflow, { accent: accent }),
    },
    {
      title: 'AI agents',
      desc: 'Autonomous agents that handle inbound, qualify, triage, and respond — with your voice and your guardrails.',
      tags: ['Claude', 'GPT-4o', 'Custom'],
      icon: React.createElement(ServiceIconAgent, { accent: accent }),
    },
    {
      title: 'Data & reporting',
      desc: 'Pipelines that clean, enrich, and surface what matters. Dashboards your team actually opens.',
      tags: ['BigQuery', 'dbt', 'Metabase'],
      icon: React.createElement(ServiceIconData, { accent: accent }),
    },
    {
      title: 'Custom integrations',
      desc: "Glue between systems that don't talk to each other. Built once, owned forever — your code, your repo.",
      tags: ['TypeScript', 'Python', 'Webhooks'],
      icon: React.createElement(ServiceIconIntegration, { accent: accent }),
    },
  ];

  return (
    <section id="services" ref={ref} style={{
      padding: '120px 0',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(32px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 720 }}>
          <span className="section-label"><span className="dot" />SERVICES</span>
          <h2 style={{
            marginTop: 16,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 500,
          }}>
            Four flavours of work that
            <br />
            <span className="serif-italic" style={{ color: accent }}>actually move the needle.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {services.map(function (s, i) {
            return (
              <div key={i} className="lift service-card" style={{
                padding: 32,
                border: '1px solid var(--border)',
                borderRadius: 18,
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                minHeight: 300,
                opacity: 0,
                animation: visible ? `rise 0.65s ${0.08 + i * 0.1}s cubic-bezier(0.2,0.7,0.2,1) both` : 'none',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 0% 0%, ${accent}06, transparent 60%)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }} className="card-glow" />
                <div style={{
                  width: 56, height: 56,
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 21, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.55 }}>{s.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {s.tags.map(function (t) { return React.createElement('span', { key: t, className: 'tag' }, t); })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .service-card:hover .card-glow { opacity: 1 !important; }
      `}</style>
    </section>
  );
}

function ServiceIconWorkflow({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="3" width="8" height="6" rx="1.5" stroke={accent} strokeWidth="1.6"/>
      <rect x="18" y="3" width="8" height="6" rx="1.5" stroke="#9C9CA6" strokeWidth="1.6"/>
      <rect x="2" y="19" width="8" height="6" rx="1.5" stroke="#9C9CA6" strokeWidth="1.6"/>
      <rect x="18" y="19" width="8" height="6" rx="1.5" stroke={accent} strokeWidth="1.6"/>
      <path d="M10 6h8M6 9v10M22 9v10M10 22h8" stroke={accent} strokeWidth="1.6" strokeDasharray="2 2"/>
    </svg>
  );
}
function ServiceIconAgent({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="5" stroke={accent} strokeWidth="1.6"/>
      <circle cx="14" cy="14" r="10" stroke="#9C9CA6" strokeWidth="1.6" strokeDasharray="2 3"/>
      <circle cx="14" cy="4" r="1.6" fill={accent}/>
      <circle cx="24" cy="14" r="1.6" fill={accent}/>
      <circle cx="14" cy="24" r="1.6" fill={accent}/>
      <circle cx="4" cy="14" r="1.6" fill={accent}/>
    </svg>
  );
}
function ServiceIconData({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M3 23V11" stroke="#9C9CA6" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 23V15" stroke="#9C9CA6" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M17 23V8" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M24 23V4" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M3 26h22" stroke="#9C9CA6" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function ServiceIconIntegration({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M10 4h-4a2 2 0 0 0-2 2v4" stroke={accent} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M18 4h4a2 2 0 0 1 2 2v4" stroke="#9C9CA6" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M10 24h-4a2 2 0 0 1-2-2v-4" stroke="#9C9CA6" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M18 24h4a2 2 0 0 0 2-2v-4" stroke={accent} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3.5" stroke={accent} strokeWidth="1.6"/>
      <path d="M14 4v6.5M14 24v-6.5M4 14h6.5M24 14h-6.5" stroke="#9C9CA6" strokeWidth="1.6"/>
    </svg>
  );
}

Object.assign(window, {
  Nav, Hero, AutomationDiagram, StackSection, Stats, Services,
  ACCENT_OPTIONS, BG_OPTIONS, TWEAK_DEFAULTS, CALENDLY,
  useScrollReveal,
});
