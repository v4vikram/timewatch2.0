"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProductFilter from "@/components/ProductFilter";
import { productCategories } from "@/data/products";
import FilterContent from "@/components/FilterContent";
import axiosInstance from "@/lib/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Funnel } from "lucide-react";

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
  const params = useParams();
  // const slug = Object.keys(params).find((p) => p === "slug");

  // fetch category/subcategory products (listing)
  useEffect(() => {
    async function fetchProductByCat() {
      setLoading(true);
      try {
        const res = await axiosInstance(`/product/${cat}/${subCat}`);
        setFilterProd(res?.data || []);
      } catch (error) {
        if (error?.status === 404) {
          setFilterProd([]);
        }
        console.error("error", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    // ✅ only fetch cat/subCat if we are NOT on detail page
    if (cat && subCat && !slug) {
      fetchProductByCat();
    }
  }, [cat, subCat, slug]);

  // fetch all products initially (home or detail page)
  useEffect(() => {
    async function initialFetchAllProduct() {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/product`);
        setFilterProd(res.data?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setFilterProd([]);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    // ✅ if we are on detail page (slug exists), or on home page
    if (slug || (!cat && !subCat)) {
      initialFetchAllProduct();
    }
  }, [slug, cat, subCat]);

  useEffect(() => {
    setPhoneFilter(false);
  }, [cat, subCat]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setPhoneFilter(false); // close sidebar
      }
    }

    if (phoneFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phoneFilter, setPhoneFilter]);

  if (slug) {
    return <div className="">{children}</div>;
  }

  return (
    <div className="pt-10 bg-gray-50/50">
      <div className="container">
        {/* Search bar */}
        {/* <div className="flex justify-end">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-[260px]"
          />
        </div> */}
        <div className="xl:flex gap-8">
          {/* Left Sidebar */}
          <div
          ref={sidebarRef}
            className={`fixed top-0 left-0 z-20 lg:block transform transition-transform xl:sticky xl:top-[6.2rem] xl:translate-x-0 duration-700 ease-in-out h-screen bg-white
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
          <div className="flex justify-end xl:hidden mb-4">
            <button
              onClick={() => setPhoneFilter(!phoneFilter)}
              className="p-2 rounded-sm border shadow-sm hover:bg-gray-100 active:scale-95 transition"
              aria-label="Toggle Filter"
            >
              <Funnel className="w-5 h-5 text-secondary" />
            </button>
          </div>

          <div className="flex-1 space-y-4">
            {loading ? (
              <ProductSkeleton />
            ) : filterProd.length > 0 ? (
              <div className="transition-opacity duration-500 opacity-100">
                <FilterContent filterProducts={filterProd} />
              </div>
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
