// app/components/ServiceSidebar.jsx

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServiceSidebarForm from "./forms/ServiceSidebarForm";

const services = [
  {
    label: "Office & Field Attendance",
    href: "/solutions/attendance-management/office-&-field-attendance",
  },
  { label: "Cyber Security", href: "/solutions/cyber-security" },
  { label: "Machine Learning", href: "/solutions/machine-learning" },
  { label: "Software Solution", href: "/solutions/software-solution" },
  { label: "Data Analysis", href: "/solutions/data-analysis" },
  { label: "Web Development", href: "/solutions/web-development" },
];

export default function ServiceSidebar() {
  const pathname = usePathname(); // ✅ Get current route

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="bg-white rounded-2xl shadow-md px-6 py-4">
        <h3 className="text-lg font-semibold mb-4">All Services</h3>
        <div className="space-y-2">
          {services.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-800 hover:bg-secondary/10"
                  }`}
              >
                <span>{label}</span>
                <ArrowRight size={18} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md px-6 py-4">
        <ServiceSidebarForm />
      </div>
    </div>
  );
}
