
import React from "react";
import ProductCard from "./ui/ProductCard";
import useAxiosFetch from "../hook/useAxiosFetch";


const BestProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useAxiosFetch(
    "http://localhost:3000/coffees"
  );

  return (
    <div className="p-6 mt-24 space-y-6">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">BEST PRODUCT</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.slice(0, 3).map((product, index) => (
          <ProductCard
            key={index}
            cardId={product.id}
            image={product.photo_url}
            title={product.name}
            description={product.description}
            basePrice={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
