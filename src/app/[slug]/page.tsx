import Add from "@/components/add";
import CustomizeProducts from "@/components/customize-product";
import ProductImages from "@/components/product-images";
import { wixClientServer } from "@/lib/wix-client-server";
import { notFound } from "next/navigation";

async function SinglePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const wixClient = wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  const product = items[0];

  if (!product) return notFound();

  console.log(product);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages imageItems={product.media?.items} />
      </div>

      {/* Texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          {product.priceData?.discountedPrice === product.priceData?.price ? (
            <h2 className="font-medium text-2xl">
              {product.priceData?.formatted?.price}
            </h2>
          ) : (
            <>
              <h3 className="text-xl text-gray-500 line-through">
                {product.priceData?.formatted?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                {product.priceData?.formatted?.discountedPrice}
              </h2>
            </>
          )}
        </div>
        <div className="h-[2px] bg-gray-100" />
        {product.productOptions &&
        product.productOptions.length > 0 &&
        product.variants &&
        product.variants.length > 0 ? (
          <CustomizeProducts
            productOptions={product.productOptions}
            variants={product.variants}
            productId={product._id!}
          />
        ) : (
          <Add
            stockQuantity={product.stock?.quantity || 0}
            productId={product._id!}
            variantId={"00000000-000000-000000-000000000000"}
          />
        )}
        <div className="h-[2px] bg-gray-100" />

        {product.additionalInfoSections &&
        product.additionalInfoSections.length !== 0
          ? product.additionalInfoSections.map((info, i) => (
              <div className="text-sm" key={i}>
                <h4 className="font-medium mb-4">{info.title}</h4>
                <p>{info.description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default SinglePage;
