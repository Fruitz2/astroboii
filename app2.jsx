/* global React */
const { ASTRO_CONFIG, Arrow, CopyIc, Check } = window.A1;

function SectionHead({ num, label, title, accent, right }) {
  return (
    <div className="section-head reveal">
      <span className="num">{num}<span className="slash">/</span>{label}</span>
      <h2>{title}{accent && <> <span className="accent">{accent}</span></>}</h2>
      {right && <div className="right">{right}</div>}
    </div>
  );
}

function Lore() {
  const items = [
    { n: '01', t: 'A tiny astronaut', m: '' },
    { n: '02', t: 'A broken compass', m: '' },
    { n: '03', t: 'A shitty chart', m: '' },
    { n: '04', t: 'That is basically the whole thing together', m: '' },
  ];
  return (
    <section id="lore" className="section">
      <div className="wrap">
        <SectionHead num="01" label="Lore" title="The" accent="story" right="Excerpts from the flight log of a small astronaut who did not make it home." />
        <div className="lore-stack">
          {items.map((x, i) => (
            <div key={i} className="lore-row reveal">
              <span className="n">{x.n}</span>
              <span className="t">{x.t}</span>
              <span className="meta">{x.m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Token() {
  const c = ASTRO_CONFIG;
  const [copied, setCopied] = React.useState(false);
  const ca = c.contractAddress;
  const copy = async () => { if (!ca) return; try { await navigator.clipboard.writeText(ca); setCopied(true); setTimeout(()=>setCopied(false), 1400);} catch(e){} };
  return (
    <section id="token" className="section">
      <div className="wrap">
        <SectionHead num="02" label="Token" title="The contract is" accent="live" right="You see it late. One billion supply. Zero tax. The contract is live." />
        <div className="token-grid">
          <div className="token-main reveal">
            <div className="head"><span>Astroboii / SPL Token</span><span className="live">{c.isLaunched ? 'Live' : 'Standby'}</span></div>
            <div className="row"><span className="k">Ticker</span><span className="v mint">${c.ticker}</span><span className="tag mint">Solana</span></div>
            <div className="row"><span className="k">Total supply</span><span className="v">1,000,000,000</span><span className="tag">Fixed</span></div>
            <div className="row"><span className="k">Tax</span><span className="v mint">0%</span><span className="tag mint">Buy / Sell</span></div>
            <div className="row"><span className="k">Launchpad</span><span className="v">{c.launchPlatform}</span><span className="tag">Fair launch</span></div>
            <div className="row"><span className="k">Liquidity</span><span className="v">Burned</span><span className="tag">Permanent</span></div>
            <div className="contract">
              <span className="label">CA</span>
              {ca ? <span className="ca">{ca}</span> : <span className="ca empty">Will be updated soon</span>}
              <button onClick={copy} disabled={!ca} className={copied ? 'copied' : ''}>{copied ? <><Check/>Copied</> : <><CopyIc/>Copy</>}</button>
            </div>
          </div>
          <div className="token-side">
            <div className="figure full-mint reveal">
              <div className="k">Tax</div>
              <div className="v">0%</div>
              <div className="note">Forever. Buy. Sell. Hold. Same.</div>
            </div>
            <div className="figure reveal">
              <div className="k">Liquidity</div>
              <div className="v mint">BURNED</div>
              <div className="note">LP key thrown into orbit, on purpose.</div>
            </div>
            <div className="figure reveal">
              <div className="k">Team allocation</div>
              <div className="v">NONE</div>
              <div className="note">Not financial advice. Read the paper.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    { n: '01', label: 'Phase 01', t: 'Fair launch on Pump.fun', d: 'No presale. No allocation. No ceremony. Just the launch curve and a helmet.', s: 'Live', tone: 'live' },
    { n: '02', label: 'Phase 02', t: 'Liquidity burns', d: 'LP key burned. Locked. Gone. The chart and the orbit are now on their own.', s: 'Next', tone: 'next' },
    { n: '03', label: 'Phase 03', t: 'Mission chatter scales', d: 'Telegram, X, the holders. The community runs the comms. We just keep posting.', s: 'Soon', tone: '' },
    { n: '04', label: 'Phase 04', t: 'Flight log issues drop', d: 'Short, hand-set zines. Distributed to early holders. PDFs for everyone else.', s: 'Soon', tone: '' },
    { n: '05', label: 'Phase 05', t: 'Listings + dashboards', d: 'CMC, CG, DexScreener, Birdeye. The infrastructure of being taken seriously.', s: 'Later', tone: '' },
    { n: '06', label: 'Phase 06', t: 'Unwritten', d: 'On purpose. Roadmaps imply a known destination. We are an astronaut.', s: '∞', tone: '' },
  ];
  return (
    <section id="roadmap" className="section">
      <div className="wrap">
        <SectionHead num="03" label="Orbit" title="The trajectory was" accent="already set" right="Four phases. The Boii already plotted the course. You are not early. You are closer." />
        <div className="roadmap">
          {phases.map((p, i) => (
            <div key={i} className="phase reveal">
              <div className="num"><small>{p.label}</small><span>{p.n}</span></div>
              <div className="desc"><h4>{p.t}</h4><p>{p.d}</p></div>
              <div className="status" data-tone={p.tone}>{p.s}</div>
              <span className="arr">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  const rules = [
    { n: '01', t: 'Helmet stays on' },
    { n: '02', t: 'No promises, no roadmap' },
    { n: '03', t: 'Be nice to other astronauts' },
    { n: '04', t: 'The chart is not the lore' },
  ];
  const msgs = [
    { who: '@astroboii_42', what: 'the helmet stays on. that is the entire whitepaper.' },
    { who: '@lostkid', what: "i'm somehow calmer in this orbit." },
    { who: '@orbital.gif', what: 'compass is decorative. the candle is real.' },
    { who: '@nofloor', what: 'wrong planet, right chain.' },
  ];
  return (
    <section id="community" className="section">
      <div className="wrap">
        <SectionHead num="04" label="Transmissions" title="He posted" accent="first" right="The chat is the protocol. The memes are the roadmap. The community decides what flies." />
        <div className="community">
          <div className="community-text reveal">
            <h3>Four <span className="accent">rules</span>.<br/>One helmet.</h3>
            <p>We are not a movement. We are a coin with a costume and a community that keeps showing up. That is, somehow, the whole product.</p>
            <div className="community-rules">
              {rules.map((r,i) => (
                <div key={i} className="community-rule">
                  <span className="n">{r.n}</span>
                  <span className="t">{r.t}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-lg">Join Telegram <Arrow/></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Final({ isLaunched }) {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-stage reveal">
          <div className="glow" />
          <img src="assets/astroboii-logo.png" alt="" />
        </div>
        <h2 className="reveal">
          <span className="l">Astroboii will</span>
          <span className="l"><span className="accent">fucking</span></span>
          <span className="l">send it.</span>
        </h2>
        <div className="final-ctas reveal">
          {isLaunched ? <a href={ASTRO_CONFIG.pumpFunUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Send It Now<Arrow/></a> : <button className="btn btn-primary btn-lg">Launching soon<Arrow/></button>}
          <a href={ASTRO_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg">Telegram<Arrow/></a>
          <a href={ASTRO_CONFIG.xUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg">X / Twitter<Arrow/></a>
        </div>
        <div className="final-status reveal">
          <span>Helmet on</span>
          <span data-d>Compass broken</span>
          <span>Orbit holding</span>
          <span>Chain: Solana</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="assets/astroboii-logo.png" alt="" />
            <h4>Astrobo<span className="accent">ii</span></h4>
            <p>Astroboii did not come from space. Space came from Astroboii. You see it late.</p>
          </div>
          <div className="footer-col">
            <h5>Site</h5>
            <a href="#lore">Lore</a>
            <a href="#token">Token</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#community">Community</a>
          </div>
          <div className="footer-col">
            <h5>Channels</h5>
            <a href={ASTRO_CONFIG.xUrl} target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a href={ASTRO_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href={ASTRO_CONFIG.pumpFunUrl} target="_blank" rel="noopener noreferrer">Pump.fun</a>
          </div>
          <div className="footer-col">
            <h5>Charts</h5>
            <a href={ASTRO_CONFIG.dexScreenerUrl} target="_blank" rel="noopener noreferrer">DexScreener</a>
            <a href="https://birdeye.so" target="_blank" rel="noopener noreferrer">Birdeye</a>
            <a href="https://jup.ag" target="_blank" rel="noopener noreferrer">Jupiter</a>
          </div>
        </div>
        <div className="footer-bot">
          <span>© Orbit ∞ — Astroboii / Not financial advice</span>
          <span>Mission 001 / Helmet on</span>
        </div>
      </div>
    </footer>
  );
}

window.A2 = { Lore, Token, Roadmap, Community, Final, Footer };
