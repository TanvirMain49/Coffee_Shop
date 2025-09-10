import React from "react";
import CommonForm from "..//../Custom/CommonFrom"; // adjust path
import { Button } from "../../ui/button"; // optional for extra buttons

const AddUserForm = ({ onAddUser, onClose }) => {
  // Define fields for the user form
  const userFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter full name",
      colspan: "col-span-2",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      colspan: "col-span-2",
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      colspan: "col-span-2",
      options: [
        { value: "Admin", label: "Admin" },
        { value: "Editor", label: "Editor" },
        { value: "Viewer", label: "Viewer" },
      ],
    },
  ];

  const handleSubmit = (formData) => {
    if (!formData.name || !formData.email) return; // optional validation
    onAddUser(formData);
    onClose(); // close form after adding
  };

  return (
    <div className="mb-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Add New User</h3>
      <CommonForm
        fields={userFields}
        className="grid grid-cols-1 sm:grid-cols-6 gap-4"
        onSubmit={handleSubmit}
      />
      <div className="flex gap-3 mt-4 justify-end">
        <button onClick={onClose} className="px-4 py-2 text-gray-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddUserForm;
