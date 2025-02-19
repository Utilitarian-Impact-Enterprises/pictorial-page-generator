
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link 
      to="/about" 
      className="text-white hover:text-opacity-80 transition-colors"
      onClick={onClick}
    >
      About
    </Link>
    <Link 
      to="/portfolio" 
      className="text-white hover:text-opacity-80 transition-colors"
      onClick={onClick}
    >
      Portfolio
    </Link>
    <Link 
      to="/contact" 
      className="text-white hover:text-opacity-80 transition-colors"
      onClick={onClick}
    >
      Contact
    </Link>
    <Link 
      to="/engagement" 
      className="text-white hover:text-opacity-80 transition-colors"
      onClick={onClick}
    >
      Engagement
    </Link>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-portal-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-white text-xl font-semibold">Azie</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <NavLinks />
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-gradient-to-b from-portal-blue to-portal-purple border-none backdrop-blur-lg bg-opacity-95"
            >
              <nav className="flex flex-col space-y-8 mt-16 px-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-6 text-lg"
                >
                  <NavLinks onClick={() => setIsOpen(false)} />
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
