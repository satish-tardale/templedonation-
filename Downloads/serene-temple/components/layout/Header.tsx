
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onDonateClick: () => void;
  onLoginClick: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-dark hover:text-primary transition-colors duration-300 font-medium tracking-wide">
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ onDonateClick, onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#campaigns", label: "Campaigns" },
    { href: "#events", label: "Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="font-serif text-2xl font-bold text-dark">Sanctuary</span>
          </a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={onLoginClick} className="text-dark hover:text-primary transition-colors duration-300 font-medium">
              Login
            </button>
            <button onClick={onDonateClick} className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Donate
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
            <button onClick={onLoginClick} className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2">
              Login
            </button>
            <button onClick={onDonateClick} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md w-4/5 text-center">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
   