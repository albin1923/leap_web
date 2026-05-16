const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// Replace the previous media queries for 960px regarding hero visual
css = css.replace(/@media \(min-width: 960px\) \{\s*\.hero-visual \{\s*-webkit-mask-image: linear-gradient[^}]*\}\s*\}/, '');
css = css.replace(/@media \(min-width: 960px\) \{\s*\.hero \{\s*padding-bottom: 0;[\s\S]*?border-radius: 0 !important;\s*\}\s*\}/, '');

css += `
@media (min-width: 960px) {
  .hero {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    min-height: 100vh !important;
    display: flex;
    align-items: stretch;
  }
  .hero-content {
    width: 100% !important;
    display: flex;
  }
  .hero-grid {
    display: flex !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
  }
  .hero-copy {
    flex: 0 0 50% !important;
    max-width: 50% !important;
    padding: 8rem 4rem 4rem 8vw !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .hero-visual {
    flex: 0 0 50% !important;
    max-width: 50% !important;
    position: relative !important;
    height: auto !important;
    min-height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 0 !important;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%);
    mask-image: linear-gradient(to right, transparent 0%, black 15%);
  }
  .hero-visual img {
    border-radius: 0 !important;
    height: 100% !important;
  }
}
`;
fs.writeFileSync('src/App.css', css, 'utf8');
