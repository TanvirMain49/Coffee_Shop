import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Users, 
  Package, 
  ShoppingCart, 
  Home, 
  User, 
  LogOut,
  Coffee
} from "lucide-react";
import SmallAdminPfp from "../DashCustomUI/SmallAdminPfp";
import logo from "../../../../public/Co-Fi-removebg-preview.png";

const navItems = [
  { label: "Users", path: "/admin/users", icon: Users },
  { label: "Products", path: "/admin/products", icon: Package },
  { label: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { label: "Home", path: "/", icon: Coffee },
];

const profileItems = [
  { label: "Profile", path: "/profile", icon: User },
  { label: "Log Out", path: "/logout", icon: LogOut },
];

const DashSideNav = () => {
  const location = useLocation();

  const NavItem = ({ item, isActive }) => {
    const Icon = item.icon;
    
    return (
      <Link to={item.path} className="group">
        <div className={`
          flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out
          ${isActive 
            ? 'bg-white text-primary shadow-lg transform scale-105' 
            : 'text-white hover:bg-white/10 hover:translate-x-2'
          }
        `}>
          <Icon 
            size={20} 
            className={`
              transition-all duration-300
              ${isActive ? 'text-primary' : 'text-white group-hover:text-white'}
            `} 
          />
          <span className="font-medium text-sm tracking-wide">
            {item.label}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-72 bg-gradient-to-b from-primary via-primary to-primary/90 flex flex-col justify-between p-6 h-screen sticky top-0 shadow-2xl">
      {/* Header Section */}
      <div className="flex flex-col space-y-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-3 py-4 border-b border-white/20">
          <div className="relative">
            <img 
              className="w-20 h-20 object-contain drop-shadow-lg" 
              src={logo} 
              alt="Co-Fi Logo" 
            />
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-lg tracking-wide">Co-Fi Admin</p>
            <p className="text-white/70 text-xs">Dashboard Panel</p>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col space-y-2">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 px-2">
            Navigation
          </p>
          {navItems.map((item) => (
            <NavItem 
              key={item.path} 
              item={item} 
              isActive={location.pathname === item.path}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4">
        {/* Profile Actions */}
        <div className="border-t border-white/20 pt-4">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3 px-2">
            Account
          </p>
          {profileItems.map((item) => (
            <NavItem 
              key={item.path} 
              item={item} 
              isActive={location.pathname === item.path}
            />
          ))}
        </div>

        {/* Admin Profile */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
          <SmallAdminPfp />
        </div>
      </div>
    </div>
  );
};

export default DashSideNav;