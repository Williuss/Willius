import React, { useState, useEffect } from "react";
import logo3 from "./asset/3.png";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-50 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between text-3xl text-gray-300 p-1">
        <div className="flex">
          <img src={logo3} className="ml-7 w-14 mt-3 mb-2" alt="Logo"></img>
        </div>
        <div className="flex text-xl space-x-16 mr-16 mt-6 font-normal font-Code">
          <a
            href="#Home"
            className="hover:text-white cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shine-effect hover:font-bold"
          >
            HOME
          </a>
          <a
            href="#About"
            className="hover:text-white cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shine-effect hover:font-bold"
          >
            ABOUT ME
          </a>
          <a
            href="#Portfolio"
            className="hover:text-white cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shine-effect hover:font-bold"
          >
            PORTFOLIO
          </a>
          <a
            href="#Certificate"
            className="hover:text-white cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shine-effect hover:font-bold"
          >
            CERTIFICATION
          </a>
          <a
            href="#Contact"
            className="hover:text-white cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shine-effect hover:font-bold"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </nav>
  );
}

export default App;
