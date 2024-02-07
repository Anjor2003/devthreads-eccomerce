import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { useWishlistStore } from "@/store/useWhisLitStore";

const WishListIcon = () => {
  const wishlistStore = useWishlistStore();

  return (
    <Link
      href={"/wishlist"}
      className={`${wishlistStore.wishList.length > 0 ? "text-red-700" : null}`}
    >
      <AiOutlineHeart />
    </Link>
  );
};

export default WishListIcon;
