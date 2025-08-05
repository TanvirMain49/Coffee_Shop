import React from "react";
import { CardSwipe } from "./ui/card-swipe";

const RenderText = ({ title, subTitle }) => {
  return (
    <div className="border-b-2 border-beige pb-2 mb-6">
      <h1 className="text-beige text-6xl mb-[3px] uppercase">{title}</h1>
      <h5 className="text-beige text-xl uppercase">{subTitle}</h5>
    </div>
  );
};

const CategorySection = () => {
  const images = [
    { src: "/Cappuccino.jpeg", alt: "Image 1" },
    { src: "/public/burger.jpeg", alt: "Image 2" },
    { src: "/public/Tea.jpg", alt: "Image 3" },
    { src: "/public/beans.avif", alt: "Image 4" },
  ];

  return (
    <div className="relative bg-secondary py-24 flex items-center justify-center gap-10">
      {/* text content */}
      <div className="max-w-2xl w-full">
        <RenderText
          title="Coffee"
          subTitle="Take a good coffee and have a good day"
        />
        <RenderText
          title="Tea Collection"
          subTitle="Discover our premium selection of aromatic teas"
        />
        <RenderText
          title="Food Pairings"
          subTitle="Delicious bites to complement your favorite brew"
        />
        <RenderText
          title="Roasted Beans"
          subTitle="Freshly roasted coffee beans for the perfect cup"
        />
      </div>

      {/* card swipe images */}
      <div>
        <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
      </div>

      {/* Donut outline image */}
      <div className="absolute top-[2%] left-[3%]">
        <img src="/Donut.png" alt="Donut" className="w-40 h-40" />
      </div>
      
      {/* Coffee outline image */}
      <div className="absolute bottom-[8%] right-[46%]">
        <img
          src="/Coffee-outline.png"
          alt="Coffee Outline"
          className="w-60 h-60"
        />
      </div>
    </div>
  );
};

export default CategorySection;
