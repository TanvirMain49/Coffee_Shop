// ==========================================
// Cart.jsx - Main Cart Component (Fixed)
// ==========================================

import CommonForm from "@/components/Custom/CommonFrom";
import CartList from "@/components/ui/CartList";
import useAuth from "@/hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const cartFields = [
  {
    name: "customer_name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    colspan: "col-span-6 md:col-span-3",
  },
  {
    name: "phone_number",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    colspan: "col-span-6 md:col-span-3",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
    colspan: "col-span-6",
  },
  {
    name: "note",
    label: "Note",
    type: "textarea",
    placeholder: "Any special instructions?",
    colspan: "col-span-6",
  },
];

const Cart = () => {
  const [formData, setFormData] = useState();
  const [productList, setProductList] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch cart from localStorage and add quantity property if not exists
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartWithQuantity = cartData.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setProductList(cartWithQuantity);
  }, []);

  // Update localStorage whenever productList changes
  useEffect(() => {
    if (productList.length > 0) {
      localStorage.setItem("cart", JSON.stringify(productList));
    }
  }, [productList]);

  // Update quantity for specific item
  const updateItemQuantity = (index, newQuantity) => {
    setProductList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (index) => {
    const updatedList = productList.filter((_, i) => i !== index);
    setProductList(updatedList);

    // Update localStorage
    if (updatedList.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedList));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData?.customer_name ||
      !formData?.phone_number ||
      productList.length === 0
    ) {
      alert("Please fill in your name, phone, and add items to the cart.");
      return;
    }

    try {
      const payload = {
        user_id: user?.id || null,
        name: formData.customer_name,
        phone: formData.phone_number,
        note: formData.note || null,
        items: productList.map((item) => ({
          coffee_id: item.id,
          quantity: item.quantity,
          price: parseFloat(item.price),
        })),
      };

      const response = await axios.post(
        "http://localhost:3000/orders",
        payload
      );

      // Clear cart
      localStorage.removeItem("cart");
      setProductList([]);
      setFormData({});
      if(response.data){
        toast.success("Signup successful ✅", {
        duration: 4000, // 4 seconds
        position: "top-right",
        style: {
          background: "#184227", // bg-primary color
          color: "#ffffff", // white text
          fontWeight: "bold",
          borderRadius: "0.5rem", // rounded corners like ShadCN buttons
          padding: "1rem 1.5rem",
        },
      });
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.success("Failed to place order. Please try again.", {
        duration: 4000, // 4 seconds
        position: "top-right",
        style: {
          background: "red", // bg-primary color
          color: "#ffffff", // white text
          fontWeight: "bold",
          borderRadius: "0.5rem", // rounded corners like ShadCN buttons
          padding: "1rem 1.5rem",
        },
      });
      alert();
    }
  };

  // Calculate totals
  const totalItems = productList.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = productList
    .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="lg:w-3/5 rounded-xl shadow-lg p-6 md:p-8 border border-primary">
          <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
          <CommonForm
            formFields={cartFields}
            formData={formData}
            setFormData={setFormData}
            className="grid grid-cols-6 gap-4"
            submitLabel="Place Order"
            handleSubmit={handleSubmit}
          />
        </div>

        {/* Cart Summary Section */}
        <CartList
          productList={productList}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
        />
      </div>

      {/* Order Summary */}
      <div className="mt-4 bg-begin border border-primary rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span className="font-medium text-gray-800">{totalItems}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span className="font-medium text-gray-800">$ {totalPrice}</span>
        </div>
        <div className="flex justify-between border-t pt-2 mt-2 font-semibold text-lg">
          <span>Total:</span>
          <span>$ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
