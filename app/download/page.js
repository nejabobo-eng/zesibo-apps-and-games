import { Page } from "../components/SiteShell";

export default function DownloadPage() {
  return <Page eyebrow="OFFICIAL DOWNLOADS" title={<>Safe downloads from<br /><em>Zesibo.</em></>}><section className="download section"><div><p className="eyebrow">ANDROID</p><h2>Chicken Rush<br /><em>coming soon on Google Play.</em></h2><p>Our first public Android release will appear on Google Play with its age rating and installation information.</p></div><div className="download-card"><span className="icon">🐔</span><div><strong>Chicken Rush</strong><small>Android • Ages 5–10</small></div><button type="button" disabled>Coming soon on Google Play</button></div></section></Page>;
}
