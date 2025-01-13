import CategoryList from "@/components/category-list";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { useWixClientContext } from "@/contexts/wix-context";
import { wixClientServer } from "@/lib/wix-client-server";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Unggulan</h1>
        <Suspense fallback="Loading...">
          <ProductList
            categoryId={process.env.FEATURE_PRODUCT_CATEGORY!}
            limit={5}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Kategori
        </h1>
        <Suspense fallback="Loading...">
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Terbaru</h1>
        <ProductList categoryId={process.env.FEATURE_PRODUCT_CATEGORY!} />
      </div>
    </div>
  );
};

export default HomePage;
