const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

// I need to change how .hero-grid and .hero-visual act on PC.
// By default .hero-grid has grid-template-columns: minmax(0, 1.03fr) minmax(430px, 0.97fr);
// To make the image cover the entire right half of the screen, we can make .hero-visual strictly absolute.
css += `
@media (min-width: 960px) {
  .hero {
    padding-bottom: 0;
  }
  .hero-grid {
    display: block !important;
  }
  .hero-copy {
    width: 50% !important;
    max-width: 50% !important;
    padding-bottom: 4rem;
  }
  .hero-visual {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50% !important;
    height: 100% !important;
    min-height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 0 !important;
  }
  .hero-visual img {
    border-radius: 0 !important;
  }
}
`;
fs.writeFileSync('src/App.css', css, 'utf8');
