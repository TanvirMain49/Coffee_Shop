/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import * as motion from "motion/react-client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ cardId, image, title, basePrice, description }) => {
  const sizes = {
    S: 1,
    M: 1.2,
    L: 1.5,
  };
  const [selectedSize, setSelectedSize] = useState("S");
  const price = (basePrice * sizes[selectedSize]).toFixed(2);
  const navigate = useNavigate();

  // Split price into whole and decimal parts
  const [whole, decimal] = price.split(".");
const handleCart = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const newItem = {
    image,
    title,
    size: selectedSize,
    price: parseFloat(price),
    id: cardId,
  };

  const updatedCart = [...existingCart, newItem];
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // ✅ Show toast instead of alert
  toast.success(`${title} (${selectedSize}) added to cart!`, {
    duration: 4000,
    position: "top-right",
    style: {
      background: "#184227", // bg-primary
      color: "#ffffff",
      fontWeight: "bold",
      borderRadius: "0.5rem",
      padding: "1rem 1.5rem",
    },
  });
};

const handlePurchase = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const newItem = {
    image,
    title,
    size: selectedSize,
    price: parseFloat(price),
    id: cardId,
    quantity: 1,
  };

  const updatedCart = [...existingCart, newItem];
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  toast.success(`${title} (${selectedSize}) added to cart! Redirecting...`, {
    duration: 4000,
    position: "top-right",
    style: {
      background: "#184227", // bg-primary
      color: "#ffffff",
      fontWeight: "bold",
      borderRadius: "0.5rem",
      padding: "1rem 1.5rem",
    },
  });

  // Redirect after a short delay to allow toast to show
  setTimeout(() => {
    navigate("/cart");
  }, 500);
};

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, ease: "easeOut" }}
      className="bg-beige hover:bg-[#e8e0d3] w-96 h-fit p-4 rounded-2xl space-y-4 shadow-sm border border-beige"
    >
      <figure>
        <img className="rounded-md" src={image} alt={title} />
      </figure>

      <div className="space-y-4">
        {/* Title and description */}
        <div className="flex flex-col">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-sm">
            {description.substring(0, 50)}
            {description.length > 50 ? "..." : ""}
          </p>
        </div>

        {/* Price + Size selector */}
        <div className="flex gap-2 items-center justify-between">
          {/* Price */}
          <div className="flex items-center space-x-1">
            <h3 className="text-lg">tk.</h3>
            <h3 className="font-semibold text-5xl leading-none">{whole}</h3>
            <h3 className="font-medium text-3xl leading-none">.{decimal}</h3>
          </div>

          {/* Size buttons */}
          <div className="w-2/3 space-x-2 items-end">
            {Object.keys(sizes).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-1/4 py-2 rounded-md font-bold text-md font-mono transition 
                                    ${
                                      selectedSize === size
                                        ? "bg-[#8e5137] text-white"
                                        : "bg-beige border-2 border-[#d1b9af] text-[#a79085]"
                                    }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button 
          onClick={handlePurchase}
          className="w-3/4 px-8 py-3 bg-[#3B2A22] text-white rounded-md font-bold text-md font-mono">
            Purchase
          </button>
          <button
            onClick={handleCart}
            className="w-1/4 flex items-center justify-center border-2 border-[#3B2A22] text-[#3B2A22] rounded-md font-bold text-md font-mono"
          >
            <ShoppingCart size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
