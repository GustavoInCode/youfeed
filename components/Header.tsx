
import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="20" width="120" height="88" rx="24" ry="24" fill="#7c3aed"/>
    <circle cx="64" cy="64" r="32" fill="#FFFFFF"/>
    <circle cx="64" cy="64" r="12" fill="#7c3aed"/>
  </svg>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Recursos', href: '/#features' },
    { name: 'Preços', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <a href="/#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">YouFeed</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-[#7c3aed] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white px-5 py-2.5 rounded-[12px] text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Instalar Grátis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2c2c2c] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://chrome.google.com/webstore"
                className="w-full bg-[#7c3aed] text-white px-5 py-3 rounded-[12px] text-center font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Instalar Grátis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
