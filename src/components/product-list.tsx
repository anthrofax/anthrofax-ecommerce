import { wixClientServer } from "@/lib/wix-client-server";
import { Rupiah } from "@/utils/rupiah-formatter";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { products } from "@wix/stores";

interface PropsType {
  limit?: number;
  categoryId: string;
  searchParams?: any;
}

const PRODUCT_PER_PAGE = 8;

async function ProductList({
  categoryId,
  limit = 20,
  searchParams,
}: PropsType) {
  const wixClient = wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  // .find();

  let res: products.ProductsQueryResult;

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      res = await productQuery.ascending(sortBy).find();
    }
    if (sortType === "desc") {
      res = await productQuery.descending(sortBy).find();
    }
  } else {
    res = await productQuery.find();
  }

  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res!.items.map((product) => (
        <Link
          key={product._id}
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.media?.mainMedia?.image?.altText || ""}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500 ease-linear"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1].image?.url || "/product.png"}
                alt={product.media?.items[1].image?.altText || ""}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              {Rupiah.format(product.priceData?.price || 0)}
            </span>
          </div>

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-accent text-accent py-2 px-4 text-xs hover:bg-accent hover:text-white w-max">
            Tambahkan ke keranjang
          </button>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
