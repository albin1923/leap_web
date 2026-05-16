import { Link } from "react-router-dom";
import { useEffect } from "react";

function CareersPage() {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    const handleMenuClick = () => {
      const isExpanded = menuToggle?.getAttribute("aria-expanded") === "true";
      menuToggle?.setAttribute("aria-expanded", String(!isExpanded));
      nav?.classList.toggle("open");
    };

    const closeMenu = () => {
      nav?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    };

    menuToggle?.addEventListener("click", handleMenuClick);
    const navLinks = nav ? [...nav.querySelectorAll("a")] : [];
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      menuToggle?.removeEventListener("click", handleMenuClick);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

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

          <button className="menu-toggle" aria-label="Open menu" aria-expanded="false" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
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

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
              <div className="career-card" style={{ padding: '2rem', background: 'var(--surface-sunken)', borderRadius: '12px', marginBottom: '2rem' }}>
                <h2>Join a Team of Experts</h2>
                <p>We are always eager to meet dedicated, compassionate, and skilled professionals who want to make a difference in people's lives. Even if there are no immediate openings, we are constantly growing and often look to our talent pool when an opportunity arises.</p>
              </div>

              <div className="career-card" style={{ padding: '2rem', background: 'var(--surface-sunken)', borderRadius: '12px', marginBottom: '2rem' }}>
                <h2>Why Work With Us?</h2>
                <ul className="check-list" style={{ marginTop: '1rem' }}>
                  <li>Collaborative and supportive team environment</li>
                  <li>Continuous learning and professional growth</li>
                  <li>State-of-the-art facilities and equipment</li>
                  <li>A strong focus on patient-centered care and real outcomes</li>
                </ul>
              </div>

              <div className="career-card" style={{ padding: '2rem', background: 'var(--surface-sunken)', borderRadius: '12px' }}>
                <h2>Submit Your Resume</h2>
                <p>Ready to jumpstart your career with LEAP? Send us your resume and cover letter detailing your experience and areas of interest.</p>
                <a href="mailto:contact@leapphysiotherapy.in?subject=Application to Join LEAP" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Apply Now</a>
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

export default CareersPage;
