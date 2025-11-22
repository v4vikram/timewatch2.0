// app/ai-face-t7hd/page.tsx
import React from "react";
import {
  Battery,
  Wifi,
  Shield,
  Zap,
  Users,
  Cloud,
  MapPin,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Clock,
  Smartphone,
  MonitorSmartphone,
  Camera,
  Fingerprint,
  Hand,
  Eye,
  HelpCircle,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";
import CatalogueDownload from "@/components/forms/CatalogueDownload";
import { Button } from "@/components/ui/button";

export const metadata = {
  title:
    "Biometric Attendance System in India | Face Attendance Machine and Fingerprint Attendance Machine",
  description:
    "TimeWatch provides advanced biometric attendance systems across India including face attendance machines, fingerprint attendance machines, palm and iris based devices. Ideal for offices, factories, schools and hospitals across major Indian cities.",
  keywords:
    "biometric attendance system India, face attendance machine India, fingerprint attendance machine India, face recognition attendance India, biometric device India, attendance machine for office, biometric time attendance India, palm recognition attendance India, iris attendance system, attendance machine price India, cloud based attendance system India",
  alternates: {
    canonical: "https://www.timewatchindia.com/biometric-attendance-india",
  },
  openGraph: {
    title:
      "Biometric Attendance System in India | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch provides advanced biometric attendance systems across India including face attendance machines, fingerprint attendance machines, palm and iris based devices. Ideal for offices, factories, schools and hospitals across major Indian cities.",
    url: "https://www.timewatchindia.com/biometric-attendance-india",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most reliable biometric attendance machine in India",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Face recognition based biometric attendance machines are the most reliable choice for Indian workplaces because they are fast, accurate and touchless.",
      },
    },
    {
      "@type": "Question",
      name: "Does face attendance work with masks",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TimeWatch face recognition devices can identify users correctly even when they are wearing masks.",
      },
    },
    {
      "@type": "Question",
      name: "Can attendance be monitored for multiple branches",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TimeWatch cloud attendance software provides real time sync for all branch locations across India.",
      },
    },
    {
      "@type": "Question",
      name: "Does biometric attendance integrate with payroll",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Biometric attendance data syncs automatically with payroll, leave, overtime and shift calculations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of biometric attendance machines in India",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biometric attendance devices start around six thousand rupees and the final price depends on features such as face recognition, fingerprint mode and cloud integration.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is the most reliable biometric attendance machine in India",
    answer:
      "Face based systems are currently the most accurate and user friendly attendance machines for Indian offices and commercial spaces.",
  },
  {
    question: "Does face attendance work with masks",
    answer:
      "Yes. TimeWatch Face Attendance Machines use AI to identify users even with masks or glasses.",
  },
  {
    question: "Can attendance be monitored for multiple branches",
    answer:
      "Yes. TimeWatch cloud software syncs attendance from all branches in India and displays it on one unified dashboard.",
  },
  {
    question: "Does the system integrate with payroll",
    answer:
      "Yes. Attendance, leave, overtime and shift data sync directly with payroll modules.",
  },
  {
    question: "What is the price of biometric attendance machines in India",
    answer:
      "Prices start around six thousand rupees and increase depending on features like face recognition, fingerprint capacity and cloud support.",
  },
];

const featureList = [
  {
    description:
      "More than two decades of experience in biometric and attendance technology",
  },
  {
    description: "Used by over ten thousand organizations across India",
  },
  {
    description: "Face Attendance Machines with highly accurate AI recognition",
  },
  {
    description:
      "Fingerprint Attendance Machines that perform well in tough environments",
  },
  {
    description: "Cloud and on premise attendance options",
  },
  {
    description: "Designed for Indian heat, dust and high usage conditions",
  },
  {
    description: "Direct integration with payroll and HRMS",
  },
  {
    description: "India wide service and technical support",
  },
  {
    description: "Quick installation and easy onboarding for all industries",
  },
];

const biometricAttendanceIndiaPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="">
        {/* Hero Section */}
        <section className="relative  py-52 overflow-hidden">
          {/* Background image (absolute) */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104937.jpg?t=st=1763788816~exp=1763792416~hmac=de917c3f490e1f844d1875126ce4bac71d1696b08668647b4c6e6fa6ebcc1a21&w=1480"
              alt="Futuristic technology background"
              className="w-full h-full object-cover"
              // adjust opacity as needed so text remains readable
            />
            {/* optionally, a subtle overlay gradient or color tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-blue-200/20 to-white/40" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gap-12 items-center flex flex-col justify-center text-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Biometric Attendance
                  <br />
                  <span className="text-primary">System in India</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {/* ... your text ... */}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="#contact"
                    className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-[#c02a2e] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div class="text-center mt-12">
          <div class="flex items-center justify-center space-x-4 mb-2">
            <span class="h-0.5 w-10 bg-primary"></span>
            <span class="text-primary font-semibold">Innovation</span>
            <span class="h-0.5 w-10 bg-primary"></span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-2">
            How Biometric Attendance <br/><span className="text-primary">
              Evolved in India
            </span>
          </h2>
        </div> */}
        {/* Core Innovation - Back Camera */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative p-8 bg-gray-50 border. border-gray-200.">
                   {/* corners */}
  <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-300"></span>
  <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gray-300"></span>
  <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gray-300"></span>
  <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-300"></span>
                  <div className="p-8 text-center flex justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[550px] md:h-[400px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 mt-5 lg:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Introduction of Fingerprint Based Attendance
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The first major upgrade in India was the adoption of the
                  Fingerprint Attendance Machine. Businesses shifted from paper
                  registers to biometric verification to eliminate buddy
                  punching and attendance manipulation. The Fingerprint
                  Attendance Machine became popular in factories and SMEs
                  because of its affordability and reliability.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href={"#products"} className="">
                      Product Detail
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-2">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white. rounded-2xl shadow-2xl p-8 text-center flex justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[550px] md:h-[400px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-1 mt-5 lg:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Card and Fingerprint Combined Systems
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To provide flexibility, many workplaces upgraded to devices
                  that offered both fingerprint and RFID card punching. This
                  made the system more effective and allowed organizations to
                  manage visitors and contract workers easily.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white. rounded-2xl shadow-2xl p-8 text-center flex justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[550px] md:h-[400px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 mt-5 lg:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  AI Powered Face Attendance
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The introduction of AI based Face Attendance Machines
                  transformed Indian attendance practices. These devices offer
                  touchless punching, high accuracy and fast recognition even in
                  low light. The Face Attendance Machine became widely used in
                  IT parks, schools, hospitals, co working spaces and corporate
                  offices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-2">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white. rounded-2xl shadow-2xl p-8 text-center flex justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[550px] md:h-[400px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-1 mt-5 lg:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Multi Biometric Attendance Devices
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Modern organizations started adopting multi modal biometric
                  devices that support face, fingerprint, palm, card and PIN in
                  a single terminal. These systems give employees multiple ways
                  to punch depending on their comfort and work environment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white. rounded-2xl shadow-2xl p-8 text-center flex justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[550px] md:h-[400px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 mt-5 lg:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Cloud Based Attendance and Payroll Integration
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Today, the Biometric Attendance System in India has become
                  fully cloud enabled. Attendance data syncs in real time with
                  payroll, leave management, overtime rules, shift rosters and
                  HRMS. This saves HR time, reduces errors and allows
                  centralized control for multi branch companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Popular Types of Biometric<br/> <span className="text-primary">Attendance Systems in India</span>
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Face Recognition Attendance System */}
                {[
                  {
                    icon: Camera,
                    title: "Face Recognition Attendance System",
                    value:
                      "Face Attendance Machine is fast, accurate, and fully touchless. The Face Attendance Machine works even with masks and low lighting, making it ideal for hospitals and high-traffic offices. This Face Attendance Machine is preferred in IT companies, schools, co-working spaces, and government institutions.",
                    color: "from-primary to-[#b82c30]",
                  },
                  {
                    icon: Users,
                    title: "Where Face Systems Are Used",
                    value:
                      "Corporate offices, IT parks, hospitals, schools, co-working hubs and government buildings commonly use a Face Attendance Machine due to high accuracy and speed.",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },

                  /* Fingerprint Attendance Machine */
                  {
                    icon: Fingerprint,
                    title: "Fingerprint Attendance Machine",
                    value:
                      "A Fingerprint Attendance Machine is one of the most trusted attendance solutions in India. This Fingerprint Attendance Machine prevents buddy punching and works well in factories, retail shops, warehouses and offices. Companies prefer the Fingerprint Attendance Machine for accuracy and affordability.",
                    color: "from-primary to-[#b82c30]",
                  },
                  {
                    icon: Shield,
                    title: "Where Fingerprint Systems Work Best",
                    value:
                      "A Fingerprint Attendance Machine performs reliably in harsh environments like industrial plants, workshops, factories and logistics hubs, offering durable performance.",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },

                  /* Palm Recognition Attendance System */
                  {
                    icon: Hand,
                    title: "Palm Recognition Attendance System",
                    value:
                      "Palm recognition uses palm images or vein patterns for identification. It is fully touchless and hygienic, ideal for hospitals, labs, food processing units and pharmaceutical environments.",
                    color: "from-primary to-[#b82c30]",
                  },

                  /* Iris Recognition */
                  {
                    icon: Eye,
                    title: "Iris Recognition Attendance System",
                    value:
                      "Iris scanning offers one of the highest levels of security. It works through glasses, protective gear and masks, making it suitable for defence, research labs, government offices and high-security facilities.",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },

                  /* Multi Modal Devices */
                  {
                    icon: Smartphone,
                    title: "Multi Modal Biometric Devices",
                    value:
                      "Multi modal devices combine face, fingerprint, palm, card and PIN. Companies with diverse teams use a Fingerprint Attendance Machine for factories and a Face Attendance Machine in offices, all within one integrated solution.",
                    color: "from-primary to-[#b82c30]",
                  },

                  /* Keyword — Face Attendance Machine */
                  {
                    icon: HelpCircle,
                    title: "What is a Face Attendance Machine?",
                    value:
                      "A Face Attendance Machine uses AI to verify a face within seconds. This touchless system works with glasses, masks and different lighting, making the Face Attendance Machine perfect for Indian offices, hospitals, IT parks and educational institutions.",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },

                  /* Keyword — Fingerprint Attendance Machine */
                  {
                    icon: HelpCircle,
                    title: "What is a Fingerprint Attendance Machine?",
                    value:
                      "A Fingerprint Attendance Machine scans unique fingerprint patterns to record attendance accurately. Indian companies prefer the Fingerprint Attendance Machine because it prevents proxy punching and works well in manufacturing units, shops, workshops and government departments.",
                    color: "from-primary to-[#b82c30]",
                  },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white  p-6  hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <spec.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-1 text-center">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-[#6d6f72] leading-relaxed text-center">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Wise Applications in India */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Industry Wise Applications in India
              </h2>
              {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted across diverse sectors for reliable attendance tracking
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Corporate Offices and IT Parks",
                  description:
                    "Face Attendance Machines and Fingerprint Attendance Machines are commonly used in Indian corporate offices. They help manage large teams, hybrid work models and multi location attendance. Real time attendance reports make it easier for HR teams to track late marks, shifts and overtime.",
                },
                {
                  title: "Factories and Industrial Plants",
                  description:
                    "Industrial areas often require rugged and reliable attendance devices. A Fingerprint Attendance Machine works well in factories because it prevents buddy punching. Companies that prefer touchless attendance use Face Attendance Machines at the main entrance. These devices handle dust, heat and heavy usage without performance issues.",
                },
                {
                  title: "Hospitals and Diagnostic Labs",
                  description:
                    "Healthcare environments require contactless and hygienic methods. Face Attendance Machines, palm recognition and iris recognition are perfect for staff who wear masks, gloves and PPE kits. Attendance is fast, touchless and easy to verify.",
                },
                {
                  title: "Schools, Colleges and Training Centers",
                  description:
                    "Biometric attendance improves transparency and ensures that staff attendance is recorded correctly. Institutions can optionally enable student attendance as well.",
                },
                {
                  title: "Retail Chains and Shopping Outlets",
                  description:
                    "Attendance of multiple stores across different cities can be managed easily through cloud software. Whether a store uses a Face Attendance Machine or a Fingerprint Attendance Machine, data syncs instantly to the head office.",
                },
                {
                  title: "Logistics, Transport and Warehousing",
                  description:
                    "Logistics companies benefit from mobile attendance, GPS tracking and biometric punching for night shifts. Devices can be installed at entry gates and inside warehouses for accurate monitoring.",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-[#6d6f72]/5 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs
              features={featureList}
              title="Why TimeWatch is a Trusted Brand Across India"
              subtitle=""
            />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="container mx-auto py-12 px-0 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="" id="bio1seFAQ">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isFirst={index === 0}
              />
            ))}
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section
          className="container mx-auto py-12 px-0 sm:px-6 lg:px-8"
          id="contact"
        >
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center  mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Contact Form */}
            <div className="flex-1 p-4 md:p-8 bg-white">
              <HomePageForm />
            </div>

            {/* Contact Info */}
            <div className="flex-1 p-8 bg-[#d63438] text-white flex flex-col items-center justify-center space-y-6">
              <h2 className="text-xl md:text-4xl font-bold mb-4">
                Request a Demo Today
              </h2>
              <div className="space-y-3 text-center">
                <p className="md:text-xl font-semibold">
                  Call:&nbsp;
                  <span> +91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email:&nbsp;
                  <span> sales@timewatchindia.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default biometricAttendanceIndiaPage;
