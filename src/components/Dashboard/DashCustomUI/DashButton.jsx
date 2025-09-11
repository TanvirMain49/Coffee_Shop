// components/DashButton.js
import React from "react";
import * as motion from "motion/react-client";
import clsx from "clsx";

const variants = {
  primary:
    "bg-be-primary text-white hover:bg-be-primary/90 dark:bg-be-primary dark:hover:bg-be-primary/90",
  secondary:
    "bg-beige text-white hover: bg-beige/90 dark:bg-beige dark:hover: bg-beige/90 text-black",
  neutral:
    "bg-white text-black hover:bg-slate-200 dark:bg-white dark:text-black dark:hover:bg-slate-200",
};

const DashButton = ({ children, variant = "primary", onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-xl w-full font-medium shadow-md transition-colors duration-200 text-black",
        variants[variant]
      )}
    >
      {children}
    </motion.button>
  );
};

export default DashButton;
