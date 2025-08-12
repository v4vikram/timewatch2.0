import React from "react";
import {
  Clock,
  MapPin,
  Smartphone,
  ShieldCheck,
  Briefcase,
  Users,
  CheckCircle,
  Fingerprint,
  BarChart3,
  Shield,
  Globe,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Office & Field Attendance | TimeWatch Infocom",
  description:
    "Track and manage attendance for your office and on-field teams with GPS, biometric, and mobile integration. Empower your workforce with smart attendance systems.",
};

const OfficeFieldAttendance = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Office & Field Attendance
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A smart, flexible solution for managing employee attendance —
            whether in office, on-site, or in the field. GPS, biometrics, and
            mobile all-in-one.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-left mb-16">
            <div className="max-w-7xl h-[600px] relative">
              <Image
                src={"/images/solutions/gym-1.jpg"}
                fill
                sizes="1000"
                title="gym-1"
                alt="gym-1"
                className="object-cover w-full h-full"
                // style={{width:'auto', height:"auto"}}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary my-2">
             Gym Visitor Management System
            </h2>
            <p className="text-secondary">
              Access Control on Cloud Technology: Access control is generally a
              policy or procedure that allows, denies or restricts access to a
              system. It may also identify users attempting to access a system
              unauthorized. Access Control allows one application to trust the
              identity of another application. The traditional model for access
              control is application-centric access control, where each
              application keeps track of its collection of users and manages
              them. So cloud requires a user centric access control where every
              user request to any service provider is bundled with the user
              identity and entitlement information.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Perfect for All Industries
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Our flexible system adapts to industries with remote, hybrid, or
              on-site workforce needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Corporate Offices",
                description:
                  "Advanced fingerprint, face, and iris recognition with 99.9% accuracy",
                color: "from-[#d63438] to-[#b82c30]",
              },
              {
                icon: Users,
                title: "Sales & Field Staff",
                description:
                  "Live attendance monitoring with instant notifications and alerts",
                color: "from-[#6d6f72] to-[#5a5c5f]",
              },
              {
                icon: MapPin,
                title: "Multi-location Firms",
                description:
                  "Comprehensive reports and insights for informed decision making",
                color: "from-[#d63438] to-[#b82c30]",
              },
              {
                icon: Clock,
                title: "Shift-based Industries",
                description:
                  "Seamless integration with payroll, leave management, and HR systems",
                color: "from-[#6d6f72] to-[#5a5c5f]",
              },
              {
                icon: CheckCircle,
                title: "Contract Workers",
                description:
                  "Bank-grade security with GDPR compliance and data encryption",
                color: "from-[#d63438] to-[#b82c30]",
              },
              {
                icon: Smartphone,
                title: "Mobile Workforce",
                description:
                  "Centralized management across multiple offices and time zones",
                color: "from-[#6d6f72] to-[#5a5c5f]",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d63438]/20"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#6d6f72] mb-4">
            Ready to Modernize Your Attendance System?
          </h2>
          <p className="text-gray-700 mb-6">
            Talk to us and explore how TimeWatch can enhance your team’s
            attendance experience.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#d63438] text-white rounded-full font-medium hover:bg-[#c92f33] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default OfficeFieldAttendance;
