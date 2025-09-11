import React from 'react';
import { Link } from 'react-router-dom';
import navcofi from "../../public/Co-Fi-removebg-preview.png";
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col">
            {/* Logo Container */}
            <div className="mb-8">
              <img 
                src={navcofi} 
                alt="Co-Fi Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            
            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mb-8 flex-grow">
              Co-Fi isn't just coffee. It's a pause, a recharge, a moment of zen in the chaos of Montreal. Inspired by rituals from around the world.
            </p>
            
            {/* Social Media - Aligned to bottom */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex flex-col mt-20">
            <h3 className="text-lg font-semibold mb-6 text-white">The Co-Fi House</h3>
            <div className="space-y-4 text-white/75 text-sm flex-grow">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-white/60" />
                <div className="leading-relaxed">
                  <p>1234 Boulevard Rd</p>
                  <p>Cleveland, OH 44130</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-white/60" />
                <p>(800) 291-7809</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-white/60" />
                <div className="leading-relaxed">
                  <p>Open Monday - Friday</p>
                  <p>6am - 2pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col mt-20">
            <h3 className="text-lg font-semibold mb-6 text-white">Explore</h3>
            <ul className="space-y-3 text-white/75 text-sm flex-grow">
              <li>
                <Link 
                  to="/products" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Explore Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/story" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/recipes" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link 
                  to="/partners" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col mt-20">
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3 text-white/75 text-sm flex-grow">
              <li>
                <Link 
                  to="/blog" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Terms & Policies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm order-2 md:order-1">
              ©{currentYear} Co-Fi House. All Rights Reserved.
            </p>
            <div className="flex space-x-8 text-white/60 text-sm order-1 md:order-2">
              <a href="#" className="hover:text-white/80 transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="hover:text-white/80 transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="hover:text-white/80 transition-colors duration-300">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;