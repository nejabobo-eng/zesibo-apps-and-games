import { Page } from "../components/SiteShell";

const examples = [
  { name: "EntrySafe", type: "Business platform", description: "A professional website and platform for EntrySafe.", href: "https://www.entrysafe.co.za" },
  { name: "Faith Connect Community", type: "Community & organisation", description: "A community website for ministry information, initiatives, donations, music and books.", href: "https://www.faithconnectcommunity.co.za" },
  { name: "ConnectNetwork", type: "Business promotion", description: "A promotional website that helps businesses, products and services get discovered.", href: "https://www.connectnetwork.co.za" },
  { name: "Zesibo Apps & Games", type: "Product showcase", description: "A home for Zesibo’s Android apps, games, releases and support information.", href: "https://www.zesibo.co.za" },
];

const siteTypes = [
  ["Business websites", "A clear online home for your company, services, contact details and brand."],
  ["Personal & portfolio sites", "Show your skills, work, biography, CV, photography, art or personal story."],
  ["Online stores", "Product catalogues, online ordering and secure checkout-ready shopping experiences."],
  ["Booking & service sites", "Appointments, accommodation, events, consultations, quotes and service enquiries."],
  ["Blogs & news sites", "Articles, updates, opinion, community news and content designed to grow an audience."],
  ["Community & non-profit sites", "Churches, charities, schools, clubs and organisations with programmes, giving and contact options."],
  ["Directories & social platforms", "Member listings, local business directories, community platforms and connection-focused websites."],
  ["Landing pages & campaigns", "Focused product launches, promotions, events and marketing campaigns that drive action."],
  ["Custom web platforms", "Purpose-built systems for your own idea, workflow, customers, team or community."],
];

export const metadata = {
  title: "Website Development | Zesibo Apps & Games",
  description: "Professional website development by Zesibo for businesses, organisations and personal brands.",
};

export default function WebsitesPage() {
  return <Page eyebrow="ZESIBO WEBSITE DEVELOPMENT" title={<>Websites made<br /><em>for your next step.</em></>}>
    <section className="section website-intro">
      <div><p className="eyebrow">PROFESSIONAL WEBSITES FOR EVERY NEED</p><h2>From an idea to<br /><em>an online home.</em></h2><p>Zesibo builds modern, mobile-friendly websites for businesses, organisations, creators and communities. We can help with the website, domain, professional email and the features your project needs.</p><a className="button small" href="mailto:support@zesibo.co.za?subject=Website%20development%20enquiry">Talk to us about your website</a></div>
      <img src="/zesibo-website-development.png" alt="Zesibo Website Development: professional websites for every need" />
    </section>
    <section className="parents section website-section"><div className="section-heading"><p className="eyebrow">WHAT WE CAN BUILD</p><h2>Built around<br /><em>your purpose.</em></h2><p>Whether you need a simple professional presence or a custom platform, we shape the site around the people who will use it.</p></div><div className="website-type-grid">{siteTypes.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="section website-section"><div className="section-heading"><p className="eyebrow">WEBSITES WE HAVE BUILT</p><h2>Real work.<br /><em>Real links.</em></h2></div><div className="website-example-grid">{examples.map((site) => <article key={site.href}><p className="label">{site.type}</p><h3>{site.name}</h3><p>{site.description}</p><a className="button small" href={site.href} target="_blank" rel="noreferrer">Visit website ↗</a></article>)}</div></section>
    <section className="section website-cta"><p className="eyebrow">START YOUR WEBSITE</p><h2>Have a vision?<br /><em>Let’s build it.</em></h2><p>Tell us what you need and we can discuss the right website, domain and next steps.</p><a className="button" href="mailto:support@zesibo.co.za?subject=Website%20development%20enquiry">support@zesibo.co.za</a></section>
  </Page>;
}
