import React from "react";
import MaskedDiv from "./ui/masked-div";
import bannerPic from "../../public/bannerpic.png";

const images = ["public/1.png", "public/2.png", "public/3.png", "public/4.png"];



const ImageCard = ({ src, alt = "" }) => (
  <div className="rounded-2xl">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300"
    />
  </div>
);

const Banner = () => {
  return (
    <section className="relative bg-[#e6d8c6] px-64">
      {/* Text Section */}
      <div className="flex flex-col items-center gap-2 mb-8 pt-20">
        <p>REDEFINING RITUALS, ONE SIP AT A TIME</p>
        <h1 className="text-[119px] text-secondary">ELEVATE YOUR EVERYDAY BREW</h1>
      </div>

      {/* Banner Image */}
      <div className="rounded-2xl">

        <img className="w-full rounded-lg h-[600px]" src={bannerPic} alt="Masked content" />

      </div>

      {/* Floating Image Grid */}
      <div className="absolute inset-x-64 -bottom-20 grid grid-cols-2 md:grid-cols-4 gap-42 bg-white p-6 rounded-2xl">
        {images.map((src, index) => (
          <ImageCard key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>

      {/* Spacer for floating grid overlap */}
      <div className="h-52" />
    </section>
  );
};

export default Banner;
