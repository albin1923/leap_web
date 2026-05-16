const fs = require('fs');

const pages = ['src/HomePage.jsx', 'src/ContactPage.jsx', 'src/CareersPage.jsx', 'src/CentresPage.jsx'];

pages.forEach(p => {
  let c = fs.readFileSync(p, 'utf8');
  // Change "Book Consultation" links to mailto where applicable, or keep as points to /contact
  // The user says "also make sure the book a consultation enquiry is set to the no. annd mail id."
  // So I'll change <Link to="/contact" className="btn btn-nav">Book Consultation</Link> 
  // to <a href="mailto:contact@leapphysiotherapy.in?subject=Consultation Enquiry" className="btn btn-nav">Book Consultation</a>
  
  c = c.replace(/<Link to="\/contact" className="btn btn-nav">\s*Book Consultation\s*<\/Link>/g, 
  `<a href="mailto:contact@leapphysiotherapy.in?subject=Consultation Enquiry" className="btn btn-nav">Book Consultation</a>`);
  fs.writeFileSync(p, c, 'utf8');
});

