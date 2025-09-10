// components/DashButton.js
import React from "react";
import * as motion from "motion/react-client";
import clsx from "clsx";

const variants = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400",
    secondary:
        "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400",
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
                "px-4 py-2 rounded-xl w-full font-medium shadow-md transition-colors duration-200",
                variants[variant]
            )}
        >
            {children}
        </motion.button>
    );
};

export default DashButton;
