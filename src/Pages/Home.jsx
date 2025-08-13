import Banner from "@/components/Banner";
import BestProduct from "@/components/BestProduct";
import CategorySection from "@/components/CategorySection";
import PairEnjoySection from "@/components/PairEnjoySection";
import SipWorthSection from "@/components/SipWorthSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestProduct></BestProduct>
      <CategorySection />
      <PairEnjoySection />
      <SipWorthSection />
    </div>
  );
};

export default Home;
