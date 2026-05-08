/* global React */
const ASTRO_CONFIG = /*EDITMODE-BEGIN*/{
  "isLaunched": true,
  "ticker": "BOII",
  "supply": "1,000,000,000",
  "tax": "0%",
  "chain": "Solana",
  "launchPlatform": "Pump.fun",
  "contractAddress": "Will be updated soon",
  "pumpFunUrl": "https://pump.fun",
  "telegramUrl": "https://t.me/astroboiisol",
  "xUrl": "https://x.com/astroboiionsol",
  "dexScreenerUrl": "https://dexscreener.com/solana"
}/*EDITMODE-END*/;

const Arrow = (p) => <span className="arrow" {...p}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
const CopyIc = () => <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/><path d="M2 8.5V2.5C2 1.95 2.45 1.5 3 1.5H8" stroke="currentColor" strokeWidth="1.3"/></svg>;
const Check = () => <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L5 9l5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Menu = () => <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
const X = () => <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;

function Starfield() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); let raf;
    const resize = () => {
      c.width = innerWidth * devicePixelRatio;
      c.height = innerHeight * devicePixelRatio;
      c.style.width = innerWidth + 'px';
      c.style.height = innerHeight + 'px';
    };
    resize(); addEventListener('resize', resize);
    const stars = Array.from({length: 90}, () => ({
      x: Math.random()*c.width, y: Math.random()*c.height,
      r: Math.random()*1.1*devicePixelRatio, a: Math.random()*0.5+0.15,
      tw: Math.random()*0.04+0.01, v: Math.random()*0.10+0.03,
    }));
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      stars.forEach(s => {
        s.a += (Math.random()-0.5)*s.tw;
        s.a = Math.max(0.1, Math.min(0.7, s.a));
        s.y += s.v; if (s.y > c.height) s.y = 0;
        ctx.fillStyle = `rgba(242,243,245,${s.a})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="bg-stars" />;
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((es) => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Navbar({ onMenu, isLaunched }) {
  const links = [
    ['01','Lore','#lore'],
    ['02','Token','#token'],
    ['03','Roadmap','#roadmap'],
    ['04','Community','#community'],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <img src="assets/astroboii-logo.png" alt="" />
          <span>Astroboii<span className="dot">.</span></span>
        </a>
        <div className="nav-links">
          {links.map(([n,t,h]) => (
            <a key={t} href={h} className="nav-link"><span className="num">{n}</span>{t}</a>
          ))}
        </div>
        <div className="nav-right">
          {isLaunched ? <a href={ASTRO_CONFIG.pumpFunUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Buy<Arrow/></a> : <button className="btn btn-sm btn-primary">Launching<Arrow/></button>}
          <button className="hamburger" onClick={onMenu} aria-label="Menu"><Menu/></button>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ open, onClose, isLaunched }) {
  const links = [['01','Home','#top'],['02','Lore','#lore'],['03','Token','#token'],['04','Roadmap','#roadmap'],['05','Community','#community']];
  return (
    <div className={`mob-menu ${open ? 'open' : ''}`}>
      <div className="mob-menu-head">
        <a href="#top" className="nav-brand" onClick={onClose}>
          <img src="assets/astroboii-logo.png" alt="" />
          <span>Astroboii<span className="dot">.</span></span>
        </a>
        <button className="hamburger" onClick={onClose}><X/></button>
      </div>
      <div className="mob-menu-links">
        {links.map(([n,t,h]) => (
          <a key={t} href={h} onClick={onClose} className="mob-menu-link">
            <span>{t}</span>
            <span className="num">{n}</span>
          </a>
        ))}
      </div>
      <div style={{padding: '24px 4px'}}>
        {isLaunched ? <a href={ASTRO_CONFIG.pumpFunUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{width:'100%', justifyContent:'center'}}>Buy on Pump.fun <Arrow/></a> : <button className="btn btn-primary btn-lg" style={{width:'100%', justifyContent:'center'}}>Launching soon <Arrow/></button>}
      </div>
    </div>
  );
}

function Hero({ isLaunched }) {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-meta reveal">
              {isLaunched ? <span className="live">Live on Solana</span> : <span className="pre">Pre-launch</span>}
              <span>Mission 001 / Orbit Window Open</span>
            </div>
            <h1 className="hero-title reveal">SPACE CAME FROM <span className="accent">ASTROBOII</span></h1>
            <p className="hero-sub reveal">Astroboii did not come from space. Space came from Astroboii. <strong>He posted first.</strong> You see it late.</p>
            <p className="hero-tag reveal">One billion supply. Zero tax. Maximum conviction. That's when it got weird. The helmet stays on.</p>
            <div className="hero-ctas reveal">
              {isLaunched ? <a href={ASTRO_CONFIG.pumpFunUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Buy ${ASTRO_CONFIG.ticker}<Arrow/></a> : <button className="btn btn-primary btn-lg">Launching soon<Arrow/></button>}
              <a href={ASTRO_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg">Telegram<Arrow/></a>
              <a href={ASTRO_CONFIG.xUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg">X / Twitter<Arrow/></a>
            </div>
            <div className="hero-stat-row reveal">
              <div className="hero-stat"><div className="k">Ticker</div><div className="v mint">${ASTRO_CONFIG.ticker}</div></div>
              <div className="hero-stat"><div className="k">Supply</div><div className="v">1B</div></div>
              <div className="hero-stat"><div className="k">Tax</div><div className="v mint">0%</div></div>
              <div className="hero-stat"><div className="k">Chain</div><div className="v">SOL</div></div>
            </div>
          </div>
          <div className="hero-stage reveal">
            <div className="watermark">★</div>
            <div className="halo" />
            <div className="logo">
              <img src="assets/astroboii-logo.png" alt="Astroboii" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker({ isLaunched }) {
  const items = [
    { k: 'Status', v: isLaunched ? 'LIVE' : 'PRE-LAUNCH', tone: isLaunched ? 'mint' : 'warn' },
    { k: 'Helmet', v: 'ON', tone: 'mint' },
    { k: 'Compass', v: 'BROKEN', tone: '' },
    { k: 'Orbit', v: 'STABLE', tone: 'mint' },
    { k: 'Tax', v: '0%', tone: 'mint' },
    { k: 'Supply', v: '1,000,000,000', tone: '' },
    { k: 'Chain', v: 'SOLANA', tone: 'mint' },
    { k: 'LP', v: 'BURNED', tone: 'mint' },
    { k: 'Launchpad', v: 'PUMP.FUN', tone: '' },
    { k: 'Mission', v: '001', tone: '' },
  ];
  const seq = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {seq.map((x, i) => (
          <span key={i} className="item">
            <span>{x.k}</span>
            <span className={`v ${x.tone}`}>{x.v}</span>
            <span className="sep">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

window.A1 = { ASTRO_CONFIG, Arrow, CopyIc, Check, Starfield, useReveal, Navbar, MobileMenu, Hero, Ticker };
