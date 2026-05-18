import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Design Mastery",
  description:
    "A private senior-interview vault for experienced developers preparing for stronger frontend, Java backend, and production engineering interviews.",
  openGraph: {
    title: "System Design Mastery",
    description:
      "High-signal notes, model answers, senior rewrites, and focused prep paths for experienced developers moving to the next role.",
    type: "website",
  },
};

const valueItems = [
  {
    icon: "icon-answer",
    title: "Sample first",
    copy: "Enough free content to judge the quality before paying.",
  },
  {
    icon: "icon-review",
    title: "Answer better",
    copy: "Turn weak answers into senior, trade-off-aware responses.",
  },
  {
    icon: "icon-production",
    title: "Prep faster",
    copy: "Day-1, 7-day, and 30-day paths for real interview timelines.",
  },
  {
    icon: "icon-logo",
    title: "Pay once",
    copy: "Lifetime Founder Access includes future vault updates.",
  },
];

const insideCards = [
  {
    tag: "Bad vs senior",
    tone: "",
    title: "React state ownership",
    copy: "See a weak answer, then rewrite it into a senior explanation covering ownership, server state, URL state, forms, and component boundaries.",
    meta: "Frontend",
    time: "12 min",
    featured: true,
  },
  {
    tag: "Java backend",
    tone: "amber",
    title: "Rate limiter trade-offs",
    copy: "Explain fixed window, sliding window, token bucket, Redis counters, abuse handling, distributed limits, and failure modes.",
    meta: "Backend",
    time: "18 min",
  },
  {
    tag: "Production",
    tone: "blue",
    title: "Debugging a slow API",
    copy: "Walk through logs, metrics, traces, database checks, cache behaviour, rollback thinking, and communication during an incident.",
    meta: "Production",
    time: "16 min",
  },
  {
    tag: "System design",
    tone: "",
    title: "Design WhatsApp Chat",
    copy: "Requirements, APIs, data model, WebSockets, fanout, delivery guarantees, offline messaging, presence, and trade-offs.",
    meta: "Architecture",
    time: "25 min",
  },
  {
    tag: "Code review",
    tone: "amber",
    title: "Spot the caching mistake",
    copy: "Review a realistic backend change and identify stale reads, invalidation gaps, missing metrics, and unsafe assumptions.",
    meta: "Review skill",
    time: "14 min",
  },
  {
    tag: "Checklist",
    tone: "blue",
    title: "30-minute interview warmup",
    copy: "A focused pre-interview checklist for trade-offs, story structure, production examples, clarifying questions, and failure modes.",
    meta: "Fast prep",
    time: "30 min",
  },
];

const tracks = [
  {
    kind: "frontend",
    icon: "icon-frontend",
    title: "Frontend Engineering",
    copy: "React, Next.js, TypeScript, browser architecture, rendering, state ownership, performance, testing, and accessibility.",
    chips: ["React", "Next.js", "TypeScript", "Performance"],
    link: "Preview frontend vault",
    href: "#vault",
  },
  {
    kind: "backend",
    icon: "icon-java",
    title: "Java Backend Engineering",
    copy: "Java 21, Spring Boot, PostgreSQL, REST APIs, transactions, validation, caching, testing, and backend system design.",
    chips: ["Java 21", "Spring Boot", "PostgreSQL", "Caching"],
    link: "See backend examples",
    href: "#inside",
  },
  {
    kind: "production",
    icon: "icon-cloud",
    title: "Production Engineering",
    copy: "Docker, CI/CD, deployment thinking, logs, metrics, health checks, rollbacks, incidents, and production debugging.",
    chips: ["Docker", "CI/CD", "Observability", "Incidents"],
    link: "See production examples",
    href: "#inside",
  },
];

const differenceItems = [
  {
    icon: "icon-answer",
    title: "Interview-first",
    copy: "Every note is shaped around what you actually need to say in interviews.",
  },
  {
    icon: "icon-production",
    title: "Production-minded",
    copy: "Go beyond definitions into failure modes, debugging, metrics, and operations.",
  },
  {
    icon: "icon-review",
    title: "Bad vs senior",
    copy: "Learn how weak answers sound, then rewrite them into stronger responses.",
  },
  {
    icon: "icon-shield",
    title: "Lifetime access",
    copy: "Pay once during early access. No monthly fees. Future vault updates included.",
  },
];

const faqItems = [
  {
    icon: "icon-answer",
    title: "Is this a subscription?",
    copy: "No. Lifetime Founder Access is a one-time payment. There are no monthly fees.",
  },
  {
    icon: "icon-review",
    title: "What do I get for free?",
    copy: "Selected notes, sample answers, and locked previews so you can judge the quality first.",
  },
  {
    icon: "icon-production",
    title: "Who is this for?",
    copy: "Developers with real experience who want sharper senior-level interview answers.",
  },
  {
    icon: "icon-shield",
    title: "Do I get updates?",
    copy: "Yes. Lifetime Founder Access includes future vault updates as the product grows.",
  },
];

function Icon({ id, size = 24 }: { id: string; size?: number }) {
  return (
    <svg width={size} height={size} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

function SvgSymbols() {
  return (
    <svg aria-hidden="true" className="sdm-symbols">
      <symbol id="icon-logo" viewBox="0 0 24 24">
        <path
          d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <path
          d="M8.2 8.9h7.6M8.2 12h7.6M8.2 15.1h4.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="icon-frontend" viewBox="0 0 24 24">
        <path
          d="M8.6 7.4 4 12l4.6 4.6M15.4 7.4 20 12l-4.6 4.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m13.2 5.7-2.4 12.6" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      </symbol>
      <symbol id="icon-java" viewBox="0 0 24 24">
        <path
          d="M9.5 17.2c1.4.7 5.1.7 6.6-.1M8.2 14.4c2 1 7.6 1 9.4-.1M10 11.7c1.2.6 4.8.6 6 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path
          d="M11.3 3.7c2 1.5-1.9 3 .2 4.9M14.4 4.1c1.8 1.4-1.7 2.8.1 4.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path d="M7.7 19.3c2.9 1.3 8 1.2 10.5-.2" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </symbol>
      <symbol id="icon-cloud" viewBox="0 0 24 24">
        <path
          d="M7.2 18.2h10.2a4 4 0 0 0 .5-7.9 6.1 6.1 0 0 0-11.7 2.1 3 3 0 0 0 1 5.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="icon-shield" viewBox="0 0 24 24">
        <path d="M12 3.2 19 6v5.7c0 4.3-3 7.4-7 9-4-1.6-7-4.7-7-9V6l7-2.8Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="m9.1 12 1.9 1.9 4-4" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      <symbol id="icon-production" viewBox="0 0 24 24">
        <path d="M4.5 15.2V8.8L12 4.5l7.5 4.3v6.4L12 19.5l-7.5-4.3Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 8.2v7.6M8.8 10.1l6.4 3.8M15.2 10.1l-6.4 3.8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </symbol>
      <symbol id="icon-answer" viewBox="0 0 24 24">
        <path d="M5 5.6h14v8.8H9.2L5 18.4V5.6Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8.6 9.1h6.8M8.6 12h4.4" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </symbol>
      <symbol id="icon-review" viewBox="0 0 24 24">
        <path d="M5.4 4.8h13.2v14.4H5.4z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.2 8.4h7.6M8.2 11.2h5M8.2 14h6.6" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        <path d="m15.1 17 1.1 1.1 2.3-2.6" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
    </svg>
  );
}

function HeroTimelineSvg() {
  return (
    <svg className="timeline-svg" viewBox="0 0 760 460" role="img" aria-label="Interview readiness timeline">
      <defs>
        <linearGradient id="heroTimelineRail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#65ffa9" />
          <stop offset="36%" stopColor="#7dd3fc" />
          <stop offset="68%" stopColor="#f2b56b" />
          <stop offset="100%" stopColor="#65ffa9" />
        </linearGradient>
        <filter id="heroTimelineGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.39 0 0 0 0 1 0 0 0 0 0.66 0 0 0 0.42 0"
          />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>
      <rect width="760" height="460" fill="transparent" />
      <g opacity="0.2">
        <path d="M76 88h608M76 174h608M76 260h608M76 346h608" stroke="rgba(255,255,255,0.07)" />
        <path d="M126 60v336M296 60v336M466 60v336M636 60v336" stroke="rgba(255,255,255,0.045)" />
      </g>
      <g fontFamily="Instrument Sans, system-ui, sans-serif">
        <path
          className="timeline-rail"
          d="M124 96 H636"
          fill="none"
          stroke="url(#heroTimelineRail)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 14"
        />
        <g filter="url(#heroTimelineGlow)">
          <circle className="timeline-dot" cx="124" cy="96" r="6" fill="#65ffa9" />
          <circle className="timeline-dot" cx="296" cy="96" r="6" fill="#7dd3fc" />
          <circle className="timeline-dot" cx="466" cy="96" r="6" fill="#f2b56b" />
          <circle className="timeline-dot" cx="636" cy="96" r="6" fill="#65ffa9" />
        </g>
        <g strokeWidth="1.2" strokeDasharray="5 8">
          <path d="M124 104v42" stroke="rgba(101,255,169,0.48)" />
          <path d="M296 104v42" stroke="rgba(125,211,252,0.48)" />
          <path d="M466 104v42" stroke="rgba(242,181,107,0.48)" />
          <path d="M636 104v42" stroke="rgba(101,255,169,0.48)" />
        </g>
        {[
          ["56", "DAY 1", "Crash notes", "Last-minute senior", "answer patterns", "#65ffa9"],
          ["224", "7 DAYS", "Focused path", "Frontend, backend", "and production prep", "#7dd3fc"],
          ["392", "30 DAYS", "Senior depth", "Trade-offs, systems", "and judgement", "#f2b56b"],
          ["560", "UPDATES", "Included", "Future notes as", "the vault grows", "#65ffa9"],
        ].map(([x, label, title, copy1, copy2, color]) => (
          <g className="timeline-card" key={label}>
            <rect
              x={x}
              y="150"
              width="148"
              height="126"
              rx="22"
              fill={label === "UPDATES" ? "rgba(101,255,169,0.07)" : "rgba(255,255,255,0.045)"}
              stroke={label === "UPDATES" ? "rgba(101,255,169,0.24)" : "rgba(255,255,255,0.11)"}
            />
            <path d={`M${Number(x) + 24} 150h100`} stroke={color} strokeWidth="2" strokeLinecap="round" />
            <text x={Number(x) + 24} y="188" fill={color} fontSize="12" fontWeight="700" letterSpacing="1.8">
              {label}
            </text>
            <text x={Number(x) + 24} y="220" fill="#fffaf2" fontSize="21" fontWeight="560">
              {title}
            </text>
            <text x={Number(x) + 24} y="248" fill="#9aa3ad" fontSize="12.5">
              {copy1}
            </text>
            <text x={Number(x) + 24} y="266" fill="#9aa3ad" fontSize="12.5">
              {copy2}
            </text>
          </g>
        ))}
        <g className="signal-summary-card">
          <rect x="220" y="326" width="320" height="80" rx="24" fill="rgba(101,255,169,0.06)" stroke="rgba(101,255,169,0.20)" />
          <text x="380" y="358" textAnchor="middle" fill="#65ffa9" fontSize="12" fontWeight="700" letterSpacing="1.5">
            CAREER SIGNAL
          </text>
          <text x="380" y="386" textAnchor="middle" fill="#fffaf2" fontSize="19" fontWeight="560">
            Answer like the next level
          </text>
        </g>
      </g>
    </svg>
  );
}

function VaultSvg() {
  return (
    <svg className="vault-svg" viewBox="0 0 900 560" role="img" aria-label="Private interview vault illustration">
      <defs>
        <filter id="vaultGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.39 0 0 0 0 1 0 0 0 0 0.66 0 0 0 0.45 0"
          />
          <feBlend in="SourceGraphic" />
        </filter>
        <marker id="vaultArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#65ffa9" />
        </marker>
      </defs>
      <rect width="900" height="560" fill="transparent" />
      <g opacity="0.16">
        <path d="M80 86h740M80 166h740M80 246h740M80 326h740M80 406h740" stroke="rgba(255,255,255,0.07)" />
        <path d="M150 60v440M300 60v440M450 60v440M600 60v440M750 60v440" stroke="rgba(255,255,255,0.045)" />
      </g>
      <g fontFamily="Instrument Sans, system-ui, sans-serif">
        <g className="vault-static">
          <rect x="72" y="54" width="380" height="86" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(101,255,169,0.20)" />
          <rect x="96" y="78" width="48" height="48" rx="15" fill="rgba(101,255,169,0.08)" stroke="rgba(101,255,169,0.24)" />
          <path d="M112 102l10-10M112 102l10 10M132 92l10 10M142 102l-10 10" fill="none" stroke="#65ffa9" strokeWidth="2" strokeLinecap="round" />
          <text x="166" y="95" fill="#fffaf2" fontSize="23" fontWeight="650" letterSpacing="1.6">
            PRIVATE
          </text>
          <text x="166" y="122" fill="#65ffa9" fontSize="23" fontWeight="650" letterSpacing="1.6">
            INTERVIEW VAULT
          </text>
        </g>
        <g className="vault-static">
          <rect x="248" y="164" width="404" height="256" rx="28" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.11)" />
          <circle cx="282" cy="194" r="5" fill="#fb7185" />
          <circle cx="300" cy="194" r="5" fill="#facc15" />
          <circle cx="318" cy="194" r="5" fill="#22c55e" />
          <rect x="348" y="184" width="146" height="20" rx="10" fill="rgba(255,255,255,0.06)" />
          <rect x="276" y="226" width="150" height="150" rx="20" fill="rgba(101,255,169,0.045)" stroke="rgba(101,255,169,0.20)" />
          <text x="302" y="260" fill="#65ffa9" fontSize="13" fontWeight="700" letterSpacing="1.3">
            VAULT NOTES
          </text>
          <rect x="302" y="284" width="92" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
          <rect x="302" y="308" width="76" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
          <rect x="302" y="332" width="104" height="8" rx="4" fill="rgba(255,255,255,0.10)" />
          <path d="M302 358h76" stroke="#65ffa9" strokeWidth="2" strokeLinecap="round" />
          <rect x="456" y="226" width="162" height="150" rx="20" fill="rgba(125,211,252,0.04)" stroke="rgba(125,211,252,0.20)" />
          <text x="482" y="260" fill="#7dd3fc" fontSize="13" fontWeight="700" letterSpacing="1.3">
            SENIOR ANSWERS
          </text>
          <rect x="482" y="286" width="86" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
          <rect x="482" y="310" width="112" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
          <rect x="482" y="334" width="74" height="8" rx="4" fill="rgba(255,255,255,0.10)" />
          <circle cx="586" cy="346" r="15" fill="rgba(125,211,252,0.08)" stroke="#7dd3fc" />
          <path d="M578 346l6 6 12-16" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="vault-static">
          <rect x="72" y="190" width="144" height="60" rx="18" fill="rgba(125,211,252,0.06)" stroke="rgba(125,211,252,0.22)" />
          <text x="96" y="226" fill="#7dd3fc" fontSize="13" fontWeight="700">
            FE
          </text>
          <text x="132" y="226" fill="#fffaf2" fontSize="15">
            Frontend
          </text>
          <rect x="72" y="270" width="144" height="60" rx="18" fill="rgba(242,181,107,0.055)" stroke="rgba(242,181,107,0.22)" />
          <text x="96" y="306" fill="#f2b56b" fontSize="13" fontWeight="700">
            BE
          </text>
          <text x="132" y="306" fill="#fffaf2" fontSize="15">
            Backend
          </text>
          <rect x="72" y="350" width="144" height="60" rx="18" fill="rgba(101,255,169,0.055)" stroke="rgba(101,255,169,0.22)" />
          <text x="96" y="386" fill="#65ffa9" fontSize="13" fontWeight="700">
            OPS
          </text>
          <text x="132" y="386" fill="#fffaf2" fontSize="15">
            Production
          </text>
        </g>
        <g className="vault-static">
          <rect x="688" y="190" width="148" height="220" rx="24" fill="rgba(101,255,169,0.055)" stroke="rgba(101,255,169,0.22)" />
          <text x="718" y="228" fill="#65ffa9" fontSize="13" fontWeight="700" letterSpacing="1.3">
            CAREER LEVEL
          </text>
          <circle cx="762" cy="278" r="38" fill="rgba(101,255,169,0.06)" stroke="rgba(101,255,169,0.25)" />
          <path d="M742 286l20-28 20 28" fill="none" stroke="#65ffa9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M762 258v54" stroke="#65ffa9" strokeWidth="2.4" strokeLinecap="round" />
          <text x="762" y="346" textAnchor="middle" fill="#fffaf2" fontSize="19" fontWeight="560">
            Next role
          </text>
          <text x="762" y="374" textAnchor="middle" fill="#9aa3ad" fontSize="13">
            Interview-ready
          </text>
        </g>
        <path className="vault-flow" d="M216 220 C236 220 230 248 248 248" fill="none" stroke="#7dd3fc" strokeWidth="1.6" strokeDasharray="8 10" markerEnd="url(#vaultArrow)" />
        <path className="vault-flow" d="M216 300 C236 300 230 304 248 304" fill="none" stroke="#65ffa9" strokeWidth="1.6" strokeDasharray="8 10" markerEnd="url(#vaultArrow)" />
        <path className="vault-flow" d="M216 380 C236 380 230 360 248 360" fill="none" stroke="#7dd3fc" strokeWidth="1.6" strokeDasharray="8 10" markerEnd="url(#vaultArrow)" />
        <path className="vault-flow" d="M652 300 C672 300 668 300 688 300" fill="none" stroke="#65ffa9" strokeWidth="1.6" strokeDasharray="8 10" markerEnd="url(#vaultArrow)" />
        <g filter="url(#vaultGlow)">
          <circle className="vault-node" cx="248" cy="248" r="5" fill="#7dd3fc" />
          <circle className="vault-node" cx="248" cy="304" r="5" fill="#65ffa9" />
          <circle className="vault-node" cx="248" cy="360" r="5" fill="#7dd3fc" />
          <circle className="vault-node" cx="688" cy="300" r="5" fill="#65ffa9" />
        </g>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="sdm-page">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <SvgSymbols />

      <header className="container nav">
        <a className="brand" href="#">
          <span className="logo-box">
            <Icon id="icon-logo" size={21} />
          </span>
          <span>System Design Mastery</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#free">Free Preview</a>
          <a href="#inside">Inside</a>
          <a href="#readiness">Prep Paths</a>
          <a href="#vault">Vault</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-secondary" href="#free">
            Start free
          </a>
          <a className="btn btn-primary" href="#pricing">
            Get lifetime access
          </a>
        </div>
      </header>

      <main>
        <section className="container hero">
          <div>
            <div className="pill">
              <Icon id="icon-shield" size={14} />
              Private senior-interview vault for developers moving up
            </div>
            <h1>
              Your private vault for landing the <span>next role.</span>
            </h1>
            <p className="hero-copy">
              High-signal notes, model answers, senior rewrites, and focused prep paths for experienced developers preparing for stronger frontend,
              Java backend, and production engineering interviews.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#free">
                Start free →
              </a>
              <a className="btn btn-secondary" href="#inside">
                See what is inside →
              </a>
            </div>
            <p className="micro-proof">
              <strong>Free preview available.</strong> Unlock Lifetime Founder Access for £19 when you want the full vault.
            </p>
            <div className="value-row">
              {valueItems.map((item) => (
                <div className="value-item" key={item.title}>
                  <span className="value-icon">
                    <Icon id={item.icon} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    {item.copy}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-art-wrap">
            <div className="hero-art-card">
              <div className="hero-art-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>Career readiness engine</span>
              </div>
              <HeroTimelineSvg />
              <div className="hero-metrics">
                <div className="metric">
                  <small>Fast path</small>
                  <strong>Interview tomorrow</strong>
                  <div className="signal-bar production-bar">
                    <span style={{ width: "92%" }} />
                  </div>
                </div>
                <div className="metric">
                  <small>Focused path</small>
                  <strong>Interview this week</strong>
                  <div className="signal-bar frontend-bar">
                    <span style={{ width: "74%" }} />
                  </div>
                </div>
                <div className="metric">
                  <small>Deep path</small>
                  <strong>Next role prep</strong>
                  <div className="signal-bar backend-bar">
                    <span style={{ width: "58%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="free" className="container section">
          <div className="offer">
            <div>
              <div className="eyebrow">Start free</div>
              <h2>Judge the quality before you pay.</h2>
              <p>
                The free preview is designed to be genuinely useful: selected notes, sample answers, and locked previews so you can understand the
                vault before unlocking the full version.
              </p>
            </div>
            <ul className="offer-list">
              <li>
                <strong>Selected notes</strong>
                Free examples across frontend, Java backend, production, and system design.
              </li>
              <li>
                <strong>Complete samples</strong>
                A few full answers so the quality is obvious before buying.
              </li>
              <li>
                <strong>Locked previews</strong>
                See the structure of the full vault without giving everything away.
              </li>
              <li>
                <strong>No pressure</strong>
                Upgrade only when the full vault feels useful for your next role.
              </li>
            </ul>
          </div>
        </section>

        <section id="inside" className="container section">
          <div className="section-header">
            <h2>Inside the vault</h2>
            <p>
              Concrete interview material, not vague learning content. Each note is built to help you explain, compare, debug, review, and reason
              like a stronger engineer.
            </p>
          </div>
          <div className="inside-grid">
            {insideCards.map((card) => (
              <article className={`card example-card${card.featured ? " featured" : ""}`} key={card.title}>
                <div>
                  <span className={`tag ${card.tone}`}>{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
                <div className="meta">
                  <span>{card.meta}</span>
                  <span>{card.time}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="readiness" className="container section">
          <div className="section-header">
            <h2>Prep paths for real timelines</h2>
            <p>
              Use the vault based on how much time you have. The goal is not to read everything. The goal is to become sharper where interviews
              expose weak judgement.
            </p>
          </div>
          <div className="readiness-grid">
            <article className="card prep-card">
              <div className="prep-kicker">Day 1</div>
              <h3>Crash prep</h3>
              <p>Last-minute answer structures, highest-signal trade-offs, and quick refreshers before an interview.</p>
            </article>
            <article className="card prep-card featured">
              <div className="prep-kicker">7 days</div>
              <h3>Focused prep</h3>
              <p>A tight weekly path through frontend, Java backend, production, and system design questions that expose senior judgement.</p>
            </article>
            <article className="card prep-card">
              <div className="prep-kicker">30 days</div>
              <h3>Next-level depth</h3>
              <p>Build stronger reasoning with scenarios, code review prompts, senior rewrites, and failure-mode practice.</p>
            </article>
          </div>
        </section>

        <section id="tracks" className="container section">
          <div className="section-header">
            <h2>Three focused tracks</h2>
            <p>Practical senior-interview preparation across the stack developers actually use: frontend, Java backend, and production engineering.</p>
          </div>
          <div className="track-grid">
            {tracks.map((track) => (
              <article className={`card track-card ${track.kind}`} key={track.title}>
                <div className="card-icon">
                  <Icon id={track.icon} />
                </div>
                <h3>{track.title}</h3>
                <p>{track.copy}</p>
                <div className="chips">
                  {track.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <a className="card-link" href={track.href}>
                  {track.link} →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="vault" className="container section">
          <div className="visual-section">
            <div className="visual-copy">
              <div className="eyebrow">Private interview vault</div>
              <h2>Learn from private notes, not generic tutorials.</h2>
              <p>
                The vault is built around practical interview output: how to explain decisions, compare trade-offs, review code, debug production
                issues, and show senior-level judgement.
              </p>
              <ul className="check-list">
                <li>Frontend, Java backend, and production interview notes</li>
                <li>Bad answer vs strong answer rewrites</li>
                <li>Trade-off explanations and failure-mode prompts</li>
                <li>Checklists for fast prep and interview warmups</li>
              </ul>
              <a className="btn btn-secondary" href="#pricing">
                Get lifetime founder access
              </a>
            </div>
            <div className="visual-wrap">
              <div className="visual-card">
                <div className="visual-top">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>Private interview vault</span>
                </div>
                <VaultSvg />
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="different">
            <div className="section-header">
              <h2>Why this is different</h2>
              <p>
                Most prep gives you topics. This gives you better answers: how to structure thinking, explain trade-offs, spot weak reasoning, and
                sound credible under pressure.
              </p>
            </div>
            <div className="different-grid">
              {differenceItems.map((item) => (
                <div className="different-item" key={item.title}>
                  <Icon id={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="feedback">
            <div>
              <div className="eyebrow">Founder feedback</div>
              <h2>Built with early users, not fake testimonials.</h2>
              <p>
                Founder members can request topics, flag unclear notes, and suggest realistic interview scenarios. The vault gets sharper around
                what real developers are preparing for.
              </p>
            </div>
            <div className="feedback-card">
              <strong>Reviews come later.</strong>
              <p>
                No fake quotes. No made-up logos. Start free, judge the quality, and upgrade when the full vault feels useful enough for your next
                interview.
              </p>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="different">
            <div className="section-header">
              <h2>Simple answers before you join</h2>
              <p>The offer is intentionally simple: preview the quality for free, then pay once if you want the full vault.</p>
            </div>
            <div className="different-grid">
              {faqItems.map((item) => (
                <div className="different-item" key={item.title}>
                  <Icon id={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="container section">
          <div className="pricing">
            <div>
              <div className="eyebrow">Simple pricing</div>
              <h2>Start free. Unlock lifetime access when ready.</h2>
              <p>
                Free access proves the quality. Lifetime Founder Access unlocks the complete prep system, deeper answer bank, and future vault
                updates with one payment.
              </p>
            </div>
            <div className="pricing-grid">
              <article className="card price-card">
                <span className="tag">Free preview</span>
                <div className="price">
                  <strong>£0</strong>
                  <span>start free</span>
                </div>
                <ul className="pricing-list">
                  <li>Selected interview notes</li>
                  <li>Sample model answers</li>
                  <li>Locked previews of the full vault</li>
                  <li>Enough free content to judge quality</li>
                </ul>
                <a className="btn btn-secondary" href="#free">
                  Start free →
                </a>
              </article>
              <article className="card price-card featured">
                <span className="tag">Lifetime founder access</span>
                <div className="price">
                  <strong>£19</strong>
                  <span>pay once</span>
                </div>
                <ul className="pricing-list">
                  <li>Full Day-1, 7-day, and 30-day prep paths</li>
                  <li>Frontend, Java backend, and production engineering notes</li>
                  <li>Model answers, senior rewrites, and checklists</li>
                  <li>Future vault updates included</li>
                  <li>One payment, no monthly fees</li>
                </ul>
                <a className="btn btn-primary" href="#">
                  Get lifetime founder access →
                </a>
                <p className="price-warning">
                  <strong>Founder pricing starts at £19.</strong> The price may increase as more tracks, notes, and answer packs are added.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© 2026 System Design Mastery</span>
        <span>Private senior-interview vault for developers moving to the next role.</span>
      </footer>
    </div>
  );
}

const pageStyles = `
body > header,
body > footer {
  display: none !important;
}

.sdm-symbols {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.sdm-page {
  --font-sans: "Instrument Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --bg: #050608;
  --bg-2: #080a0d;
  --surface: rgba(18, 21, 26, 0.82);
  --surface-strong: rgba(20, 24, 30, 0.96);
  --line: rgba(255, 255, 255, 0.09);
  --line-soft: rgba(255, 255, 255, 0.06);
  --line-accent: rgba(101, 255, 169, 0.24);
  --text: #f7f2ea;
  --text-strong: #fffaf2;
  --muted: #9aa3ad;
  --soft: #c7ced8;
  --accent: #65ffa9;
  --accent-soft: #a7ffd0;
  --frontend: #7dd3fc;
  --backend: #f2b56b;
  --production: #65ffa9;
  --shadow: 0 28px 90px rgba(0, 0, 0, 0.58);
  --radius-xl: 30px;
  --radius-lg: 22px;
  --max: 1180px;
  min-height: 100vh;
  font-family: var(--font-sans);
  color: var(--text);
  background:
    radial-gradient(circle at 78% 0%, rgba(101, 255, 169, 0.10), transparent 30%),
    radial-gradient(circle at 15% 9%, rgba(125, 211, 252, 0.075), transparent 27%),
    radial-gradient(circle at 72% 58%, rgba(242, 181, 107, 0.052), transparent 28%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 48%, var(--bg) 100%);
  overflow-x: hidden;
  font-feature-settings: "kern", "liga", "calt";
}

.sdm-page *,
.sdm-page *::before,
.sdm-page *::after {
  box-sizing: border-box;
}

.sdm-page::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, black, transparent 78%);
}

.sdm-page a {
  color: inherit;
  text-decoration: none;
}

.sdm-page svg {
  display: block;
}

.sdm-page .container {
  width: min(var(--max), calc(100% - 40px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sdm-page .nav {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line-soft);
}

.sdm-page .brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 680;
  letter-spacing: -0.025em;
}

.sdm-page .logo-box {
  width: 34px;
  height: 34px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  color: var(--accent);
  border: 1px solid var(--line-accent);
  background:
    radial-gradient(circle at 28% 18%, rgba(101, 255, 169, 0.16), transparent 42%),
    rgba(255, 255, 255, 0.035);
  box-shadow: inset 0 0 26px rgba(101, 255, 169, 0.07);
}

.sdm-page .nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-size: 14px;
  letter-spacing: -0.01em;
}

.sdm-page .nav-links a:hover {
  color: var(--text);
}

.sdm-page .nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sdm-page .btn {
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 12px 18px;
  font-weight: 620;
  font-size: 14px;
  letter-spacing: -0.015em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.sdm-page .btn:hover {
  transform: translateY(-1px);
  border-color: rgba(101, 255, 169, 0.28);
}

.sdm-page .btn-primary {
  color: #061109;
  border-color: transparent;
  background: linear-gradient(135deg, var(--accent-soft), var(--accent));
  box-shadow: 0 16px 44px rgba(101, 255, 169, 0.17);
}

.sdm-page .btn-primary:hover {
  box-shadow: 0 20px 58px rgba(101, 255, 169, 0.23);
}

.sdm-page .btn-secondary {
  color: var(--text);
  background: rgba(255, 255, 255, 0.045);
}

.sdm-page .pill {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--line-accent);
  color: var(--accent);
  background: rgba(101, 255, 169, 0.052);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.sdm-page .hero {
  padding: 88px 0 54px;
  display: grid;
  grid-template-columns: 0.94fr 1.06fr;
  gap: 58px;
  align-items: center;
}

.sdm-page .hero h1 {
  margin: 22px 0 20px;
  max-width: 820px;
  font-size: clamp(50px, 5.9vw, 84px);
  line-height: 0.96;
  letter-spacing: -0.075em;
  font-weight: 560;
  color: var(--text-strong);
}

.sdm-page .hero h1 span {
  color: var(--accent);
  text-shadow: 0 0 38px rgba(101, 255, 169, 0.15);
}

.sdm-page .hero-copy {
  max-width: 660px;
  color: var(--soft);
  font-size: 18.5px;
  line-height: 1.68;
  margin: 0 0 30px;
  letter-spacing: -0.016em;
  font-weight: 400;
}

.sdm-page .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 12px;
}

.sdm-page .micro-proof {
  margin: 0 0 34px;
  color: var(--muted);
  font-size: 13.5px;
  letter-spacing: -0.01em;
}

.sdm-page .micro-proof strong {
  color: var(--text);
  font-weight: 560;
}

.sdm-page .value-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.sdm-page .value-item {
  display: flex;
  gap: 11px;
  align-items: flex-start;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.008em;
}

.sdm-page .value-icon {
  width: 31px;
  height: 31px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  color: var(--accent);
  border: 1px solid var(--line-accent);
  background: rgba(101, 255, 169, 0.052);
  flex: none;
}

.sdm-page .value-icon svg {
  width: 16px;
  height: 16px;
}

.sdm-page .value-item strong {
  display: block;
  color: var(--text);
  margin-bottom: 3px;
  font-weight: 620;
}

.sdm-page .hero-art-wrap,
.sdm-page .visual-wrap {
  position: relative;
}

.sdm-page .hero-art-wrap::before,
.sdm-page .visual-wrap::before {
  content: "";
  position: absolute;
  inset: -70px -40px;
  z-index: -1;
  background:
    radial-gradient(circle at 50% 42%, rgba(101, 255, 169, 0.085), transparent 43%),
    radial-gradient(circle at 78% 10%, rgba(125, 211, 252, 0.085), transparent 34%),
    radial-gradient(circle at 30% 80%, rgba(242, 181, 107, 0.055), transparent 30%);
  filter: blur(18px);
}

.sdm-page .hero-art-card,
.sdm-page .visual-card {
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.062), rgba(255,255,255,0.02)),
    var(--surface-strong);
  box-shadow: var(--shadow);
  overflow: hidden;
  position: relative;
}

.sdm-page .hero-art-card {
  min-height: 560px;
}

.sdm-page .visual-card {
  padding: 20px;
}

.sdm-page .hero-art-top,
.sdm-page .visual-top {
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 0 20px;
  color: var(--muted);
  font-size: 13px;
  border-bottom: 1px solid var(--line);
}

.sdm-page .visual-top {
  border: 1px solid var(--line);
  border-radius: 18px;
  margin-bottom: 18px;
  background: rgba(255,255,255,0.028);
}

.sdm-page .window-dots {
  display: flex;
  gap: 8px;
}

.sdm-page .window-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
}

.sdm-page .timeline-svg,
.sdm-page .vault-svg {
  width: 100%;
  height: auto;
}

.sdm-page .timeline-svg {
  padding: 22px 22px 12px;
}

.sdm-page .timeline-rail,
.sdm-page .vault-flow {
  animation: signal-flow 8s linear infinite;
}

.sdm-page .timeline-card,
.sdm-page .vault-static,
.sdm-page .signal-summary-card,
.sdm-page .timeline-dot,
.sdm-page .vault-node {
  animation: none;
  transform: none;
}

@keyframes signal-flow {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -220; }
}

@media (prefers-reduced-motion: reduce) {
  .sdm-page .timeline-rail,
  .sdm-page .vault-flow {
    animation: none;
  }
}

.sdm-page .hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0 22px 22px;
}

.sdm-page .metric {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px;
  background: rgba(255,255,255,0.036);
}

.sdm-page .metric small {
  display: block;
  color: var(--muted);
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sdm-page .metric strong {
  display: block;
  color: var(--text);
  font-weight: 560;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.sdm-page .signal-bar {
  height: 6px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255,255,255,0.08);
}

.sdm-page .signal-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
}

.sdm-page .frontend-bar span { background: var(--frontend); }
.sdm-page .backend-bar span { background: var(--backend); }
.sdm-page .production-bar span { background: var(--production); }

.sdm-page .section {
  padding: 58px 0;
}

.sdm-page .section-header {
  max-width: 760px;
  margin: 0 auto 34px;
  text-align: center;
}

.sdm-page .section-header h2,
.sdm-page .offer h2,
.sdm-page .visual-copy h2,
.sdm-page .pricing h2,
.sdm-page .feedback h2 {
  color: var(--text-strong);
  font-weight: 540;
  letter-spacing: -0.058em;
}

.sdm-page .section-header h2 {
  margin: 0 0 12px;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.03;
}

.sdm-page .section-header p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  letter-spacing: -0.01em;
}

.sdm-page .offer,
.sdm-page .visual-section,
.sdm-page .pricing,
.sdm-page .feedback {
  display: grid;
  gap: 24px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: 26px;
  background:
    radial-gradient(circle at 88% 0%, rgba(101,255,169,0.075), transparent 34%),
    linear-gradient(180deg, rgba(255,255,255,0.052), rgba(255,255,255,0.018)),
    var(--surface);
  box-shadow: 0 16px 48px rgba(0,0,0,0.22);
}

.sdm-page .offer,
.sdm-page .visual-section,
.sdm-page .pricing {
  grid-template-columns: 0.82fr 1.18fr;
}

.sdm-page .feedback {
  grid-template-columns: 1fr 1fr;
}

.sdm-page .offer h2,
.sdm-page .visual-copy h2,
.sdm-page .pricing h2,
.sdm-page .feedback h2 {
  margin: 12px 0 14px;
  font-size: clamp(32px, 3.7vw, 48px);
  line-height: 1.04;
}

.sdm-page .offer p,
.sdm-page .visual-copy p,
.sdm-page .pricing p,
.sdm-page .feedback p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  letter-spacing: -0.01em;
}

.sdm-page .offer-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sdm-page .offer-list li {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255,255,255,0.035);
  padding: 14px;
  color: var(--soft);
  font-size: 14px;
  line-height: 1.45;
  letter-spacing: -0.01em;
}

.sdm-page .offer-list strong {
  display: block;
  color: var(--text);
  font-weight: 580;
  margin-bottom: 4px;
}

.sdm-page .readiness-grid,
.sdm-page .track-grid,
.sdm-page .inside-grid,
.sdm-page .pricing-grid {
  display: grid;
  gap: 18px;
}

.sdm-page .readiness-grid,
.sdm-page .track-grid,
.sdm-page .inside-grid {
  grid-template-columns: repeat(3, 1fr);
}

.sdm-page .pricing-grid {
  grid-template-columns: 0.92fr 1.08fr;
  align-items: stretch;
}

.sdm-page .card {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.052), rgba(255,255,255,0.018)),
    var(--surface);
  box-shadow: 0 16px 48px rgba(0,0,0,0.22);
}

.sdm-page .prep-card,
.sdm-page .track-card,
.sdm-page .price-card,
.sdm-page .example-card {
  padding: 26px;
  position: relative;
  overflow: hidden;
}

.sdm-page .example-card {
  min-height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sdm-page .prep-card.featured,
.sdm-page .price-card.featured,
.sdm-page .example-card.featured {
  border-color: var(--line-accent);
  background:
    radial-gradient(circle at 80% 0%, rgba(101,255,169,0.09), transparent 38%),
    linear-gradient(180deg, rgba(255,255,255,0.052), rgba(255,255,255,0.018)),
    var(--surface);
}

.sdm-page .prep-kicker,
.sdm-page .eyebrow {
  color: var(--accent);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-weight: 650;
  margin-bottom: 14px;
}

.sdm-page .prep-card h3,
.sdm-page .track-card h3,
.sdm-page .price-card h3,
.sdm-page .example-card h3 {
  margin: 0 0 10px;
  font-size: 21px;
  line-height: 1.12;
  letter-spacing: -0.04em;
  font-weight: 610;
  color: var(--text-strong);
  position: relative;
  z-index: 1;
}

.sdm-page .prep-card p,
.sdm-page .track-card p,
.sdm-page .price-card p,
.sdm-page .example-card p {
  color: var(--muted);
  line-height: 1.65;
  margin: 0;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
}

.sdm-page .track-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.07;
}

.sdm-page .track-card.frontend::before { background: radial-gradient(circle at 88% 0%, var(--frontend), transparent 34%); }
.sdm-page .track-card.backend::before { background: radial-gradient(circle at 88% 0%, var(--backend), transparent 34%); }
.sdm-page .track-card.production::before { background: radial-gradient(circle at 88% 0%, var(--production), transparent 34%); }

.sdm-page .card-icon {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.042);
  position: relative;
  z-index: 1;
}

.sdm-page .frontend .card-icon { color: var(--frontend); }
.sdm-page .backend .card-icon { color: var(--backend); }
.sdm-page .production .card-icon { color: var(--production); }
.sdm-page .card-icon svg { width: 26px; height: 26px; }

.sdm-page .chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 24px;
  position: relative;
  z-index: 1;
}

.sdm-page .chip {
  padding: 6px 10px;
  border-radius: 999px;
  color: var(--soft);
  background: rgba(255,255,255,0.042);
  border: 1px solid var(--line);
  font-size: 12px;
  font-weight: 450;
  letter-spacing: -0.006em;
}

.sdm-page .card-link {
  color: var(--accent);
  font-weight: 620;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

.sdm-page .tag {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: var(--accent);
  background: rgba(101,255,169,0.065);
  border: 1px solid var(--line-accent);
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 550;
  margin-bottom: 14px;
  letter-spacing: -0.006em;
}

.sdm-page .tag.blue {
  color: var(--frontend);
  border-color: rgba(125,211,252,0.25);
  background: rgba(125,211,252,0.06);
}

.sdm-page .tag.amber {
  color: var(--backend);
  border-color: rgba(242,181,107,0.25);
  background: rgba(242,181,107,0.06);
}

.sdm-page .meta {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 12px;
  margin-top: 18px;
  letter-spacing: -0.006em;
}

.sdm-page .example-card::after {
  content: "";
  position: absolute;
  inset: auto 20px 20px 20px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(101,255,169,0.35), transparent);
  opacity: 0.45;
}

.sdm-page .different {
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: rgba(255,255,255,0.03);
  overflow: hidden;
}

.sdm-page .different .section-header {
  padding-top: 36px;
  margin-bottom: 20px;
}

.sdm-page .different-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
}

.sdm-page .different-item {
  padding: 26px;
  border-right: 1px solid var(--line);
}

.sdm-page .different-item:last-child {
  border-right: 0;
}

.sdm-page .different-item svg {
  width: 30px;
  height: 30px;
  color: var(--accent);
}

.sdm-page .different-item h3 {
  margin: 14px 0 8px;
  font-size: 16px;
  letter-spacing: -0.025em;
  font-weight: 610;
  color: var(--text-strong);
}

.sdm-page .different-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
  font-size: 14px;
  letter-spacing: -0.008em;
}

.sdm-page .check-list,
.sdm-page .pricing-list {
  margin: 22px 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
  color: var(--soft);
}

.sdm-page .check-list li,
.sdm-page .pricing-list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  letter-spacing: -0.01em;
}

.sdm-page .check-list li::before,
.sdm-page .pricing-list li::before {
  content: "✓";
  color: var(--accent);
  font-weight: 650;
}

.sdm-page .price {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin: 16px 0 18px;
}

.sdm-page .price strong {
  font-size: 58px;
  line-height: 0.9;
  letter-spacing: -0.062em;
  font-weight: 540;
  color: var(--text-strong);
}

.sdm-page .price span {
  color: var(--muted);
  padding-bottom: 7px;
  letter-spacing: -0.01em;
}

.sdm-page .price-warning {
  margin-top: 16px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.sdm-page .price-warning strong {
  color: var(--text);
  font-weight: 560;
}

.sdm-page .feedback-card {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 22px;
  background: rgba(255,255,255,0.035);
}

.sdm-page .feedback-card strong {
  display: block;
  color: var(--text-strong);
  margin-bottom: 8px;
  font-weight: 610;
  letter-spacing: -0.02em;
}

.sdm-page .footer {
  padding: 36px 0 54px;
  display: flex;
  justify-content: space-between;
  gap: 22px;
  color: var(--muted);
  font-size: 14px;
  letter-spacing: -0.01em;
}

@media (max-width: 980px) {
  .sdm-page .hero,
  .sdm-page .offer,
  .sdm-page .visual-section,
  .sdm-page .pricing,
  .sdm-page .feedback,
  .sdm-page .pricing-grid {
    grid-template-columns: 1fr;
  }

  .sdm-page .value-row,
  .sdm-page .offer-list,
  .sdm-page .readiness-grid,
  .sdm-page .track-grid,
  .sdm-page .different-grid,
  .sdm-page .inside-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sdm-page .hero-art-card {
    min-height: auto;
  }

  .sdm-page .nav-links {
    display: none;
  }
}

@media (max-width: 640px) {
  .sdm-page .container {
    width: min(100% - 28px, var(--max));
  }

  .sdm-page .hero {
    padding-top: 52px;
  }

  .sdm-page .hero h1 {
    font-size: 46px;
    letter-spacing: -0.055em;
  }

  .sdm-page .value-row,
  .sdm-page .offer-list,
  .sdm-page .readiness-grid,
  .sdm-page .track-grid,
  .sdm-page .different-grid,
  .sdm-page .inside-grid,
  .sdm-page .hero-metrics {
    grid-template-columns: 1fr;
  }

  .sdm-page .different-item {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .sdm-page .different-item:last-child {
    border-bottom: 0;
  }

  .sdm-page .nav-actions .btn-secondary {
    display: none;
  }

  .sdm-page .footer {
    flex-direction: column;
  }
}
`;
