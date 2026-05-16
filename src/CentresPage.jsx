import { Link } from "react-router-dom";

function CentresPage() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="page-bg" aria-hidden="true"></div>

      <header className="site-header is-scrolled" id="top">
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="LEAP home">
            <img src="/leap_logo.png" alt="LEAP logo mark" />
            <div className="brand-copy">
              <p className="brand-main">LEAP</p>
              <p className="brand-sub">BY CASSAMARY</p>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main">
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#about">About</a>
            <Link to="/centres">Centres</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="contact-page-main">
        <section className="section contact-page-hero">
          <div className="container contact-page-wrap">
            <div className="contact-page-copy">
              <p className="eyebrow">Our Locations</p>
              <h1>Our Centres</h1>
              <p>
                Find a LEAP Physiotherapy clinic near you.
              </p>
            </div>

            <div className="centres-grid" style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
              <div className="centre-card" style={{ padding: '2rem', background: 'var(--surface-sunken)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <h2>LEAP by Cassamary</h2>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong>Address:</strong>
                    <p>Building No. 1, Level 1, Kakkodi, Kerala</p>
                  </div>
                  <div>
                    <strong>Contact:</strong>
                    <p><a href="tel:+917356763274">+91 73567 63274</a></p>
                  </div>
                  <div>
                    <a href="https://maps.google.com/maps?q=LEAP%20Physiotherapy" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="map-embed" style={{ marginTop: '2rem', borderRadius: '8px', overflow: 'hidden', height: '300px' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=LEAP%20Physiotherapy&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map location for LEAP Physiotherapy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container foot-wrap">
          <p>© 2026 LEAP by Cassamary. All rights reserved.</p>
          <button type="button" className="back-to-top" onClick={handleBackToTop}>
            Back to top
          </button>
        </div>
      </footer>
    </>
  );
}

export default CentresPage;
