import React, { useState } from "react";
import { Plus, Users, Trash2 } from "lucide-react";
import UserCard from "../DashCustomUI/UserCard";
import AddUserForm from "../DashCustomUI/AddUserForm";
import DashModal from "../DashCustomUI/DashModal";
import { useUsers } from "../DashHooks/useUsers";
import { useDashModal } from "../DashHooks/useDashModal";
import DashboardHeader from "../DashCustomUI/DashboardHeader";

const initialUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", joinDate: "2024-01-15", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", joinDate: "2024-02-20", status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Viewer", joinDate: "2024-03-10", status: "Inactive" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "Editor", joinDate: "2024-04-05", status: "Active" },
];

const DashUser = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const {
        users, editingUser, animatingCards,
        handleAddUser, handleEdit, handleSaveEdit, handleDelete, setEditingUser
    } = useUsers(initialUsers);

    const { dashModal, openModal, closeModal } = useDashModal();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <DashboardHeader
                    icon={Users}
                    title="User Management"
                    subtitle="Manage users, roles, and permissions"
                />

                

                {showAddForm && (
                    <AddUserForm
                        onAddUser={handleAddUser}
                        onClose={() => setShowAddForm(false)}
                    />
                )}

                {/* Users Grid */}
                <div className="space-y-4">
                    {users.length > 0 ? users.map(user => (
                        <UserCard
                            key={user.id}
                            user={user}
                            editingUser={editingUser}
                            onEdit={handleEdit}
                            onSave={handleSaveEdit}
                            onDelete={() => openModal({
                                user,
                                title: "Delete User",
                                message: `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
                                icon: Trash2,
                                actions: [
                                    { label: "Cancel", onClick: closeModal, style: { border: "1px solid #C2BBA8", color: "#4B2E2E", backgroundColor: "#F2EADF" } },
                                    { label: "Delete", onClick: () => { handleDelete(user.id); closeModal(); }, style: { backgroundColor: "#4B2E2E", color: "#fff" } },
                                ]
                            })}
                            animating={animatingCards.has(user.id)}
                        />
                    )) : (
                        <p className="text-center py-12 text-gray-600">No users found. Add your first user!</p>
                    )}
                </div>

                {/* Modal */}
                <DashModal {...dashModal} onClose={closeModal} />
            </div>
        </div>
    );
};

export default DashUser;
