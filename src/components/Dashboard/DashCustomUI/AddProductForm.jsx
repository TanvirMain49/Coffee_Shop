import React, { useState } from "react";
import CommonForm from "../../Custom/CommonFrom";

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
      colspan: "col-span-2",
    },
    {
      name: "created_at",
      label: "Created At",
      type: "date",
      colspan: "col-span-2",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price || 0),
    };

    onAddProduct(newProduct);

    // Reset form
    setFormData({
      photo_url: "",
      name: "",
      description: "",
      price: "",
      created_at: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
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
