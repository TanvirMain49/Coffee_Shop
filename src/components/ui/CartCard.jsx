import React, { useState } from 'react';
import * as motion from "motion/react-client";

const CartCard = ({ image, title, price }) => {
    const [quantity, setQuantity] = useState(1);

    // Handle increment/decrement
    const increase = () => setQuantity(prev => prev + 1);
    const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // Calculate total price
    const totalPrice = (price * quantity).toFixed(2);
    const [whole, decimal] = totalPrice.split(".");

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-white shadow-md rounded-lg w-full flex items-center space-x-4"
        >
            {/* Product Image */}
            <img
                src={image}
                alt={title}
                className="w-20 h-20 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1">
                <h2 className="text-xl font-bold">{title}</h2>

                {/* Quantity Counter */}
                <div className="flex items-center space-x-2 mt-2">
                    <button
                        onClick={decrease}
                        className="px-3 py-1 bg-gray-200 rounded-md text-lg font-bold"
                    >
                        –
                    </button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <button
                        onClick={increase}
                        className="px-3 py-1 bg-gray-200 rounded-md text-lg font-bold"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-end space-x-1">
                <span className="text-lg">tk.</span>
                <span className="text-2xl font-semibold">{whole}</span>
                <span className="text-xl font-semibold">.{decimal}</span>
            </div>
        </motion.div>
    );
};

export default CartCard;
