"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  Calendar,
  Smartphone,
  Edit3,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  DollarSign,
  Users,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const TimeWatchAttendancePayroll = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Clock,
      title: "Advanced Shift & Roster Management",
      description:
        "Efficiently manage multiple working schedules with AI-powered automation",
      details: [
        "Auto Shift Detection",
        "Manual Shift Assignment",
        "Revolving Roster Capabilities",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Calendar,
      title: "Intelligent Leave Management",
      description:
        "Comprehensive leave policies with real-time tracking and approvals",
      details: [
        "Multiple Leave Types",
        "Auto-sync with Attendance",
        "Real-time Balance Tracking",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Attendance with GPS",
      description:
        "Secure mobile attendance for field teams with location verification",
      details: [
        "Mobile App Access",
        "Real-Time GPS Location",
        "Photo Verification",
      ],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Edit3,
      title: "Manual Punch Feature",
      description:
        "Handle exceptional cases with admin-controlled manual entries",
      details: [
        "Admin-controlled Entries",
        "Transparent Audit Trails",
        "Customizable Rules",
      ],
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: BarChart3,
      title: "Real-Time Reports",
      description:
        "Dynamic insights with comprehensive reporting and export options",
      details: ["Dynamic Insights", "Excel & PDF Export", "24/7 Cloud Access"],
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Multi-level security with customized permission settings",
      details: [
        "Customized Permissions",
        "Data Confidentiality",
        "Multi-level Security",
      ],
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const payrollFeatures = [
    {
      icon: Zap,
      title: "Automated Generation",
      desc: "Direct integration with attendance data",
    },
    {
      icon: CheckCircle,
      title: "Statutory Compliance",
      desc: "EPF, ESI, TDS, Gratuity compliant",
    },
    {
      icon: DollarSign,
      title: "Flexible Structure",
      desc: "Multiple pay bands & allowances",
    },
    {
      icon: Users,
      title: "Payslip Generation",
      desc: "Download & email distribution",
    },
  ];

  const locations = [
    "Mumbai",
    "Delhi NCR",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Surat",
  ];

  const internationalLocations = [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Europe",
  ];

  const faqs = [
    {
      question: "Is the cloud software really free?",
      answer:
        "Yes, TimeWatch provides 2 years of free access to its cloud-based attendance and payroll software for up to 250 users when you purchase select biometric devices.",
    },
    {
      question: "Can I manage field staff and office staff together?",
      answer:
        "Yes, field staff can mark attendance via mobile with photo and GPS, while office staff can use biometric attendance devices. The system syncs all data in real-time.",
    },
    {
      question: "Does it support multiple shifts?",
      answer:
        "Absolutely. The software supports auto shift detection, multiple shift management, and shift rostering for complex work schedules.",
    },
    {
      question: "How is payroll calculated?",
      answer:
        "Payroll is automatically calculated based on attendance data, leaves, overtime, and applicable compliance deductions such as PF, ESI, TDS, and more.",
    },
    {
      question: "Can I access the system remotely?",
      answer:
        "Yes, TimeWatch's attendance and payroll software is fully cloud-based, allowing you to manage and monitor employee data from anywhere, at any time.",
    },
  ];

  const FloatingElement = ({ className, delay = 0 }) => (
    <div
      className={`absolute rounded-full animate-bounce opacity-20 ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: "3s" }}
    />
  );

  const FeatureCard = ({ feature, index, isActive }) => {
    const Icon = feature.icon;
    return (
      <div
        className={`relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
          isActive
            ? "bg-white shadow-2xl scale-105"
            : "bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl"
        }`}
        onClick={() => setActiveFeature(index)}
      >
        <div
          className={`w-16 h-16 bg-gradient-to-br ${
            feature.color
          } rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
            isActive ? "scale-110" : ""
          }`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-600 mb-4">{feature.description}</p>
        <ul className="space-y-2">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <div
                className={`w-2 h-2 rounded-full mt-2 mr-3 bg-gradient-to-r ${feature.color}`}
              />
              {detail}
            </li>
          ))}
        </ul>
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl" />
        )}
      </div>
    );
  };

  const StatsCard = ({ number, label, delay }) => (
    <div
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-blue-100">{label}</div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen. bg-gradient-to-br. from-primary/10. to-[#6d6f72]/10. bg-gray-50 py-16. overflow-hidden">
        {/* Floating Elements */}
        <FloatingElement
          className="top-20 right-10 w-20 h-20 bg-primary/20"
          delay={0}
        />
        <FloatingElement
          className="bottom-32 left-10 w-16 h-16 bg-secondary"
          delay={1}
        />
        <FloatingElement
          className="top-1/2 right-1/4 w-12 h-12 bg-white/20"
          delay={2}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />

        <div className="relative container mx-auto px-4 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
            {/* Left Content */}
            <div
              className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r. from-primary. to-secondary. bg-primary/70 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse.">
                <Star className="w-4 h-4 mr-2" />
                Easy to use
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
                Attendance & Payroll
                <span className="bg-gradient-to-r from-yellow-400. to-orange-500. bg-clip-text. text-transparent. text-secondary block">
                  Management
                </span>
              </h1>

              <p className="text-xl text-secondary mb-8 max-w-2xl leading-relaxed">
                The Smartest Way to Manage Attendance and Payroll in Indian
                Workplaces. Streamline HR operations with AI-powered biometric
                integration and real-time cloud access.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Book Free Demo
                </button>
                <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-secondary hover:text-white transition-all duration-300">
                  View Features
                </button>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-blue-100">
                {[
                  "No Installation Required",
                  "24/7 Cloud Access",
                  "Mobile App Ready",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-secondary font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard Mock */}
            <div
              className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Dashboard */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-all duration-500">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        TimeWatch Dashboard
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="space-y-4">
                      {/* Attendance Overview */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-gray-700">
                            Today's Attendance
                          </span>
                          <span className="text-2xl font-bold text-blue-600">
                            247/250
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000"
                            style={{ width: "98.8%" }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          98.8% attendance rate
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center border border-green-100">
                          <div className="text-2xl font-bold text-green-600">
                            247
                          </div>
                          <div className="text-sm text-gray-600">Present</div>
                          <div className="w-full bg-green-200 rounded-full h-1 mt-2">
                            <div
                              className="bg-green-500 h-full rounded-full"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-xl text-center border border-red-100">
                          <div className="text-2xl font-bold text-red-600">
                            3
                          </div>
                          <div className="text-sm text-gray-600">Absent</div>
                          <div className="w-full bg-red-200 rounded-full h-1 mt-2">
                            <div
                              className="bg-red-500 h-full rounded-full"
                              style={{ width: "12%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-xs font-semibold text-gray-700">
                    Real-time Sync
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                    <div className="text-xs text-green-600">Active</div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="text-xs font-semibold text-gray-700">
                    Mobile App
                  </div>
                  <div className="flex space-x-1 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4">
            <div className="flex space-x-8">
              <StatsCard number="9+" label="Years Experience" delay={100} />
              <StatsCard number="10K+" label="Happy Clients" delay={200} />
              <StatsCard number="50+" label="Countries" delay={300} />
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6">
              All-in-One Attendance &
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Payroll Management
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive features designed for maximum productivity,
              statutory compliance, and real-time accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                isActive={activeFeature === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Payroll Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-bold text-secondary mb-6">
              Payroll Management –
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Made Simple
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Automated salary processing that follows Indian laws and
              regulations with seamless attendance integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {payrollFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Payroll Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Key Payroll Features
              </h3>
              <ul className="space-y-4">
                {[
                  "Automated Payroll Generation",
                  "Salary Structure Configuration",
                  "Statutory Compliance (EPF, ESI, TDS)",
                  "Bonuses, Advances & Deductions",
                  "Payslip Generation & Distribution",
                  "Full & Final Settlements",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Our Solution?
              </h3>
              <ul className="space-y-4">
                {[
                  "No Installation Needed",
                  "Fully Secured Cloud Hosting",
                  "Integrated Biometric Support",
                  "24x7 Dedicated Support",
                  "Mobile App Accessibility",
                  "Scalable for Any Business Size",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Star className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Trusted Across
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {" "}
                India & Beyond
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving hundreds of companies from IT, manufacturing, retail,
              healthcare, construction, education, and logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Indian Locations */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Strong Presence in Major Indian Cities
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-gray-700 font-medium">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* International Expansion */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Expanding Internationally
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {internationalLocations.map((location, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-gray-700 font-medium">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white text-center">
                <p className="font-semibold">
                  Now Serving 50+ Countries Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Suite & Industries */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Software Suite */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Our Software Suite Includes
              </h3>
              <ul className="space-y-4">
                {[
                  "Time & Attendance Management",
                  "Visitor Management System (VMS)",
                  "Payroll & Leave Management",
                  "Canteen & Gym Management",
                  "Parking & Traffic Management",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Served */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Industries We Serve
              </h3>
              <ul className="space-y-4">
                {[
                  "IT Parks & Co-Working Spaces",
                  "Hospitals & Diagnostic Labs",
                  "Educational Institutions",
                  "Government & Municipal Buildings",
                  "Warehouses & Manufacturing Plants",
                  "Airports, Metros & Public Transit",
                  "Retail Chains & Commercial Complexes",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our attendance and payroll
              management software
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get Started with
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              TimeWatch Today!
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to modernize your HR operations with secure, cloud-based
            Attendance & Payroll Management Software? There's no better time to
            try TimeWatch India.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeWatchAttendancePayroll;
