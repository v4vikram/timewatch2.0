"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProductFilter from "@/components/ProductFilter";
import { productCategories } from "@/data/products";
import FilterContent from "@/components/FilterContent";
import axiosInstance from "@/lib/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Funnel, X } from "lucide-react";

const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border. bg-white p-4 shadow-sm space-y-3"
        >
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default function CatLayout({ children }) {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [filterProd, setFilterProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [phoneFilter, setPhoneFilter] = useState(false);

  const sidebarRef = useRef(null);

  const { cat, subCat, slug } = useParams();
  // console.log("{ cat, subCat, slug }", { cat, subCat, slug });
  console.log("filterProd", filterProd);

  // ✅ Fetch products (all OR filtered by cat/subCat) — backend handles logic
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let url = "/product"; // default → all products
        if (cat && !slug) {
          url = `/product/${cat}`; // category/subcategory listing
        }
        if (cat && subCat && !slug) {
          url = `/product/${cat}/${subCat}`; // category/subcategory listing
        }

        const res = await axiosInstance.get(url);
        // console.log("res.data", )
        const prod = Array.isArray(res.data)
          ? res.data
          : res.data?.products || [];

        setFilterProd(prod.filter((p) => p.status === "published"));
      } catch (error) {
        if (error?.status === 404) {
          setFilterProd([]);
        }
        console.error("Error fetching products:", error.message);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    }

    // only fetch if not on detail page
    if (!slug) {
      fetchProducts();
    }
  }, [cat, subCat, slug]);

  // ✅ Close sidebar on category change
  useEffect(() => {
    setPhoneFilter(false);
  }, [cat, subCat]);

  // ✅ Handle outside click for sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setPhoneFilter(false);
      }
    }

    if (phoneFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phoneFilter]);

  // ✅ Search (still same API `/product/search`)
  useEffect(() => {
    async function searching() {
      try {
        setLoading(true);

        if (searchQuery.length > 0) {
          const searchRes = await axiosInstance.get(
            `/product/search?title=${searchQuery}`
          );
          setFilterProd(searchRes?.data?.products || []);
        } else {
          // fallback → all products
          const res = await axiosInstance.get(`/product`);
          const prod = res.data?.products || [];
          setFilterProd(prod.filter((p) => p.status === "published"));
        }
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setFilterProd([]);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    }

    searching();
  }, [searchQuery]);

  // ✅ If slug → render detail page
  if (slug) {
    return <div className="">{children}</div>;
  }

  return (
    <div className="pt-10 bg-gray-50/50">
      <div className="container">
        {/* Search bar */}
        <div className="flex justify-end gap-x-2 mb-3 relative">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:max-w-[260px] h-[38px] pr-10" // add padding for the clear button
          />

          {/* Clear button inside the input */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X/>
            </button>
          )}

          {/* Existing filter toggle button */}
          <div className="flex justify-end xl:hidden mb-4">
            <button
              onClick={() => setPhoneFilter(!phoneFilter)}
              className="p-2 rounded-sm border shadow-sm hover:bg-gray-100 active:scale-95 transition"
              aria-label="Toggle Filter"
            >
              <Funnel className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </div>

        <div className="xl:flex gap-8">
          {/* Left Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-[68px] left-0 z-20 lg:block transform transition-transform xl:sticky xl:top-[6.2rem] xl:translate-x-0 duration-700 ease-in-out h-[calc(100vh-68px)] bg-white
            ${phoneFilter ? "translate-x-0" : "-translate-x-[101%]"}`}
          >
            <ProductFilter
              productCategories={productCategories}
              cat={cat}
              subCat={subCat}
              setCat={setCategory}
              setSubCat={setSubCategory}
            />
          </div>

          <div className="flex-1 space-y-4">
            {loading ? (
              <ProductSkeleton />
            ) : filterProd.length > 0 ? (
              <div className="transition-opacity duration-500 opacity-100">
                <FilterContent filterProducts={filterProd} />
              </div>
            ) : (
               <ProductSkeleton />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
