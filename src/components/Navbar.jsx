import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="head-txt sticky w-full text-white bg-[#12132A] z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold"
          >
            Harsh's PortFolio
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
            className="main-txt hidden md:flex space-x-8"
          >
            <ul className="text-white flex gap-x-12">
              {["Home", "About", "Skills", "Project"].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative table-cell py-2"
                >
                  <a className="inline-block relative no-underline after-line" href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mobile Menu */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="md:hidden"
          >
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-txt md:hidden"
        >
          <a href="#about" className="block px-4 py-2 hover:bg-purple-800">
            About
          </a>
          <a href="#skills" className="block px-4 py-2 hover:bg-purple-800">
            Skills
          </a>
          <a href="#project" className="block px-4 py-2 mb-3 hover:bg-purple-800">
            Project
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
