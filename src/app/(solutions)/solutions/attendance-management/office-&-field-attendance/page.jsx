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

      <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
        <div className="absolute inset-0 left-0 top-0 w-full h-full">
          <div className="relative z-10 w-full h-[400px] md:h-[550px]">
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

        <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Attendance & Payroll Management Software for Indian Businesses
          </h1>
          <p className="text-xl text-white mb-8 hidden md:block">
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

      <div className="lg:flex container gap-8 mt-10">
        {/* main content */}
        <div className="flex-1">
          <section className="">
            <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/images/solutions-banner.jpg"
                alt="Consulting Hero"
                fill
                sizes="100"
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-2">
              A Complete Solution for Attendance & Payroll
            </h2>
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
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
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
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
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
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
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
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
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
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
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
              (6) Secure Role-Based Access Control
            </h3>
            <p className="text-secondary">
              Different roles require different levels of access. TimeWatch
              provides a multi-level permission system for HR staff, department
              managers, team leaders, and employees, ensuring confidentiality of
              sensitive salary and personal data while allowing smooth
              collaboration.
            </p>
            <h3 className="text-[18px] mt-4 font-bold text-gray-900">
              (7) Seamless Biometric Device Integration
            </h3>
            <p className="text-secondary">
              Whether your organization uses face recognition, RFID cards,
              fingerprint scanners, or palm readers, our platform integrates
              effortlessly with TimeWatch biometric devices. Data syncs
              instantly with the cloud, removing any risk of loss or
              duplication, even in environments with fluctuating connectivity.
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-5 mb-2">
              Payroll Management That’s Accurate and Compliant
            </h2>

            <p className="text-secondary mb-4">
              Our payroll module is tightly integrated with attendance tracking,
              ensuring that every working hour, leave day, and overtime minute
              is accurately calculated. Businesses can set up multiple pay
              structures with allowances, deductions, and incentives tailored to
              different employee roles. The system automatically handles
              statutory compliance for EPF, ESI, TDS, Gratuity, Professional
              Tax, and other labour laws, helping organizations avoid compliance
              headaches.
            </p>
            <p className="text-secondary">
             From bonus payouts to loan deductions, everything is automated. Payslips are generated instantly and can be downloaded or emailed directly to employees. Even full-and-final settlements for departing staff are calculated without manual intervention, ensuring quick, error-free processing. This reduces HR workload, eliminates human error, and keeps the organization ready for audits or inspections.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-5 mb-2">
             Trusted by Businesses Across India and Beyond
            </h2>

            <p className="text-secondary mb-4">
             TimeWatch solutions are trusted by hundreds of organizations across major Indian cities, including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, and Surat. Our reach is additionally expanding to international markets such as the UAE, Saudi Arabia, Qatar, Oman, and various European countries.
            </p>
            <p className="text-secondary">
            Industries like IT, retail, manufacturing, healthcare, education, logistics, and construction rely on TimeWatch for their workforce management, confident in our data security, accuracy, and responsive customer support.
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-5 mb-2">
             Why Businesses Choose TimeWatch
            </h2>

            <p className="text-secondary mb-4">
            Companies choose TimeWatch because it is entirely cloud-based, meaning no software installation is necessary and access is possible from any device. Hosting is fully secured with encryption and real-time backup. Integrated biometric compatibility, a dedicated 24/7 support team, and an intuitive mobile app make it easier than ever to manage employees on the go. Most importantly, the platform is scalable, supporting both small start-ups and enterprises with over 10,000 employees.
            </p>
            <p className="text-secondary">
           Whether you want to digitize HR records, automate payroll, track a mobile workforce, or ensure compliance with Indian labour laws, TimeWatch offers a single, unified solution that grows with your business.
            </p>
          </section>



          {/* FAQ Section */}
          <section className="p mb-20 mt-10">
            <div className="">
              <div className="mb-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
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
        {/* sidebar */}
        <div className="lg:w-[300px] sticky top-20">
          <ServiceSidebar />
        </div>
      </div>
    </div>
  );
}
