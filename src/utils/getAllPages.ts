// // src/utils/getAllPages.ts
// import React from 'react';
// import fs from 'fs';
// import path from 'path';

// interface Page {
//   url: string;
// }

// export async function getAllPages(): Promise<Page[]> {
//   const pagesDir = path.join(process.cwd(), 'src', 'app');

//   const pages: Page[] = [];

//   const traverse = async (dir: string, parentPath = ''): Promise<void> => {
//     const files = await fs.promises.readdir(dir);

//     for (const file of files) {
//       const filePath = path.join(dir, file);
//       const stats = await fs.promises.stat(filePath);

//       if (stats.isDirectory()) {

//         if (['node_modules', 'public'].includes(file)) {
//             continue;
//           }

//         const directoryPath = path.join(parentPath, file);
//         await traverse(filePath, directoryPath);

//       } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
//         // Adjust the condition as per your file naming convention
//         const relativePath = path.join(parentPath, file).replace(pagesDir, '').replace(/\.tsx?$/, '');
//         const url = relativePath === '/index' ? '/' : relativePath;
//         pages.push({ url });
//       }
//     }
//   };

//   await traverse(pagesDir);

//   return pages;
// }
