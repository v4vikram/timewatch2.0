import React from "react";
import {
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
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
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TimeWatch Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TimeWatch Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TimeWatch Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  HRM Integration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
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
