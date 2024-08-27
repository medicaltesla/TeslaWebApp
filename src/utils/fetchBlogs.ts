
// interface PostData {
//     metaKeywords: string;
//     metaDescription: string;
//     title: string;
//     titleDescription: string;
//     categories: string;
//     bannerImage: string;
//     coverImage: string;
//     slug: string;
//     status: "draft" | "published";
//     body: string;
//     tags: string[];
//     updatedAt: string;
//   }
  
// const fetchBlogs = async (): Promise<string[]> => {
//   const response = await fetch(process.env.NODE_ENV === 'development'
//     ? 'http://localhost:3000/api/blogs'
//     : 'https://www.maxxcelloverseas.com/api/blogs');
//   const data = await response.json();

//   if (!Array.isArray(data)) {
//     throw new Error('API response is not an array');
//   }

//   return data.map((blog: { slug: string }) => blog.slug);
// };
  
// export default fetchBlogs;