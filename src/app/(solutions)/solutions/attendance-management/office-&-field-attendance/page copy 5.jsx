"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Users,
  Target,
  BarChart3,
  Headphones,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import SolutionLayout from "../../layout";

export default function ConsultingLandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How To Get Started With Your Business?",
      answer:
        "Getting started with business consulting is a simple process. Start by booking a consultation call to discuss your specific business needs and challenges. We'll assess your current situation and develop a customized strategy.",
    },
    {
      question: "What's The Twelve Application Process?",
      answer:
        "Our twelve-step application process involves comprehensive business analysis, strategy development, implementation planning, and ongoing support to ensure sustainable growth.",
    },
    {
      question: "What Should I Incorporate My Business?",
      answer:
        "The best business structure depends on your specific situation, size, and goals. We'll help you evaluate options including LLC, Corporation, Partnership, and Sole Proprietorship.",
    },
    {
      question: "What Made You Love Golf This World?",
      answer:
        "Our passion for business stems from helping entrepreneurs and companies achieve their full potential through strategic guidance and proven methodologies.",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <SolutionLayout
        banner={
          <div className="w-full h-48 bg-blue-600 text-white flex items-center justify-center">
            <h1 className="text-3xl font-bold">Custom Page Banner</h1>
          </div>
        }
      >
        <div className="p-6">
          <p>This is your page content.</p>
        </div>
      </SolutionLayout>

      <section>
        <div className="w-full h-[400px] relative mb-8">
          <Image
            src={"/images/solutions-banner.jpg"}
            alt="Consulting Hero"
            fill
            sizes="1500"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />
        </div>
      </section>

      {/* Working Challenge Section */}
      <section className="py-20">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Working Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges businesses face in today's
              competitive landscape. Our expert consultants are equipped with
              the tools and expertise to address these complex issues with
              precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Business growth through expert advice and data-driven insights
              </h3>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Operational excellence and cutting-edge efficiency
              </h3>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Risk mitigation and performance optimization
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits with our service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div
                className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Flexible Solutions</h3>
              <p className="text-gray-600">
                Providing fully custom business solutions tailored specifically
                to your industry needs and organizational structure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div
                className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">IT Consultancy</h3>
              <p className="text-gray-600">
                Expert technology consulting services designed to optimize your
                digital infrastructure and drive innovation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div
                className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Comprehensive digital marketing strategies to expand your reach
                and accelerate business growth through proven methodologies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div
                className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center"
                style={{ backgroundColor: "#d63438" }}
              >
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock professional support ensuring continuous
                guidance and assistance whenever you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We serve the best work
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We take pride in delivering exceptional consulting services that
              drive real results for our clients. Our approach combines industry
              expertise with innovative solutions to create sustainable
              competitive advantages. The proof of our excellence lies in the
              success stories of the businesses we've helped transform and grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions about service
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronDown
                      className="w-5 h-5"
                      style={{ color: "#d63438" }}
                    />
                  ) : (
                    <ChevronRight
                      className="w-5 h-5"
                      style={{ color: "#6d6f72" }}
                    />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div
                className="text-2xl font-bold mb-4"
                style={{ color: "#d63438" }}
              >
                BusinessPro
              </div>
              <p className="text-gray-400">
                Expert business consulting services to help your company achieve
                sustainable growth and operational excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Analysis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@businesspro.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Business St, Suite 100</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BusinessPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
