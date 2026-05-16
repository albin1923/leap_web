const fs = require('fs');
let code = fs.readFileSync('src/HomePage.jsx', 'utf8');

code = code.replace(
  /<img\s+key=\{src\}\s+src=\{src\}\s+alt="Hero Slide"\s+style=\{\{/g,
  `<img\n                    key={src}\n                    src={src}\n                    alt="Hero Slide"\n                    fetchpriority={idx === 0 ? "high" : "low"}\n                    loading={idx === 0 ? "eager" : "lazy"}\n                    style={{`
);

code = code.replace(
  /fetchpriority: idx === 0 \? "high" : "auto",\s+loading: idx === 0 \? "eager" : "lazy",/g,
  ''
);

fs.writeFileSync('src/HomePage.jsx', code, 'utf8');
