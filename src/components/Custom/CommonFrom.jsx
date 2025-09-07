import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"; // Custom Select component
import { Input } from "../ui/input"; // Custom Input component
import { Button } from "../ui/button"; // Custom Button component

/**
 * CommonForm component
 * A reusable form component that can render different types of input fields
 * including text, date, email, number, select dropdowns, and textarea.
 * It supports grid layout and dynamic column spans for each field.
 *
 * @param {Array} fields - Optional array of field configurations
 * @param {string} className - Optional className for the form grid layout
 */
export default function CommonForm({
  fields,
  className = "grid grid-cols-1 gap-4 py-10 w-full max-w-5xl", // default grid layout
}) {
  // Default fields if no "fields" prop is passed
  const defaultFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter username",
      colspan: "col-span-3", // span 3 columns in the grid
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
      colspan: "col-span-2",
    },
    {
      name: "theme",
      label: "Theme",
      type: "select",
      colspan: "col-span-2",
      options: [
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
        { value: "blue", label: "Blue" },
      ],
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      colspan: "col-span-2",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "number",
      placeholder: "Enter phone number",
      colspan: "col-span-2",
    },
    {
      name: "comments",
      label: "Comments",
      type: "textarea",
      placeholder: "Enter your comments",
      colspan: "col-span-6",
    },
  ];

  // Use provided fields prop or fallback to defaultFields
  const formFields = fields && fields.length > 0 ? fields : defaultFields;

  // State to store the values of the form fields
  const [formData, setFormData] = useState({});

  // --------------------------
  // Handle changes in Input or Textarea fields
  // --------------------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --------------------------
  // Handle changes in Select dropdowns
  // --------------------------
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // --------------------------
  // Handle form submission
  // --------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    console.log("Form Data:", formData);
    alert(JSON.stringify(formData, null, 2)); // show form data as JSON
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {formFields.map((field) => (
        <div
          key={field.name}
          className={`${field.colspan || "col-span-1"} flex flex-col gap-2`}
        >
          {/* Render the label for the field */}
          {field.label && (
            <label className="text-sm font-medium">{field.label}</label>
          )}

          {/* Render Select dropdown if type is select */}
          {field.type === "select" && field.options ? (
            <Select
              onValueChange={(value) => handleSelectChange(field.name, value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={field.placeholder || "Select an option"}
                />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : 
          /* Render textarea if type is textarea */
          field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder || field.label}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          ) : (
            /* Render Input for other types: text, date, email, number */
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder || field.label}
              defaultValue={formData[field.name] || ""}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      {/* Submit button */}
      {/* col-span-full ensures button takes full width of the grid container */}
      <div className="col-span-full flex justify-end mt-4">
        <Button type="submit" className="text-white">
          Submit
        </Button>
      </div>
    </form>
  );
}