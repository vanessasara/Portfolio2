import { Inter, Calistoga } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";
import { twMerge } from 'tailwind-merge';
import Footer from '@/sections/Footer';


const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: "400"
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge
        (inter.variable, calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans")}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
