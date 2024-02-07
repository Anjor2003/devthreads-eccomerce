"use client"

import { ReactNode } from "react"
import { FaLess } from "react-icons/fa6";
import { CartProvider as Cart } from "use-shopping-cart"  

export default function CartContext({
  children
}:{children: ReactNode}){
  return (
    <Cart
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl="/"
      cancelUrl="/"
      currency="EUR"
      shouldPersist={true}
      language="es-ES"
    >
      {children}
    </Cart>
  );
}