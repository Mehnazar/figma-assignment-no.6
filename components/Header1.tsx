import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className=" bg-[#F7F7F7] border-b border-[#676767] flex flex-col"
      style={{
        width: "1280px",
        top: "170px",
        left: "100px",
        padding: "0 64px",
        opacity: "1", // Set to 1 for visibility
      }}
    >
      {/* Section 1: Contact Information and Social Media */}
      <div className="flex items-center justify-between h-[72px]">
        {/* Left Section: Phone Number and Email */}
        <div className="flex items-center space-x-6 flex-1">
          <Link
            href="tel:956742455678"
            className="text-sm text-gray-800 hover:text-blue-600"
          >
            Phone Number: 956 742 455 678
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="mailto:info@ddsgnr.com"
            className="text-sm text-gray-800 hover:text-blue-600"
          >
            Email: info@ddsgnr.com
          </Link>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <FaFacebookF className="text-gray-700 hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="text-gray-700 hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
          <FaLinkedin className="text-gray-700 hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
       </header>
  );
}
