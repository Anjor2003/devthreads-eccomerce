"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import toast from "react-hot-toast";

const AddToCart = ({
  currency,
  name,
  image,
  price,
  id,
  size,
  sizeSelect,
  onClick,
}: Product & {
  onClick?: () => void;
}) => {
  const { addItem } = useShoppingCart();
  const productId = `${id}-${size}`;
  const product = {
    currency: currency,
    name: name,
    image: image,
    price: price,
    id: productId,
    size: size,
  };
  return (
    <button
      className="px-3 py-2 mt-4 sm:mt-2 bg-gray-900/80 text-white rounded-md hover:scale-105"
      onClick={() => {
        if (!sizeSelect && onClick) {
          onClick();
        } else {
          addItem(product as any);
          toast.success(`${name} has been added to cart`);
        }
      }}
    >
      Add To Cart
    </button>
  );
};
export default AddToCart;
