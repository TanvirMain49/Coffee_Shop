import React from "react";
import { Trash2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const OrderCard = ({ order, onUpdateStatus, onDelete }) => {
    const statuses = ["pending", "delivered", "failed"];

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all">
            {/* Order Info */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Customer: {order.customer}</h3>
                <div className="text-gray-600">
                    {order.items && order.items.length > 0 ? (
                        order.items.map((item, index) => (
                            <p key={index}>
                                {item.name} x {item.quantity}
                            </p>
                        ))
                    ) : (
                        <p>No items in this order</p>
                    )}
                </div>
                <p className="text-gray-700 font-medium">Total: ${order.total.toFixed(2)}</p>
            </div>

            {/* Status Dropdown & Delete */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Select
                    value={order.status}
                    onValueChange={(val) => onUpdateStatus(order.id, val)}
                >
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {statuses.map((s) => (
                                <SelectItem key={s} value={s}>
                                    {s}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* Delete button */}
                <button
                    onClick={() => onDelete(order.id)}
                    className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default OrderCard;
