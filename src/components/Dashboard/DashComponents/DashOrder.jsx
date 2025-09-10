"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Truck, CheckCircle, XCircle } from "lucide-react"; // Icons for tabs
import DashboardHeader from "../DashCustomUI/DashboardHeader";
import OrderCard from "../DashCustomUI/OrderCard";

// Sample fake order data
const initialOrders = [
    {
        id: 1,
        customer: "John Doe",
        total: 12.5,
        status: "pending",
        items: [
            { name: "Iced Black Coffee with Lime", quantity: 2 },
            { name: "Cinnamon Coffee", quantity: 1 },
        ],
    },
    {
        id: 2,
        customer: "Jane Smith",
        total: 8.0,
        status: "delivered",
        items: [
            { name: "Iced White Coffee with Oreo", quantity: 1 },
        ],
    },
    {
        id: 3,
        customer: "Mike Johnson",
        total: 5.5,
        status: "failed",
        items: [
            { name: "Cinnamon Coffee", quantity: 1 },
        ],
    },
    {
        id: 4,
        customer: "Sarah Wilson",
        total: 15.0,
        status: "pending",
        items: [
            { name: "Iced Black Coffee with Lime", quantity: 1 },
            { name: "Iced White Coffee with Oreo", quantity: 2 },
            { name: "Cinnamon Coffee", quantity: 1 },
        ],
    },
];


const tabs = [
    { id: "pending", label: "Pending", icon: Truck },
    { id: "delivered", label: "Delivered", icon: CheckCircle },
    { id: "failed", label: "Failed", icon: XCircle },
];

export default function DashOrder() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [orders, setOrders] = useState(initialOrders);

    const filteredOrders = orders.filter(order => order.status === selectedTab.id);

    return (
        <div className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <DashboardHeader
                icon={Truck}
                title="Order Management"
                subtitle="Track and manage all customer orders"
            />

            {/* Tabs */}
            <nav className="flex gap-4 mb-6">
                {tabs.map(tab => (
                    <motion.button
                        key={tab.id}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-6 py-4 rounded-lg font-medium ${tab.id === selectedTab.id
                            ? "bg-green-light border border-b-0 shadow-sm"
                            : "bg-gray-100"
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
                    <motion.div
                        key={selectedTab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredOrders.length > 0 ? (
                            <div className="space-y-4">
                                {filteredOrders.map(order => (
                                    <OrderCard
                                        key={order.id}
                                        order={order}
                                        onUpdateStatus={(id, status) =>
                                            setOrders(prev => prev.map(o => (o.id === id ? { ...o, status } : o)))
                                        }
                                        onDelete={(id) =>
                                            setOrders(prev => prev.filter(o => o.id !== id))
                                        }
                                    />

                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-600 py-12">No orders found in this category.</p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
