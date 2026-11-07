import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { BentoGrid } from './components/BentoGrid';
import { DualBenefitSection } from './components/DualBenefitSection';
import { SecuritySection } from './components/SecuritySection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

function getInitialLanguage(): Language {
  try {
    const saved = (localStorage.getItem('ags_lang') || localStorage.getItem('language')) as Language | null;
    if (saved === 'ar' || saved === 'en') {
      return saved;
    }
    const browserLang = (
      (typeof navigator !== 'undefined' && (navigator.language || (navigator as any).userLanguage)) ||
      ''
    ).toLowerCase();

    // If browser language starts with "ar" (e.g. ar, ar-EG, ar-SA), default to Arabic
    if (browserLang.startsWith('ar')) {
      return 'ar';
    }
    // For all other languages (English, French, German, etc.), default to English
    return 'en';
  } catch {
    return 'en';
  }
}

function getInitialTheme(): Theme {
  try {
    const saved = (localStorage.getItem('ags_theme') || localStorage.getItem('theme')) as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }

    // Check system color preferences using matchMedia
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return 'light';
    }
    // If system prefers dark OR no preference is set/detected: Default to "dark"
    return 'dark';
  } catch {
    return 'dark';
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>(undefined);

  // Sync theme with HTML class, colorScheme and localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ags_theme', theme);
      localStorage.setItem('theme', theme);
    } catch {}

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  // Sync document direction, lang attributes and localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ags_lang', lang);
      localStorage.setItem('language', lang);
    } catch {}

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (planId?: string) => {
    setPreselectedPlan(planId);
    setIsConsultationOpen(true);
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-250 ${
        isDark
          ? 'bg-[#00063d] text-[#B9C2D6] selection:bg-blue-600 selection:text-white'
          : 'bg-[#FCFFFF] text-[#64748b] selection:bg-[#12479e] selection:text-white'
      }`}
      style={{
        backgroundColor: isDark ? '#00063d' : '#FCFFFF',
      }}
    >
      {/* Top Navbar with Theme & Language switch */}
      <Navbar
        lang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          lang={lang}
          theme={theme}
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToDemo={handleScrollToDemo}
        />

        <InteractiveDemo
          lang={lang}
          theme={theme}
        />

        <BentoGrid
          lang={lang}
          theme={theme}
        />

        <DualBenefitSection
          lang={lang}
          theme={theme}
        />

        <SecuritySection
          lang={lang}
          theme={theme}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <PricingSection
          lang={lang}
          theme={theme}
          onSelectPlan={(planId) => handleOpenConsultation(planId)}
        />

        <FaqSection
          lang={lang}
          theme={theme}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        theme={theme}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        lang={lang}
        theme={theme}
        preselectedPlan={preselectedPlan}
      />
    </div>
  );
}
