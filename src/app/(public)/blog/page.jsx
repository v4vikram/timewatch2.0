import React from "react";
import { ChevronRight, Clock, Calendar, User } from "lucide-react";
const blogs = [
  {
    id: 1,
    title: "The Future of Biometric Technology in Workplace Management",
    excerpt:
      "Discover how advanced biometric systems are revolutionizing employee attendance and security protocols in modern workplaces.",
    content: `
        <h2>Introduction</h2>
        <p>Biometric technology has emerged as a game-changer in workplace management, offering unprecedented levels of security and efficiency. As organizations worldwide seek to optimize their operations, biometric systems provide a reliable solution for employee identification and time tracking.</p>
        
        <h2>Key Benefits</h2>
        <p>The implementation of biometric systems brings numerous advantages:</p>
        <ul>
          <li>Enhanced security through unique biological identifiers</li>
          <li>Elimination of buddy punching and time theft</li>
          <li>Seamless integration with existing HR systems</li>
          <li>Real-time attendance monitoring and reporting</li>
        </ul>
        
        <h2>Technology Evolution</h2>
        <p>Modern biometric systems have evolved beyond simple fingerprint scanning. Today's solutions incorporate multiple identification methods including facial recognition, iris scanning, and voice recognition, providing robust security layers.</p>
        
        <h2>Implementation Considerations</h2>
        <p>When implementing biometric systems, organizations should consider factors such as employee privacy, data security, and system scalability. Proper training and change management are crucial for successful adoption.</p>
        
        <h2>Future Outlook</h2>
        <p>The future of biometric technology promises even more advanced features, including AI-powered analytics, cloud-based solutions, and integration with IoT devices. These developments will further enhance workplace efficiency and security.</p>
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
        <h2>Planning Your Implementation</h2>
        <p>Successful biometric system implementation requires careful planning and consideration of various factors. Organizations must assess their current infrastructure, employee needs, and long-term objectives.</p>
        
        <h2>Common Implementation Challenges</h2>
        <p>Organizations often face several challenges during implementation:</p>
        <ul>
          <li>Employee resistance to new technology</li>
          <li>Integration with existing systems</li>
          <li>Data privacy and security concerns</li>
          <li>Hardware and software compatibility issues</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>To ensure successful implementation, follow these best practices:</p>
        <ul>
          <li>Conduct thorough needs assessment</li>
          <li>Engage employees early in the process</li>
          <li>Provide comprehensive training</li>
          <li>Implement in phases</li>
          <li>Monitor and optimize continuously</li>
        </ul>
        
        <h2>ROI and Performance Metrics</h2>
        <p>Measuring the success of biometric system implementation involves tracking key performance indicators such as time savings, accuracy improvements, and cost reductions.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Implementation",
  },
  {
    id: 3,
    title: "Privacy and Security in Biometric Data Management",
    excerpt:
      "Understanding the critical aspects of protecting biometric data and ensuring compliance with privacy regulations.",
    content: `
        <h2>The Importance of Biometric Data Security</h2>
        <p>Biometric data represents the most personal form of identification, making its protection paramount. Organizations must implement robust security measures to safeguard this sensitive information.</p>
        
        <h2>Regulatory Compliance</h2>
        <p>Various regulations govern biometric data handling:</p>
        <ul>
          <li>GDPR in Europe</li>
          <li>CCPA in California</li>
          <li>State biometric privacy laws</li>
          <li>Industry-specific regulations</li>
        </ul>
        
        <h2>Security Best Practices</h2>
        <p>Implement these security measures for optimal protection:</p>
        <ul>
          <li>End-to-end encryption</li>
          <li>Secure data storage</li>
          <li>Access controls and audit trails</li>
          <li>Regular security assessments</li>
        </ul>
        
        <h2>Employee Privacy Rights</h2>
        <p>Respecting employee privacy while maintaining security requires clear policies, transparent communication, and opt-out alternatives where legally permissible.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    author: "Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Security",
  },
];

export const metadata = {
  title: "Blog | TimeWatch Infocom",
  description:
    "Explore expert articles from TimeWatch Infocom on biometric systems, time attendance, access control, and security technology trends.",
};

const blogListPage = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in
            biometric technology
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d63438] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {blog.author}
                      </span>
                    </div>
                    <button
                      //   onClick={() => {
                      //     setSelectedBlog(blog);
                      //     setCurrentPage("blog-detail");
                      //   }}
                      className="text-[#d63438] hover:text-[#b82c30] font-medium flex items-center"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default blogListPage;
