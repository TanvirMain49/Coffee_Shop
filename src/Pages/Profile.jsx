import React, { useState, useRef } from "react";
import {
  Camera,
  Coffee,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [userPhoto, setUserPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Coffee Street, Bean City, BC 12345",
    memberSince: "January 2024",
  });

  const orders = [
    {
      id: 1,
      coffeeName: "Caramel Macchiato",
      size: "Large",
      price: 5.5,
      status: "accepted",
      orderDate: "2024-01-15",
      notes: "Extra caramel, oat milk",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 2,
      coffeeName: "Vanilla Latte",
      size: "Medium",
      price: 4.25,
      status: "pending",
      orderDate: "2024-01-16",
      notes: "Decaf, extra hot",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      coffeeName: "Espresso Romano",
      size: "Small",
      price: 3.75,
      status: "declined",
      orderDate: "2024-01-14",
      notes: "Double shot",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      coffeeName: "Iced Americano",
      size: "Large",
      price: 4.0,
      status: "accepted",
      orderDate: "2024-01-13",
      notes: "Extra ice, no sugar",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      coffeeName: "Mocha Frappuccino",
      size: "Large",
      price: 6.25,
      status: "pending",
      orderDate: "2024-01-16",
      notes: "Whipped cream, chocolate drizzle",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop&crop=center",
    },
  ];

  const filterOrders = (status) =>
    status === "all" ? orders : orders.filter((o) => o.status === status);

  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="w-5 h-5" style={{ color: "#3E5C48" }} />;
      case "pending":
        return <Clock className="w-5 h-5" style={{ color: "#C2BBA8" }} />;
      case "declined":
        return <XCircle className="w-5 h-5" style={{ color: "#4B2E2E" }} />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    const base = "px-4 py-2 rounded-full text-sm font-semibold border-2 backdrop-blur-sm";
    switch (status) {
      case "accepted":
        return `${base} text-white border-transparent shadow-lg`;
      case "pending":
        return `${base} border-transparent shadow-lg`;
      case "declined":
        return `${base} text-white border-transparent shadow-lg`;
      default:
        return base;
    }
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "accepted":
        return { backgroundColor: "#3E5C48" };
      case "pending":
        return { backgroundColor: "#C2BBA8", color: "#1C1C1C" };
      case "declined":
        return { backgroundColor: "#4B2E2E" };
      default:
        return {};
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setUserPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerPhotoUpload = () => fileInputRef.current?.click();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2EADF" }}>
      <div className="max-w-7xl mx-auto p-4">
        {/* Modern Banner Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl shadow-2xl mb-10"
          style={{ 
            background: `linear-gradient(135deg, #4B2E2E 0%, #1C1C1C 50%, #3E5C48 100%)`,
            minHeight: "400px"
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-10"
              style={{ backgroundColor: "#83A184" }}
            />
            <motion.div
              animate={{ 
                rotate: -360,
                y: [0, -20, 0],
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-15"
              style={{ backgroundColor: "#C2BBA8" }}
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: 180,
              }}
              transition={{ 
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
              className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: "#83A184" }}
            />
            
            {/* Floating Coffee Beans */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute w-3 h-3 rounded-full opacity-20"
                style={{
                  backgroundColor: "#C2BBA8",
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 10}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Enhanced Profile Picture */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div 
                    className="w-44 h-44 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4"
                    style={{ 
                      backgroundColor: "#3E5C48",
                      borderColor: "#83A184",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    {userPhoto ? (
                      <img
                        src={userPhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-24 h-24 text-white" />
                    )}
                  </div>
                  
                  {/* Glowing Ring Effect */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 opacity-50"
                    style={{ 
                      borderColor: "#83A184",
                      filter: "blur(4px)",
                      animation: "pulse 2s infinite"
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={triggerPhotoUpload}
                  className="absolute bottom-4 right-4 p-4 rounded-full shadow-2xl transition-all duration-300"
                  style={{ 
                    backgroundColor: "#83A184",
                    boxShadow: "0 10px 25px rgba(131, 161, 132, 0.4)"
                  }}
                >
                  <Camera className="w-6 h-6 text-white" />
                </motion.button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </motion.div>

              {/* Enhanced User Info */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6"
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    Welcome back,
                    <br />
                    <span style={{ color: "#C2BBA8" }}>{userData.name}!</span>
                  </h1>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <Award className="w-6 h-6" style={{ color: "#83A184" }} />
                    <p className="text-xl font-medium text-white opacity-90">
                      Premium Member since {userData.memberSince}
                    </p>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-current" 
                        style={{ color: "#C2BBA8" }}
                      />
                    ))}
                    <span className="ml-2 text-white font-medium">Coffee Enthusiast</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
                >
                  {[
                    { icon: Mail, text: userData.email },
                    { icon: Phone, text: userData.phone },
                    { icon: MapPin, text: userData.address, colSpan: true },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl backdrop-blur-sm ${
                        item.colSpan ? "md:col-span-2" : ""
                      }`}
                      style={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(131, 161, 132, 0.3)"
                      }}
                    >
                      <item.icon className="w-6 h-6 flex-shrink-0" style={{ color: "#83A184" }} />
                      <span className="text-lg font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Orders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="backdrop-blur-xl rounded-3xl shadow-2xl p-8 border"
          style={{ 
            borderColor: "black",
            boxShadow: "0 25px 50px -12px rgba(75, 46, 46, 0.15)"
          }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div 
              className="p-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#4B2E2E" }}
            >
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#184227]">
              Your Orders
            </h2>
          </div>

          {/* Enhanced Filter Tabs */}
          <div
            className="flex flex-wrap gap-3 mb-10 p-4 rounded-2xl"
            // style={{ backgroundColor: "#D5D7C7" }}
          >
            {[
              { key: "all", label: "All Orders", count: orders.length },
              {
                key: "pending",
                label: "Pending",
                count: orders.filter((o) => o.status === "pending").length,
              },
              {
                key: "accepted",
                label: "Accepted",
                count: orders.filter((o) => o.status === "accepted").length,
              },
              {
                key: "declined",
                label: "Declined",
                count: orders.filter((o) => o.status === "declined").length,
              },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "shadow-xl transform"
                    : "hover:shadow-lg"
                }`}
                style={
                  activeTab === tab.key
                    ? { 
                        backgroundColor: "#4B2E2E", 
                        color: "white",
                        boxShadow: "0 15px 30px rgba(75, 46, 46, 0.3)"
                      }
                    : { 
                        backgroundColor: "#C2BBA8", 
                        color: "#1C1C1C" 
                      }
                }
              >
                {tab.label} ({tab.count})
              </motion.button>
            ))}
          </div>

          {/* Enhanced Orders List */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {filterOrders(activeTab).map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.95 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(75, 46, 46, 0.2)"
                  }}
                  className="rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer border-[#184227]"
                  style={{  
                    boxShadow: "0 10px 25px rgba(75, 46, 46, 0.1)"
                  }}
                >
                  <div className="flex flex-col xl:flex-row gap-8">
                    {/* Order Details - Left Side */}
                    <div className="flex-1 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <h3
                            className="text-3xl font-bold mb-2 text-[#184227]"
                          >
                            {order.coffeeName}
                          </h3>
                          <p className="text-xl font-medium text-primary">
                            Size: {order.size}
                          </p>
                        </div>
                        <div className="text-right">
                          <p
                            className="text-4xl font-bold mb-1 text-[#184227]"
                          >
                            ${order.price.toFixed(2)}
                          </p>
                          <p className="text-lg font-medium" style={{ color: "#C2BBA8" }}>
                            Order #{order.id}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-3"
                        >
                          {getStatusIcon(order.status)}
                          <span 
                            className={getStatusBadge(order.status)}
                            style={getStatusBadgeStyle(order.status)}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </motion.div>
                        <span
                          className="text-lg font-semibold"
                          style={{ color: "#4B2E2E" }}
                        >
                          {new Date(order.orderDate).toLocaleDateString()}
                        </span>
                      </div>
                      
                      {order.notes && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-tan p-6 rounded-xl border-2 shadow-inner"
                          style={{ borderColor: "#D5D7C7" }}
                        >
                          <p className="text-lg" style={{ color: "#1C1C1C" }}>
                            <span className="font-bold">Notes:</span>{" "}
                            {order.notes}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Coffee Image - Right Side */}
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="w-full xl:w-64 h-64 flex-shrink-0"
                    >
                      <div
                        className="w-full h-full rounded-2xl overflow-hidden border-4 shadow-2xl"
                        style={{ 
                          borderColor: "#83A184",
                          boxShadow: "0 20px 40px rgba(131, 161, 132, 0.3)"
                        }}
                      >
                        <img
                          src={order.image}
                          alt={order.coffeeName}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Enhanced Empty State */}
          {filterOrders(activeTab).length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Coffee
                  className="w-24 h-24 mx-auto mb-6"
                  style={{ color: "#C2BBA8" }}
                />
              </motion.div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: "#4B2E2E" }}
              >
                No orders found
              </h3>
              <p className="text-xl" style={{ color: "#1C1C1C" }}>
                {activeTab === "all"
                  ? "You haven't placed any orders yet."
                  : `No ${activeTab} orders at the moment.`}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;