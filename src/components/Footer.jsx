import React from "react";
import {
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/TimeWatchindia1",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/timewatchindiainfocom",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://x.com/timewatchbiome",
    icon: Twitter,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Timewatchinfocomindia",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/timewatchindia",
    icon: Linkedin,
  },
];
const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];
const footerLinks = [
  // { label: "About Us", href: "/about" },
  // { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Contact", href: "/contact" },
  { label: "Disclaimer", href: "/disclaimer" },
  // { label: "Download", href: "/download" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href={"#"}>
              <Image
                src={"/timewatch-logo.svg"}
                width={230}
                height={90}
                alt="timewatch logo"
                className="w-[230px] h-[90px] brightness-80"
              />
            </Link>
            {/* <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d63438] to-[#b82c30] rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">TimeWatch</span>
            </div> */}
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing workforce management with cutting-edge biometric
              solutions and seamless HRM integration.
            </p>
          </div>

       

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
                  {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
             <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex flex-col leading-[20px]">
                <span className="text-white pr-2 font-semibold">
                  Email:
                </span>
                <a href="mailto:sales@timewatchindia.com" className="hover:text-white transition-colors">
                    sales@timewatchindia.com
                </a>
              </li>
              <li className="flex flex-col leading-[20px]">
                <span className="text-white pr-2 font-semibold">Phone:</span>
                <a href="tel:+91-95999 53923" className="hover:text-white transition-colors">
                   +91-95999 53923
                </a>
              </li>
              <li className="flex flex-col leading-[20px]">
                <span className="text-white pr-2 font-semibold">Sales & Technical:</span>
                <a href="tel:011-4191-6615" className="hover:text-white transition-colors">
                  011-4191-6615
                </a>
              </li>
              <li className="flex flex-col leading-[20px]">
                <span className="text-white pr-2 font-semibold">Address:</span>
                <a href="#" className="hover:text-white transition-colors">
                 D-162, Okhla Phase - I New Delhi - 110020
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300">
            <p className="text-gray-300">
              © 2025 TimeWatch. All rights reserved.
            </p>
            <p>
              Our business does not involve selling on e-commerce platforms.
            </p>
          </div>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-300 hidden md:block">Follow us:</span>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-[#d63438] transition-colors"
                  title={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
