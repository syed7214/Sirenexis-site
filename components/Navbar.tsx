
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'py-4 glass shadow-sm' : 'py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center group z-50">
            <span className="text-2xl font-bold tracking-tighter text-sirenexis-green">
              Sirenexis<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">.</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-tight transition-colors duration-300 hover:text-sirenexis-green/70 ${location.pathname === link.path ? 'text-sirenexis-green underline underline-offset-4' : 'text-sirenexis-green'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-sirenexis-green text-sirenexis-cream rounded-full text-sm font-bold tracking-tight hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg shadow-sirenexis-green/10"
            >
              Start Trial
            </Link>
          </div>

          <button 
            className="md:hidden z-50 p-2 text-sirenexis-green focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-sirenexis-cream transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-5xl font-black tracking-tighter text-sirenexis-green transition-all duration-500 delay-${idx * 100} ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`text-5xl font-black tracking-tighter text-sirenexis-green/40 transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
            >
              Trial.
            </Link>
          </div>
          
          <div className="mt-auto pb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-sirenexis-green/40 mb-4">Inquiries</p>
            <p className="text-xl font-bold text-sirenexis-green">info@sirenexis.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
