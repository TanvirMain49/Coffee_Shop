import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductList({ products = [], onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="text-gray-500 text-center py-10">
        No products added yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-6">
      {products.map((product) => (
        <motion.div
          key={product.id || product.title}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex bg-white p-4 rounded-xl space-x-4 shadow-md border border-gray-200"
        >
          {/* Product Image */}
          <img
            className="size-24 rounded-lg object-cover"
            src={product.photo_url || product.image}
            alt={product.name || product.title}
          />

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {product.name || product.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>
            </div>
            <span className="mt-2 font-bold text-primary">
              ${product.price}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col justify-center items-center gap-2">
            <button
              onClick={() => onEdit(product)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(product)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
