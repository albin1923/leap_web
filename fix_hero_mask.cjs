const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

// I will just append the mask rule to the end of the file.
css += `
@media (min-width: 960px) {
  .hero-visual {
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 30%);
    mask-image: linear-gradient(to right, transparent 0%, black 30%);
    border-radius: 0 !important;
  }
}
`;
fs.writeFileSync('src/App.css', css, 'utf8');
