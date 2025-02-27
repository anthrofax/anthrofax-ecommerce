import { wixClientServer } from "@/lib/wix-client-server";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

async function CategoryList() {
  const wixClient = wixClientServer();
  const { items } = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {items.map((cat) => (
          <Link
            href={`/list?cat=${cat.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={cat._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={`${cat.media?.mainMedia?.image?.url || "/cat.png"}`}
                alt={cat.media?.mainMedia?.image?.altText || ""}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {cat.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
