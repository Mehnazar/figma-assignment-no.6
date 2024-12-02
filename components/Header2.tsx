"use client";
import React,{useState} from "react";
import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa";

import Link from "next/link"
export default function Header2(){  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    return(
        <div
        className="flex items-center justify-between md:px-10"
        style={{
          width: "1280px",
          height: "72px",
          padding: "0 64px",
          gap: "0px",
          background: "#F7F7F7",
          borderBottom: "1px solid #676767",
          opacity: "1", // Ensures visibility
          
        }}
      >
        {/* Left Section  */}
        <div className="flex justify-between"
        style={{
            width:"Hug(130.6px)",
            height:"41px",
            gap:"0px",
            opacity:"1",
               }}>
        <Image
          src="/images/image.svg"
          alt="logo"
          width={130.6}
          height={30.38}
          ></Image>
        </div>

        {/* Right Section of New Container */}
        
        <div
          className="flex items-center bg-white"
          style={{
            width: "Hug(64px)",
            height: "44px",
            gap: "32px",
            opacity: "1", // Ensures visibility


          }}
        >
          <button
          className="block md:hidden text-gray-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
          {/* Navigation Links */}
          {["Home", "Courses", "Services", "Achievements", "About Us", "Testimonials"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-800 text-sm p-2 gap-2 b-[1px] hover:text-blue-600"
              >
                {item}
              </Link>
            )
          )}

          {/* Sign In and Sign Up Buttons */}
          <button
    style={{
        
      width: "80px",
      height: "40px",
      padding: "8px 20px",
      gap: "8px",
      borderRadius: "5px",
      border: "1px solid #000000",
      background: "transparent", // Secondary style
      opacity: "1", // Visible
    }}
    className="fontFamily:Roboto text-sm text-black hover:bg-gray-100"
  >
    Login
  </button>
  {/* Sign Up Button */}
<button
  style={{
    width: "95px", // Specified width
    height: "40px", // Specified height
    gap: "8px",
    opacity: "1", // Ensures visibility
    background: "#000000", // Background color
    border: "1px", //
    borderRadius:5,
    padding: "8px 20px 8px 20 ", // Resets default padding
    textAlign: "center", // Align text to the left
    textUnderlinePosition: "from-font", // Underline position
    textDecorationSkipInk: "none", // Underline style
  }}
  className=" hover:text-blue-600"
>
  <span
    style={{
      fontFamily: "Roboto", // Font family
      fontSize: "16px", // Font size
      fontWeight: "400", // Font weight
      lineHeight: "24px", // Line height
      color:"white",

    }}
  >
    Sign Up
  </span>
</button>


     </div>
      </div>


  )}
