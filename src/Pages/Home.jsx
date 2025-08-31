import Banner from "@/components/Banner";
import BestProduct from "@/components/BestProduct";
import CategorySection from "@/components/CategorySection";
import CommonFrom from "@/components/Custom/CommonFrom";
import LoyaltyOffer from "@/components/LoyaltyOffer";
import PairEnjoySection from "@/components/PairEnjoySection";
import SipWorthSection from "@/components/SipWorthSection";
import React from "react";

const SectionWrapper = ({ children }) => (
  <div className="mx-40 space-y-32">{children}</div>
);

const Home = () => {
  return (
    <div className="space-y-32">
        <Banner />
      <SectionWrapper>
        <BestProduct />
      </SectionWrapper>

      <CategorySection />

      <SectionWrapper>
        <PairEnjoySection />
        <SipWorthSection />
      </SectionWrapper>
      <LoyaltyOffer />
    </div>
  );
};

export default Home;
