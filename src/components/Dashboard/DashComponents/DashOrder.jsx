/* eslint-disable no-unused-vars */
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Truck, CheckCircle, XCircle } from "lucide-react"; // Icons for tabs
import DashboardHeader from "../DashCustomUI/DashboardHeader";
import OrderCard from "../DashCustomUI/OrderCard";
import useAxiosFetch from "@/hook/useAxiosFetch";
import Loader from "@/components/Custom/loader";

const tabs = [
  { id: "pending", label: "Pending", icon: Truck },
  { id: "delivered", label: "Delivered", icon: CheckCircle },
  { id: "declined", label: "Failed", icon: XCircle },
];

export default function DashOrder() {
  const {
    data: orders,
    loading,
    error,
    setData: setOrders,
  } = useAxiosFetch("http://localhost:3000/admin/orders");

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const filteredOrders = orders?.filter(
    (order) => order.status === selectedTab.id
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <DashboardHeader
        icon={Truck}
        title="Order Management"
        subtitle="Track and manage all customer orders"
      />

      {/* Tabs */}
      <nav className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-4 rounded-lg font-medium ${
              tab.id === selectedTab.id
                ? "bg-primary text-white border border-b-0 shadow-sm"
                : "bg-beige text-black border border-primary"
            }`}
            layoutId={tab.id === selectedTab.id ? "active-tab" : undefined}
          >
            <tab.icon className="inline w-5 h-5 mr-2" />
            {tab.label}
          </motion.button>
        ))}
      </nav>

      {/* Tab content */}
      <div>
        <AnimatePresence mode="wait">
          {loading ? (
            // ✅ Loader while fetching orders
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <Loader />
            </motion.div>
          ) : (
            <motion.div
              key={selectedTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredOrders?.length > 0 ? (
                <div className="space-y-4">
                  {filteredOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      setOrders={setOrders}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 py-12">
                  No orders found in this category.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
