import { useState } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-full flex flex-col overflow-x-hidden">
      {/* Top Bar - Sadece Desktop */}
      <div className="hidden md:flex bg-[#252B42] text-white text-sm h-[58px] items-center">
        <div className="container mx-auto px-4 flex justify-between items-center w-full max-w-[1439px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="font-bold">(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="font-bold">michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="font-bold ">Follow Us and get a chance to win 80% off</div>
          <div className="flex items-center gap-3">
            <span className="font-bold">Follow Us :</span>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <Youtube size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white h-[58px] flex items-center">
        <div className="container mx-auto px-6 md:px-4 w-full max-w-[1437px]">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <h3 className="text-2xl font-bold text-[#252B42] shrink-0">
              <Link to="/">Bandage</Link>
            </h3>

            {/* Desktop Menü */}
            <ul className="hidden md:flex items-center gap-4 text-sm text-[#737373] font-bold tracking-tight">
              <li><Link to="/" className="hover:text-[#252B42] transition-colors">Home</Link></li>
              <li>
                <Link to="/shop" className="hover:text-[#252B42] transition-colors flex items-center gap-1">
                  Shop
                  <span className="text-xs">▼</span>
                </Link>
              </li>
              <li><Link to="/about" className="hover:text-[#252B42] transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-[#252B42] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#252B42] transition-colors">Contact</Link></li>
              <li><Link to="/pages" className="hover:text-[#252B42] transition-colors">Pages</Link></li>
            </ul>

            {/* Sağ İkon Grubu */}
            <div className="flex items-center gap-5 md:gap-6">
              <div className="flex items-center gap-1 cursor-pointer text-[#252B42] md:text-[#23A6F0]">
                <Link to="/login" className="flex items-center gap-1">
                  <User size={24} className="md:w-4 md:h-4" />
                  <span className="hidden md:inline text-sm font-bold">Login / Register</span>
                </Link>
              </div>
              <div className="cursor-pointer text-[#252B42] md:text-[#23A6F0]">
                <button className="hover:opacity-80 transition-opacity">
                  <Search size={24} className="md:w-5 md:h-5" />
                </button>
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-[#252B42] md:text-[#23A6F0] relative">
                <button className="hover:opacity-80 transition-opacity">
                  <ShoppingCart size={24} className="md:w-5 md:h-5" />
                  <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </button>
              </div>
              <div className="hidden md:flex items-center gap-1 cursor-pointer text-[#23A6F0] relative">
                <button className="hover:opacity-80 transition-opacity">
                  <Heart size={20} />
                  <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </button>
              </div>
              <button
                className="md:hidden text-[#252B42] p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobil menü linkleri */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-8 py-20 text-3xl text-[#737373] font-normal`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/pages" onClick={() => setIsMenuOpen(false)}>Pages</Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-[#23A6F0]">Login / Register</Link>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button className="text-[#252B42]">
                <Search size={20} />
              </button>
              <button className="text-[#252B42] relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="text-[#252B42] relative">
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

