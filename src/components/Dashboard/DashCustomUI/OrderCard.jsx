import React, { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

const OrderCard = ({ order, setOrders }) => {
  const statuses = ["pending", "delivered", "declined"];
  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const total = order.items?.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

const handleStatusChange = async (newStatus) => {
  setLoading(true);
  try {
    await axios.put(`http://localhost:3000/admin/orders/${order.id}`, {
      status: newStatus,
    });

    const { data } = await axios.get("http://localhost:3000/admin/orders");
    setOrders(data);

    // ✅ Success toast
    toast.success("Order status updated ✅", {
      duration: 4000,
      position: "top-right",
      style: {
        background: "#184227", // green bg (primary)
        color: "#ffffff",
        fontWeight: "bold",
        borderRadius: "0.5rem",
        padding: "1rem 1.5rem",
      },
    });

  } catch (error) {
    console.error("Error updating status:", error);

    // ❌ Error toast
    toast.error("Failed to update status ❌", {
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
  } finally {
    setLoading(false);
  }
};

const handleDelete = async () => {
  setLoading(true);
  try {
    await axios.delete(`http://localhost:3000/admin/orders/${order.id}`);
    setOrders((prev) => prev.filter((o) => o.id !== order.id));
    setOpenConfirm(false);

    // ✅ Success toast
    toast.success("Order deleted successfully ✅", {
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
    console.error("Error deleting order:", error);

    // ❌ Error toast
    toast.error("Failed to delete order ❌", {
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
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-beige rounded-xl shadow-lg border border-primary p-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all">
      {/* Order Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-green-light">
          Customer: {order.customer_name}
        </h3>
        <div className="text-gray-600">
          {order?.items?.length > 0 ? (
            order.items.map((item, index) => (
              <p key={index}>
                {item.coffee_name} x {item.quantity}
              </p>
            ))
          ) : (
            <p>No items in this order</p>
          )}
        </div>
        <p className="text-gray-700 font-medium">Total: ${total?.toFixed(2)}</p>
        {order.note && <p className="text-gray-500">Note: {order.note}</p>}
      </div>

      {/* Status Dropdown & Delete */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <Select
          value={order.status}
          onValueChange={handleStatusChange}
          disabled={loading}
        >
          <SelectTrigger className="w-[140px] bg-primary text-white border-none">
            <SelectValue placeholder="Status" className="text-white" />
            {/* Force arrow/caret color to white */}
            <span className="ml-2 text-white">▼</span>
          </SelectTrigger>

          <SelectContent className="bg-beige text-gray-900">
            <SelectGroup>
              {statuses.map((s) => (
                <SelectItem
                  key={s}
                  value={s}
                  className="hover:bg-primary/20 focus:bg-primary/30 text-gray-900"
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => setOpenConfirm(true)}
          className="px-3 py-2 text-primary hover:text-secondary/20 transition-colors cursor-pointer"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Trash2 className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={openConfirm} onOpenChange={setOpenConfirm}>
        <DialogContent className="sm:max-w-[400px] bg-beige">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action will permanently delete the order.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenConfirm(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleDelete} disabled={loading}>
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderCard;
