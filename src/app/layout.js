import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';


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
       <div className='hidden lg:block'>
           <Header/>
       </div>
        {children}
      </body>
    </html>
  );
}
