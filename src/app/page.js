import BannerSwiper from "@/components/BannerSwiper";
import ProductCard from "@/components/ProductCard";
import axiosInstance from "@/lib/axiosInstance";

export const dynamic = 'auto'; // optional; ISR will still work

export const metadata = {
  title: "TimeWatch | Home",
  description: "Explore the latest featured security products.",
};

// ISR: Regenerate every 1 hour (3600 seconds)
async function getFeaturedProducts() {
  const res = await axiosInstance.get(`/product`, {
    next: { revalidate: 3600 }, // ⏳ Revalidates every 1 hour
  });

  // console.log(res)
  // return
  if (!res.ok) {
    console.log("Network error")
  };

  return res?.data?.products
}

export default async function HomePage() {
  const products = await getFeaturedProducts();
  console.log(products)

  return (
    <main>
      <section>
        <BannerSwiper />
      </section>
      {/* features products */}
      <section>
        <div className="container mx-auto mt-20">
          <h1 className="h2">Features Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
            {console.log(process.env.NEXT_PUBLIC_BASE_URL)}
            {
              products?.map((item) => (
                <ProductCard
                  key={item?._id}
                  name={item?.productName || 'product title'}
                  price="129.99"
                  originalPrice="199.99"
                  image={`${process.env.NEXT_PUBLIC_BASE_URL}/${item?.productImage}`}
                  rating={4.5}
                  reviewCount={128}
                  badge="Best Seller"
                  description={products?.description || 
                    'description'
                  }
                />
              ))
            }
          </div>

        </div>
      </section>
    </main>
  );
}
