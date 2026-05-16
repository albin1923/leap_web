const fs = require('fs');

let c = fs.readFileSync('src/HomePage.jsx', 'utf8');

c = c.replace(/<Link to="\/contact" className="btn btn-primary magnetic">\s*Contact Us\s*<\/Link>/g, 
  `<a href="mailto:contact@leapphysiotherapy.in?subject=Consultation Enquiry" className="btn btn-primary magnetic">Contact Us</a>`);
  fs.writeFileSync('src/HomePage.jsx', c, 'utf8');

