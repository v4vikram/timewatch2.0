import "./globals.css";
import { Rajdhani } from "next/font/google";
import GTM from "@/components/GTM";
import ClientLayout from "@/components/ClientLayout"; // ✅ New client wrapper

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Baggage Scanners, Time Attendance & Access Control Systems | TimeWatch Infocom",
  description:
    "TimeWatch Infocom provides trusted baggage scanners, time attendance, and access control systems across India, delivering smart, secure tech solutions.",
  alternates: {
    canonical: "https://www.timewatchindia.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rajdhani.className}>
      <head>
        <GTM />
      </head>
      <body className={rajdhani.className}>
        <ClientLayout>
          {children}
          </ClientLayout>
      </body>
    </html>
  );
}
