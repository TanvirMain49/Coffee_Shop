"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Package } from "lucide-react"; // ✅ Added icon
import AddProductForm from "../DashCustomUI/AddProductForm";
import ProductList from "../DashCustomUI/ProductList";
import DashboardHeader from "../DashCustomUI/DashboardHeader";

// Fake initial products
const initialProducts = [
  {
    id: 1,
    image: "/pd (1).jpg",
    title: "Iced Black Coffee with Lime",
    description:
      "Chilled black coffee with a twist of lime. Bright, zesty, and refreshing.",
    price: 3.5,
  },
  {
    id: 2,
    image: "/pd (3).jpg",
    title: "Iced White Coffee with Oreo",
    description:
      "Creamy iced white coffee with Oreo. A perfect mix of coffee and dessert.",
    price: 4.5,
  },
  {
    id: 3,
    image: "/pd (10).jpg",
    title: "Cinnamon Coffee",
    description:
      "Rich coffee infused with warm cinnamon. Comforting, aromatic, and lightly spiced.",
    price: 3.8,
  },
];

const tabs = [
  { label: "Products List", id: "list" },
  { label: "Add Product", id: "add" },
];

export default function DashProduct() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleEditProduct = (product) => {
    console.log("Edit product", product);
  };

  const handleDeleteProduct = (product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100">
      {/* ✅ Header */}
      <DashboardHeader
        icon={Package}
        title="Product Management"
        subtitle="Add new products and manage your coffee selection"
      />

      {/* ✅ Tabs */}
      <nav className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-4 rounded-lg bg-green-dark text-white font-medium ${tab.id === selectedTab.id
                ? "bg-green-light border border-b-0 shadow-sm"
                : "bg-gray-100"
              }`}
            layoutId={tab.id === selectedTab.id ? "active-tab" : undefined}
          >
            {tab.label}
          </motion.button>
        ))}
      </nav>

      {/* ✅ Tab content with shared layout animation */}
      <div>
        <AnimatePresence mode="wait">
          {selectedTab.id === "add" && (
            <motion.div
              key="add"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AddProductForm onAddProduct={handleAddProduct} />
            </motion.div>
          )}

          {selectedTab.id === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProductList
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
