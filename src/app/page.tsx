import CategoriList from "@/components/category-list";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { useWixClientContext } from "@/contexts/wix-context";
import { wixClientServer } from "@/lib/wix-client-server";

const HomePage = async () => {
  const wixClient = wixClientServer();

  const { items } = await wixClient.products.queryProducts().find();
  console.log(items);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Unggulan</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Kategori
        </h1>
        <CategoriList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Terbaru</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
