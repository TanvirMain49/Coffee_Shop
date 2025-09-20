import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navcofi from "../../public/Co-Fi-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ShoppingCart, Coffee, LayoutDashboard, User, LogOut, Menu, X } from "lucide-react";
import useAuth from "@/hook/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.trim().split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#e6d8c6] shadow-lg border-b">
      <div className="max-w-[1510px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                src={navcofi}
                alt="Co-Fi Logo"
              />
              <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="ml-2 text-2xl font-bold text-primary hidden sm:block">
              Co-Fi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/coffees"
              className="flex items-center space-x-2 text-primary hover:text-primary/70 font-medium transition-colors duration-200 group"
            >
              <Coffee className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Coffees</span>
            </Link>

            <Link
              to="/cart"
              className="flex items-center space-x-2 text-primary hover:text-primary/70 font-medium transition-colors duration-200 group relative"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Cart</span>
            </Link>

            {user && user.role === "admin" && (
              <Link
                to="/admin/users"
                className="flex items-center space-x-2 text-primary hover:text-primary/70 font-medium transition-colors duration-200 group"
              >
                <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Dashboard</span>
              </Link>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/profile" className="group">
                  <Avatar className="w-10 h-10 border-2 border-primary hover:border-primary/70 transition-colors duration-200 group-hover:shadow-lg">
                    <AvatarImage
                      src={user.profilePicture}
                      alt={user.username || user.name}
                    />
                    <AvatarFallback className="bg-primary text-white font-semibold text-sm">
                      {getInitials(user.name || user.username)}
                    </AvatarFallback>
                  </Avatar>
                </Link>

                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="hidden md:flex items-center space-x-2 border-primary text-primary hover:bg-primary/10 hover:border-primary/70 transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 hover:border-primary/70 transition-all duration-200"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-200">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/coffees"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-primary hover:text-primary/70 font-medium py-2 transition-colors duration-200"
              >
                <Coffee className="w-5 h-5" />
                <span>Coffees</span>
              </Link>

              <Link
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-primary hover:text-primary/70 font-medium py-2 transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </Link>

              {user && user.role === "admin" && (
                <Link
                  to="/admin/users"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-primary hover:text-primary/70 font-medium py-2 transition-colors duration-200"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
              )}

              {user ? (
                <div className="pt-4 border-t space-y-3">
                  <Link
                    to="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-primary hover:text-primary/70 font-medium py-2 transition-colors duration-200"
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 text-destructive hover:text-destructive/80 font-medium py-2 transition-colors duration-200 w-full text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 hover:border-primary/70 transition-all duration-200"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-200">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
