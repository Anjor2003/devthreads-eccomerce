import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Nabvar from "@/components/Nabvar";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./(auth)/actions/getCurrentUser";
import ToasterContext from "@/context/HotToastContext";
import CartContext from "@/context/CartContext";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dev-Threads",
  description: "E-Commerce Wsebsite",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthContext>
          <CartContext>
            <ToasterContext />
            <Nabvar user={user!} />
            {children}
            <Footer />
          </CartContext>
        </AuthContext>
      </body>
    </html>
  );
}
