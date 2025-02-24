import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState("home");

  return (
    <nav className="p-4 w-full shadow-md shadow-zinc-500 border-b mb-3 border-zinc-600 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl lg:text-4xl font-bold">
          WorldAtlas
        </Link>
        {/* Hamburger Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:space-x-6 lg:text-xl absolute md:static z-10 bg-[#202020] md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in ${
            isOpen ? "top-16" : "top-[-380px]"
          } md:top-0`}
        >
          <div
            className={`p-4 md:px- md:py-1 border-b border-white md:border-none ${
              isActive == "home" && "text-blue-500"
            } hover:bg-zinc-700 rounded`}
            onClick={() => {
              setIsActive("home");
              setIsOpen(false);
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`p-4 md:px- md:py-1 border-b border-white md:border-none ${
              isActive == "about" && "text-blue-500"
            } hover:bg-zinc-700 rounded`}
            onClick={() => {
              setIsActive("about");
              setIsOpen(false);
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className={`p-4 md:px- md:py-1 border-b border-white md:border-none ${
              isActive == "country" && "text-blue-500"
            } hover:bg-zinc-700 rounded`}
            onClick={() => {
              setIsActive("country");
              setIsOpen(false);
              navigate("/country");
            }}
          >
            country
          </div>
          <div
            className={`p-4 md:px- md:py-1 border-b border-white md:border-none ${
              isActive == "contact" && "text-blue-500"
            } hover:bg-zinc-700 rounded`}
            onClick={() => {
              setIsActive("contact");
              setIsOpen(false);
              navigate("/contact");
            }}
          >
            contact
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
