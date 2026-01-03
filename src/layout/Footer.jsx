import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full max-w-full bg-white text-[#252B42] overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 pb-8 border-b border-gray-200">
          <div className="text-2xl md:text-3xl font-bold text-[#252B42] mb-4 md:mb-0">Bandage</div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#23A6F0] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#23A6F0] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#23A6F0] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="flex flex-wrap gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="w-[calc(50%-12px)] md:w-[calc(20%-16px)]">
            <h3 className="font-semibold text-[#252B42] mb-4 md:mb-6 text-sm md:text-base">Company Info</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#737373]">
              <li>
                <Link to="/about" className="hover:text-[#252B42] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/carrier" className="hover:text-[#252B42] transition-colors">Carrier</Link>
              </li>
              <li>
                <Link to="/hiring" className="hover:text-[#252B42] transition-colors">We are hiring</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#252B42] transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-[calc(50%-12px)] md:w-[calc(20%-16px)]">
            <h3 className="font-semibold text-[#252B42] mb-4 md:mb-6 text-sm md:text-base">Legal</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#737373]">
              <li>
                <Link to="/about" className="hover:text-[#252B42] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/carrier" className="hover:text-[#252B42] transition-colors">Carrier</Link>
              </li>
              <li>
                <Link to="/hiring" className="hover:text-[#252B42] transition-colors">We are hiring</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#252B42] transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="w-[calc(50%-12px)] md:w-[calc(20%-16px)]">
            <h3 className="font-semibold text-[#252B42] mb-4 md:mb-6 text-sm md:text-base">Features</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#737373]">
              <li>
                <Link to="/business-marketing" className="hover:text-[#252B42] transition-colors">Business Marketing</Link>
              </li>
              <li>
                <Link to="/user-analytic" className="hover:text-[#252B42] transition-colors">User Analytic</Link>
              </li>
              <li>
                <Link to="/live-chat" className="hover:text-[#252B42] transition-colors">Live Chat</Link>
              </li>
              <li>
                <Link to="/unlimited-support" className="hover:text-[#252B42] transition-colors">Unlimited Support</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-[calc(50%-12px)] md:w-[calc(20%-16px)]">
            <h3 className="font-semibold text-[#252B42] mb-4 md:mb-6 text-sm md:text-base">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#737373]">
              <li>
                <Link to="/ios-android" className="hover:text-[#252B42] transition-colors">IOS & Android</Link>
              </li>
              <li>
                <Link to="/watch-demo" className="hover:text-[#252B42] transition-colors">Watch a Demo</Link>
              </li>
              <li>
                <Link to="/customers" className="hover:text-[#252B42] transition-colors">Customers</Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-[#252B42] transition-colors">API</Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="w-[calc(50%-12px)] md:w-[calc(20%-16px)]">
            <h3 className="font-semibold text-[#252B42] mb-4 md:mb-6 text-sm md:text-base">Get In Touch</h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 text-[#252B42] rounded text-sm focus:outline-none focus:border-[#23A6F0]"
                />
                <button className="bg-[#23A6F0] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1e8fc7] transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-[#737373]">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-[#737373] text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

