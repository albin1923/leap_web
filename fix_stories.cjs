const fs = require('fs');

let homePage = fs.readFileSync('src/HomePage.jsx', 'utf8');

// The stories are in clientStories array
homePage = homePage.replace(/name:\s*"[^"]+",\s*title:\s*"[^"]+",\s*quote/g, 'quote');

// Remove rendering of name and title
// In the JSX, it renders them inside <div className="story-content"> probably.
// Let's just remove them with a regex or string replace.
// Let's fetch the file content to modify safely.
