import React, { useState, useEffect } from "react";
import logo3 from "./asset/3.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Font Awesome Icons for Hamburger and Close
import "./App.css";

// header

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-50 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex">
          <img src={logo3} className="ml-7 w-14" alt="Logo"></img>
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden text-3xl text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:hidden items-center justify-center absolute top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-40 p-4 z-10`}
        >
          {/* Close button when the menu is open */}
          {isMenuOpen && (
            <div
              className="text-3xl text-white absolute top-4 right-4 md:hidden"
              onClick={toggleMenu}
            >
              <FaTimes />
            </div>
          )}

          <a
            href="#Home"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
            onClick={toggleMenu}
          >
            HOME
          </a>
          <a
            href="#About"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
            onClick={toggleMenu}
          >
            ABOUT ME
          </a>
          <a
            href="#Portfolio"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
            onClick={toggleMenu}
          >
            PORTFOLIO
          </a>
          <a
            href="#Certificate"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
            onClick={toggleMenu}
          >
            CERTIFICATION
          </a>
          <a
            href="#Contact"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
            onClick={toggleMenu}
          >
            CONTACT ME
          </a>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex flex-row md:space-x-16 items-center">
          <a
            href="#Home"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
          >
            HOME
          </a>
          <a
            href="#About"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
          >
            ABOUT ME
          </a>
          <a
            href="#Portfolio"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
          >
            PORTFOLIO
          </a>
          <a
            href="#Certificate"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
          >
            CERTIFICATION
          </a>
          <a
            href="#Contact"
            className="text-xl text-white font-Code p-2 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105 hover:font-bold"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </nav>
  );
}

export default App;
