/* AI tool brand marks — simplified SVG versions for the "trusted stack" marquee.
   Kept minimal and monochromatic so they sit cleanly on dark surfaces. */

const OpenAI = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="OpenAI">
    <path d="M36.5 16.5a9.9 9.9 0 0 0-.86-8.13 10 10 0 0 0-10.78-4.8 10 10 0 0 0-7.55-3.4 10 10 0 0 0-9.54 6.93A9.9 9.9 0 0 0 1.1 11.7a10 10 0 0 0 1.24 11.78 9.9 9.9 0 0 0 .86 8.13 10 10 0 0 0 10.79 4.8 10 10 0 0 0 7.54 3.4 10 10 0 0 0 9.54-6.94 9.9 9.9 0 0 0 6.67-4.84 10 10 0 0 0-1.24-11.78Zm-15.02 21a7.4 7.4 0 0 1-4.76-1.72l.23-.13 7.91-4.57a1.3 1.3 0 0 0 .65-1.13v-11.16l3.34 1.94a.12.12 0 0 1 .07.1v9.24a7.43 7.43 0 0 1-7.44 7.43Zm-15.97-6.82a7.4 7.4 0 0 1-.88-4.97l.23.14 7.92 4.57a1.3 1.3 0 0 0 1.3 0l9.67-5.58v3.85a.13.13 0 0 1-.05.1l-8 4.62a7.44 7.44 0 0 1-10.19-2.73Zm-2.08-17.27a7.4 7.4 0 0 1 3.87-3.27v9.41a1.28 1.28 0 0 0 .65 1.13l9.62 5.55-3.34 1.93a.13.13 0 0 1-.12 0L6.13 23.55a7.44 7.44 0 0 1-2.7-10.14Zm27.5 6.4-9.67-5.6 3.33-1.92a.13.13 0 0 1 .12 0l8 4.61a7.44 7.44 0 0 1-1.15 13.42v-9.4a1.3 1.3 0 0 0-.63-1.12Zm3.32-5-.23-.14-7.9-4.59a1.3 1.3 0 0 0-1.31 0l-9.66 5.58V11.8a.13.13 0 0 1 .05-.1l8-4.62a7.43 7.43 0 0 1 11.05 7.7Zm-20.95 6.83-3.34-1.93a.13.13 0 0 1-.07-.1V10.4a7.43 7.43 0 0 1 12.18-5.71l-.23.13L13.93 9.4a1.3 1.3 0 0 0-.65 1.13Zm1.82-3.91 4.3-2.48 4.3 2.48v4.97l-4.3 2.48-4.3-2.48Z" fill={color}/>
  </svg>
);

const ClaudeAI = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Claude">
    <path d="M9.9 26.4 16 23l.1-.3-.1-.2h-.3l-1 0-3.4 0-3 0-2.9-.2-2.7-.3-1.3-.3-1.2-.4-.1-.5.2-.4.4-.3.6-.2 1.3-.2 2.7-.3 2.9-.2 3-.1 3.4 0 1 0h.3l-.1-.2-.1-.1L11 13.4l-3.6-2.4-1.9-1.4-1-.7-.5-.6-.2-1.6 1-1.1L4 5.6h1.8l1.8.4 2 .8 2 1 4.3 2.2 2.7 1.6.6.4-.2-.6-.2-.7-1-1.7-.9-1.7-.6-1.5-.3-.8-.3-1.4-.1-1.4.4-1.1.6-.6 1.2-.4 1.2.3 1 .6.6.6 1 1.5.9 1.7.7 1.6.7 2 .3 1.1.1.6.1-.1V14l.2-2.5.4-3 .5-1.5.7-.7H22l1.2 1L23 7.7l-.5 3.3-1.3 6.4h.7l4-3.5 1.7-1.2 1-.6.5.3v.6l-.6.6-2.4 3-2.4 2.9-.3.4.3-.2 5.4-1 2.8-.5h1.4l.6.4-.2 1-.2.4-1.7.4-3.3.6-4.5.9h-.1l.1.1 2 .2h2.6l4.5.4 1.3.7.7 1-.1.7-2 1-2.4-.6-5.7-1.3-1.9-.5h-.4l-.1.1 5.3 4.5.7.5.4.6-.1.6-.5.5-1-.1-1.8-1-2-1.5-1.7-1.4-1-1-.1.2 1.5 4.3 1.6 5 1.3 2.4-.6.7-.7.1-.7-.1-.8-.4-.4-.5-.4-.5-1.5-3.2-1.6-3.6-1.3-2.7-.3-1.5-.3-.4-.4-.5-.6 1.5-.7 5.6-1.1 2-.6.3-.7.2-.6-.4-.3-1 .5-1.6.6-2.7.5-2.2L17 25h-.1l-2 2.7-3.1 3.3-2 1.5-.7.5h-.5l-.4-.5L8.4 32l.3-.7.3-.3.5-.4 1.4-1L10.9 26.4Z" fill={color}/>
  </svg>
);

const Cursor = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Cursor">
    <path d="M5.4 6 20 14.4v17L5.4 23V6Z" fill={color} opacity="0.6"/>
    <path d="M34.6 6 20 14.4 5.4 6 20 1.6 34.6 6Z" fill={color} opacity="0.85"/>
    <path d="M34.6 6v17L20 31.4V14.4L34.6 6Z" fill={color}/>
  </svg>
);

const Github = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="GitHub">
    <path fillRule="evenodd" clipRule="evenodd" d="M20 1.7C9.9 1.7 1.7 9.9 1.7 20c0 8.1 5.2 15 12.5 17.4.9.2 1.3-.4 1.3-.9v-3.3c-5.1 1.1-6.2-2.4-6.2-2.4-.8-2.1-2-2.7-2-2.7-1.7-1.1.1-1.1.1-1.1 1.8.1 2.8 1.9 2.8 1.9 1.6 2.8 4.3 2 5.4 1.5.2-1.2.6-2 1.2-2.5-4-.5-8.3-2-8.3-9 0-2 .7-3.6 1.9-4.9-.2-.5-.8-2.4.2-4.9 0 0 1.5-.5 5 1.9 1.5-.4 3-.6 4.6-.6s3.1.2 4.6.6c3.5-2.4 5-1.9 5-1.9 1 2.5.4 4.4.2 4.9 1.2 1.3 1.9 2.9 1.9 4.9 0 7-4.3 8.6-8.3 9 .7.6 1.2 1.7 1.2 3.4v5c0 .5.3 1 1.3.9 7.3-2.5 12.5-9.3 12.5-17.4C38.3 9.9 30.1 1.7 20 1.7Z" fill={color}/>
  </svg>
);

const Grok = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Grok">
    <path d="M9.5 32 22.5 16 31 25.5v6.5h-5.5v-4L22 24l-7.5 8H9.5Z" fill={color}/>
    <path d="M9.5 22V8h5.5v8l11-8H32L9.5 24V22Z" fill={color}/>
  </svg>
);

const Replicate = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Replicate">
    <path d="M4 6h32v5H10v3H4V6Z" fill={color}/>
    <path d="M4 16h26v5H10v3H4v-8Z" fill={color}/>
    <path d="M4 26h20v8h-6v-3H4v-5Z" fill={color}/>
  </svg>
);

const GoogleWordmark = ({ size = 40, color = "currentColor", className = "" }) => (
  <svg height={size} viewBox="0 0 120 40" fill="none" aria-label="Google" className={className} style={{ height: size, width: 'auto' }}>
    <text x="0" y="29" fontFamily="'Geist', system-ui, sans-serif" fontWeight="500" fontSize="32" letterSpacing="-1.5" fill={color}>Google</text>
  </svg>
);

const Anthropic = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Anthropic">
    <path d="M11.4 8h4.2L22.8 32h-4.4l-1.5-5.1H8.8L7.3 32H3L11.4 8Zm-1.5 15.3h6L13 13.5l-3.1 9.8ZM27.2 8H31v24h-3.8V8Z" fill={color}/>
  </svg>
);

const Vercel = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Vercel">
    <path d="M20 6 38 34H2L20 6Z" fill={color}/>
  </svg>
);

const Figma = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Figma">
    <circle cx="20" cy="20" r="5.5" fill={color}/>
    <path d="M14.5 2.5h5.5v11h-5.5a5.5 5.5 0 1 1 0-11Z" fill={color} opacity="0.85"/>
    <path d="M20 2.5h5.5a5.5 5.5 0 1 1 0 11H20v-11Z" fill={color} opacity="0.7"/>
    <path d="M20 13.5h5.5a5.5 5.5 0 1 1 0 11H20v-11Z" fill={color} opacity="0.55"/>
    <path d="M14.5 24.5H20V31a5.5 5.5 0 1 1-5.5-5.5v-1Z" fill={color} opacity="0.4"/>
  </svg>
);

const Notion = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Notion">
    <rect x="4" y="4" width="32" height="32" rx="3" stroke={color} strokeWidth="2.5" fill="none"/>
    <path d="M13 12h3.5l7 11V12H27v16h-3.5l-7-11v11H13V12Z" fill={color}/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────
// COMPOUND BRAND MARK
// Three stacked chevrons — each layer slightly bigger, suggesting value
// compounding upward. Works as a square icon or alongside the wordmark.
// ─────────────────────────────────────────────────────────────────────
const CompoundMark = ({ size = 32, accent = "#CDFF3F", base = "#F5F5F5" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Compound">
    <path d="M6 28 L20 18 L34 28" stroke={base} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
    <path d="M6 22 L20 12 L34 22" stroke={base} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    <path d="M6 16 L20 6 L34 16" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompoundLogo = ({ height = 28, accent = "#CDFF3F", base = "#F5F5F5" }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height }}>
    <CompoundMark size={height} accent={accent} base={base} />
    <span style={{
      color: base,
      fontFamily: "'Geist', system-ui, sans-serif",
      fontWeight: 600,
      fontSize: height * 0.62,
      letterSpacing: '-0.02em',
    }}>Compound</span>
  </div>
);

Object.assign(window, {
  OpenAI, ClaudeAI, Cursor, Github, Grok, Replicate, GoogleWordmark,
  Anthropic, Vercel, Figma, Notion,
  CompoundMark, CompoundLogo,
});
