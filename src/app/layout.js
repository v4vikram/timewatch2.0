import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportButtons from '@/components/SupportButtons';
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // only the weights you need
  display: "swap", // ensures fallback font shows first
});


export const metadata = {
  title: "TimeWatch Infocom | Baggage Scanners, Time Attendance & Access Control Systems",
  description: "TimeWatch Infocom provides trusted baggage scanners, time attendance, and access control systems across India—delivering smart, secure tech solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rajdhani.className}` }>
      <body
        className={`${rajdhani.className}` }
      >
       {/* <Header/> */}
         <div className=''>{children}</div>
        <div>
          {/* <Footer/> */}
        </div>
        <SupportButtons/>
      </body>
    </html>
  );
}
