import React, { useState } from 'react';
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client"; // motion import

const ProductCard = ({ image, title, basePrice, description }) => {
    const sizes = {
        S: 1,
        M: 1.2,
        L: 1.5,
    };

    const [selectedSize, setSelectedSize] = useState('S');
    const price = (basePrice * sizes[selectedSize]).toFixed(2);

    // Split price into whole and decimal parts
    const [whole, decimal] = price.split(".");

    return (
        // Motion wrapper for animation
        <motion.div
            // 👇 Hover action (scale up)
            whileHover={{ scale: 1.05 }}
            // 👇 Click/Tap action (scale down)

            transition={{ type: "spring", stiffness: 300, ease:"easeOut" }}
            className="bg-beige hover:bg-[#e8e0d3] w-96 h-fit p-4 rounded-2xl space-y-4 shadow-sm border border-beige"
        >
            <figure>
                <img className="rounded-md" src={image} alt={title} />
            </figure>

            <div className="space-y-4">
                {/* Title and description */}
                <div className="flex flex-col">
                    <h2 className="text-2xl">{title}</h2>
                    <p className="text-sm">{description}</p>
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
                                    ${selectedSize === size
                                        ? 'bg-[#8e5137] text-white'
                                        : 'bg-beige border-2 border-[#d1b9af] text-[#a79085]'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <button className="w-3/4 px-8 py-3 bg-[#3B2A22] text-white rounded-md font-bold text-md font-mono">
                        Purchase
                    </button>
                    <button className="w-1/4 flex items-center justify-center border-2 border-[#3B2A22] text-[#3B2A22] rounded-md font-bold text-md font-mono">
                        <Link to="/cart"> <ShoppingCart size={22} /> </Link>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
