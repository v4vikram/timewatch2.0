"use client";
import React, { useState } from "react";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
// Sample blog data
const blogs = [
  {
    id: 1,
    title: "The Future of Biometric Technology in Workplace Management",
    excerpt:
      "Discover how advanced biometric systems are revolutionizing employee attendance and security protocols in modern workplaces.",
    content: `
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Introduction</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">Biometric technology has emerged as a game-changer in workplace management, offering unprecedented levels of security and efficiency. As organizations worldwide seek to optimize their operations, biometric systems provide a reliable solution for employee identification and time tracking.</p>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Key Benefits</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">The implementation of biometric systems brings numerous advantages:</p>
        <ul style="margin: 1rem 0; padding-left: 2rem; line-height: 1.8;">
          <li style="margin: 0.5rem 0;">Enhanced security through unique biological identifiers</li>
          <li style="margin: 0.5rem 0;">Elimination of buddy punching and time theft</li>
          <li style="margin: 0.5rem 0;">Seamless integration with existing HR systems</li>
          <li style="margin: 0.5rem 0;">Real-time attendance monitoring and reporting</li>
        </ul>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Technology Evolution</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">Modern biometric systems have evolved beyond simple fingerprint scanning. Today's solutions incorporate multiple identification methods including facial recognition, iris scanning, and voice recognition, providing robust security layers.</p>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Implementation Considerations</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">When implementing biometric systems, organizations should consider factors such as employee privacy, data security, and system scalability. Proper training and change management are crucial for successful adoption.</p>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Future Outlook</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">The future of biometric technology promises even more advanced features, including AI-powered analytics, cloud-based solutions, and integration with IoT devices. These developments will further enhance workplace efficiency and security.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    id: 2,
    title:
      "Implementing Biometric Systems: Best Practices and Common Challenges",
    excerpt:
      "Learn about the essential considerations and proven strategies for successfully deploying biometric attendance systems in your organization.",
    content: `
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Planning Your Implementation</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">Successful biometric system implementation requires careful planning and consideration of various factors. Organizations must assess their current infrastructure, employee needs, and long-term objectives.</p>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Common Implementation Challenges</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">Organizations often face several challenges during implementation:</p>
        <ul style="margin: 1rem 0; padding-left: 2rem; line-height: 1.8;">
          <li style="margin: 0.5rem 0;">Employee resistance to new technology</li>
          <li style="margin: 0.5rem 0;">Integration with existing systems</li>
          <li style="margin: 0.5rem 0;">Data privacy and security concerns</li>
          <li style="margin: 0.5rem 0;">Hardware and software compatibility issues</li>
        </ul>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Best Practices</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">To ensure successful implementation, follow these best practices:</p>
        <ul style="margin: 1rem 0; padding-left: 2rem; line-height: 1.8;">
          <li style="margin: 0.5rem 0;">Conduct thorough needs assessment</li>
          <li style="margin: 0.5rem 0;">Engage employees early in the process</li>
          <li style="margin: 0.5rem 0;">Provide comprehensive training</li>
          <li style="margin: 0.5rem 0;">Implement in phases</li>
          <li style="margin: 0.5rem 0;">Monitor and optimize continuously</li>
        </ul>
        
        <h2 style="color: #6d6f72; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">ROI and Performance Metrics</h2>
        <p style="margin: 1rem 0; line-height: 1.8;">Measuring the success of biometric system implementation involves tracking key performance indicators such as time savings, accuracy improvements, and cost reductions.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Implementation",
  }
];

const blogDescriptionPage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [blogs[0], setblogs[0]] = useState(null);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={"/blog"}
            // onClick={() => setCurrentPage("blog")}
            className="text-[#d63438] hover:text-[#b82c30] font-medium flex items-center mb-6"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Blog
          </Link>
          <div className="mb-6">
            <span className="bg-[#d63438] text-white px-3 py-1 rounded-full text-sm font-medium">
              {blogs[0].category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6 max-w-4xl">
            {blogs[0].title}
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <User className="w-5 h-5 mr-2" />
            <span className="mr-4">{blogs[0].author}</span>
            <Calendar className="w-5 h-5 mr-2" />
            <span className="mr-4">
              {blogs[0].date}
            </span>
            <Clock className="w-5 h-5 mr-2" />
            <span>{blogs[0].readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-12 gap-x-10">
          <div className="col-span-9">
            <div className="prose prose-lg max-w-none">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  In today's rapidly evolving digital landscape, businesses face
                  unprecedented challenges in staying competitive and relevant.
                  The convergence of artificial intelligence, cloud computing,
                  and data analytics has created new opportunities for growth,
                  but also new complexities that require strategic thinking and
                  careful execution.
                </p>

                <h2 className="text-2xl font-bold text-[#6d6f72] mt-8 mb-4">
                  The Digital Transformation Imperative
                </h2>

                <p>
                  Digital transformation is no longer a luxury—it's a necessity.
                  Companies that fail to adapt risk being left behind by more
                  agile competitors who leverage technology to deliver superior
                  customer experiences, streamline operations, and drive
                  innovation. The key lies in understanding that transformation
                  isn't just about adopting new tools; it's about reimagining
                  how business gets done.
                </p>

                <blockquote className="border-l-4 border-[#d63438] pl-6 italic text-gray-600 my-8">
                  "Success in the digital age requires a fundamental shift in
                  mindset—from viewing technology as a support function to
                  seeing it as a strategic enabler of business value."
                </blockquote>

                <h2 className="text-2xl font-bold text-[#6d6f72] mt-8 mb-4">
                  Key Strategies for Modern Businesses
                </h2>

                <p>
                  To thrive in this environment, organizations must focus on
                  building capabilities that enable them to adapt quickly to
                  changing market conditions. This involves investing in the
                  right technologies, developing digital skills across the
                  workforce, and creating cultures that embrace innovation and
                  continuous learning.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Embrace cloud-first architectures for scalability and
                    flexibility
                  </li>
                  <li>
                    Implement data-driven decision making across all business
                    functions
                  </li>
                  <li>
                    Foster a culture of continuous learning and experimentation
                  </li>
                  <li>
                    Prioritize customer experience in every digital touchpoint
                  </li>
                  <li>
                    Build robust cybersecurity frameworks to protect digital
                    assets
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-[#6d6f72] mt-8 mb-4">
                  Looking Ahead: The Future of Business
                </h2>

                <p>
                  As we look toward the future, it's clear that the pace of
                  technological change will only accelerate. Businesses that
                  position themselves as learning organizations—constantly
                  evolving, adapting, and innovating—will be best equipped to
                  navigate uncertainty and capitalize on emerging opportunities.
                  The question isn't whether to transform, but how quickly and
                  effectively you can do so.
                </p>

                <p>
                  The organizations that will thrive are those that view change
                  not as a challenge to overcome, but as an opportunity to
                  redefine what's possible. By staying focused on customer
                  value, embracing new technologies thoughtfully, and building
                  resilient, adaptable teams, businesses can turn digital
                  transformation from a necessity into a competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            {/* Latest Blog Posts */}
            <div className="bg-white rounded-lg shadow-sm. p-6 border border-red-100 sticky top-28">
              <h3 className="text-xl font-bold text-[#6d6f72] mb-6">
                Latest Posts
              </h3>
              <div className="space-y-4">
                {blogs.slice(1, 4).map((blog) => (
                  <div
                    key={blog.id}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#6d6f72] text-sm leading-tight mb-1 hover:text-[#d63438] cursor-pointer">
                        {blog.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default blogDescriptionPage;
