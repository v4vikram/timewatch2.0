"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  Users,
  Shield,
  BarChart3,
  Fingerprint,
  Building2,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  TrendingUp,
  Globe,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Play,
  Award,
  Zap,
  Target,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";

const TimeWatchLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "features",
        "products",
        "benefits",
        "testimonials",
        "pricing",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d63438] to-[#b82c30] rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#6d6f72]">
                TimeWatch
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Features",
                "Products",
                "Benefits",
                "Testimonials",
                "Pricing",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-[#d63438]"
                      : "text-[#6d6f72] hover:text-[#d63438]"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-[#d63438] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#b82c30] transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#6d6f72]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              {[
                "Features",
                "Products",
                "Benefits",
                "Testimonials",
                "Pricing",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-[#6d6f72] hover:text-[#d63438] font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-[#d63438] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#b82c30] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#d63438]/10 text-[#d63438] px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Industry Leading Solution</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-[#6d6f72] leading-tight">
                Perfect Presence,
                <span className="text-[#d63438]"> Perfect Control</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Revolutionary biometric time attendance system with advanced HRM
                integration. Transform your workforce management with
                cutting-edge technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#d63438] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-[#6d6f72] text-[#6d6f72] px-8 py-4 rounded-xl font-semibold hover:bg-[#6d6f72] hover:text-white transition-all flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">50k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#d63438] rounded-xl flex items-center justify-center">
                      <Fingerprint className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#6d6f72]">
                        Biometric Scanner
                      </h3>
                      <p className="text-sm text-gray-600">
                        Touch & Go Recognition
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-green-800">
                        John Doe - Check In
                      </span>
                      <span className="text-xs text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-blue-800">
                        Sarah Smith - Check Out
                      </span>
                      <span className="text-xs text-blue-600">05:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-orange-800">
                        Mike Johnson - Break
                      </span>
                      <span className="text-xs text-orange-600">12:15 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#d63438] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Advanced Features for Modern Workforce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive biometric solutions with seamless HRM integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Fingerprint,
                title: "Biometric Authentication",
                description:
                  "Advanced fingerprint, face, and iris recognition with 99.9% accuracy",
                color: "from-[#d63438] to-[#b82c30]",
              },
              {
                icon: Clock,
                title: "Real-time Tracking",
                description:
                  "Live attendance monitoring with instant notifications and alerts",
                color: "from-[#6d6f72] to-[#5a5c5f]",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description:
                  "Comprehensive reports and insights for informed decision making",
                color: "from-[#d63438] to-[#b82c30]",
              },
              {
                icon: Users,
                title: "HRM Integration",
                description:
                  "Seamless integration with payroll, leave management, and HR systems",
                color: "from-[#6d6f72] to-[#5a5c5f]",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description:
                  "Bank-grade security with GDPR compliance and data encryption",
                color: "from-[#d63438] to-[#b82c30]",
              },
              {
                icon: Globe,
                title: "Multi-location Support",
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
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete ecosystem of time attendance and HRM solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "TimeWatch Pro",
                subtitle: "Biometric Time Attendance",
                price: "Starting at $299",
                features: [
                  "Multi-biometric authentication",
                  "Real-time tracking",
                  "Mobile companion app",
                  "Basic reporting",
                  "Email support",
                ],
                popular: false,
              },
              {
                title: "TimeWatch Enterprise",
                subtitle: "Complete HRM Solution",
                price: "Starting at $599",
                features: [
                  "Everything in Pro",
                  "Advanced analytics",
                  "Payroll integration",
                  "Leave management",
                  "Performance tracking",
                  "24/7 priority support",
                ],
                popular: true,
              },
              {
                title: "TimeWatch Cloud",
                subtitle: "SaaS Platform",
                price: "From $49/month",
                features: [
                  "Cloud-based solution",
                  "Unlimited users",
                  "API access",
                  "Custom integrations",
                  "White-label options",
                  "Dedicated support",
                ],
                popular: false,
              },
            ].map((product, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                  product.popular ? "ring-2 ring-[#d63438] shadow-2xl" : ""
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#d63438] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-[#6d6f72] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.subtitle}</p>
                  <div className="text-3xl font-bold text-[#d63438] mb-2">
                    {product.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    product.popular
                      ? "bg-[#d63438] text-white hover:bg-[#b82c30]"
                      : "border-2 border-[#d63438] text-[#d63438] hover:bg-[#d63438] hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                Why Choose TimeWatch?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your workforce management with our cutting-edge
                solutions
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Increase Productivity",
                    description:
                      "Reduce time theft and improve workforce efficiency by up to 35%",
                  },
                  {
                    icon: Shield,
                    title: "Enhanced Security",
                    description:
                      "Eliminate buddy punching and unauthorized access with biometric authentication",
                  },
                  {
                    icon: Zap,
                    title: "Streamlined Operations",
                    description:
                      "Automate attendance tracking and integrate seamlessly with existing systems",
                  },
                  {
                    icon: Target,
                    title: "Accurate Reporting",
                    description:
                      "Generate precise reports for payroll, compliance, and performance analysis",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#d63438]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-[#6d6f72]">
                      Live Dashboard
                    </h3>
                    <div className="flex items-center space-x-2 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Live</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">
                        847
                      </div>
                      <div className="text-sm text-green-800">
                        Present Today
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">23</div>
                      <div className="text-sm text-blue-800">On Leave</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">
                        12
                      </div>
                      <div className="text-sm text-orange-800">
                        Late Arrivals
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">
                        98.5%
                      </div>
                      <div className="text-sm text-purple-800">
                        Attendance Rate
                      </div>
                    </div>
                  </div>

                  <div className="h-32 bg-gradient-to-r from-[#d63438]/20 to-[#6d6f72]/20 rounded-xl flex items-end justify-center space-x-2 p-4">
                    {[40, 65, 45, 80, 55, 75, 60].map((height, index) => (
                      <div
                        key={index}
                        className="bg-[#d63438] rounded-t"
                        style={{ height: `${height}%`, width: "12px" }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their experience with TimeWatch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "HR Director",
                company: "TechCorp Inc.",
                content:
                  "TimeWatch transformed our attendance management. The biometric system eliminated time theft completely, saving us thousands monthly.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                position: "Operations Manager",
                company: "Manufacturing Plus",
                content:
                  "The integration with our existing HR system was seamless. Real-time reporting helps us make better workforce decisions.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                position: "IT Administrator",
                company: "Global Solutions",
                content:
                  "Easy to deploy across multiple locations. The cloud-based dashboard gives us complete visibility into our workforce.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d63438] to-[#b82c30] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#6d6f72]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-[#d63438]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your organization's needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  period: "/month",
                  description: "Perfect for small teams",
                  features: [
                    "Up to 50 employees",
                    "Basic biometric scanner",
                    "Web dashboard",
                    "Email support",
                    "Basic reporting",
                  ],
                  cta: "Start Free Trial",
                },
                {
                  name: "Professional",
                  price: "$299",
                  period: "/month",
                  description: "Ideal for growing businesses",
                  features: [
                    "Up to 500 employees",
                    "Advanced biometric options",
                    "Mobile app included",
                    "Priority support",
                    "Advanced analytics",
                    "HRM integration",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  description: "For large organizations",
                  features: [
                    "Unlimited employees",
                    "Multi-location support",
                    "Custom integrations",
                    "Dedicated support",
                    "White-label options",
                    "SLA guarantee",
                  ],
                  cta: "Contact Sales",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                    plan.popular
                      ? "ring-2 ring-[#d63438] shadow-2xl scale-105"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#d63438] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-[#6d6f72] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold text-[#d63438]">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "bg-[#d63438] text-white hover:bg-[#b82c30]"
                        : "border-2 border-[#d63438] text-[#d63438] hover:bg-[#d63438] hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#d63438] to-[#b82c30]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies already using TimeWatch to streamline
            their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#d63438] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#d63438] transition-all flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Book Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your workforce management? Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#d63438]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">
                    Available 24/7 for support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#d63438]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">sales@timewatch.com</p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#d63438]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">123 Tech Street, Suite 100</p>
                  <p className="text-gray-600">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d63438] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6d6f72] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#d63438] to-[#b82c30] rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">TimeWatch</span>
              </div>
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

          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2025 TimeWatch. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-300">Follow us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#d63438] transition-colors"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#d63438] transition-colors"
                >
                  <span className="text-sm font-bold">t</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#d63438] transition-colors"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TimeWatchLanding;
