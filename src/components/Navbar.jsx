import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navcofi from "../../public/Co-Fi-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useAuth from "@/hook/useAuth";


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-[#e6d8c6]">
      {/* Left Links */}
      <div className="flex gap-6">
        <Link to="/menu">MENU</Link>
        <Link to="/food">FOOD</Link>
        <Link to="/history">HISTORY</Link>
      </div>

      {/* Logo */}
      <Link to="/">
        <img className="w-24" src={navcofi} alt="Co-Fi Logo" />
      </Link>

      {/* Right Links */}
      <div className="flex gap-4 items-center">
        {/* Always visible links */}
        <Link to="/admin/users">
          <p>DASHBOARD</p>
        </Link>
        <Link to="/cart">
          <p>CART</p>
        </Link>

        {user ? (
          <>
            {/* Profile Avatar */}
            <Link to="/profile">
              <Avatar>
                {/* Replace AvatarImage src if backend provides a profile pic */}
                <AvatarImage
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center"
                  alt={user.username}
                />
                <AvatarFallback>{user.username}</AvatarFallback>
              </Avatar>
            </Link>

            {/* Sign Out */}
            <Button variant="primary" onClick={handleLogout}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="default">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
