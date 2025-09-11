/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CommonForm from "@/components/Custom/CommonFrom";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hook/useAuth";
import toast from "react-hot-toast";

export default function Login() {
  // ------------------------------
  // 🔹 State Management
  // ------------------------------
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userLogin } = useAuth();
  const navigate = useNavigate();

  // ------------------------------
  // 🔹 Form Fields Configuration
  // ------------------------------
  const loginFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      colspan: "col-span-6",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      colspan: "col-span-6",
    },
  ];

  // ------------------------------
  // 🔹 Animation Variants
  // ------------------------------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  // ------------------------------
  // 🔹 Submit Handler
  // ------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await userLogin({
        email: formData.email,
        password: formData.password,
      });

      toast.success("login successful ✅", {
        duration: 4000, // 4 seconds
        position: "top-right",
        style: {
          background: "#184227", // bg-primary color
          color: "#ffffff", // white text
          fontWeight: "bold",
          borderRadius: "0.5rem", // rounded corners like ShadCN buttons
          padding: "1rem 1.5rem",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ------------------------------
  // 🔹 JSX
  // ------------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <motion.div
        className="flex min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ---------------- Left Side ---------------- */}
        <motion.div
          className="relative w-3/5 overflow-hidden"
          variants={slideInLeft}
        >
          <motion.img
            src="/Login.jpg"
            alt="Coffee"
            className="h-full w-full object-cover"
          />

          {/* Quote Overlay */}
          <motion.div
            className="absolute bottom-10 left-10 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-2 text-white"
              whileHover={{ scale: 1.05 }}
            >
              Find Coffee
            </motion.h2>
            <p className="text-lg opacity-90">
              Find the best coffee to accompany your days
            </p>
          </motion.div>
        </motion.div>

        {/* ---------------- Right Side (Login Form) ---------------- */}
        <motion.div
          className="w-2/5 flex items-center justify-center p-8 bg-white relative"
          variants={slideInRight}
        >
          <motion.div
            className="w-full max-w-md space-y-8"
            variants={containerVariants}
          >
            {/* Logo */}
            <motion.div className="text-center" variants={scaleIn}>
              <motion.img
                src="public/Co-Fi-removebg-preview.png"
                alt="Co-Fi Logo"
                className="mx-auto mb-8 w-24 h-24 object-contain"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Welcome Text */}
            <motion.div className="text-center space-y-2" variants={fadeInUp}>
              <motion.h1 className="text-5xl font-bold text-primary mb-2">
                Welcome Back
              </motion.h1>
              <p className="text-secondary text-lg">
                Please login to your account
              </p>
            </motion.div>

            {/* Form */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <CommonForm
                formFields={loginFields}
                className="grid grid-cols-1 gap-4"
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />

              {/* Remember Me & Forgot Password */}
              <motion.div
                className="flex items-center justify-between text-sm"
                variants={fadeInUp}
              >
                <motion.label
                  className="flex items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <input
                    type="checkbox"
                    className="rounded border-secondary text-primary"
                  />
                  <span className="ml-2 text-secondary">Remember me</span>
                </motion.label>

                <motion.span
                  className="text-primary font-medium"
                  whileHover={{ color: "#5C3B3B", textDecoration: "underline" }}
                >
                  Forgot password?
                </motion.span>
              </motion.div>

              {/* Divider */}
              <motion.div className="relative" variants={fadeInUp}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <motion.span className="bg-white px-4 text-gray-500">
                    or
                  </motion.span>
                </div>
              </motion.div>

              {/* Sign Up */}
              <motion.p
                className="text-center text-gray-600"
                variants={fadeInUp}
              >
                New Coffee lover?{" "}
                <Link to="/signup">
                  <motion.span
                    className="text-primary font-semibold"
                    whileHover={{
                      color: "#4b2e2e",
                      textDecoration: "underline",
                    }}
                  >
                    Create Account
                  </motion.span>
                </Link>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
