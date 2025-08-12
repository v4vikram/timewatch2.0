import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Car,
  MapPin,
  Lock,
  Clock,
  ChevronRight,
  Dumbbell,
  Users,
  ShieldCheck,
  DoorClosed,
  Fingerprint,
} from "lucide-react";

export const menuItems = [
  {
    label: "Home",
    href: "/",
    type: "link",
  },
  // {
  //   label: "Solutions",
  //   type: "tabs",
  //   tabs: [
  //     {
  //       value: "attendance-management",
  //       label: "Attendance Management",
  //       icon: Clock,
  //       links: [
  //         {
  //           label: "Office & Field Attendance",
  //           href: "/solutions/attendance-management/office-&-field-attendance",
  //         },
  //         {
  //           label: "Mobile App with Geo-fencing",
  //           href: "/attendance-management/mobile-app-geo-fencing",
  //         },
  //         {
  //           label: "Shift & Payroll Integration",
  //           href: "/attendance-management/shift-payroll-integration",
  //         },
  //       ],
  //     },
  //     {
  //       value: "visitor-parking-management",
  //       label: "Visitor & Parking Management",
  //       icon: Car,
  //       links: [
  //         {
  //           label: "QR Code Based Visitor Access",
  //           href: "/visitor-parking/qr-code-visitor-access",
  //         },
  //         {
  //           label: "Vehicle Entry Logs",
  //           href: "/visitor-parking/vehicle-entry-logs",
  //         },
  //         {
  //           label: "Contractor / Vendor Management",
  //           href: "/visitor-parking/contractor-vendor-management",
  //         },
  //       ],
  //     },
  //     {
  //       value: "gym-facility-access",
  //       label: "Gym & Facility Access",
  //       icon: Dumbbell,
  //       links: [
  //         {
  //           label: "Member Check-in Integration",
  //           href: "/gym-facility/member-check-in",
  //         },
  //         {
  //           label: "Biometric Gate Control",
  //           href: "/gym-facility/biometric-gate-control",
  //         },
  //       ],
  //     },
  //     {
  //       value: "workforce-hrms",
  //       label: "Workforce HRMS",
  //       icon: Users,
  //       links: [
  //         {
  //           label: "Cloud HRMS Platform",
  //           href: "/hrms/cloud-platform",
  //         },
  //         {
  //           label: "Leave & Payroll Management",
  //           href: "/hrms/leave-payroll",
  //         },
  //         {
  //           label: "Timesheet & Appraisals",
  //           href: "/hrms/timesheet-appraisals",
  //         },
  //       ],
  //     },
  //     {
  //       value: "security-management",
  //       label: "Security Management",
  //       icon: ShieldCheck,
  //       links: [
  //         {
  //           label: "DFMD (Door Frame Metal Detectors)",
  //           href: "/security/dfmd",
  //         },
  //         {
  //           label: "Handheld Metal Detectors",
  //           href: "/security/handheld-metal-detectors",
  //         },
  //         {
  //           label: "X-Ray Baggage Scanners",
  //           href: "/security/xray-baggage-scanners",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: "Products",
    type: "tabs",
    tabs: [
      {
        value: "biometric-attendance-devices",
        label: "Biometric Attendance Devices",
        icon: Fingerprint,
        links: [
          {
            label: "Face Recognition Devices",
            href: "face-recognition-devices",
          },
          {
            label: "Fingerprint Devices",
            href: "fingerprint-devices",
          },
          {
            label: "IRIS Devices",
            href: "iris-devices",
          },
          {
            label: "Palm Recognition Devices",
            href: "palm-recognition-devices",
          },
        ],
      },
      {
        value: "entrance-control",
        label: "ENTRANCE CONTROL",
        icon: DoorClosed,
        links: [
          {
            label: "QR Code Based Visitor Access",
            href: "/visitor-parking/qr-code-visitor-access",
          },
          {
            label: "Vehicle Entry Logs",
            href: "/visitor-parking/vehicle-entry-logs",
          },
          {
            label: "Contractor / Vendor Management",
            href: "/visitor-parking/contractor-vendor-management",
          },
        ],
      },
      {
        value: "gym-facility-access",
        label: "Gym & Facility Access",
        icon: Dumbbell,
        links: [
          {
            label: "Member Check-in Integration",
            href: "/gym-facility/member-check-in",
          },
          {
            label: "Biometric Gate Control",
            href: "/gym-facility/biometric-gate-control",
          },
        ],
      },
      {
        value: "workforce-hrms",
        label: "Workforce HRMS",
        icon: Users,
        links: [
          {
            label: "Cloud HRMS Platform",
            href: "/hrms/cloud-platform",
          },
          {
            label: "Leave & Payroll Management",
            href: "/hrms/leave-payroll",
          },
          {
            label: "Timesheet & Appraisals",
            href: "/hrms/timesheet-appraisals",
          },
        ],
      },
      {
        value: "security-management",
        label: "Security Management",
        icon: ShieldCheck,
        links: [
          {
            label: "DFMD (Door Frame Metal Detectors)",
            href: "/security/dfmd",
          },
          {
            label: "Handheld Metal Detectors",
            href: "/security/handheld-metal-detectors",
          },
          {
            label: "X-Ray Baggage Scanners",
            href: "/security/xray-baggage-scanners",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    type: "link",
  },
  {
    label: "Downloads",
    href: "/download",
    type: "link",
  },
  // {
  //   label: "Blogs",
  //   href: "/blog",
  //   type: "link",
  // },
  {
    label: "Contact",
    href: "/contact",
    type: "link",
  },
];