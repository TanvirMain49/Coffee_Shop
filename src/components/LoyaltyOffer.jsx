import React from "react";
import { Button } from "./ui/button";
const LoyaltyOffer = () => {
  return (
    <section className="bg-tan py-16 px-6 flex flex-col items-center text-center relative overflow-hidden">
      {/* Cupcake */}
      {/* <img
        src={cupcake}
        alt="Cupcake"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-20 h-20 object-contain"
      /> */}

      {/* Croissant */}
      {/* <img
        src={croissant}
        alt="Croissant"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-20 h-20 object-contain"
      /> */}

      {/* Main Heading */}
      <h2 className="text-7xl font-light">
        BUY 10 DRINKS,{" "}
        <span className="font-extrabold">GET 1 FREE</span>
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-md tracking-wide">
        EVERY HANDCRAFTED DRINK EARNS YOU A BEAN. COLLECT 10 BEANS AND YOUR NEXT ONE'S FREE –
        BECAUSE LOYALTY SHOULD TASTE LIKE REWARD.
      </p>

      {/* Button */}
      <Button className="mt-6 px-8 py-3 bg-[#3B2A22] text-white rounded-md font-mono">
        JOIN THE CLUB
      </Button>
    </section>
  );
};

export default LoyaltyOffer;
