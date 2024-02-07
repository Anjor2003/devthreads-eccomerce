import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import NewProducts from "@/components/NewProduct";
import TopProducts from "@/components/TopProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <TopProducts />
      <Banner/>
      <NewProducts />
    </>
  );
};

export default Home;
