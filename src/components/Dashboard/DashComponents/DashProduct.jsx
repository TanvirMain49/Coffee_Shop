/* eslint-disable no-unused-vars */
"use client";

import React, { useState } from "react";
import { Package } from "lucide-react"; // ✅ Added icon
import AddProductForm from "../DashCustomUI/AddProductForm";
import ProductList from "../DashCustomUI/ProductList";
import DashboardHeader from "../DashCustomUI/DashboardHeader";
import useAxiosFetch from "@/hook/useAxiosFetch";
import Loader from "@/components/Custom/loader";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

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
  const {
    data: products,
    loading,
    error,
    setData: setProducts,
  } = useAxiosFetch("http://localhost:3000/admin/coffees");
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleEditProduct = (product) => {
    console.log("Edit product", product);
  };

  const handleDeleteProduct = async (product) => {
    // Create a promise-based toast for confirmation
    const confirmDelete = await new Promise((resolve) => {
      const toastId = toast(
        (t) => (
          <div className="flex flex-col gap-4 p-4 rounded-lg text-black shadow-md">
            <span className="font-medium text-lg">
              Are you sure you want to delete "{product.name}"?
            </span>
            <div className="flex gap-2 justify-end mt-2">
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 transition text-white rounded-md font-bold"
                onClick={() => {
                  resolve(true);
                  toast.dismiss(t.id);
                }}
              >
                OK
              </button>
              <button
                className="px-4 py-2 bg-gray-500 hover:bg-gray-300 transition text-white rounded-md font-bold"
                onClick={() => {
                  resolve(false);
                  toast.dismiss(t.id);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity, // Keeps toast visible until user clicks
        }
      );
    });

    if (!confirmDelete) return;

    // Show loading toast
    const loadingToastId = toast.loading("Deleting coffee...");

    try {
      await axios.delete(`http://localhost:3000/coffees/${product.id}`);
      setProducts((prev) => prev.filter((p) => p.id !== product.id));

      toast.success("Coffee deleted successfully ✅", {
        id: loadingToastId, // Replace the loading toast
        duration: 4000,
        style: {
          background: "#184227",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "0.5rem",
          padding: "1rem 1.5rem",
        },
      });
    } catch (error) {
      console.error("Error deleting coffee:", error);

      toast.error("Failed to delete coffee ❌", {
        id: loadingToastId, // Replace the loading toast
        duration: 4000,
        style: {
          background: "#7B1E1E",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "0.5rem",
          padding: "1rem 1.5rem",
        },
      });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <DashboardHeader
        icon={Package}
        title="Product Management"
        subtitle="Add new products and manage your coffee selection"
      />

      {/* Tabs */}
      <nav className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-4 rounded-lg bg-beige text-black font-medium ${
              tab.id === selectedTab.id
                ? "bg-primary text-white border border-b-0 shadow-sm"
                : "border border-primary"
            }`}
            layoutId={tab.id === selectedTab.id ? "active-tab" : undefined}
          >
            {tab.label}
          </motion.button>
        ))}
      </nav>

      {/* Tab content */}
      <div>
        <AnimatePresence mode="wait">
          {loading ? (
            // ✅ Loader
            <Loader />
          ) : selectedTab.id === "add" ? (
            <motion.div
              key="add"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AddProductForm onAddProduct={handleAddProduct} />
            </motion.div>
          ) : (
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
