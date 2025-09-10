import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function CommonForm({
  formFields = [],
  formData = {},
  setFormData,
  handleSubmit,
  isSubmitting = false,
  className = "grid grid-cols-1 gap-4 py-10 w-full max-w-5xl",
  submitLabel = "Log In",
  submitButtonClassName = ""
}) {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderField = (field) => {
    const { name, type, label, placeholder, options, colspan = "col-span-1" } =
      field;

    return (
      <div key={name} className={`${colspan} flex flex-col gap-2`}>
        {label && <label className="text-sm font-medium">{label}</label>}

        {type === "select" && options ? (
          <Select
            onValueChange={(value) => handleChange(name, value)}
            value={formData[name] || ""}
          >
            <SelectTrigger className="w-full py-6">
              <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder || label}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className="w-full border rounded-md p-2"
          />
        ) : (
          <Input
            type={type}
            name={name}
            placeholder={placeholder || label}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className="py-6"
          />
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {formFields.map(renderField)}

      {/* ✅ Submit Button is now INSIDE the form */}
      <motion.div variants={fadeInUp} className="col-span-full mt-6">
        <Button
          type="submit"
          variant="primary"
          size="xl"
          // className="px-4 py-2 rounded-xl  font-medium shadow-md transition-colors duration-200"
          className={`px-4 py-2 rounded-xl font-medium shadow-md transition-colors duration-200 ${submitButtonClassName}`}
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitting ? (
              <motion.span
                key="label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {submitLabel}
              </motion.span>
            ) : (
              <motion.div
                key="loading"
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </form>
  );
}
