const fs = require('fs');

// 1. Fix CSS
let css = fs.readFileSync('src/App.css', 'utf8');
css = css.replace(/height: 58px;/g, 'height: 72px;');
css = css.replace(/height: 48px;/g, 'height: 58px;');
fs.writeFileSync('src/App.css', css, 'utf8');

// 2. Fix HomePage Navbar & Image Position
let homePage = fs.readFileSync('src/HomePage.jsx', 'utf8');

// Fix the image position, moving opposite of "15%" - let's try "85%" or "100%"
homePage = homePage.replace(/center 15%/g, 'center 85%');

// Fix navbar in HomePage
const oldNav = `<nav className="main-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <Link to="/contact">Contact</Link>
            <Link to="/contact" className="btn btn-nav">
              Book Consultation
            </Link>
          </nav>`;
const newNav = `<nav className="main-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <Link to="/centres">Centres</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact" className="btn btn-nav">
              Book Consultation
            </Link>
          </nav>`;
homePage = homePage.replace(oldNav, newNav);

fs.writeFileSync('src/HomePage.jsx', homePage, 'utf8');

// 3. Fix navbars in other pages just in case
const otherPages = ['src/ContactPage.jsx', 'src/CareersPage.jsx', 'src/CentresPage.jsx'];
otherPages.forEach(page => {
  let content = fs.readFileSync(page, 'utf8');
  content = content.replace(/<nav className="main-nav"[^>]*>[\s\S]*?<\/nav>/, `<nav className="main-nav" aria-label="Main">
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#about">About</a>
            <Link to="/centres">Centres</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>`);
  fs.writeFileSync(page, content, 'utf8');
});

