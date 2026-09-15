export function Header() {
  return <header className="nav"><a className="brand" href="/">ZESIBO <span>APPS &amp; GAMES</span></a><nav aria-label="Main navigation"><a href="/games">Games</a><a href="/apps">Apps</a><a href="/download">Download</a><a href="/support">Support</a></nav></header>;
}

export function Footer() {
  return <footer><a className="brand" href="/">ZESIBO <span>APPS &amp; GAMES</span></a><p>Named for Zekhethelo, Simphiwe and Bohlale.</p><a href="mailto:support@zesibo.co.za">support@zesibo.co.za</a><a href="/privacy">Privacy</a><p>Created with care by Mlu Solutions.</p></footer>;
}

export function Page({ eyebrow, title, children }) {
  return <><Header /><main><section className="page-hero section"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></section>{children}</main><Footer /></>;
}
