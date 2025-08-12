"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import ProductFilter from "@/components/ProductFilter";
import { products } from "@/data/products";
import FilterContent from "@/components/FilterContent";
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
      "Parking Software",
    ],
  },
  {
    categoryName: "UL LISTED EM LOCKS",
    subCategories: ["UL Listed EM Locks"],
  },
  {
    categoryName: "ACCESSORIES",
    subCategories: ["Accessories"],
  },
];

export default function CatLayout({ children }) {
  const [cat, setCat] = useState("time-attendance-and-access-control");
  const [subCat, setSubCat] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const params = useParams();
  const paramKeys = Object.keys(params);
  const slug = paramKeys.find((p) => p === "slug");

  useEffect(() => {
    if (params?.cat) setCat(params.cat);
    if (params?.subCat) setSubCat(params.subCat);
  }, [params]);

  // ✅ Reset search when subcategory changes
  useEffect(() => {
    setSearchQuery("");
  }, [subCat]);

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
      console.log("allProducts", allProducts);
      setFilterProducts(allProducts);
    }
  }, [cat, subCat]);

  const filteredResults = useMemo(() => {

    if (!searchQuery.trim()) return filterProducts;

    return filterProducts.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, filterProducts]);
  console.log("filteredResults", filteredResults);

  if (slug) {
    return <div className="">{children}</div>;
  } else {
    return (
      <div className="container mt-10">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div>
            <ProductFilter
              productCategories={productCategories}
              cat={cat}
              subCat={subCat}
              setCat={setCat}
              setSubCat={setSubCat}
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-4">
            {/* Search bar */}
            <div className="flex justify-end">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-[260px]"
              />
            </div>

            {/* Products */}
            <FilterContent filterProducts={filteredResults} />
          </div>
        </div>
      </div>
    );
  }
}
