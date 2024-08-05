import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Lato } from "next/font/google";
import Hero from "@/components/Hero";
import Subnavbar from "@/components/Subnavbar";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Architecture_conference",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {/* Hero 1 i.e the cover photo remains on every page. */}
        <div className="flex flex-col justify-center items-center gap-6 pt-6 w-full px-6 md:px-0">
          <Hero />
          <div className="border flex flex-col w-fit lg:w-2/3 rounded-md overflow-hidden">
            <div className="h-48 sm:h-72 md:h-96 w-full flex justify-center items-center relative">
              <Image src="/nitp.jpg" alt="hero" fill={true} />
            </div>
            <Subnavbar />
            {children}
          </div>
        </div>
        <div className="w-full border">
          <Footer />
        </div>
      </body>
    </html>
  );
}
