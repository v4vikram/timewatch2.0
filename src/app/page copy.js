import BannerSwiper from "@/components/BannerSwiper";
import Counter from "@/components/Counter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";


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


  return (
    <main>
      <section>
        <BannerSwiper />
      </section>
      {/* features products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <span className="h-0.5 w-10 bg-primary"></span>
              <span className="text-primary font-semibold">Best Products</span>
              <span className="h-0.5 w-10 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((item) => (
              <ProductCard
                key={item?._id}
                name={item?.productName || 'Product Title'}
                price="129.99"
                originalPrice="199.99"
                image={`${process.env.NEXT_PUBLIC_BASE_URL}/${item?.productImage}`}
                rating={4.5}
                reviewCount={128}
                badge="Best Seller"
                description={item?.description || 'Product description goes here.'}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container  mt-6 lg:mt-20">
          <div className="grid lg:grid-cols-2">
            <div>
              <h2 className="h2 block lg:hidden">Unlock the Best in Security <span className="text-primary.">– Get Our Catalogue Now</span></h2>
              <div className="w-full lg:w-[600px] h-[200px] lg:h-[400px] relative mx-auto">
                <Image
                  src="/images/catalogue.webp"
                  alt="timewatch catalogue"
                  className="mx-auto mb-4"
                  fill
                  sizes="300"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h2 className="h2 hidden lg:block">Unlock the Best in Security <span className="text-primary.">– Get Our Catalogue Now</span></h2>
                <Counter />
                <Button className={'mt-5'}>Get the Catalogue</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div>
              <div className="text-center">
                <h2 className="font-bold text-[25px] text-center mb-5 text-gray-900">
                  Unlock the Best in Security – Get Our Catalogue Now
                </h2>
                <div className="w-full lg:w-[600px] h-[200px] lg:h-[400px] relative mx-auto">
                  <Image
                    src="/images/catalogue.webp"
                    alt="timewatch catalogue"
                    className="mx-auto mb-4"
                    fill
                    sizes="300"
                  />
                </div>

                <button className="tomato-btn !py-3">Get the Catalogue</button>
                <Counter />
              </div>
            </div>
            <div className="lg:pl-20">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section> */}


    </main>
  );
}
