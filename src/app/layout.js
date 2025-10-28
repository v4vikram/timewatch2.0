import { Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportButtons from '@/components/SupportButtons';
import { Rajdhani } from "next/font/google";
import Script from "next/script"; // ✅ Import Next.js Script component

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "TimeWatch Infocom | Baggage Scanners, Time Attendance & Access Control Systems",
  description:
    "TimeWatch Infocom provides trusted baggage scanners, time attendance, and access control systems across India—delivering smart, secure tech solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rajdhani.className}>
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NNJTRPC');
            `,
          }}
        />
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
