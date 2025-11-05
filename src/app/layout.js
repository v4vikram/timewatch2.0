import { Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportButtons from '@/components/SupportButtons';
import { Rajdhani } from "next/font/google";
import Script from "next/script"; // ✅ Import Next.js Script component
import GTM from '@/components/GTM';

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "TimeWatch Infocom | Baggage Scanners, Time Attendance & Access Control Systems",
  description:
    "TimeWatch Infocom provides trusted baggage scanners, time attendance, and access control systems across India—delivering smart, secure tech solutions.",
    alternates: {
    canonical: "https://www.timewatchindia.com",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={rajdhani.className}>
      <head>
        {/* ✅ Google Tag Manager Script */}
      <GTM/>
      </head>

      <body className={rajdhani.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNJTRPC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Layout Content */}
        {/* <Header /> */}
        <div>{children}</div>
        {/* <Footer /> */}
        <SupportButtons />
      </body>
    </html>
  );
}
