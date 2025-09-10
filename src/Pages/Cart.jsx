import CommonForm from "@/components/Custom/CommonFrom";
import CartCard from "@/components/ui/CartCard";
import CartList from "@/components/ui/CartList";
import useAuth from "@/hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const{user} = useAuth();

  useEffect(() => {
    // Fetch cart from localStorage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setProductList(cartData);
  }, []);


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.customer_name || !formData.phone_number || productList.length === 0) {
    alert("Please fill in your name, phone, and add items to the cart.");
    return;
  }

  try {
    const payload = {
      user_id: user?.id ,
      name: formData.customer_name,
      phone: formData.phone_number,
      note: formData.note || null,
      items: productList.map((item) => ({
        coffee_id: item.id,
        quantity: item.quantity || 1,
        price: item.price
      })),
    };

    const response = await axios.post("http://localhost:3000/orders", payload);
    console.log("Order Response:", response.data);

    // Optional: Clear cart
    localStorage.removeItem("cart");
    setProductList([]);
    alert("Order placed successfully!");

  } catch (error) {
    console.error("Error placing order:", error);
    alert("Failed to place order. Please try again.");
  }
};

  // Calculate total items and total price
  const totalItems = productList.length;
  const totalPrice = productList.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

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
        <CartList productList={productList} />
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
          <span className="font-medium text-gray-800">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-2 mt-2 font-semibold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
