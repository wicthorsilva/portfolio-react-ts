const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

// URLs do sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#about', changefreq: 'monthly', priority: 0.7 },
  // Adicione outras URLs aqui
];

const sitemapStream = new SitemapStream({ hostname: 'https://wicthorsilva.com' });

streamToPromise(Readable.from(urls).pipe(sitemapStream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
});
