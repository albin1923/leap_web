const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');
css = css.replace(/  \.brand img \{\s*width: auto;\s*height: auto;\s*\}/g, 
  `  .brand img {
    height: 48px;
    width: auto;
    object-fit: contain;
  }`);
fs.writeFileSync('src/App.css', css, 'utf8');
