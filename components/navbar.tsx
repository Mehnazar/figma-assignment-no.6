"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import frame from "../public/frame logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#F7F7F7] shadow-md">
      {/* Navbar container */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[32px] flex items-center">
            <Image src={frame} alt="Logo" width={32} height={32} />
          </div>
          <h1 className="text-xl font-bold font-inter text-black">Ddsgnr</h1> {/* Logo text color set to black */}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-gray-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-between w-full ml-10">
          <ul className="flex gap-8 ml-auto">
            <li>
              <a href="#" className="hover:text-gray-700 text-black"> {/* Link color set to black */}
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 text-black">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 text-black">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 text-black">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black-900 text-black">
                Testimonial
              </a>
            </li>
          </ul>
          <div className="flex gap-4 ml-6">
            <button className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200">
              Login
            </button>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-[72px] left-0 w-full bg-[#F7F7F7] shadow-lg z-50">
          <ul className="flex flex-col items-start p-4 gap-4">
            {/* Mobile Header Content */}
            <div className="w-full border-b pb-4">
              <p className="text-sm text-black"> {/* Phone number color set to black */}
                Phone Number: <span className="font-semibold">956 742 455 678</span>
              </p>
              <p className="text-sm mt-2 text-black"> {/* Email color set to black */}
                Email: <span className="font-semibold">info@ddsgnr.com</span>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook size={20} className="text-black" /> {/* Icon color set to black */}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} className="text-black" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter size={20} className="text-black" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={20} className="text-black" />
                </a>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <li>
              <a href="#" className="block py-2 hover:text-gray-700 text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700 text-black">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700 text-black">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700 text-black">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700 text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700 text-black">
                Testimonial
              </a>
            </li>

            {/* Mobile Buttons */}
            <div className="w-full flex flex-col gap-4 mt-4">
              <button className="w-full px-4 py-2 border border-black text-black rounded hover:bg-gray-200">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;