import React from 'react';
import { motion } from 'motion/react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface HeroProps {
  lang: Language;
  theme: Theme;
  onOpenConsultation?: () => void;
  onScrollToDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  theme,
}) => {
  const t = content[lang].hero;
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-14 md:pt-40 md:pb-16 overflow-hidden transition-colors duration-250"
    >
      {/* Subtle background ambiance */}
      <div
        className={`absolute inset-0 pointer-events-none -z-10 ${
          isDark
            ? 'bg-[radial-gradient(circle_700px_at_50%_-10%,rgba(37,99,235,0.12),transparent_75%)]'
            : 'bg-[radial-gradient(circle_700px_at_50%_-10%,rgba(18,71,158,0.06),transparent_75%)]'
        }`}
      />

      <motion.div
        className="max-w-5xl mx-auto px-6 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Main Headline */}
        <h1
          id="hero-headline"
          className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.18] mb-6 max-w-4xl mx-auto text-center transition-colors duration-250 ${
            isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
          }`}
          style={{
            fontFamily: isAr
              ? "'Georgia Pro', 'Georgia', 'IBM Plex Sans Arabic', serif, sans-serif"
              : "'Georgia Pro', 'Georgia', serif",
          }}
        >
          {isAr ? (
            <>
              سيستم ذكاء اصطناعي لشركتك يرد، يبيع، يحجز، ويدير عملاءك{' '}
              <span dir="ltr" className="inline-block font-mono tracking-normal">
                24/7
              </span>
              .
            </>
          ) : (
            <>
              An AI system for your business that responds, sells, books, and manages your customers{' '}
              <span dir="ltr" className="inline-block font-mono tracking-normal">
                24/7
              </span>
              .
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className={`text-base sm:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-center transition-colors duration-250 ${
            isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
          }`}
          style={{
            fontFamily: isAr
              ? "'Georgia Pro', 'Georgia', 'IBM Plex Sans Arabic', serif, sans-serif"
              : "'Georgia Pro', 'Georgia', serif",
          }}
        >
          {t.subtitle}
        </p>
      </motion.div>
    </section>
  );
};

