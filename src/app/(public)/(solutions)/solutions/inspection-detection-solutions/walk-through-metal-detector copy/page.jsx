import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title:
    "Walk-Through Metal Detector | Multi-Zone Entry Screening India",
  description:
    "Ensure secure entry at airports, metro stations, stadiums & offices with TimeWatch Walk-Through Metal Detector. 8-zone detection, audio-visual alerts & high throughput.",
};

export default function WalkThroughMetalDetectorTWND800() {
  const faqs = [
    {
      question: "What can the TW-HH100 detect?",
      answer:
        "It can detect metallic weapons, knives, wires, firearms, and other contraband items hidden on individuals or in bags.",
    },
    {
      question:
        "Is it suitable for high-traffic environments like metros or stadiums?",
      answer:
        "Yes, the TW-HH100 is built for continuous use in high-crowd environments without compromising accuracy or speed.",
    },
    {
      question: "Can it work in silent mode?",
      answer:
        "Yes, it has both sound and vibration alarms, allowing discreet detection in sensitive locations like embassies and courts.",
    },
    {
      question: "How long does the battery last?",
      answer:
        "It provides up to 40 hours of operation on a single charge, ideal for long-hour security shifts.",
    },
    {
      question: "Where is it commonly used?",
      answer:
        "Airports, metros, corporate offices, government facilities, schools, malls, stadiums, and event venues.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many zones does the Walk-Through Metal Detector support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The features an 8-zone detection system, allowing security staff to identify the exact location of metallic objects on the body for quicker screening.",
        },
      },
      {
        "@type": "Question",
        name: "Is the suitable for airports and metro stations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the is widely used in high-traffic areas such as airports, metro and railway stations, stadiums, and government buildings, offering reliable and fast screening.",
        },
      },
      {
        "@type": "Question",
        name: "Does the offer adjustable sensitivity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the comes with adjustable sensitivity levels, enabling operators to detect small metallic objects while avoiding false alarms from harmless items.",
        },
      },
      {
        "@type": "Question",
        name: "What types of alerts does the provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The provides both audio and visual LED indicators, making it easier for security teams to quickly identify suspicious items.",
        },
      },
      {
        "@type": "Question",
        name: "Where can the be installed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The can be installed at airports, metro stations, stadiums, corporate offices, schools, shopping malls, and government institutions for advanced entry screening.",
        },
      },
    ],
  };

  return (
    <div className="solutions-pages">
      {/* Meta Info & Schema FAQ */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
      </Head>
      <div className="">
        {/* Hero Section */}

        <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <div className="relative z-10 w-full h-[400px] md:h-[550px]">
              <Image
                 src="/images/solutions/Walk-Through-Metal-Detector-TWND.png"
                alt="Consulting Hero"
                fill
                sizes="100"
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay on top of image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
            </div>
          </div>

          <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Walk-Through Metal Detector
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Security is non-negotiable in today’s world, especially in
              high-traffic locations like airports, metro stations, stadiums,
              government offices, schools, and malls. The Walk-Through
              Metal Detector from TimeWatch is designed to provide fast,
              reliable, and precise entry screening that enhances safety while
              ensuring smooth flow of people.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/DFMD.jpg"
                  alt="DFMD"
                  title="DFMD"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">Walk-Through Metal Detector</h2>
              <h3>
                (1) Advanced Multi-Zone Security Screening for High-Traffic
                Areas
              </h3>

              <p className="mb-4">
                Security is non-negotiable in today’s world, especially in
                high-traffic locations like airports,{" "}
                <strong>
                  metro stations, stadiums, government offices, schools, and
                  malls
                </strong>
                . The Walk-Through Metal Detector from TimeWatch is
                designed to provide fast, reliable, and precise entry screening
                that enhances safety while ensuring smooth flow of people.
              </p>

              <h3>(2) Key Features of Walk-Through Metal Detector</h3>

              <ul>
                <li>
                  <strong>8-Zone Detection System</strong> – The is
                  equipped with 8 detection zones, allowing security personnel
                  to pinpoint the exact location of metallic objects on the body
                  (head, torso, arms, or legs). This ensures quicker inspections
                  and reduces delays.
                </li>
                <li>
                  <strong>Adjustable Sensitivity Levels</strong> - Operators can
                  fine-tune sensitivity to detect even small metallic objects
                  like blades or concealed weapons, while minimizing false
                  alarms from harmless items such as keys or belts.
                </li>
                <li>
                  <strong>Audio & Visual Alerts</strong> – The device provides
                  clear sound alarms and LED indicators, making it easy for
                  staff to identify and respond quickly to threats without
                  disrupting passenger flow.
                </li>
                <li>
                  <strong>High Throughput Screening</strong> – Built to handle
                  heavy traffic, the ensures that thousands of people
                  can be screened efficiently each day without compromising on
                  accuracy.
                </li>
                <li>
                  <strong>User-Friendly Operation</strong> – With its simple
                  interface, plug-and-play installation, and reliable
                  performance, security staff can operate the device without
                  extensive training.
                </li>
              </ul>

              <h3>(3) Applications of in India & Beyond</h3>
              <ul>
                <li>
                  <strong>Metro & Railway Stations</strong> – Handle peak-hour
                  rush and minimize ticket fraud with faster entry checks.
                </li>
                <li>
                  <strong>Airports</strong> – Improve passenger screening at
                  security gates and boarding zones.
                </li>
                <li>
                  <strong>Stadiums & Sports Arenas</strong> – Manage large
                  crowds during cricket, football, and other sports events
                  safely.
                </li>
                <li>
                  <strong>Schools, Colleges & Universities</strong> – Ensure
                  safety of students and staff by preventing unauthorized items
                  from entering campuses.
                </li>
                <li>
                  <strong>Government Buildings & Corporate Offices</strong> –
                  Add an extra layer of security for sensitive areas.
                </li>
                <li>
                  <strong>Malls & Events </strong> – Manage festive or sales
                  rush by preventing unauthorized access and ensuring safe
                  shopping experiences.
                </li>
              </ul>
              <h3>(4) Benefits of Choosing TimeWatch</h3>
              <ul>
                <li>Precise detection with 8-zone identification</li>
                <li>Smooth people movement with high throughput design</li>
                <li>Flexible installation for indoor and outdoor premises</li>
                <li>Cost-effective and long-lasting security investment</li>
                <li>
                  Backed by TimeWatch’s service support in India, UAE, and
                  Middle East
                </li>
              </ul>
              <h3>(5) Why Businesses Trust TimeWatch</h3>

              <p>
                TimeWatch has been a leader in{" "}
                <strong>access control and security solutions</strong> across
                India, UAE, and the Middle East. With years of expertise, our
                products like the are built to handle the toughest
                security challenges while providing{" "}
                <strong>seamless user experience</strong>.
              </p>
            </section>

            {/* FAQ Section */}
            {/* <SolutionsFaq faqs={faqs} /> */}
          </div>
          {/* sidebar */}
          <div className="xl:w-[300px] sticky top-20">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
