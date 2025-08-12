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
import ServiceSidebar from "@/components/ServiceSidebar";

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

      <section className="bg-gray-50 relative overflow-hidden h-[550px]">
        <div className="absolute inset-0 left-0 top-0 w-full h-full">
          <div className="relative z-10 w-full h-[550px]">
            <Image
              src="/images/solutions-banner.jpg"
              alt="Consulting Hero"
              fill
              sizes="100"
              className="object-cover w-full h-full"
            />
            {/* Gradient overlay on top of image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
          </div>
        </div>

        <div className="relative z-20 container flex justify-center h-full flex-col pr-[400px] text-white">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Attendance & Payroll Management Software for Indian Businesses
          </h1>
          <p className="text-xl text-white mb-8">
            TimeWatch India is your trusted technology partner for streamlining
            employee attendance, monitoring shifts, and managing payroll with
            unmatched accuracy and convenience. Designed to cater to the unique
            needs of the Indian business landscape, our advanced Attendance &
            Payroll Management Software is equally suitable for agile start-ups
            in Mumbai, growing SMEs in Bangalore, or established enterprises in
            Delhi NCR.
          </p>
        </div>
      </section>

      <div className="flex container gap-8">
        {/* main content */}
        <div className="flex-1">
          <section className="py-20">
            <div className="relative z-10 w-full h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/images/solutions-banner.jpg"
                alt="Consulting Hero"
                fill
                sizes="100"
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mt-2 mb-2">
              A Complete Solution for Attendance & Payroll
            </h2>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (1) Smarter Shift & Roster Management
            </h3>

            <p className="text-secondary mb-4">
              Managing different shifts can be complex, especially for
              industries like manufacturing, healthcare, hospitality, and 24/7
              operations. Our system simplifies this process with automated
              shift detection, instantly recognizing an employee’s clock-in time
              and mapping them to the correct schedule. For situations requiring
              manual adjustments, HR professionals can assign shifts directly in
              the system. It even supports revolving rosters, ensuring smooth
              operations for teams working on rotating, staggered, or night
              shifts.
            </p>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (2) Intelligent Leave Management
            </h3>
            <p className="text-secondary">
              Our platform allows you to define and manage multiple leave types
              — from sick and earned leaves to maternity and paternity — all
              aligned with your company’s HR policy. Leave records sync
              automatically with attendance logs, eliminating data mismatches.
              Employees and managers can view leave balances, track requests,
              and manage approvals through a clean, intuitive dashboard,
              creating a transparent and conflict-free HR environment.
            </p>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (3) Mobile Attendance with GPS and Photo Verification
            </h3>
            <p className="text-secondary">
              For businesses with field agents, construction crews, or remote
              workers, attendance tracking no longer requires physical presence
              at the office. Through the TimeWatch mobile app, employees can
              clock in and out from anywhere. The system captures GPS location
              in real-time and records a photo for verification, ensuring only
              authorized entries are registered. This is ideal for sales teams,
              traveling technicians, and distributed teams working on-site.
            </p>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (4) Handling Exceptional Attendance Cases
            </h3>
            <p className="text-secondary">
              Real-world operations often face missed punches or technical
              disruptions. TimeWatch addresses this with an admin-supervised
              manual punch feature, allowing HR or supervisors to record
              attendance in exceptional cases. These entries are stored with a
              full audit trail for accountability, and rules can be set for
              strict approval workflows.
            </p>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (5) Real-Time Reporting & Insights
            </h3>
            <p className="text-secondary">
              With TimeWatch, managers no longer have to wait for end-of-month
              reconciliations. Detailed attendance reports are generated
              instantly and can be filtered by location, department, shift, or
              employee groups. Data can be exported in Excel or PDF format with
              a single click, and our cloud hosting ensures reports are
              accessible 24/7, keeping organizations audit-ready at all times.
            </p>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (6) Secure Role-Based Access Control
            </h3>
            <p className="text-secondary">
              Different roles require different levels of access. TimeWatch
              provides a multi-level permission system for HR staff, department
              managers, team leaders, and employees, ensuring confidentiality of
              sensitive salary and personal data while allowing smooth
              collaboration.
            </p>
            <h3 className="text-3xl lg:text-xl font-bold text-dark-900">
              (7) Seamless Biometric Device Integration
            </h3>
            <p className="text-secondary">
              Whether your organization uses face recognition, RFID cards,
              fingerprint scanners, or palm readers, our platform integrates
              effortlessly with TimeWatch biometric devices. Data syncs
              instantly with the cloud, removing any risk of loss or
              duplication, even in environments with fluctuating connectivity.
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div> */}

            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-2 mb-2">
              Handling Exceptional Attendance Cases
            </h2>
            <p>
              Real-world operations often face missed punches or technical
              disruptions. TimeWatch addresses this with an admin-supervised
              manual punch feature, allowing HR or supervisors to record
              attendance in exceptional cases. These entries are stored with a
              full audit trail for accountability, and rules can be set for
              strict approval workflows.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-2 mb-2">
              Real-Time Reporting & Insights
            </h2>
            <p>
              With TimeWatch, managers no longer have to wait for end-of-month
              reconciliations. Detailed attendance reports are generated
              instantly and can be filtered by location, department, shift, or
              employee groups. Data can be exported in Excel or PDF format with
              a single click, and our cloud hosting ensures reports are
              accessible 24/7, keeping organizations audit-ready at all times.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-2 mb-2">
              Secure Role-Based Access Control
            </h2>
            <p>
              With TimeWatch, managers no longer have to wait for end-of-month
              reconciliations. Detailed attendance reports are generated
              instantly and can be filtered by location, department, shift, or
              employee groups. Data can be exported in Excel or PDF format with
              a single click, and our cloud hosting ensures reports are
              accessible 24/7, keeping organizations audit-ready at all times.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gray-50">
            <div className="">
              <div className=" mb-12">
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
                    Providing fully custom business solutions tailored
                    specifically to your industry needs and organizational
                    structure.
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
                    Expert technology consulting services designed to optimize
                    your digital infrastructure and drive innovation.
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
                    Comprehensive digital marketing strategies to expand your
                    reach and accelerate business growth through proven
                    methodologies.
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
              <div className=" mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  We serve the best work
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  We take pride in delivering exceptional consulting services
                  that drive real results for our clients. Our approach combines
                  industry expertise with innovative solutions to create
                  sustainable competitive advantages. The proof of our
                  excellence lies in the success stories of the businesses we've
                  helped transform and grow.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className=" mb-12">
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
        </div>
        <div className="w-[300px] sticky top-20">
          <ServiceSidebar />
        </div>
      </div>
    </div>
  );
}
