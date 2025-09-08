"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ChevronDown, ChevronRight } from "lucide-react";
import { solutions } from "@/data/menuItems";

export default function SolutionsDropdown() {
  return (
  <NavigationMenuItem>
  <NavigationMenuTrigger className="flex items-center gap-1 hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary">
  <Link href={'/solutions'}>Solutions</Link>
    {/* <ChevronDown className="w-4 h-4" /> */}
  </NavigationMenuTrigger>

  <NavigationMenuContent className={'p-0 !border-0 -translate-x-[50%]'}>
    {/* Nested menu inside panel */}
    <div className="border border-gray-100 bg-white !shadow-none rounded-md p-4 flex gap-8 w-[1200px]">
      {solutions.map((category, i) => (
        <div key={i} className="mb-4">
          <h4 className="font-bold text-[16px] mb-2">{category.category}</h4>
          {category.subCategories.map((sub, j) => (
            <div key={j} className="mb-2">
              <Link href={`/solutions/${category?.categoryUrl}/${sub?.subCategoryUrl}`} className="text-[16px]">
                {sub.subCategory}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  </NavigationMenuContent>
</NavigationMenuItem>

  );
}
