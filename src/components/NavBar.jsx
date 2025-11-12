import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { id: 1, name: "New to the UK?" },
    { id: 2, name: "Car" },
    { id: 3, name: "Van" },
    { id: 4, name: "Car finance" },
    { id: 5, name: "Our story" },
    { id: 6, name: "Refer a friend" },
    { id: 7, name: "Blog" },
    { id: 8, name: "Help" },
  ];

  return (
    <nav className="w-full bg-[#f1e9dc] shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center h-[80px] px-5 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500 cursor-pointer">
          BeSure
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-neutral-800 font-medium">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-pink-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-neutral-300 hover:bg-neutral-400 px-6 py-2 rounded-full font-medium transition-colors">
            Claims
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f1e9dc] flex flex-col items-center gap-4 py-6 text-neutral-800 font-medium">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-neutral-300 px-6 py-2 rounded-full font-medium">
              Claims
            </button>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
