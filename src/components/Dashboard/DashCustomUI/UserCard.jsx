import React, { useState } from "react";
import { Edit, Trash2, Save, X, Shield, Mail, Calendar } from "lucide-react";

const UserCard = ({ user, editingUser, onEdit, onSave, onDelete, animating }) => {
    const [localEdit, setLocalEdit] = useState({ ...user });
    const roles = ["Admin", "Editor", "Viewer"];

    const getRoleColor = (role) => {
        switch (role) {
            case "Admin": return "bg-red-100 text-red-800 border-red-200";
            case "Editor": return "bg-blue-100 text-blue-800 border-blue-200";
            case "Viewer": return "bg-green-100 text-green-800 border-green-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const getStatusColor = (status) => status === "Active" ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100 text-gray-800 border-gray-200";

    return (
        <div className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${animating ? "animate-pulse scale-105" : ""}`}>
            {editingUser?.id === user.id ? (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <input className="w-full border rounded-lg px-3 py-2" value={localEdit.name} onChange={e => setLocalEdit({ ...localEdit, name: e.target.value })} />
                        <input className="w-full border rounded-lg px-3 py-2" value={localEdit.email} onChange={e => setLocalEdit({ ...localEdit, email: e.target.value })} />
                        <select className="w-full border rounded-lg px-3 py-2" value={localEdit.role} onChange={e => setLocalEdit({ ...localEdit, role: e.target.value })}>
                            {roles.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
                        <button onClick={() => onEdit(null)} className="px-4 py-2 text-gray-600">Cancel <X className="inline w-4 h-4 ml-1" /></button>
                        <button onClick={() => onSave(localEdit)} className="px-6 py-2 bg-green-600 text-white rounded-lg">Save <Save className="inline w-4 h-4 ml-1" /></button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1 flex gap-4 items-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">{user.name.split(" ").map(n => n[0]).join("")}</div>
                        <div className="flex flex-col gap-2">

                            <h3 className="text-xl font-semibold">{user.name}</h3>
                            <div className="flex flex-col gap-1 text-gray-600 ">
                                <div className="flex items-center gap-1">
                                    <Mail className="w-4 h-4" />
                                    <p>{user.email}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <p>{user.joinDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className={`px-3 py-1 flex rounded-full text-xs font-medium border ${getRoleColor(user.role)}`}><Shield className="w-3 h-3 mr-1" /> {user.role}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>{user.status}</span>
                        <button onClick={() => onEdit(user)} className="px-3 py-2 text-blue-600"><Edit className="w-4 h-4" /></button>
                        <button onClick={onDelete} className="px-3 py-2 text-red-600"><Trash2 className="w-4 h-4" /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserCard;
