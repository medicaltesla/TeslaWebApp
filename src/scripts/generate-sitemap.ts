// import fs from 'fs';
// import path from 'path';
// import fetchBlogs from '../utils/fetchBlogs';
// import { format } from 'date-fns';

// const SITE_URL = 'https://www.maxxcelloverseas.com';

// const generateSitemap = async () => {
//   const blogSlugs = await fetchBlogs();

//   const staticPages = fs
//     .readdirSync(path.join(__dirname, '../app'))
//     .filter((staticPage) => {
//       return ![
//         '_app.tsx',
//         '_document.tsx',
//         '_error.tsx',
//         'api',
//       ].includes(staticPage);
//     })
//     .map((staticPagePath) => {
//       const path = staticPagePath.replace('.tsx','' );
//       return `${SITE_URL}/${path}`;
//     });

//   const dynamicPages = blogSlugs.map((slug:string) => {
//     return `${SITE_URL}/blogs-list/${slug}`;
//   });

//   const allPages = [...staticPages, ...dynamicPages];
//   console.log(allPages)

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${allPages
//         .map((url ) => {
//           return ` <url>
//             <loc>${url}</loc>
//             <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
//             <changefreq>daily</changefreq>
//             <priority>0.80</priority>
//           </url> `;
//         })
//         .join('')}
//     </urlset>`;
   
//   fs.writeFileSync(path.join(__dirname, '../app/sitemap.xml'), sitemap);
// };

// generateSitemap()
//   .then(() => {
//     console.log('Sitemap generated successfully');
//   })
//   .catch((error) => {
//     console.error('Error generating sitemap:', error);
//   });



