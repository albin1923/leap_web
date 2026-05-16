const fs = require('fs');

const files = ['src/HomePage.jsx', 'src/ContactPage.jsx', 'src/CareersPage.jsx', 'src/CentresPage.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Make sure logo is always /leap_logo.png
  content = content.replace(/<img src="[^"]*logo[^"]*" alt="LEAP logo mark" \/>/g, '<img src="/leap_logo.png" alt="LEAP logo mark" />');

  // If HomePage, remove quote and name from stories, and adjust objectPosition for 3139 image
  if (file === 'src/HomePage.jsx') {
    content = content.replace(
      /<div className="story-content">\s*<p className="story-title">\{story\.title\}<\/p>\s*<p className="story-quote">“\{story\.quote\}”<\/p>\s*<p className="story-name">\{story\.name\}<\/p>\s*<\/div>/g,
      `<div className="story-content">
                    <p className="story-title">{story.title}</p>
                  </div>`
    );
    
    // Add object-position adjustments for 3139 image
    content = content.replace(
      /<img src=\{story\.image\} alt=\{story\.name\} loading="lazy" onError=\{handleImageError\} \/>/g,
      `<img src={story.image} alt={story.name} loading="lazy" onError={handleImageError} style={{ objectPosition: story.image.includes('3139') ? 'center 15%' : 'center' }} />`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
});
