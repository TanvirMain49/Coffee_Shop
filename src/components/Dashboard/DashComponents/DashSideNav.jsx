import React from "react";
import { Link } from "react-router-dom";
import SmallAdminPfp from "../DashCustomUI/SmallAdminPfp";
import DashButton from "../DashCustomUI/DashButton";
import logo from "../../../../public/Co-Fi-removebg-preview.png";

const navItems = [
  { label: "Users", path: "users" },
  { label: "Products", path: "products" },
  { label: "Orders", path: "orders" },
  { label: "Home", path: "/" },
  { label: "Edit Profile", path: "profile" },
  { label: "Log Out", path: "logout" },
];

const DashSideNav = () => {
  return (
    <div className="w-1/6 bg-[#e6d8c6] flex flex-col justify-between p-4">
      {/* Logo + Nav Links */}
      <nav className="flex flex-col space-y-4">
        <img className="w-24 h-24 object-contain mx-auto" src={logo} alt="Co-Fi Logo" />
        
        {navItems.map(({ label, path }) => (
          <Link key={path} to={path}>
            <DashButton variant="neutral" className="w-full">
              {label}
            </DashButton>
          </Link>
        ))}
      </nav>

      {/* Admin Profile at the bottom */}
      <div className="mt-6">
        <SmallAdminPfp />
      </div>
    </div>
  );
};

export default DashSideNav;
