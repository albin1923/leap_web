const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');
css = css.replace(/height: 90px;/g, 'height: 110px;');
css = css.replace(/height: 64px;/g, 'height: 72px;');
fs.writeFileSync('src/App.css', css, 'utf8');
