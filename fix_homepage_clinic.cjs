const fs = require('fs');

// 3. Fix HomePage "Visit Our Clinic"
let homePage = fs.readFileSync('src/HomePage.jsx', 'utf8');

// The original section block ends where it ends.
// Let's replace the content inside location-copy
const oldLocCopy = `<p className="eyebrow">Visit Our Clinic</p>
              <h2 className="section-title">Find LEAP On The Map</h2>
              <p>
                Plan your visit easily. Tap below to open directions and reach our clinic without hassle.
              </p>
              <a href={googleDirectionsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Get Directions
              </a>`;
const newLocCopy = `<p className="eyebrow">Our Centres</p>
              <h2 className="section-title">Find LEAP Centers</h2>
              <p>
                Explore our various clinics near you. Find contact information, directions, and the right care center for your needs.
              </p>
              <Link to="/centres" className="btn btn-primary">
                View All Centres
              </Link>`;
              
// This relies on Link being imported, which it is. But googleDirectionsUrl might now be unused. It's fine.
homePage = homePage.replace(oldLocCopy, newLocCopy);

// But we can also just delete the iframe and display a simpler block.
// The user said: "replace the visit our clinic with the centers page"
// Let's replace the whole section content.
const locationSectionRegex = /<section className="section location flow-section" id="location">[\s\S]*?<\/section>/;
const newLocationSection = `<section className="section location flow-section" id="location" style={{ padding: '6rem 0', background: 'var(--surface-sunken)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <p className="eyebrow">Our Centres</p>
            <h2 className="section-title">Our Locations</h2>
            <p style={{ marginBottom: '2rem' }}>
              We have multiple facilities to provide convenient access to our advanced physiotherapy care. Find a LEAP Centre near you.
            </p>
            <Link to="/centres" className="btn btn-primary">
              Discover Our Centres
            </Link>
          </div>
        </section>`;

homePage = homePage.replace(locationSectionRegex, newLocationSection);

// Also fix the logo size even more.
let css = fs.readFileSync('src/App.css', 'utf8');
css = css.replace(/height: 72px;/g, 'height: 90px;');
// For mobile.
css = css.replace(/height: 58px;/g, 'height: 64px;');
fs.writeFileSync('src/App.css', css, 'utf8');


fs.writeFileSync('src/HomePage.jsx', homePage, 'utf8');
