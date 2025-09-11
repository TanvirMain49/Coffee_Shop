/* eslint-disable no-unused-vars */
import React from 'react';
import * as motion from "motion/react-client";
import { Plus, Minus } from 'lucide-react';

const CartCard = ({ index, image, title, price, quantity, updateQuantity }) => {
  // Handle increment/decrement
  const increase = () => updateQuantity(index, quantity + 1);
  const decrease = () => updateQuantity(index, quantity - 1);

  // Calculate total price for this item
  const totalPrice = (price * quantity).toFixed(2);
  const [whole, decimal] = totalPrice.split(".");

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-4 shadow-md rounded-lg w-full flex items-center space-x-4 border border-primary hover:shadow-lg transition-shadow"
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">$ {price.toFixed(2)} each</p>

        {/* Quantity Counter */}
        <div className="flex items-center space-x-3">
          <button
            onClick={decrease}
            disabled={quantity <= 1}
            className={`p-1 rounded-md transition-colors ${
              quantity <= 1 
                ? 'bg-beige text-gray-400 cursor-not-allowed' 
                : 'bg-beige hover:bg-gray-300 text-gray-700'
            }`}
          >
            <Minus size={16} />
          </button>
          
          <span className="text-lg font-medium min-w-[2rem] text-center">
            {quantity}
          </span>
          
          <button
            onClick={increase}
            className="p-1 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <div className="text-sm text-gray-500 mb-1">Total</div>
        <div className="flex items-end space-x-1">
          <span className="text-sm text-gray-600">$</span>
          <span className="text-xl font-bold text-gray-800">{whole}</span>
          <span className="text-lg font-semibold text-gray-600">.{decimal}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CartCard;