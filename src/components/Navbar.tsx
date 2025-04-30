
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-4 sm:px-8 ${
        isScrolled ? 'bg-portfolio-navy/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="text-portfolio-teal text-xl font-bold">
          DEV<span className="text-portfolio-white">FOLIO</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
            >
              <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
          >
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-teal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 top-16 bg-portfolio-light-navy/95 flex flex-col items-center justify-center space-y-8 backdrop-blur-sm">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xl text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
          >
            Resume
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
