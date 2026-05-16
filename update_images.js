const fs = require('fs');

let homePage = fs.readFileSync('/home/albin/leap/Leap_Web-Final/src/HomePage.jsx', 'utf8');

// Logo
homePage = homePage.replace(/\/assets\/leap-mark\.svg/g, '/leap_logo.png');

// Client stories
// 3139 for post knee
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1584515933487-779824d29309\?auto=format&fit=crop&w=900&q=80/g, '/images/DSCF3139.jpg');
// 3172 for sports injury
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1666214280391-8ff5bd3c0bf0\?auto=format&fit=crop&w=900&q=80/g, '/images/DSCF3172.jpg');
// whatsapp image for chronic back pain
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1666214280557-f1b5022eb634\?auto=format&fit=crop&w=900&q=80/g, '/images/WhatsApp Image 2026-05-15 at 6.21.47 PM.jpeg');

// Care gallery
// 3186 for one on one guided therapy
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1666214280391-8ff5bd3c0bf0\?auto=format&fit=crop&w=1200&q=80/g, '/images/DSCF3186.jpg');
// 3161 for mobility and strength
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1622253692010-333f2da6031d\?auto=format&fit=crop&w=1200&q=80/g, '/images/DSCF3161.jpg');
// compassionate senior care -> keep same (https://images.unsplash.com/photo-1582719478250-c89cae4dc85b)

// People-centered care image
// The original is probably an unsplash image for approach/people centered care. Let's find it.
