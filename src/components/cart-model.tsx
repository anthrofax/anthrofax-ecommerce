"use client";

import Image from "next/image";

function CartModel() {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Daftar Produk</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEMS */}
            <div className="flex gap-4 ">
              <Image
                src="https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={72}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nama Produk </h3>
                    <div className="p-1 bg-gray-50 rounded-sm">Rp.49</div>
                  </div>

                  {/* DESC */}
                  <div className="text-sm text-gray-500">Tersedia</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Hapus</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <Image
                src="https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={72}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nama Produk </h3>
                    <div className="p-1 bg-gray-50 rounded-sm">Rp.49</div>
                  </div>

                  {/* DESC */}
                  <div className="text-sm text-gray-500">Tersedia</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Hapus</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Sub Total</span>
              <span>RP.150.000</span>
            </div>

            <p className="text-gray-500 text-sm mt-2 mb-4">
              Biaya pengiriman & pajak akan otomatis dihitung saat pembayaran
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md  py-3 px-4 ring-1 ring-gray-300">
                Lihat Keranjang
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Bayar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModel;
