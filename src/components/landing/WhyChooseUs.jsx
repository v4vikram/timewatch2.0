"use client";
import React, { useState } from "react";
import {
  Building2,
  Factory,
  GraduationCap,
  Truck,
  Shield,
  Users,
  MapPin,
  Award,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Designed in India, Built for Indian Workspaces",
    description:
      "Understanding climate conditions, user behavior, and legal compliance",
  },
  {
    icon: Users,
    title: "Trusted by Over 5,000 Indian Businesses",
    description:
      "Across education, healthcare, manufacturing, IT, retail, and logistics",
  },
  {
    icon: Shield,
    title: "Pan-India Service and Support",
    description:
      "From metropolitan areas to tier-2 cities with responsive technical support",
  },
  {
    icon: Award,
    title: "1-Year Warranty & Free Updates",
    description: "Product warranty with ongoing software and AI improvements",
  },
];


const WhyChooseUs = () => {
  const [hoveredFeature2, setHoveredFeature2] = useState(null);
  return (
    <div className="bg-white p-4  md:p-8 lg:p-12 rounded-2xl shadow-2xl border border-gray-100">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-3 text-primary">
          Why Choose TimeWatch?
        </h3>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Your trusted partner for biometric solutions across India
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div key={index}>
              <div
                className={`md:p-6 rounded-xl transition-all duration-300 cursor-pointer  md:flex items-start space-x-4 ${
                  hoveredFeature2 === index
                    ? "bg-red-50 ring-2 ring-red-200"
                    : "bg-white"
                }`}
                onMouseEnter={() => setHoveredFeature2(index)}
                onMouseLeave={() => setHoveredFeature2(null)}
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 shadow-md ${
                    hoveredFeature2 === index ? "scale-110" : "scale-100"
                  }`}
                >
                  <IconComponent size={28} color="white" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-800 mb-1 text-xl">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <button className="inline-flex items-center space-x-3 px-8 py-3 bg-primary hover:bg-red-700 text-white md:text-lg font-semibold rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-0.5">
          <Shield size={24} />
          <span>Get BIO-1SE Today</span>
        </button>
        <p className="text-gray-500 mt-3 text-sm">
          Join 5,000+ Indian businesses already using TimeWatch solutions
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
