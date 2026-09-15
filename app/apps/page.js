import { Page } from "../components/SiteShell";

export default function AppsPage() {
  return <Page eyebrow="ZESIBO APPS" title={<>Helpful tools for<br /><em>everyday life.</em></>}><section className="parents section"><div className="parent-grid"><article><span>📱</span><h3>Useful by design</h3><p>Simple, practical Android apps built to solve real problems.</p></article><article><span>✨</span><h3>Easy to use</h3><p>Clear screens, thoughtful details and no unnecessary complication.</p></article><article><span>🚀</span><h3>Coming next</h3><p>Our first utility apps are being planned and will appear here when ready.</p></article></div></section></Page>;
}
