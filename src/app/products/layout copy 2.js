"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import ProductFilter from "@/components/ProductFilter";
import { products } from "@/data/products";
import FilterContent from "@/components/FilterContent";
import seoFriendlySlug from "@/lib/seoFriendlySlug";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";

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
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [filterProd, setFilterProd] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const params = useParams();
  const paramKeys = Object.keys(params);
  const slug = paramKeys.find((p) => p === "slug");


  // reset filter
  const handleResetFilter = () => {
    setSearchQuery("");
    setCat("time-attendance-and-access-control");
  };

  const getAllProducts = () => {
    return products.flatMap((pro) =>
      pro.subCategories?.flatMap((subCat) => subCat.products || [])
    );
  };

  // when page load then show all products
  // console.log(cat, subCat);
  useEffect(() => {
    // setCat(null)
    // setSubCat(null);
    if (!cat && !subCat) {
      console.log("Loading all products");

      setFilterProd(getAllProducts());

      // async function loadProduct() {
      //   try {
      //     const res = await axiosInstance.get(`/product`);

      //     console.log("(res.data?.products", res.data?.products)
      //     setFilterProd(res.data?.products || []);
      //   } catch (error) {
      //     if (error.code === "ECONNREFUSED") {
      //       console.error("Backend not running or unreachable");
      //     } else {
      //       console.error("Error fetching products:", error.message);
      //     }
      //     // return empty array or null so UI doesn't crash
      //     return [];
      //   }
      // }
      // loadProduct()


    }
  }, [params]);

  // when category or subcategory changes then filter products
  useEffect(() => {
    const filterCat = filterProd.find(
      (pro) => seoFriendlySlug(pro.categoryName) === cat
    );

    const filterProducts = filterCat?.subCategories
      ?.filter((subcat) => {
        return seoFriendlySlug(subcat.subCategoryName) === subCat;
      })
      .flatMap((subcat) => subcat.products || []);

    if (subCat) {
      setFilterProd(filterProducts);
    }
  }, [subCat]);

  // console.log("filterProducts", filterProducts)


  if (slug) {
    return <div className="">{children}</div>;
  } else {
    return (
      <div className="pt-10 bg-gray-50/50">
        <div className="container">
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
              {/* <div className="flex justify-end">
              <Button onClick={handleResetFilter}>Reset</Button>
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-[260px]"
              />
            </div> */}

              {/* Products */}
              <FilterContent filterProducts={filterProd} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
