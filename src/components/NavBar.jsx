import React, { useState } from "react";
import { useAuthModal } from '../context/AuthModalContext';
import { auth } from '../api/apiClient';
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { openLoginModal } = useAuthModal();

  const menu = [
    { id: 1, name: "New to the UK?", path: "newtouk" },
    { id: 2, name: "Car", path: "car" },
    { id: 3, name: "Van", path: "van" },
    { id: 4, name: "Car finance", path: "carfinance" },
    { id: 5, name: "Our story", path: "ourstory" },
    { id: 6, name: "Refer a friend", path: "referafriend" },
    { id: 7, name: "Blog", path: "blog" },
    { id: 8, name: "Help", path: "help" },
  ];

  return (
    <motion.nav 
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg fixed top-0 left-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo with Image */}
        <motion.button
          type="button"
          onClick={() => { navigate({ to: '/' }); }}
          className="flex items-center gap-2 cursor-pointer bg-transparent border-0"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="Be Sure" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain max-w-full" />
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 md:gap-8 lg:gap-10 text-white font-medium text-sm md:text-base lg:text-lg">
          {menu.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => navigate({ to: `/${item.path}` })}
              className="transition-colors hover:text-blue-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <motion.button 
            className="bg-white/20 hover:bg-white/30 text-white px-3 sm:px-4 md:px-6 py-2 rounded-full font-medium transition-colors border border-white/30 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: '/claims' })}
          >
            Claims
          </motion.button>
          <motion.button 
            className="bg-white hover:bg-gray-50 text-blue-600 px-4 sm:px-6 py-2 rounded-full font-bold transition-colors shadow-md text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: '/getaquote' })}
          >
            Get a Quote
          </motion.button>

          {/* Auth button: show Logout when logged in, otherwise open Login modal */}
          {localStorage.getItem('token') ? (
            <motion.button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.03 }}
              onClick={() => {
                auth.logout();
                navigate({ to: '/' });
                // reload to update UI across app
                window.location.reload();
              }}
            >
              Logout
            </motion.button>
          ) : (
            <motion.button
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.03 }}
              onClick={() => openLoginModal()}
            >
              Login
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden cursor-pointer text-2xl text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="lg:hidden bg-blue-700 flex flex-col items-center gap-4 py-6 text-white font-medium border-t border-blue-600"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menu.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => {
                  navigate({ to: `/${item.path}` });
                  setMenuOpen(false);
                }}
                className="text-white transition-colors hover:text-blue-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="flex flex-col gap-3 mt-4 w-full px-8">
              <motion.button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-2 rounded-full font-medium w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate({ to: '/claims' });
                  setMenuOpen(false);
                }}
              >
                Claims
              </motion.button>
              <motion.button 
                className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-2 rounded-full font-medium w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate({ to: '/getaquote' });
                  setMenuOpen(false);
                }}
              >
                Get a Quote
              </motion.button>
              {/* Auth action for mobile menu */}
              {localStorage.getItem('token') ? (
                <motion.button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium w-full"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    auth.logout();
                    navigate({ to: '/' });
                    window.location.reload();
                  }}
                >
                  Logout
                </motion.button>
              ) : (
                <motion.button
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-medium w-full"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    openLoginModal();
                    setMenuOpen(false);
                  }}
                >
                  Login
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar; 