"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

const ProductFilter = ({
  productCategories = [],
  filterProducts = [],
  cat,
  subCat,
  setCat,
  setSubCat,
  setIsSubCatClick,
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl border border-primary/20 p-4 shadow-sm space-y-2">
      <Accordion type="multiple" className="w-full">
        {productCategories.map((category, idx) => (
          <AccordionItem
            value={`item-${idx}`}
            key={idx}
            className={"border-b border-primary/20"}
          >
            <AccordionTrigger
              className="text-sm font-semibold capitalize hover:!no-underline hover:!outline-none pb-2 cursor-pointer"
              onClick={() => {
                setCat(seoFriendlySlug(category?.categoryName));
              }}
            >
              {category.categoryName}
              {/* <Link
                href={`/products/${seoFriendlySlug(category?.categoryName)}`}
                onClick={() => {
                  setCat(seoFriendlySlug(category?.categoryName))
                }}
                className=""
              >
                {category.categoryName}
              </Link> */}
            </AccordionTrigger>
            <AccordionContent className="pl-4">
              <ul className="space-y-1">
                {category.subCategories.map((sub, subIdx) => (
                  <Link
                    key={subIdx}
                    href={`/products/${seoFriendlySlug(
                      category?.categoryName
                    )}/${seoFriendlySlug(sub)}`}
                    className="block text-[14px] font-medium hover:text-primary"
                    onClick={() => setSubCat(seoFriendlySlug(sub))}
                  >
                    {sub}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductFilter;
