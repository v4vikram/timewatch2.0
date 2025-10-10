import React from "react";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Shield,
  Globe,
  TrendingUp,
  Building2,
  Heart,
  Leaf,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

const CEODesk = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            From the CEO's Desk
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Legacy of Innovation & Excellence
          </p>
        </div>
      </section>

      {/* CEO Message & Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - CEO Message */}
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">
                Leading the Future of Security Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                As the CEO of{" "}
                <span className="font-bold">
                  <span className="text-red-600">Time</span>
                  <span className="text-gray-600">Watch</span>
                </span>
                , I am honored to share our journey with you. Since our founding
                in 2015,{" "}
                <span className="font-bold">TimeWatch Infocom Pvt. Ltd.</span>{" "}
                has been at the forefront of{" "}
                <span className="font-bold">Security Solutions.</span>
              </p>

              <div className="space-y-4 mt-6">
                {[
                  {
                    title: "Innovating Security",
                    desc: "Using AI and Machine Learning to create smart, adaptive solutions",
                    icon: Lightbulb,
                  },
                  {
                    title: "Advanced Technology",
                    desc: "Offering cutting-edge security systems that keep our clients secure in a digital world",
                    icon: Shield,
                  },
                  {
                    title: "Creative Team",
                    desc: "A passionate team driving continuous innovation and technological excellence",
                    icon: Users,
                  },
                  {
                    title: "Client Trust",
                    desc: "Building reliable, future-proof solutions that ensure peace of mind",
                    icon: Award,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mt-6 text-lg">
                Our mission is clear: to <strong>empower</strong> businesses and
                individuals with the most <strong>advanced security</strong>{" "}
                products, and to lead the way in{" "}
                <strong>security innovation</strong> for the future.
              </p>
            </div>

            {/* Right - CEO Image */}
            <div className="bg-gradient-to-br from-red-100 to-gray-100 rounded-3xl p-3 md:p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto flex justify-center rounded-full overflow-hidden border-4 border-gray-800">
                  <Image
                    fill
                    src="/images/ceo.png"
                    alt="CEO Mr. Virendra Kumar"
                    className="w-full h-full object-center"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  Mr. Virendra Kumar
                </h3>
                <p className="text-gray-500 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 italic text-lg">
                  "Innovation is the key to enhancing security and empowering
                  businesses for the future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Product Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">
                Our Product Range
              </h2>
              <p className="text-gray-600 mb-6">
                At TimeWatch, we offer a versatile suite of products designed to
                meet the evolving demands of today's businesses. Our solutions
                are scalable, user-friendly, and reliable, ensuring seamless
                management across various sectors.
              </p>

              <div className="space-y-3">
                {[
                  "Time & Attendance Solutions",
                  "Access Control Solutions",
                  "Entrance Control Solutions",
                  "Traffic & Parking Control Solutions",
                  "Inspection Control Solutions",
                  "Software & Mobile Applications",
                  "UL Listed EM Locks & Accessories",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="font-semibold text-gray-700 mt-6">
                Each solution is crafted to enhance operational efficiency,
                productivity, and security, making TimeWatch a trusted partner
                for modern organizations.
              </p>
            </div>

            {/* Right - Product Image */}
            <div className="bg-gradient-to-br from-gray-100 to-red-50 rounded-3xl p-8">
              <img
                src="https://timewatch.co.in/images/Our-Solutions.jpg"
                alt="TimeWatch Solutions"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="bg-gradient-to-br from-red-100 to-gray-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Mission and Vision"
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* Right - Mission Text */}
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">
                Our Mission & Vision: The Road Ahead
              </h2>
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                Our mission at TimeWatch is simple yet powerful:
              </h3>
              <p className="text-2xl font-bold text-red-600 mb-6">
                Identify | Innovate | Build | Supply | Support
              </p>

              <p className="text-gray-600 mb-4">
                As we look to the future, we remain focused on:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Research & Development",
                    desc: "Continuous investment to ensure we stay ahead of industry trends",
                    icon: TrendingUp,
                  },
                  {
                    title: "Expanding Our Product Portfolio",
                    desc: "Launching new products to meet evolving market demands",
                    icon: Target,
                  },
                  {
                    title: "Strengthening Partnerships",
                    desc: "Collaborating with key stakeholders to better serve our clients globally",
                    icon: Globe,
                  },
                  {
                    title: "Sustainability and Responsibility",
                    desc: "Committing to eco-friendly practices and responsible sourcing",
                    icon: Leaf,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
            <p>
              Our solutions are trusted by a diverse array of industries,
              delivering tailored security and management systems that meet
              their unique needs. We are proud to serve clients from sectors
              such as{" "}
              <span className="font-bold text-gray-800">
                Banking and Financial Services, Army and Defense, and
                Healthcare,
              </span>{" "}
              where precision and reliability are paramount.
            </p>
            <p>
              In the{" "}
              <span className="font-bold text-gray-800">
                Public Sector, Hotels and Resorts, and IT & Telecom,
              </span>{" "}
              we provide cutting-edge solutions that streamline operations and
              enhance security. Schools and Institutions, Railways, and Airports
              rely on our expertise to maintain smooth and secure environments.
            </p>
            <p>
              We also partner with{" "}
              <span className="font-bold text-gray-800">
                Corporate Offices, Residential Societies, and the Retail
                Industry,
              </span>{" "}
              empowering them with advanced, scalable solutions to ensure
              optimal security and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Discover How TimeWatch Can Transform Your Operations
            </h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <p>
              Are you curious about how TimeWatch's advanced solutions can
              enhance your business's efficiency and security? We invite you to
              explore our comprehensive range of products designed to meet the
              dynamic needs of modern organizations.
            </p>
            <p>
              Our offerings are tailored to address diverse challenges across
              various industries, providing you with the tools needed to
              streamline operations, ensure safety, and drive productivity.
              Whether you're interested in time management, access control, or
              any other of our specialized solutions, we're here to guide you
              through our innovative products.
            </p>
            <p>
              For a more in-depth understanding of how our solutions can be
              customized to fit your specific requirements, we encourage you to
              reach out for a personalized consultation. Our team of experts is
              ready to discuss your needs, answer your questions, and provide
              you with the insights necessary to make informed decisions.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl font-bold text-gray-800 mb-6">
              Get in touch with us today to schedule a consultation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919599953923"
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+91 95999 53923</span>
              </a>
              <a
                href="mailto:sales@timewatchindia.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEODesk;
