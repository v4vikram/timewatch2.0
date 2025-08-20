export const dynamic = "force-dynamic";

import ProductDetails from "@/components/ProductDetails";
import axiosInstance from "@/lib/axiosInstance";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;

  console.log("Fetching product details for slug:", slug);

  let product = null;

  try {
    const res = await axiosInstance.get(`/product/slug/${slug}`, {
     next: { revalidate: 1 }, // refresh every 10s
    });
    product = res?.data?.product;
    console.log("singl e product", product);
  } catch (err) {
    console.error("Product fetch error:", err?.response?.status || err.message);
    return notFound(); // shows Next.js 404 page
  }

  if (!product) {
    return notFound(); // handle case where product is null or undefined
  }

  return <ProductDetails product={product} />;
}
