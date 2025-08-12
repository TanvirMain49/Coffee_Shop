import Banner from "@/components/Banner";
import BestProduct from "@/components/BestProduct";
import CategorySection from "@/components/CategorySection";
import PairEnjoySection from "@/components/PairEnjoySection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestProduct></BestProduct>
      <CategorySection />
      <PairEnjoySection />
    </div>
  );
};

export default Home;
