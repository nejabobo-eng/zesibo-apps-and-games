import { Page } from "../components/SiteShell";

const books = [
  {
    title: "Spiritual Warfare: Standing in Christ: Armor of God",
    href: "https://www.amazon.com/dp/B0HMLGHD67",
    description: "A practical guide through Ephesians 6:10–20, helping believers stand firm in the armour of God through Scripture, clear teaching, personal application and prayer. It calls readers away from fear and self-reliance to discernment, repentance, reconciliation, faithful obedience and life in Christian community.",
  },
  {
    title: "To Imitate Christ: Becoming Like Jesus in Everyday Life",
    href: "https://www.amazon.com/dp/B0HMLJQ79X",
    description: "A practical and encouraging guide for believers who desire to become more like Jesus in everyday life. Through Scripture, reflection, prayer and practical application, it explores Christ's character and shows how His example can shape how we love, serve, forgive, pray, obey and face hardship.",
  },
];

export const metadata = {
  title: "Books | Zesibo Apps & Games",
  description: "Books by Pastor Mlu Mncube, available on Amazon Kindle.",
};

export default function BooksPage() {
  return <Page eyebrow="ZESIBO BOOKS" title={<>Faith for<br /><em>everyday life.</em></>}>
    <section className="parents section">
      <div className="section-heading">
        <p className="eyebrow">BY PASTOR MLU MNCUBE</p>
        <h2>Read. Reflect.<br /><em>Grow.</em></h2>
        <p>Explore faith-centred Kindle books created to encourage a deeper walk with Christ.</p>
      </div>
      <div className="parent-grid app-grid">
        {books.map((book) => <article className="app-card" key={book.href}>
          <span aria-hidden="true">📖</span>
          <p className="label">KINDLE EDITION</p>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <a className="button small" href={book.href} target="_blank" rel="noreferrer">View on Amazon</a>
        </article>)}
      </div>
    </section>
  </Page>;
}
