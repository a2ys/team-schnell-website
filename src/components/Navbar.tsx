import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      //@ts-ignore
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const transition = {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <div className="w-full z-10">
      <motion.div
        className="bg-transparent"
        animate={{
          backgroundColor: isOpen ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0)",
        }}
        transition={transition}
      >
        {/* Main Navbar */}
        <div className="flex justify-between items-center py-12 px-6 lg:px-12">
          <a
            href="/"
            className={`flex items-center font-bold no-underline transition-colors duration-300 ${
              isOpen ? "text-white" : "text-black"
            }`}
          >
            <img
              src={isOpen ? "./logo.svg" : "./logo-black.svg"}
              alt="Team Schnell Logo"
              className="w-10 h-10 transition-opacity duration-300"
            />
            <span className="text-2xl ml-1">Team Schnell</span>
          </a>
          <button
            className={`bg-transparent border-none p-1.5 rounded-full transition-all duration-300 ${
              isOpen ? "hover:bg-gray-900" : "hover:bg-gray-300"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
                <path
                  d="M4 8h16M4 16h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        <motion.div
          className="overflow-hidden bg-black text-white"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? menuHeight : 0 }}
          transition={transition}
        >
          <div
            ref={menuRef}
            className="grid grid-cols-1 lg:grid-cols-2 border-y border-white/10"
          >
            <div className="group border-b lg:border-r border-b-white/10 lg:border-r-white/10">
              <a
                href="/work"
                className="text-white no-underline text-3xl font-semibold block relative overflow-hidden group-hover:bg-white/5 transition-all duration-200"
              >
                <div className="relative text-4xl px-10 py-12 z-10">
                  Our Work
                </div>
              </a>
            </div>
            <div className="group">
              <a
                href="/about"
                className="text-white no-underline text-3xl font-semibold block relative overflow-hidden group-hover:bg-white/5 transition-all duration-200"
              >
                <div className="relative text-4xl px-10 py-12 z-10">
                  About Us
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
