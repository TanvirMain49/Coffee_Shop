import React, { useState } from "react";
import { Edit, Trash2, Save, X, Shield, Mail, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const UserCard = ({
  user,
  editingUser,
  onEdit,
  onSave,
  onDelete,
  animating,
}) => {
  const [localEdit, setLocalEdit] = useState({
    ...user,
    role: user.role || "",
  }); // fallback if role is missing });
  const roles = ["Admin", "Editor", "User"];

  return (
    <div
      className={`bg-beige rounded-xl shadow-lg border border-primary p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        animating ? "animate-pulse scale-105" : ""
      }`}
    >
      {editingUser?.id === user.id ? (
        // ✅ Inline edit mode
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                value={localEdit.username}
                onChange={(e) =>
                  setLocalEdit({ ...localEdit, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                value={localEdit.email}
                onChange={(e) =>
                  setLocalEdit({ ...localEdit, email: e.target.value })
                }
              />
            </div>

            {/* Role */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Role
              </label>
              <Select
                defaultValue={user.role}
                value={localEdit.role}
                onValueChange={(val) =>
                  setLocalEdit({ ...localEdit, role: val })
                }
              >
                <SelectTrigger className="w-full bg-beige text-black border-secondary">
                  <SelectValue placeholder="Select a role" />
                   <span className="ml-2 text-secondary">▼</span>
                </SelectTrigger>
                <SelectContent className="bg-beige text-black">
                  <SelectGroup>
                    {roles.map((r) => (
                      <SelectItem
                        key={r}
                        value={r}
                        className="bg-begin text-black hover:bg-begin/30"
                      >
                        {r}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
            <Button
              variant="outline"
              onClick={() => onEdit(null)}
              className="px-4 py-2 text-gray-600"
            >
              Cancel <X className="inline w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="primary"
              onClick={() => onSave(localEdit)}
              className="px-6 py-2rounded-lg"
            >
              Save <Save className="inline w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      ) : (
        // ✅ Normal display mode
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1 flex gap-4 items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              {user.username
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <div className="flex flex-col gap-1 text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <p>{user.email}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <p>{user.created_at.split("T")[0]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {/* ✅ Role dropdown (direct edit in view mode) */}
            <Button variant="outline">{user.role}</Button>
            <button
              onClick={() => onEdit(user)}
              className="px-3 py-2 text-primary hover:bg-primary/50 hover:text-white rounded-lg cursor-pointer"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="px-3 py-2 text-secondary hover:bg-primary/50 hover:text-white rounded-lg cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
