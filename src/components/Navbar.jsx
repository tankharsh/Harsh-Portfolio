import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="head-txt w-full text-white bg-[#12132A] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="text-2xl font-bold">Harsh's PortFolio</div>

          <div className="main-txt hidden md:flex space-x-8">
            <ul className="text-white flex gap-x-12">
              
              <li className="relative table-cell py-2"><a className="inline-block relative no-underline after-line" href="/">Home</a></li>
              <li className="relative table-cell py-2"><a className="inline-block relative no-underline after-line" href="#about">About</a></li>
              <li className="relative table-cell py-2"><a className="inline-block relative no-underline after-line" href="#skills">Skills</a></li>
              <li className="relative table-cell py-2"><a className="inline-block relative no-underline after-line" href="#project">Project</a></li>
             
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="main-txt md:hidden">
          <a href="#about" className="block px-4 py-2 hover:bg-purple-800">
            About
          </a>
          <a href="#skills" className="block px-4 py-2 hover:bg-purple-800">
          Skills
          </a>
          <a href="#project" className="block px-4 py-2 hover:bg-purple-800">
            Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
