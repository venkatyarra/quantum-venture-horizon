import { motion } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-quantum-dark/80 backdrop-blur-sm border-b border-quantum-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-quantum-primary" />
            <span className="text-xl font-semibold text-quantum-primary">Quantum Tech</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#applications">Applications</NavLink>
            <NavLink href="#future">Future</NavLink>
          </div>

          <button 
            className="md:hidden text-quantum-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-quantum-dark/95 border-b border-quantum-primary/20"
        >
          <div className="px-4 py-4 space-y-4">
            <MobileNavLink href="#overview" onClick={() => setIsOpen(false)}>Overview</MobileNavLink>
            <MobileNavLink href="#applications" onClick={() => setIsOpen(false)}>Applications</MobileNavLink>
            <MobileNavLink href="#future" onClick={() => setIsOpen(false)}>Future</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-gray-300 hover:text-quantum-primary transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href}
    className="block text-gray-300 hover:text-quantum-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;