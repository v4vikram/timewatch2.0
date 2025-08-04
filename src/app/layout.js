import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportButtons from '@/components/SupportButtons';


export const metadata = {
  title: "TimeWatch Infocom | Baggage Scanners, Time Attendance & Access Control Systems",
  description: "TimeWatch Infocom provides trusted baggage scanners, time attendance, and access control systems across India—delivering smart, secure tech solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
       <Header/>
         <div className=''>{children}</div>
        <div>
          <Footer/>
        </div>
        <SupportButtons/>
      </body>
    </html>
  );
}
