import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'What We Do', id: 'services' },
    { label: 'Approach', id: 'approach' },
    { label: 'Work', id: 'work' },
    { label: 'Insights', id: 'insights' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#111318]/6 shadow-[0_4px_20px_-8px_rgba(17,19,24,0.05)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-button"
          onClick={() => handleLinkClick('hero')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064BAE] rounded-md transition-opacity hover:opacity-90"
          aria-label="DoubleDiverge Home"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-links"
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064BAE] ${
                  isActive
                    ? 'text-[#064BAE] bg-[#064BAE]/8'
                    : 'text-[#111318]/75 hover:text-[#111318] hover:bg-[#111318]/4'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-cta-conversation"
            onClick={() => handleLinkClick('contact')}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#064BAE] hover:bg-[#053d8e] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_4px_14px_rgba(6,75,174,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#064BAE]"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111318] hover:bg-[#111318]/5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064BAE]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#FAFAF9] border-b border-[#111318]/10 px-6 pt-4 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-left px-4 py-2.5 text-base font-medium text-[#111318] hover:bg-[#064BAE]/8 hover:text-[#064BAE] rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3">
              <button
                id="mobile-cta-conversation"
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-[#064BAE] hover:bg-[#053d8e] rounded-xl shadow-sm transition-all"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
