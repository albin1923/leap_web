const fs = require('fs');

const files = ['src/HomePage.jsx', 'src/ContactPage.jsx', 'src/CareersPage.jsx', 'src/CentresPage.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Add Centres and Careers to HomePage if missing
  if (file === 'src/HomePage.jsx') {
    content = content.replace(
      /<nav className="main-nav" aria-label="Main">\s*<a href="#services">Services<\/a>\s*<a href="#about">About<\/a>\s*<a href="#approach">Approach<\/a>\s*<Link to="\/contact">Contact<\/Link>\s*<\/nav>/,
      `<nav className="main-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <Link to="/centres">Centres</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>`
    );
  // Also contact page has slightly different links
    content = content.replace(
      /<nav className="main-nav" aria-label="Main">\s*<Link to="\/">Home<\/Link>\s*<a href="\/#services">Services<\/a>\s*<a href="\/#about">About<\/a>\s*<a href="\/#approach">Approach<\/a>\s*<Link to="\/contact">Contact<\/Link>\s*<\/nav>/,
      `<nav className="main-nav" aria-label="Main">
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#about">About</a>
            <a href="/#approach">Approach</a>
            <Link to="/centres">Centres</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>`
    );
  }

  // Remove logo text
  content = content.replace(
    /<div className="brand-copy">\s*<p className="brand-main">LEAP<\/p>\s*<p className="brand-sub">BY CASSAMARY<\/p>\s*<\/div>/g,
    ''
  );

  fs.writeFileSync(file, content, 'utf8');
});
