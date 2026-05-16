const fs = require('fs');

const wImg = '/images/WhatsApp%20Image%202026-05-15%20at%206.21.47%20PM.jpeg';

let homePage = fs.readFileSync('src/HomePage.jsx', 'utf8');

// Logo replacements
homePage = homePage.replace(/\/assets\/leap-mark\.svg/g, '/leap_logo.png');

// Stories
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1584515933487-779824d29309\?auto=format&fit=crop&w=900&q=80/g, '/images/DSCF3139.jpg');
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1666214280391-8ff5bd3c0bf0\?auto=format&fit=crop&w=900&q=80/g, '/images/DSCF3172.jpg');
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1666214280557-f1b5022eb634\?auto=format&fit=crop&w=900&q=80/g, wImg);

// Care gallery
// 3186 for one on one guided therapy
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-xxxxx-8ff5bd3c0bf0\?auto=format&fit=crop&w=1200&q=80/g, '/images/DSCF3186.jpg'); // need correct url
// 3161 for mobility and strength
homePage = homePage.replace(/https:\/\/images\.unsplash\.com\/photo-1622253692010-333f2da6031d\?auto=format&fit=crop&w=1200&q=80/g, '/images/DSCF3161.jpg');

fs.writeFileSync('src/HomePage.jsx', homePage, 'utf8');
