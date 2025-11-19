

import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="page-container">
    <div className="page">
      {/* HEADER / HERO */}
      <header className="hero">
        <div className="hero-inner">
          {/* Logo image – place file in /public as mia-logo.png */}
          <img
            src="/mia-logo.png"
            alt="Mia Lash Extensions logo"
            className="logo-img"
          />

          <h1 className="logo">Mia Lash Extensions</h1>
          <p className="tagline">
            Soft, natural and elegant eyelash extensions for everyday confidence.
          </p>

          <div className="hero-buttons">
            <a href="tel:+13062306089" className="btn primary">
              Call to book
            </a>
            <a
              href="https://m.me/mia.lash.extension"
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              Message on Facebook
            </a>
          </div>

          <p className="location">
            119 Trent Cres, Saskatoon • (306) 230-6089 •{' '}
            <a
              href="mailto:mia.lash.extensions@gmail.com"
              className="location-link"
            >
              mia.lash.extensions@gmail.com
            </a>
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="content">
        {/* ABOUT SECTION */}
        <section className="card">
          <h2>About Mia Lash Extensions</h2>
          <p>
            Mia Lash Extensions offers professional eyelash extension services in a
            comfortable home-based studio in Saskatoon. Each set is customized to
            your eye shape and style preference, with a focus on soft, lightweight
            and comfortable lashes.
          </p>
          <p>
            High-quality products and careful application are used to help protect
            your natural lashes while giving you beautiful results that are easy to
            wear every day.
          </p>
        </section>

        {/* SERVICES / PRICING */}
        <section className="card">
          <h2>Lash Extension Services &amp; Price List</h2>

          {/* Classic */}
          <div className="service-block">
            <h3>Classic</h3>
            <p className="service-desc">
              Natural, everyday look with one extension applied to each natural lash.
            </p>
            <ul className="price-list">
              <li><span>Full set</span><span className="price">$75</span></li>
              <li><span>Refill within 2 weeks</span><span className="price">$50</span></li>
              <li><span>Refill within 3 weeks</span><span className="price">$60</span></li>
              <li><span>Refill after 4 weeks (new set)</span><span className="price">$75</span></li>
            </ul>
          </div>

          {/* Hybrid */}
          <div className="service-block">
            <h3>Hybrid</h3>
            <p className="service-desc">
              A mix of classic and volume lashes for a slightly fuller, textured look.
            </p>
            <ul className="price-list">
              <li><span>Full set</span><span className="price">$85</span></li>
              <li><span>Refill within 2 weeks</span><span className="price">$55</span></li>
              <li><span>Refill within 3 weeks</span><span className="price">$65</span></li>
              <li><span>Refill after 4 weeks</span><span className="price">$80</span></li>
            </ul>
          </div>

          {/* Volume */}
          <div className="service-block">
            <h3>Volume</h3>
            <p className="service-desc">
              Soft, full, fluffy look using lightweight volume fans for a glam effect.
            </p>
            <ul className="price-list">
              <li><span>Full set</span><span className="price">$95</span></li>
              <li><span>Refill within 2 weeks</span><span className="price">$70</span></li>
              <li><span>Refill within 3 weeks</span><span className="price">$80</span></li>
              <li><span>Refill after 4 weeks</span><span className="price">$90</span></li>
            </ul>
          </div>

          {/* Mega Volume */}
          <div className="service-block">
            <h3>Mega Volume</h3>
            <p className="service-desc">
              Extra full and dramatic lashes with dense, dark volume for a bold look.
            </p>
            <ul className="price-list">
              <li><span>Full set</span><span className="price">$115</span></li>
              <li><span>Refill within 2 weeks</span><span className="price">$90</span></li>
              <li><span>Refill within 3 weeks</span><span className="price">$100</span></li>
              <li><span>Refill after 4 weeks (new set)</span><span className="price">$115</span></li>
            </ul>
          </div>

          {/* Bottom lashes add-on */}
          <div className="service-block">
            <h3>Bottom Lashes (Add-On)</h3>
            <p className="service-desc">
              Add definition to the lower lash line for a complete eye look.
            </p>
            <ul className="price-list">
              <li><span>Bottom lashes (add-on)</span><span className="price">$30–45</span></li>
            </ul>
          </div>

          <p className="note">
            * Pricing is based on your lash condition, style and the time needed.  
            Refills are recommended every 2–3 weeks. After 4 weeks, a new set may be required.
          </p>
        </section>

        {/* CALL TO ACTION */}
        <section className="card centered">
          <h2>Ready to book your lash appointment?</h2>
          <p>
            Send a message or call to reserve your appointment. Evening and weekend
            times may be available.
          </p>

          <div className="hero-buttons">
            <a href="tel:+13062306089" className="btn primary">
              Call to book
            </a>
            <a
              href="https://m.me/mia.lash.extension"
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              Message on Facebook
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {currentYear} Mia Lash Extensions. All rights reserved.
      </footer>
    </div>
    </div>
  )
}

export default App
