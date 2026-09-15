import { Footer, Header } from "./components/SiteShell";

export default function Home() {
  return <><Header /><main>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">PLAY • EXPLORE • LEVEL UP</p><h1>Apps and games<br /><em>made with heart.</em></h1><p className="intro">Zesibo makes useful Android apps and original games for every generation.</p><a className="button" href="/games">Explore games <span aria-hidden="true">↓</span></a></div>
      <div className="hero-art" aria-label="A happy chicken chasing a golden egg"><div className="sun" /><div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="egg">✦</div><div className="chicken"><span className="comb">♥</span><span className="eye eye-one" /><span className="eye eye-two" /><span className="beak" /><span className="wing" /><span className="leg leg-one" /><span className="leg leg-two" /></div></div>
    </section>
    <section className="parents section"><p className="eyebrow">EXPLORE ZESIBO</p><h2>Something for<br /><em>everyone.</em></h2><div className="parent-grid"><article><span>🎮</span><h3>Games</h3><p>Original games organised by age — starting with Chicken Rush for ages 5–10.</p><a className="button small" href="/games">View games</a></article><article><span>📱</span><h3>Utility apps</h3><p>Practical Android tools that make everyday life easier.</p><a className="button small" href="/apps">View apps</a></article><article><span>⬇️</span><h3>Downloads</h3><p>Official Android downloads, versions and installation instructions.</p><a className="button small" href="/download">Go to downloads</a></article></div></section>
  </main><Footer /></>;
}
