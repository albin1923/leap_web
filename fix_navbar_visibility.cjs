const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// Ensure logo doesn't push menu-toggle out of view on mobile
css += `
@media (max-width: 960px) {
  .menu-toggle {
    display: inline-flex !important;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;
  }

  .main-nav {
    position: absolute;
    top: 80px;
    right: 4vw;
    width: min(320px, 92vw);
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid rgba(0, 52, 89, 0.2);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 12px 30px rgba(8, 34, 55, 0.18);
    display: none;
    flex-direction: column;
    align-items: stretch;
  }
  
  .main-nav.open {
    display: flex !important;
  }
  
  .brand img {
    max-width: 65vw;
  }
}
`;
fs.writeFileSync('src/App.css', css, 'utf8');
