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
  setIsSubCatClick
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl border p-4 shadow-sm space-y-2">
      <Accordion type="multiple" className="w-full">
        {productCategories.map((category, idx) => (
          <AccordionItem value={`item-${idx}`} key={idx}>
            <AccordionTrigger className="text-sm font-semibold capitalize">
              <Link
                href={`/products/${seoFriendlySlug(category?.categoryName)}`}
                onClick={() => {
                  setCat(seoFriendlySlug(category?.categoryName))
                }}
              >
                {category.categoryName}
              </Link>
            </AccordionTrigger>
            <AccordionContent className="pl-4">
              <ul className="space-y-1">
                {category.subCategories.map((sub, subIdx) => (
                  <Link
                    key={subIdx}
                    href={`/products/${seoFriendlySlug(
                      category?.categoryName
                    )}/${seoFriendlySlug(sub)}`}
                    className="block"
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
