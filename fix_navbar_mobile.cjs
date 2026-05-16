const fs = require('fs');

const pages = ['src/ContactPage.jsx', 'src/CareersPage.jsx', 'src/CentresPage.jsx'];

pages.forEach(p => {
  let c = fs.readFileSync(p, 'utf8');
  
  // ensure useEffect is imported
  if (!c.includes('useEffect')) {
    c = c.replace(/from "react-router-dom";/, 'from "react-router-dom";\nimport { useEffect } from "react";');
  }

  // add menu-toggle button if missing
  if (!c.includes('menu-toggle')) {
    c = c.replace(/<nav className="main-nav" aria-label="Main">/, 
    `<button className="menu-toggle" aria-label="Open menu" aria-expanded="false" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>\n          <nav className="main-nav" aria-label="Main">`);
  }

  // add the useEffect block if missing
  if (!c.includes('const menuToggle = document.querySelector(".menu-toggle");')) {
    const effectBlock = `
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
`;
    // Insert into component! We need to find `function XYZPage() {`
    c = c.replace(/function\s+[A-Za-z]+\(\)\s*\{/, `$&${effectBlock}`);
  }

  fs.writeFileSync(p, c, 'utf8');
});

// For HomePage.jsx, the button is already there, but let's check if there is an issue with visibility.
let c = fs.readFileSync('src/HomePage.jsx', 'utf8');
// Check if menu-toggle is inside .nav-wrap. Yes it is.
