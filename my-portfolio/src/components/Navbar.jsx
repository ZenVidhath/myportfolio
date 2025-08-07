import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variants for mobile menu animation
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  };

  // Variants for individual menu items (staggered animation)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <nav className="fixed w-full z-50 py-3 px-4 md:py-4 md:px-6 flex justify-between items-center bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700">
      {/* Logo or Name */}
      <motion.a
        href="#home" // Link to the Hero section
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Portfolio
      </motion.a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <motion.a
          href="#home"
          className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg"
          whileHover={{ y: -2 }} // Subtle lift on hover
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg"
          whileHover={{ y: -2 }}
        >
          About
        </motion.a>
        <motion.a
          href="#skills" // Link to the Skills section
          className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg"
          whileHover={{ y: -2 }}
        >
          Skills
        </motion.a>
        <motion.a
          href="#projects"
          className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg"
          whileHover={{ y: -2 }}
        >
          Projects
        </motion.a>
          <motion.a
          href="#certifications"
          className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg"
          whileHover={{ y: -2 }}
        >
          Certifications
        </motion.a>

        
        <motion.a
          href="#contact"
          className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg"
          whileHover={{ y: -2 }}
        >
          Contact
        </motion.a>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="md:hidden text-white focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.a
              href="#home"
              className="text-white text-3xl font-bold hover:text-blue-400 transition-colors"
              variants={itemVariants}
              onClick={toggleMenu}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-white text-3xl font-bold hover:text-blue-400 transition-colors"
              variants={itemVariants}
              onClick={toggleMenu}
            >
              About
            </motion.a>
            <motion.a
              href="#skills"
              className="text-white text-3xl font-bold hover:text-blue-400 transition-colors"
              variants={itemVariants}
              onClick={toggleMenu}
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              className="text-white text-3xl font-bold hover:text-blue-400 transition-colors"
              variants={itemVariants}
              onClick={toggleMenu}
            >
              Projects
            </motion.a>


            <motion.a
              href="#certifications"
              className="text-white text-3xl font-bold hover:text-blue-400 transition-colors"
              variants={itemVariants}
              onClick={toggleMenu}
            >
              Certifications
            </motion.a>
            <motion.a
              href="#contact"
              className="text-white text-3xl font-bold hover:text-blue-400 transition-colors"
              variants={itemVariants}
              onClick={toggleMenu}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
