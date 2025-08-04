"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Car,
  MapPin,
  Lock,
  Clock,
  ChevronRight, Dumbbell, Users, ShieldCheck
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];



const menuItems = [
  {
    label: "Home",
    href: "/",
    type: "link",
  },
  {
    label: "Solutions",
    type: "tabs",
    tabs: [
      {
        value: "attendance-management",
        label: "Attendance Management",
        icon: Clock,
        links: [
          {
            label: "Office & Field Attendance",
            href: "/attendance-management/office-field-attendance",
          },
          {
            label: "Mobile App with Geo-fencing",
            href: "/attendance-management/mobile-app-geo-fencing",
          },
          {
            label: "Shift & Payroll Integration",
            href: "/attendance-management/shift-payroll-integration",
          },
        ],
      },
      {
        value: "visitor-parking-management",
        label: "Visitor & Parking Management",
        icon: Car,
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
    label: "Products",
    type: "grid",
    items: components, // your existing products component array
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
  {
    label: "Blogs",
    href: "/blog",
    type: "link",
  },
  {
    label: "Contact",
    href: "/contact",
    type: "link",
  },
];


console.log(menuItems);
export function HeaderNavigationMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          if (item.type === "link") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className="hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1"
                >
                  <Link href={item.href}>
                    {Icon && <Icon size={18} />}
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          if (item.type === "tabs") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
                  {Icon && <Icon size={18} />}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className={"border border-primary"}>
                  <Tabs
                    defaultValue={item.tabs[0]?.value}
                    // orientation="horizontical"
                    className="flex flex-row w-full min-h-[200px] overflow-hidden space-x-4"
                  >
                    <TabsList className="flex flex-col space-y-2 border-r pr-2 shadow-none justify-start bg-transparent border-none border">
                      {item.tabs.map((tab, index) => {
                        const TabIcon = tab.icon;
                        return (
                          <TabsTrigger
                            key={index}
                            value={tab.value}
                            className="gap-2 text-left mr-auto !shadow-none bg-secondary/10 data-[state=active]:bg-primary/80 data-[state=active]:text-white min-w-[230px] justify-start cursor-pointer border border-l-2 py-3 "
                          >
                            {TabIcon && (
                              <TabIcon size={16} className="text-inherit" />
                            )}
                            {tab.label}
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                     {/* <hr className="h-[1000px] block w-[1px] bg-primary !mr-0"/> */}

                    {item.tabs.map((tab, index) => (
                      <div className="flex !m-0">
                       
                        <TabsContent
                          key={index}
                          value={tab.value}
                          className="w-full"
                        >
                          <ul className="space-y-4 min-w-[190px]">
                            {tab.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="flex items-center text-sm hover:text-primary group"
                                >
                                  <span className="relative flex items-center">
                                    {/* Hidden by default, visible and moves right on hover */}
                                    <ChevronRight
                                      size={16}
                                      className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-primary"
                                    />
                                    {/* Add left margin so text doesn't overlap hidden icon */}
                                    <span className="pl-5">{link.label}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </div>
                    ))}
                  </Tabs>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (item.type === "grid") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
                  {Icon && <Icon size={18} />}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (item.type === "custom") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
                  {Icon && <Icon size={18} />}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li className="space-y-2">
                      {item.items.map((link, i) => (
                        <NavigationMenuLink key={i} asChild>
                          <Link
                            href={link.href}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            {link.icon && <link.icon size={16} />}
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return null;
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
