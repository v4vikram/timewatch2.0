import React from "react";
import {
  Award,
  Users,
  Target,
  Eye,
} from "lucide-react";

export const metadata = {
  title: "TimeWatch Infocom | About Us",
  description:
    "Learn more about TimeWatch Infocom's mission, team, and expertise in providing smart security and time attendance solutions across India.",
};

const aboutPage = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            About BiometricPro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the revolution in biometric technology and workforce
            management solutions
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d63438] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To revolutionize workforce management through cutting-edge
                biometric technology, ensuring security, accuracy, and
                efficiency for businesses worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the global leader in biometric solutions, creating a world
                where identity verification is seamless, secure, and universally
                accessible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Innovation, integrity, and customer-centricity drive everything
                we do. We believe in building trust through transparent and
                reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#6d6f72] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, BiometricPro emerged from a simple yet powerful
                vision: to make biometric technology accessible and practical
                for businesses of all sizes. What started as a small team of
                passionate engineers has grown into a leading provider of
                biometric solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've helped thousands of organizations
                streamline their workforce management processes, enhance
                security, and improve operational efficiency through our
                innovative biometric systems.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">10k+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <Users className="w-16 h-16 text-[#d63438] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-2">
                  Our Team
                </h3>
                <p className="text-gray-600">
                  A diverse group of experts dedicated to pushing the boundaries
                  of biometric technology and delivering exceptional customer
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutPage;
