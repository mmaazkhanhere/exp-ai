// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { text: "TheXP" },
    { text: "World Of The Machine" },
    { text: "Innovations & world first" },
    { text: "Team" },
    { text: "Roadmap" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`w-full transition-all duration-300 z-50 ${
          isScrolled ? "py-3 bg-gray-900 shadow-lg" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-[30px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-[60px] md:w-[75px] h-auto"
              alt="Logo"
              src="/logo.png"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div key={index} className="group">
                <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
                  {item.text}
                </p>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-300 mt-0.5"></div>
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer">
              <FaDiscord className="text-white w-5 h-5" />
            </div>
            <button className="text-sm w-[124px] h-[45px] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all rounded-lg font-medium">
              Mint Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 z-40 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6">
          <nav className="flex flex-col gap-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="text-gray-200 text-xl font-medium">{item.text}</p>
              </div>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer">
                <FaDiscord className="text-white w-6 h-6" />
              </div>
            </div>
            <button className="text-base w-full h-[50px] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all rounded-lg font-medium">
              Mint Now
            </button>
          </div>
        </div>
      </div>

      {/* Add padding to content when menu is open */}
      {isMenuOpen && <div className="h-20 md:hidden"></div>}
    </>
  );
};

export default Header;
