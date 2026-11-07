import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: (newLang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
    >
      {/* Top Tagline Banner - At the absolute top of the page */}
      <div
        id="top-tagline-bar"
        className={`w-full py-1.5 px-4 text-center border-b transition-colors duration-250 flex items-center justify-center ${
          isDark
            ? 'bg-[#00063d] text-[#B9C2D6] border-[#B9C2D6]/15'
            : 'bg-[#FCFFFF] text-[#64748b] border-[#12479e]/10'
        }`}
      >
        <span
          className={`text-xs sm:text-[13px] font-semibold ${
            isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
          } ${
            lang === 'en' ? 'tracking-widest uppercase text-xs font-bold' : 'tracking-wide'
          }`}
        >
          {lang === 'ar' ? 'كل ثانية ليها أهميتها' : 'EVERY SECOND COUNTS'}
        </span>
      </div>

      <div
        className={`transition-all duration-250 ${
          isScrolled
            ? isDark
              ? 'bg-[#00063d]/95 backdrop-blur-md border-b border-[#B9C2D6]/15 shadow-lg shadow-black/20'
              : 'bg-[#FCFFFF]/95 backdrop-blur-md border-b border-[#12479e]/10 shadow-xs'
            : isDark
              ? 'bg-[#00063d]/85 backdrop-blur-xs'
              : 'bg-[#FCFFFF]/90 backdrop-blur-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 h-16 w-full flex items-center justify-between overflow-hidden">
          {/* Logo Container */}
          <div className="flex items-center shrink-0 h-10 me-3 md:me-6">
            <a
              href="#"
              id="brand-logo"
              className="flex items-center h-10 focus:outline-none select-none"
              aria-label="AGS AI Home"
            >
              <img
                src="/logo.png"
                alt="AGS AI Logo"
                className="h-10 w-auto object-contain shrink-0 relative -top-[3px]"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* Links Container */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center justify-center gap-2 lg:gap-5 text-xs lg:text-sm font-medium text-nowrap h-10 mx-auto px-2 lg:px-4"
          >
            {t.nav.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                className={`h-10 flex items-center whitespace-nowrap leading-none transition-colors duration-150 ${
                  idx === 0 ? 'font-medium' : ''
                } ${
                  isDark
                    ? 'text-[#B9C2D6] hover:text-[#FCFFFF]'
                    : 'text-[#12479e] hover:text-[#64748b] font-medium'
                }`}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Control Buttons Wrapper */}
          <div className="flex items-center gap-2 shrink-0 z-10 h-10 ms-auto md:ms-0">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className={`h-10 px-3 py-0 flex items-center justify-center border rounded-xl transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/[0.04] border-[#B9C2D6]/15 text-[#B9C2D6] hover:bg-white/10'
                  : 'bg-[#64748b]/[0.06] border-[#12479e]/10 text-[#64748b] hover:bg-[#64748b]/10'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'تفعيل الوضع الليلي'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#B9C2D6]" /> : <Moon className="w-4 h-4 text-[#64748b]" />}
            </button>

            {/* Language Switcher */}
            <div
              className={`h-10 px-3 py-0 flex items-center justify-center gap-2 text-xs font-medium border rounded-xl ${
                isDark
                  ? 'border-[#B9C2D6]/15 text-[#B9C2D6]'
                  : 'border-[#12479e]/10 text-[#64748b]'
              }`}
            >
              <button
                onClick={() => onToggleLang('ar')}
                className={`h-full flex items-center transition-colors cursor-pointer ${
                  lang === 'ar'
                    ? isDark
                      ? 'text-[#FCFFFF] font-bold'
                      : 'text-[#12479e] font-bold'
                    : 'hover:opacity-80'
                }`}
              >
                العربية
              </button>
              <span className="opacity-40">|</span>
              <button
                onClick={() => onToggleLang('en')}
                className={`h-full flex items-center transition-colors cursor-pointer ${
                  lang === 'en'
                    ? isDark
                      ? 'text-[#FCFFFF] font-bold'
                      : 'text-[#12479e] font-bold'
                    : 'hover:opacity-80'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden h-10 px-2.5 rounded-xl border flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-white/[0.04] border-[#B9C2D6]/15 text-[#B9C2D6] hover:bg-white/10'
                  : 'bg-[#64748b]/[0.06] border-[#12479e]/10 text-[#64748b] hover:bg-[#64748b]/10'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`md:hidden px-6 py-5 border-b flex flex-col gap-4 shadow-xl ${
            isDark
              ? 'bg-[#08092b] border-white/[0.08]'
              : 'bg-white border-[#12479e]/15'
          }`}
        >
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-1 font-medium ${
                isDark ? 'text-[#b9c2d6] hover:text-white' : 'text-[#64748b] hover:text-[#12479e]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
