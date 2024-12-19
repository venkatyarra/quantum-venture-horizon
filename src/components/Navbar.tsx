import { motion } from 'framer-motion';
import { Tool, Menu, X, Plus, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Tool className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold text-primary">ToolShare</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#browse">Browse Tools</NavLink>
            <NavLink href="#my-tools">My Tools</NavLink>
            <NavLink href="#borrowed">Borrowed</NavLink>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Tool
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>

          <button 
            className="md:hidden text-foreground"
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
          className="md:hidden bg-background border-b"
        >
          <div className="px-4 py-4 space-y-4">
            <MobileNavLink href="#browse" onClick={() => setIsOpen(false)}>Browse Tools</MobileNavLink>
            <MobileNavLink href="#my-tools" onClick={() => setIsOpen(false)}>My Tools</MobileNavLink>
            <MobileNavLink href="#borrowed" onClick={() => setIsOpen(false)}>Borrowed</MobileNavLink>
            <div className="pt-4 border-t">
              <Button className="w-full flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Tool
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors"
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
    className="block text-muted-foreground hover:text-foreground transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;