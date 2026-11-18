import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { toggleSound, isSoundEnabled, playClickSound } from '../utils/audio';

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playClickSound();
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#experience' },
    { label: 'Honors', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4 sm:py-5 ${
          scrolled ? 'backdrop-blur-md bg-[#090c0a]/80 py-3 sm:py-4 border-b border-[#87a986]/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={playClickSound}
            data-cursor-text="TOP"
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7e142e] via-[#4d0a1b] to-[#121913] border border-[#a31d3d]/50 flex items-center justify-center font-syne font-bold text-sm tracking-wider text-[#f0ebe1] shadow-lg shadow-[#7e142e]/20 group-hover:scale-105 transition-transform">
              RS
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-bold text-sm tracking-widest text-[#f0ebe1] group-hover:text-[#87a986] transition-colors">
                R SURABHI
              </span>
              <span className="font-mono text-[10px] text-[#87a986]/70 uppercase tracking-wider hidden sm:block">
                AI & Data Science Eng.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-panel border border-[#87a986]/15 shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={playClickSound}
                  data-cursor-text="GOTO"
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-[#f0ebe1] font-semibold'
                      : 'text-[#d5cbba]/70 hover:text-[#f0ebe1]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-[#7e142e]/80 to-[#a31d3d]/80 rounded-full -z-10 shadow-sm border border-[#a31d3d]/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Sound Toggle & Contact Button */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Disable UI sound' : 'Enable UI sound'}
              className="w-9 h-9 rounded-full glass-panel border border-[#87a986]/20 flex items-center justify-center text-[#d5cbba] hover:text-[#f0ebe1] hover:border-[#87a986]/50 transition-all cursor-pointer"
              data-cursor-text="AUDIO"
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-[#87a986]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#d5cbba]/50" />
              )}
            </button>

            {/* Let's Talk CTA (Inspired by Portix Willson design) */}
            <a
              href="#contact"
              onClick={() => {
                playClickSound();
                if (onContactClick) onContactClick();
              }}
              data-cursor-text="TALK"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7e142e] to-[#a31d3d] text-[#f0ebe1] text-xs font-mono font-semibold tracking-wider uppercase border border-[#a31d3d]/60 shadow-lg shadow-[#7e142e]/30 hover:shadow-[#a31d3d]/50 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#f0ebe1] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#090c0a]/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full text-center">
              <span className="font-mono text-xs text-[#87a986] tracking-widest uppercase">
                // NAVIGATION
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    playClickSound();
                    setMobileMenuOpen(false);
                  }}
                  className="font-syne text-3xl font-bold text-[#f0ebe1] hover:text-[#87a986] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-[#87a986]/20 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => {
                    playClickSound();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-full bg-[#7e142e] text-[#f0ebe1] font-mono text-xs uppercase tracking-widest text-center"
                >
                  Initiate Conversation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
