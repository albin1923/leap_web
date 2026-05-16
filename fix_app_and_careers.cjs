const fs = require('fs');

// 1. Fix App.jsx scroll
let appJsx = fs.readFileSync('src/App.jsx', 'utf8');
appJsx = appJsx.replace(
  /const \{ pathname \} = useLocation\(\);\s*useEffect\(\(\) => \{\s*window\.scrollTo\(\{ top: 0, behavior: "auto" \}\);\s*\}, \[pathname\]\);/g,
  `const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);`
);
fs.writeFileSync('src/App.jsx', appJsx, 'utf8');

// 2. Fix CareersPage.jsx
let careersPage = fs.readFileSync('src/CareersPage.jsx', 'utf8');
const oldCareersContent = `<div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2>Current Openings</h2>
              <p>Currently, we do not have specific openings. However, you can email your resume to us, and we will get back to you.</p>
            </div>`;
const newCareersContent = `<div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
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
            </div>`;
careersPage = careersPage.replace(oldCareersContent, newCareersContent);
fs.writeFileSync('src/CareersPage.jsx', careersPage, 'utf8');

