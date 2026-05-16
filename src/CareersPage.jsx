import { Link } from "react-router-dom";

function CareersPage() {
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
              <p className="eyebrow">Careers at LEAP</p>
              <h1>Join Our Team</h1>
              <p>
                We are always looking for passionate professionals to join our physiotherapy clinic.
              </p>
              <div className="contact-meta contact-meta-page">
                <a href="mailto:contact@leapphysiotherapy.in">contact@leapphysiotherapy.in</a>
              </div>
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2>Current Openings</h2>
              <p>Currently, we do not have specific openings. However, you can email your resume to us, and we will get back to you.</p>
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

export default CareersPage;
