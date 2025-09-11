/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CommonForm from "@/components/Custom/CommonFrom";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hook/useAuth";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Signup() {
  // ------------------------------
  // State to store form values
  // ------------------------------
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userRegister } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // ------------------------------
  // Signup Form Fields
  // ------------------------------
  const signupFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      colspan: "col-span-6",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      colspan: "col-span-6",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      colspan: "col-span-6",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter phone number",
      colspan: "col-span-3",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter address",
      colspan: "col-span-3",
    },
  ];

  // ------------------------------
  // Animation Variants
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
  // Form Submission Handler
  // ------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await userRegister({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        address: formData.address,
        phone_number: formData.phone,
      });
      toast.success("Signup successful ✅", {
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

      // alert("Signup successful ✅");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      <motion.div
        className="flex min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ---------------- Left Side: Signup Form ---------------- */}
        <motion.div
          className="w-2/5 flex items-center justify-center p-8 bg-white relative"
          variants={slideInLeft}
        >
          <motion.div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <motion.div className="text-center" variants={scaleIn}>
              <motion.img
                src="public/Co-Fi-removebg-preview.png"
                alt="CO-FI Logo"
                className="mx-auto mb-8 w-24 h-24 object-contain"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Header Text */}
            <motion.div className="text-center space-y-2" variants={fadeInUp}>
              <motion.h1 className="text-4xl font-bold text-primary mb-2">
                Welcome to CO-FI
              </motion.h1>
              <p className="text-secondary text-lg">
                Sign up to be part of our CO-FI family
              </p>
            </motion.div>

            {/* Signup Form */}
            <motion.div className="space-y-6">
              <CommonForm
                formFields={signupFields}
                className="grid grid-cols-6 gap-4"
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitLabel="Sign Up"
              />

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

              {/* Login Link */}
              <motion.p className="text-center text-gray-600">
                Already a member?{" "}
                <Link to="/login">
                  <motion.span
                    className="text-primary font-semibold"
                    whileHover={{
                      color: "#4b2e2e",
                      textDecoration: "underline",
                    }}
                  >
                    Login here
                  </motion.span>
                </Link>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------------- Right Side: Image + Quote ---------------- */}
        <motion.div
          className="relative w-3/5 overflow-hidden"
          variants={slideInRight}
        >
          <motion.img
            src="/Signup.jpg"
            alt="Coffee"
            className="h-full w-full object-cover"
          />
          <motion.div
            className="absolute bottom-10 right-10 text-right text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-2 text-secondary"
              whileHover={{ scale: 1.05 }}
            >
              Brew New Beginnings
            </motion.h2>
            <p className="text-lg opacity-90">
              Join CO-FI today and savor every sip with us
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
