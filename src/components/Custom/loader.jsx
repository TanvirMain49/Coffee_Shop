/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center py-20"
    >
      <div className="w-12 h-12 border-4 border-t-primary border-t-4 border-gray-200 rounded-full animate-spin"></div>
    </motion.div>
  );
};

export default Loader;
