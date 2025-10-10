import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title:
    "Canteen Management System in India | Employee Dining Automation – TimeWatch",
  description:
    "Automate canteen management with TimeWatch India. Biometric meal access, RFID, cashless dining & real-time reports for corporates, factories, hospitals & universities. Reduce wastage, save costs & improve satisfaction.",
};

export default function CanteenManagementSystem() {
  const faqs = [
    {
      question: "Can the system manage multiple shifts?",
      answer:
        "Yes. The TimeWatch Canteen Management System automatically works with multiple shifts and rosters, so employees on morning, evening, or night duty can access meals fairly and without duplication.",
    },
    {
      question: "Can contractors or visitors use the canteen?",
      answer:
        "Yes. Contractors and visitors can securely use the canteen through prepaid RFID cards or temporary access passes, ensuring transparency and proper billing.",
    },
    {
      question: "Can meal limits be set per employee?",
      answer:
        "Absolutely. You can configure daily or monthly meal limits per employee, which prevents overuse and ensures fair distribution among staff.",
    },
    {
      question: "Does the system help reduce food wastage?",
      answer:
        "Yes. Since it integrates with attendance data, the system predicts meal requirements and avoids over-preparation, helping reduce food wastage and costs.",
    },
    {
      question: "Can the canteen system integrate with payroll?",
      answer:
        "Yes. TimeWatch Canteen Management integrates directly with payroll, making it easy to calculate meal allowances or deductions automatically, saving HR and finance teams valuable time.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can the system manage multiple shifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the TimeWatch Canteen Management System works seamlessly with multiple shifts and rosters, ensuring fair meal distribution for employees across all schedules.",
        },
      },
      {
        "@type": "Question",
        name: "Can contractors or visitors use the canteen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, contractors and visitors can securely use the canteen with prepaid RFID cards or temporary access passes managed by the TimeWatch system.",
        },
      },
      {
        "@type": "Question",
        name: "Can meal limits be set per employee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The system allows daily or monthly meal limits to be configured per employee to prevent overuse and ensure fair distribution.",
        },
      },
      {
        "@type": "Question",
        name: "Does the system help reduce food wastage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, by linking with attendance data, the system predicts meal requirements and helps avoid over-preparation, reducing food wastage significantly.",
        },
      },
      {
        "@type": "Question",
        name: "Can the canteen system integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TimeWatch Canteen Management integrates with payroll to auto-calculate meal allowances or deductions, simplifying billing and accounting.",
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
                src="/images/solutions/canteen-management-system.png"
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
              Canteen Management System for Corporates, Factories & Institutions
              in India
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Managing canteen operations in a growing organization is not easy.
              Paper coupons, manual registers, and cash counters often lead to
              long queues, food wastage, and misuse of facilities.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/canteen-management.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">
                Transform Employee Dining with Smarter Canteen Management
              </h2>

              <p className="mb-4">
                TimeWatch’s <strong>Canteen Management System</strong> is
                designed for{" "}
                <strong>
                  Indian corporates, factories, hospitals, and universities,
                </strong>{" "}
                where thousands of meals are served daily.{" "}
                <strong>
                  By combining biometric authentication, RFID cards, cashless
                  payments, and real-time reporting,
                </strong>{" "}
                we make dining simple, secure, and cost-effective for both
                employees and management.
              </p>

              <p>
                Whether it’s a{" "}
                <strong> factory in Pune with multiple shifts</strong>, a{" "}
                <strong>university in Delhi with thousands of students</strong>,
                or a{" "}
                <strong>
                  corporate office in Bangalore with multiple cafeterias
                </strong>
                , our system ensures every meal is tracked, fair, and
                hassle-free.
              </p>

              <h2>Key Features & Real-World Use Cases</h2>
              <h3 className="!mt-0">(1) Touchless & Secure Meal Access</h3>
              <p>
                Employees can use{" "}
                <strong>face recognition, fingerprint, or RFID cards</strong>
                to collect meals without coupons. Example: In an{" "}
                <strong>IT park in Gurugram</strong>, only authorized employees
                can access the cafeteria, reducing misuse and saving costs.
              </p>
              <h3>(2) Menu Scheduling & Multi-Shift Support</h3>
              <p>
                Supports <strong>255 menu items</strong> and up to{" "}
                <strong>9 meal slots per day</strong> (breakfast, lunch, dinner,
                snacks). Example: <strong>A factory in Chennai</strong> running
                24x7 can easily manage different menus for day and night shifts.
              </p>
              <h3>(3) Cashless Transactions with Auto Recharge</h3>
              <p>
                Employees pay via UPI, prepaid wallet, or RFID card, with
                instant auto-recharge. Example: In a Delhi corporate office,
                staff recharge online and skip queues, making lunch breaks
                faster.
              </p>
              <h3>(4) Real-Time Tracking & Reports</h3>
              <p>
                Every transaction is recorded with user, time, and item details.
                Example: In a <strong>hospital in Hyderabad</strong>, HR tracks
                staff consumption separately from visitor meals to ensure
                transparency.
              </p>
              <h3>(5) Smart Food Planning & Waste Reduction</h3>
              <p>
                By syncing with attendance data, the system predicts the number
                of meals required daily. Example: A{" "}
                <strong>Gujarat factory</strong> reduced food wastage by 20%
                using attendance-linked forecasting.
              </p>
              <h3>(6) Integration with Payroll & HRMS</h3>
              <p>
                Meal allowances or deductions can be auto-calculated and synced
                with payroll. Example: In a <strong>Bangalore SME</strong>,
                contractor meals are deducted directly from invoices, saving
                admin effort.
              </p>
              <h3>(7) Where Can It Be Used?</h3>
              <ul>
                <li>
                  <strong>Corporate Offices & IT Parks</strong> – Quick,
                  cashless meals without queues.
                </li>
                <li>
                  <strong>Factories & Industrial Units</strong> – Handle
                  thousands of meals across rotating shifts.
                </li>
                <li>
                  <strong>Schools, Colleges & Universities</strong> – Fair and
                  hygienic dining for students and staff.
                </li>
                <li>
                  <strong>Hospitals & Clinics</strong> – Ensure 24x7 staff
                  canteen availability with controlled access.
                </li>
                <li>
                  <strong>Airports & Metro Stations</strong> – Simplify meal
                  access for staff across large facilities.
                </li>
                <li>
                  <strong>Government Buildings</strong> – Monitor subsidized
                  canteen benefits with transparency.
                </li>
              </ul>

                <h3>(8) Key Benefits</h3>
              <ul>
                <li>
                  <strong>Faster Dining</strong> – Cuts waiting time by up to 40%
                </li>
                <li>
                 <strong>Zero Misuse</strong> – Only authorized employees can redeem meals
                </li>
                <li>
                 <strong>Accurate Reports</strong> – Prevents disputes with canteen contractors
                </li>
                <li>
                  <strong>Cost Savings</strong> – Reduces wastage & manual errors
                </li>
                <li>
                 <strong>Better Employee Satisfaction</strong> – Dining becomes smoother, fairer, and more enjoyable
                </li>
              </ul>
            </section>

            {/* FAQ Section */}
            <SolutionsFaq faqs={faqs} />
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
