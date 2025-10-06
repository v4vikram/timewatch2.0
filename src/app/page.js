import BannerSwiper from "@/components/BannerSwiper";
import Counter from "@/components/Counter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
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
  Headset,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HomePageForm from "@/components/HomePageForm";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import FeaturesProduct from "@/components/home/FeaturesProduct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const dynamic = "auto"; // optional; ISR will still work

export const metadata = {
  title: "TimeWatch | Home",
  description: "Explore the latest featured security products.",
};

// ISR: Regenerate every 1 hour (3600 seconds)
async function getFeaturedProducts() {
  try {
    const res = await axiosInstance.get(`/product/featured-products`);
    return res.data?.products || [];
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      console.error("Backend not running or unreachable");
    } else {
      console.error("Error fetching products:", error.message);
    }
    // return empty array or null so UI doesn't crash
    return [];
  }
}

export default async function HomePage() {
  const products = await getFeaturedProducts();
  console.log(products);

  let publishedProducts = products.filter(
    (item) => item?.status == "published"
  );

  return (
    <div>
      <Header />
      <main>
        <section>
          <BannerSwiper />
        </section>
        <div className="relative overflow-hidden">
          <HeroSection />
        </div>
        {/* <FeaturedProducts/> */}
        {/* features products */}
        <FeaturesProduct publishedProducts={publishedProducts} />

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Why Choose <span className="text-primary">Time</span>
                  <span className="text-secondary">Watch</span>?
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
                <div className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 rounded-3xl p-5 lg:p-8">
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

        {/* get catalouge section */}
        {/* <section>
        <div className="container  mt-6 lg:mt-20">
          <div className="grid lg:grid-cols-2">
            <div>
              <h2 className="h2 block lg:hidden text-secondary">Unlock the Best in Security <span className="text-primary.">– Get Our Catalogue Now</span></h2>
              <div className="w-full lg:w-[600px] h-[200px] lg:h-[400px] relative mx-auto">
                <Image
                  src="/images/catalogue.webp"
                  alt="timewatch catalogue"
                  className="mx-auto mb-4"
                  fill
                  sizes="300"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h2 className="h2 hidden lg:block text-secondary">Unlock the Best in Security <span className="text-primary.">– Get Our Catalogue Now</span></h2>
                <Counter />
                <Button className={'mt-5'}>Get the Catalogue</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* Features Section */}
        <section id="features" className="lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Advanced Features for Modern Workforce
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
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
                  <p className="text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div>
              <div className="text-center">
                <h2 className="font-bold text-[25px] text-center mb-5 text-gray-900">
                  Unlock the Best in Security – Get Our Catalogue Now
                </h2>
                <div className="w-full lg:w-[600px] h-[200px] lg:h-[400px] relative mx-auto">
                  <Image
                    src="/images/catalogue.webp"
                    alt="timewatch catalogue"
                    className="mx-auto mb-4"
                    fill
                    sizes="300"
                  />
                </div>

                <button className="tomato-btn !py-3">Get the Catalogue</button>
                <Counter />
              </div>
            </div>
            <div className="lg:pl-20">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section> */}
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
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
                  <p className="text-secondary mb-6 italic">
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
                      <div className="font-semibold text-secondary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-secondary">
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
              <Link href={'/contact'} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#d63438] transition-all flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Book Demo</span>
              </Link>
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
                {"Ready to revolutionize your workforce management? Let's talk!"}
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
                    <a href="tel:+91-95999 53923" className="text-gray-600">
                      +91-95999 53923
                    </a>
                    {/* <p className="text-sm text-gray-500">Available 24/7 for support</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headset className="w-6 h-6 text-[#d63438]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                      Sales & Technical
                    </h3>
                    <a href="tel:011-4191-6615" className="text-gray-600">
                      011-4191-6615
                    </a>
                    {/* <p className="text-sm text-gray-500">Available 24/7 for support</p> */}
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
                    <a
                      href="mailto:sales@timewatchindia.com"
                      className="text-gray-600"
                    >
                      sales@timewatchindia.com
                    </a>
                    {/* <p className="text-sm text-gray-500">We'll respond within 2 hours</p> */}
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
                    <p className="text-gray-600">
                      {"D-162, Okhla Phase - I New Delhi - 110020"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 lg:p-8">
                <HomePageForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  );
}
