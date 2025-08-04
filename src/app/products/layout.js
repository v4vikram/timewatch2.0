"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProductFilter from "@/components/ProductFilter";
import { products } from "@/data/products";
import FilterContent from "@/components/FilterContent";
import { use, useEffect, useMemo, useState } from "react";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

const productCategories = [
  {
    categoryName: "Time Attendance and Access Control",
    subCategories: [
      "Iris Series",
      "Attendance Series",
      "Network/Elevator Controller",
      "Card/FingerPrint/Face Series",
      "AI Based Speed Face Series",
      "Face & Palm Access control devices",
    ],
  },
  {
    categoryName: "Entrance Control",
    subCategories: [
      "Turnstile/Tripod",
      "Swing Gate/Swing Barrier",
      "Full Height Turnstile",
      "Flap Barrier",
      "P-Type/P-Gate",
    ],
  },
  {
    categoryName: "Parking and Traffic Control",
    subCategories: [
      "Boom Barrier",
      "UVSS System",
      "Bollard",
      "Spike Barrier",
      "ANPR Camera",
      "Long Range Reader",
    ],
  },
  {
    categoryName: "Inspection Control",
    subCategories: [
      "Door Frame Metal Detector",
      "X-Ray Baggage Scanner",
      "Hand Held Metal Detector",
      "Narcotics & Chemical",
      "Portable Non-Linear Junction Detector",
    ],
  },
  {
    categoryName: "Software and Applications",
    subCategories: [
      "Desktop Based Software",
      "Web Based Software",
      "Payroll Software",
      "Visitor Software",
      "Gym Software",
      "Canteen Software",
      "Parking Software"
    ],
  },
  {
    categoryName: "UL LISTED EM LOCKS",
    subCategories: [
      "UL Listed EM Locks"
    ],
  },
  {
    categoryName: "ACCESSORIES",
    subCategories: [
      "Accessories"
    ],
  },
];


export default function catLayout({ children }) {
  const [cat, setCat] = useState("time-attendance-and-access-control");
  const [subCat, setSubCat] = useState("");
  const [isSubCatClick, setIsSubCatClick] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);


  const params = useParams();
  const paramKeys = Object.keys(params);
  const slug = paramKeys.find((p) => p === "slug");


  useEffect(() => {
    if (params?.cat) setCat(params.cat);
    if (params?.subCat) setSubCat(params.subCat);
  }, [params]);




  // const initialMatchedCategory = products?.find((item) => seoFriendlySlug(item.categoryName) === cat).subCategories?.flatMap((subCat) => subCat.products)

  // console.log("initialMatchedCategory", initialMatchedCategory)
  // let matchedSub = []
  // if (subCat) {
  //   matchedSub = products?.find((item) => seoFriendlySlug(item.categoryName) === cat).subCategories?.find((subcat) => seoFriendlySlug(subcat?.subCategoryName) === subCat)
  // }
useEffect(() => {
  const category = products.find(
    (item) => seoFriendlySlug(item.categoryName) === cat
  );

  if (!category) return;

  if (subCat) {
    const subCategory = category.subCategories.find(
      (sub) => seoFriendlySlug(sub.subCategoryName) === subCat
    );

    setFilterProducts(subCategory?.products || []);
  } else {
    const allProducts = category.subCategories.flatMap(
      (sub) => sub.products || []
    );
    setFilterProducts(allProducts);
  }
}, [cat, subCat]);



  if (slug) {
    return (
      <div className="">{children}</div>
    );
  }
  else {
    return (
      <div className="container">
        <div className="flex gap-4">
          <div className="">
            <ProductFilter productCategories={productCategories} cat={cat} subCat={subCat} setCat={setCat} setSubCat={setSubCat} setIsSubCatClick={setIsSubCatClick} />
          </div>
          <div className="flex-1">
            {/* {children} */}
            <FilterContent filterProducts={filterProducts} />
          </div>
        </div>
      </div>
    )
  }



}
