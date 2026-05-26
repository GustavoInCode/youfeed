import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="20" width="120" height="88" rx="24" ry="24" fill="var(--color-brand-primary)"/>
    <circle cx="64" cy="64" r="32" fill="#FFFFFF"/>
    <circle cx="64" cy="64" r="12" fill="var(--color-brand-primary)"/>
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
    <header className="header glass-panel">
      <div className="container header-container">
        <div className="header-inner">
          <a href="/#" className="logo-group">
            <div className="logo-icon-wrap">
              <Logo className="logo-svg" />
            </div>
            <span className="logo-text">YouFeed</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <Download size={16} />
              Instalar Grátis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn-wrap">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="mobile-nav"
          >
            <div className="mobile-nav-inner">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="mobile-nav-link">
                  {link.name}
                </a>
              ))}
              <a href="https://chrome.google.com/webstore" className="btn btn-primary w-full justify-center">
                <Download size={16} />
                Instalar Grátis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
