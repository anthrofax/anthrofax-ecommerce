"use client";

import { useWixClientContext } from "@/contexts/wix-context";
import { useState } from "react";

interface PropsType {
  productId: string;
  variantId: string;
  stockQuantity: number;
}

function Add({ stockQuantity, productId, variantId }: PropsType) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClientContext();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className={`text-xl ${
                quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className={`text-xl ${
                quantity === stockQuantity
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stockQuantity} items</span>{" "}
            left!
            <br /> {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-accent text-accent py-2 hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
