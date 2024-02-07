"use client";
import { useWishlistStore } from "@/store/useWhisLitStore";
import Image from "next/image";
import AddToCart from "@/app/(shoppingcart)/components/ui/AddToCart";
import { GiEmptyHourglass } from "react-icons/gi";

const page = () => {
  const wishlistStore = useWishlistStore();

  return (
    <div className="py-20">
      <div className="main-container">
        {wishlistStore.wishList.length > 0 ? (
          <>
            <span className="font-bold text-base">
              You have {wishlistStore.wishList.length} items in your wishlist
            </span>
            <div className="flex flex-wrap items-center gap-10 items-center justify-center px-5 sm:px-0">
              {wishlistStore.wishList.map((product) => (
                <div key={product.id} className="w-full sm:w-[200px] justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                  <h1 className="font-bold text-center">{product.name}</h1>
                  <div className="flex gap-3 items-center justify-center">
                    <AddToCart
                      name={product.name}
                      image={product.image}
                      price={product.unit_amount}
                      id={product.price_id!}
                      currency="EUR"
                    />
                    <button
                      className="px-3 py-2 mt-4 sm:mt-2 bg-red-900/80 text-white rounded-md hover:scale-105"
                      onClick={() =>
                        wishlistStore.removeFromWishlist({ ...product })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-row justify-center items-center">
            <GiEmptyHourglass size={200} className="text-red-700/80" />
            <h1 className="font-bold text-2xl">Your wishlist is empty !</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
