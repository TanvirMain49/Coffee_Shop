import React, { useState } from "react";
import CommonForm from "../../Custom/CommonFrom";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    photo_url: "",
    name: "",
    description: "",
    price: "",
    created_at: "",
  });

  const productFields = [
    {
      name: "photo_url",
      label: "Product Image URL",
      type: "text",
      placeholder: "Enter image URL",
      colspan: "col-span-3",
    },
    {
      name: "name",
      label: "Product Name",
      type: "text",
      placeholder: "Enter product name",
      colspan: "col-span-3",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter product description",
      colspan: "col-span-6",
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "Enter price in USD",
      colspan: "col-span-3",
    },
    {
      name: "created_at",
      label: "Created At",
      type: "date",
      colspan: "col-span-3",
    },
  ];

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3000/coffees", {
      photo_url: formData.photo_url,
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price || 0),
    });

    // ✅ Use the real coffee object returned by backend
    onAddProduct(response.data.coffee);

    // Reset form
    setFormData({
      photo_url: "",
      name: "",
      description: "",
      price: "",
      created_at: "",
    });

    // Success toast
    toast.success("Product added successfully ✅", {
      duration: 4000,
      position: "top-right",
      style: {
        background: "#184227", // green bg
        color: "#ffffff",
        fontWeight: "bold",
        borderRadius: "0.5rem",
        padding: "1rem 1.5rem",
      },
    });

  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);

    // Error toast
    toast.error("Failed to add product ❌", {
      duration: 4000,
      position: "top-right",
      style: {
        background: "#7B1E1E", // red bg
        color: "#ffffff",
        fontWeight: "bold",
        borderRadius: "0.5rem",
        padding: "1rem 1.5rem",
      },
    });
  }
};

  return (
    <div className="bg-beige p-6 rounded-xl shadow-lg border border-primary mb-6">
      <h3 className="text-3xl font-semibold mb-4">Add New Product</h3>
      <CommonForm
        formFields={productFields}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        submitLabel="Add Product" // ✅ Added submit button label here
        className="grid grid-cols-6 gap-4 py-4"
      />
    </div>
  );
}
