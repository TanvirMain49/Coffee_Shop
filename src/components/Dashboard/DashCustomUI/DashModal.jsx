import React from "react";
import { X } from "lucide-react";

const DashModal = ({
  isOpen,
  title,
  message,
  icon: Icon,
  iconBg = "#4B2E2E",
  iconText = "#fff",
  actions = [],
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform animate-in zoom-in-95 duration-200">
        {/* Icon */}
        {Icon && (
          <div
            className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4`}
            style={{ backgroundColor: iconBg }}
          >
            <Icon className="w-8 h-8" style={{ color: iconText }} />
          </div>
        )}

        {/* Title */}
        {title && (
          <h3 className="text-xl font-semibold text-[#1C1C1C] text-center mb-2">
            {title}
          </h3>
        )}

        {/* Message */}
        {message && (
          <p className="text-[#4B2E2E] text-center mb-6">{message}</p>
        )}

        {/* Actions */}
        <div className="flex gap-3 justify-center flex-wrap">
          {actions.map(({ label, onClick, style = {} }, idx) => (
            <button
              key={idx}
              onClick={onClick}
              className="px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              style={style}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DashModal;
