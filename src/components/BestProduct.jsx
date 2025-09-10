
import React from "react";
import ProductCard from "./ui/ProductCard";
import MaskedDiv from "./ui/masked-div";
import useAxiosFetch from "../hook/useAxiosFetch";

const productImages = [
  {
    image: "public/pd (1).jpg",
    title: "Iced Black Coffee with Lime",
    description:
      "Chilled black coffee with a twist of lime. Bright, zesty, and refreshing.",
    price: 3.5,
  },
  {
    image: "public/pd (3).jpg",
    title: "Iced White Coffee with Oreo",
    description:
      "Creamy iced white coffee with Oreo. A perfect mix of coffee and dessert.",
    price: 4.5,
  },
  {
    image: "public/pd (10).jpg",
    title: "Cinnamon Coffee",
    description:
      "Rich coffee infused with warm cinnamon. Comforting, aromatic, and lightly spiced.",
    price: 3.8,
  },
];

const BestProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useAxiosFetch(
    "http://localhost:3000/coffees"
  );

  console.log(data);

  return (
    <div className="p-6 mt-12 space-y-6">
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
