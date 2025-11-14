// CatLayout.jsx (This is a Server Component by default in Next.js 13+)

import { productCategories } from "@/data/products"; // Can still import data on the server
import ProductFilter from "@/components/ProductFilter"; // Can be a Server Component
import ProductListClient from "./ProductListClient"; // The new Client Component
import { Input } from "@/components/ui/input"; // Assuming this is reusable/static
import { Funnel } from "lucide-react";

// Server-side function to generate metadata (Example)
// export async function generateMetadata({ params }) {
//   const { cat, subCat } = params;
//   const title = subCat ? subCat.replace(/-/g, ' ') : cat ? cat.replace(/-/g, ' ') : 'All Products';
//   return {
//     title: `${title} | My Shop`,
//     description: `Browse all products in the ${title} category.`,
//   };
// }

export default function CatLayout({ children, params }) {
  // Extract route parameters directly from the function props in the Server Component
  const { cat, subCat, slug } = params;

  // If slug is present, render the detail page and exit early.
  // The children here will be the product detail page, which may be a Client Component.
  if (slug) {
    return <div className="">{children}</div>;
  }

  // Otherwise, render the category/listing view
  return (
    <div className="pt-10 bg-gray-50/50">
      <div className="container">
        {/*
          The search bar and filter button are now handled within the client component below,
          as they rely on useState/onChange handlers. We pass down the params needed
          for the initial data fetch in the client component.
        */}

        <div className="xl:flex gap-8">
          {/* Left Sidebar (Can be a Server Component or Client Component depending on its internal logic) */}
          {/* If ProductFilter doesn't use client hooks, it can stay a Server Component,
              but since it interacts with the dynamic state (cat/subCat links), we'll let
              the client component manage its visibility/ref.
          */}

          <ProductListClient cat={cat} subCat={subCat} children={children} />
        </div>
      </div>
    </div>
  );
}