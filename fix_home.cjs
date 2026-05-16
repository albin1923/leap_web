const fs = require('fs');

let homePage = fs.readFileSync('src/HomePage.jsx', 'utf8');

// The stories are in clientStories array
// Let's replace the clientStories array manually
const storiesArray = `const clientStories = [
  {
    name: "Amina Joseph",
    title: "Post-Surgery Knee Recovery",
    quote:
      "I returned to work and daily walking much faster than expected. The care plan felt personal and practical from day one.",
    image:
      "/images/DSCF3139.jpg",
  },
  {
    name: "David Mensah",
    title: "Sports Injury Rehabilitation",
    quote:
      "The team rebuilt my strength and confidence step by step. I am back to training without fear of re-injury.",
    image:
      "/images/DSCF3172.jpg",
  },
  {
    name: "Grace Njeri",
    title: "Chronic Back Pain Management",
    quote:
      "My pain reduced significantly in just a few weeks, and now I know exactly how to manage posture and movement.",
    image:
      "/images/WhatsApp%20Image%202026-05-15%20at%206.21.47%20PM.jpeg",
  },
];`;

// Wait, the client stories already look like that. The problem was I deleted the rendering code!
// Let's re-add the rendering code:
/*
<div className="story-content">
  <p className="story-title">{story.title}</p>
  <p className="story-quote">“{story.quote}”</p>
  <p className="story-name">{story.name}</p>
</div>
*/

homePage = homePage.replace(
  /<div className="story-content">\s*<p className="story-quote">\u201c\{story\.quote\}\u201d<\/p>\s*<\/div>/g,
  `<div className="story-content">
                    <p className="story-title">{story.title}</p>
                    <p className="story-quote">“{story.quote}”</p>
                    <p className="story-name">{story.name}</p>
                  </div>`
);

// We need to implement the Hero image cycling.
// We can use a hook to cycle `heroImages` array.
const reactImport = `import { useEffect, useState } from "react";`;
homePage = homePage.replace(/import { useEffect } from "react";/, reactImport);

const heroImagesArray = `
const heroImages = [
  "/images/DSCF3043.jpg",
  "/images/DSCF3056.jpg",
  "/images/DSCF3061.jpg",
  "/images/DSCF3069.jpg",
  "/images/DSCF3083.jpg",
  "/images/DSCF3222.jpg"
];
`;

homePage = homePage.replace(/function HomePage\(\) {/g, heroImagesArray + '\nfunction HomePage() {\n  const [heroImgIndex, setHeroImgIndex] = useState(0);\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setHeroImgIndex((prev) => (prev + 1) % heroImages.length);\n    }, 3000);\n    return () => clearInterval(interval);\n  }, []);\n');

// Replace hero-visual content with an IMG tag that changes.
homePage = homePage.replace(
  /<div className="hero-visual reveal reveal-up" aria-hidden="true" data-parallax-block="true" data-delay="280" data-duration="1200">\s*<div className="hero-glow loop-float"><\/div>\s*<\/div>/g,
  `<div className="hero-visual reveal reveal-up" aria-hidden="true" data-parallax-block="true" data-delay="280" data-duration="1200" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                {heroImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt="Hero Slide"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: heroImgIndex === idx ? 1 : 0,
                      transition: 'opacity 1s ease-in-out'
                    }}
                  />
                ))}
              </div>`
);

// And "remove the sentece there is now." in client stories.
// Let's find: <p>Your feedback helps future clients understand how LEAP supports real recovery journeys.</p> -> delete it.
homePage = homePage.replace(/<p>Your feedback helps future clients understand how LEAP supports real recovery journeys\.<\/p>/gi, '');

fs.writeFileSync('src/HomePage.jsx', homePage, 'utf8');
