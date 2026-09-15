import { Footer, Header } from "./components/SiteShell";

export default function Home() {
  return <><Header /><main>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">PLAY • EXPLORE • LEVEL UP</p><h1>Apps and games<br /><em>made with heart.</em></h1><p className="intro">Zesibo makes useful Android apps and original games for every generation.</p><a className="button" href="/games">Explore games <span aria-hidden="true">↓</span></a></div>
      <div className="brand-hero-art"><img src="/zesibo-logo.png" alt="Zesibo Apps and Games logo" /></div>
    </section>
    <section className="parents section"><p className="eyebrow">EXPLORE ZESIBO</p><h2>Something for<br /><em>everyone.</em></h2><div className="parent-grid"><article><span>🎮</span><h3>Games</h3><p>Original games organised by age — starting with Chicken Rush for ages 5–10.</p><a className="button small" href="/games">View games</a></article><article><span>📱</span><h3>Utility apps</h3><p>Practical Android tools that make everyday life easier.</p><a className="button small" href="/apps">View apps</a></article><article><span>⬇️</span><h3>Downloads</h3><p>Official Android downloads, versions and installation instructions.</p><a className="button small" href="/download">Go to downloads</a></article></div></section>
  </main><Footer /></>;
}
