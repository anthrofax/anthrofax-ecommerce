"use client";

import CategoriList from "@/components/category-list";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Unggulan</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Kategori</h1>
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
