import { Outfit } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer"
import Loader from "@/components/Loader/Loader";
import CallNavbar from '@/components/Navbar/CallNavbar';
import { Kanit } from 'next/font/google';
import WelcomeMessage from '@/components/Navbar/WelcomeMessage';
import PopUpForm from '@/components/Home/PopUpForm';

const inter = Kanit({ subsets: ['latin'], weight: ['400', '700'] });

// export const metadata: Metadata = {
//   title: {
//     default: "Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
//     template: "%s - Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
//   },
//   description: "Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
//   keywords:"Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center", 
//   // twitter: {
//   //   card: "summary_large_image",
//   //   images: [
//   //     {
//   //       url: "Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
//   //       width: 1200,
//   //       height: 630,
//   //       alt: "Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center - Twitter",
//   //     },
//   //   ],
//   // },
//   openGraph: {
//     images: [
//       {
//         url: "Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
//         width: 1200,
//         height: 630,
//         alt: "Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
//       },
//     ],
//   },
// };

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PopUpForm /> 
          {children}
        <Footer/>  
      </body>
    </html>
  );
}
