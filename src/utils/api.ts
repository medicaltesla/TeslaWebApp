// import { NextApiResponse } from 'next';
// import Blog from '@/models/Blog';
// import connect from '@/utils/db';
// import {GET, POST} from '@/app/api/blogs/route';
// import { NextResponse } from 'next/server';
// import { PostData } from './types'; // Import your PostData type
// import { MetaData } from './types'; // Import your MetaData type

// // Function to fetch post data by slug
// export async function fetchPostData(slug: string): Promise<PostData> {
//   try {
//     await connect();
//     const post = await Blog.findOne({ slug }); // Assuming your Blog model has a `slug` field
//     if (!post) {
//       throw new Error(`Post with slug ${slug} not found`);
//     }
//     return post.toJSON() as PostData;
//   } catch (error) {
//     console.error('Error fetching post data:', error);
//     throw error;
//   }
// }

// // Function to fetch related blogs by category
// export async function fetchRelatedBlogs(category: string): Promise<PostData[]> {
//   try {
//     await connect();
//     const relatedBlogs = await Blog.find({ categories: category }).limit(5); // Adjust limit as needed
//     return relatedBlogs.map(blog => blog.toJSON() as PostData);
//   } catch (error) {
//     console.error('Error fetching related blogs:', error);
//     throw error;
//   }
// }

// // Function to generate metadata for a given slug
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<MetaData> {
//   try {
//     const post = await fetchPostData(params.slug);
//     return {
//       title: post.title,
//       keywords: post.metaKeywords,
//       description: post.metaDescription,
//     };
//   } catch (error) {
//     console.error('Error generating metadata:', error);
//     throw error;
//   }
// }
