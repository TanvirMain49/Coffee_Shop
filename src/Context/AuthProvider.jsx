/* eslint-disable react-refresh/only-export-components */
// context/AuthProvider.jsx
import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // -------------------
  // Register User
  // -------------------
  const userRegister = async ({ name, email, password, phone_number, address }) => {
    try {

      console.log(name, email, password, phone_number, address)
      const response = await axios.post("http://localhost:3000/register", {
        username: name,
        email,
        password,
        address,
        phone_number
      });
      const newUser = response?.data?.user;
      setUser(newUser);

      // ✅ Save to localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      return newUser;
    } catch (error) {
      throw error.response?.data?.message || "Registration failed";
    }
  };

  // -------------------
  // Login
  // -------------------
  const userLogin = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      const loggedInUser = response?.data?.user;
      setUser(loggedInUser);

      // ✅ Save to localStorage
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      return loggedInUser;
    } catch (error) {
      throw error.response?.data?.message || "Login failed";
    }
  };

  // -------------------
  // Logout
  // -------------------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const auth = {
    user,
    userRegister,
    userLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
