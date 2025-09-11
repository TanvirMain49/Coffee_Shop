import React from "react";
import { useState, useEffect } from "react";
import useAxiosFetch from "@/hook/useAxiosFetch";
import toast from "react-hot-toast";
import axios from "axios";

export const useUsers = () => {
  // fetch users from backend
  const { data, loading, error } = useAxiosFetch("http://localhost:3000/admin/users");

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [animatingCards, setAnimatingCards] = useState(new Set());

  // When `data` changes, sync with local state
  useEffect(() => {
    if (data) {
      setUsers(data); // assuming backend returns [{id, name, ...}]
    }
  }, [data]);

  // Animation logic
  const animateCard = (id, duration = 600) => {
    setAnimatingCards(prev => new Set([...prev, id]));
    setTimeout(() => {
      setAnimatingCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, duration);
  };

  // Add user (still call backend manually if needed)
  const handleAddUser = (newUser) => {
    setUsers([newUser, ...users]);
    animateCard(newUser.id);
  };

  // Edit user
  const handleSaveEdit = (updatedUser) => {
    console.log("handleAddUser",updatedUser);
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
    animateCard(updatedUser.id);
  };

  // Delete user

const handleDelete = async (userId) => {
  // show loading state
  const loader = toast.loading("Deleting user...");

  try {
    await axios.delete(`http://localhost:3000/admin/users/${userId}`);
    setUsers((prev) => prev.filter((u) => u.id !== userId));

    toast.success("User deleted successfully ✅", {
      id: loader,
      style: {
        background: "#184227", // bg-primary
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "0.5rem",
        padding: "1rem 1.5rem",
      },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    toast.error("Failed to delete user ❌", {
      id: loader,
      style: {
        background: "#7B1E1E", // red
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "0.5rem",
        padding: "1rem 1.5rem",
      },
    });
  }
};

  return {
    users,
    loading,
    error,
    editingUser,
    animatingCards,
    handleAddUser,
    handleEdit: setEditingUser,
    handleSaveEdit,
    handleDelete,
    setEditingUser
  };
};
