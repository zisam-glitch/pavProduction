const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const sitemap = new SitemapStream({ hostname: 'https://www.pavdental.com/' });

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
// Add more URLs as needed

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), data);
});
