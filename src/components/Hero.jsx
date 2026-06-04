export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__grain" aria-hidden="true" />
      <nav className="hero__nav">
        <span className="hero__mark">Our Story</span>
        <a href="#chapters" className="hero__link">Read</a>
      </nav>
      <div className="hero__content">
        <p className="hero__eyebrow">Started with music · February 12, 2018</p>
        <h1 className="hero__title">
          Not every chapter<br />
          <em>is romantic.</em>
        </h1>
        <p className="hero__lead">
          Some chapters are golden. Others are distance, regret, and trying
          again — but they&apos;re all still ours.
        </p>
        <a href="#chapters" className="hero__cta">Begin reading</a>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </header>
  )
}
