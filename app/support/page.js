import { Page } from "../components/SiteShell";

export default function SupportPage() {
  return <Page eyebrow="SUPPORT" title={<>We are here to<br /><em>help.</em></>}><section className="section"><div className="game-card"><div className="game-info"><p className="label">SUPPORT CENTRE</p><h3>Contact Zesibo</h3><p>For help with a Zesibo app or game, email our support team.</p><a className="button small" href="mailto:support@zesibo.co.za">support@zesibo.co.za</a><p>Installation help and update information for each app will also be available here.</p></div></div></section></Page>;
}
