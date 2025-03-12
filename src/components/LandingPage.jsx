import React, { useState } from "react";
import { Menu, X, User, Code, Folder, Mail, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide">KARTIKEY</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link 
            to="ABOUT" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
          >
            <User size={20} /> <span>ABOUT</span>
          </Link>
          <Link 
            to="SKILLS" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
          >
            <Code size={20} /> <span>SKILLS</span>
          </Link>
          <Link 
            to="PROJECTS" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
          >
            <Folder size={20} /> <span>PROJECTS</span>
          </Link>
          <Link 
            to="CONTACT" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
          >
            <Mail size={20} /> <span>CONTACT</span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} className="text-gray-300" /> : <Menu size={32} className="text-gray-300" />}
        </button>
      </div>
      
      {/* Mobile Menu with Enhanced Framer Motion */}
      <motion.div 
        initial={{ x: "-100%", opacity: 0 }} 
        animate={{ x: isOpen ? "0%" : "-100%", opacity: isOpen ? 1 : 0 }} 
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-gray-900 bg-opacity-95 flex flex-col items-start pl-10 pt-20 space-y-8 text-2xl font-semibold"
      >  
        <button className="absolute top-6 right-6 text-gray-300 hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>
          <X size={36} />
        </button>
        
        {/* Mobile Links */}
        <Link 
          to="ABOUT" 
          smooth={true} 
          duration={500} 
          className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
        >
          <User size={24} /> <span>ABOUT</span>
        </Link>
        <Link 
          to="SKILLS" 
          smooth={true} 
          duration={500} 
          className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
        >
          <Code size={24} /> <span>SKILLS</span>
        </Link>
        <Link 
          to="PROJECTS" 
          smooth={true} 
          duration={500} 
          className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
        >
          <Folder size={24} /> <span>PROJECTS</span>
        </Link>
        <Link 
          to="CONTACT" 
          smooth={true} 
          duration={500} 
          className="hover:text-gray-400 transition duration-300 flex items-center space-x-2"
        >
          <Mail size={24} /> <span>CONTACT</span>
        </Link>
        
        {/* Social Icons */}
        <div className="mt-8 flex space-x-6 text-gray-400">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Linkedin size={28} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FileText size={28} />
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default LandingPage;
