
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Catalogue', path: '/catalog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-black shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined font-bold">bolt</span>
          </div>
          <span className="text-xl font-black tracking-tight uppercase">Skict <span className="text-primary">Agency</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/cart" className="relative group">
            <div className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-black size-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-b border-white/10 px-6 py-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/cart" 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest"
          >
            Panier ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
