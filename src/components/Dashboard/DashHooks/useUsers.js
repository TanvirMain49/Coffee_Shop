import { useState } from "react";

export const useUsers = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [animatingCards, setAnimatingCards] = useState(new Set());

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

  const handleAddUser = (newUser) => {
    const user = {
      id: Math.max(...users.map(u => u.id)) + 1,
      ...newUser,
      joinDate: new Date().toISOString().split("T")[0],
      status: "Active"
    };
    setUsers([user, ...users]);
    animateCard(user.id);
  };

  const handleEdit = (user) => setEditingUser(user);

  const handleSaveEdit = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditingUser(null);
    animateCard(updatedUser.id);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    animateCard(userId, 300);
  };

  return {
    users,
    editingUser,
    animatingCards,
    handleAddUser,
    handleEdit,
    handleSaveEdit,
    handleDelete,
    setEditingUser
  };
};
