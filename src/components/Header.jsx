import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 shadow-md border-b mb-3 border-zinc-600 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
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
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static z-10 bg-[#202020] md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in ${
            isOpen ? "top-16" : "top-[-380px]"
          } md:top-0`}
        >
          <li className=" p-4 md:px- md:py-1 border-b md:border-none hover:bg-zinc-700 rounded ">
            <Link to="/" onClick={() => setIsOpen(false)} >
              Home
            </Link>
          </li>
          <li className=" p-4 md:px- md:py-1 border-b md:border-none hover:bg-zinc-700 rounded ">
            <Link to="/about" onClick={() => setIsOpen(false)} >
              About
            </Link>
          </li>
          <li className=" p-4 md:px- md:py-1 border-b md:border-none hover:bg-zinc-700 rounded ">
            <Link to="/country" onClick={() => setIsOpen(false)} >
              country
            </Link>
          </li>
          <li className=" p-4 md:px- md:py-1 border-b md:border-none hover:bg-zinc-700 rounded   ">
            <Link to="/contact"  onClick={() => setIsOpen(false)} >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
