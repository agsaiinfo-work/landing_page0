import React from 'react';
import { motion } from 'motion/react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface FooterProps {
  lang: Language;
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = content[lang].footer;
  const isDark = theme === 'dark';

  return (
    <footer
      id="main-footer"
      className={`py-16 border-t transition-colors duration-250 ${
        isDark
          ? 'border-[#B9C2D6]/15 bg-[#00063d]'
          : 'border-[#12479e]/10 bg-[#FCFFFF]'
      }`}
    >
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="mb-3">
              <a href="#" className="inline-block focus:outline-none select-none" aria-label="AGS AI Home">
                <img
                  src="/logo.png"
                  alt="AGS AI Logo"
                  className="h-9 md:h-10 w-auto object-contain select-none shrink-0"
                  loading="eager"
                  decoding="async"
                />
              </a>
            </div>
            <div
              className={`text-xs lg:text-sm max-w-sm space-y-1 leading-relaxed ${
                isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
              }`}
            >
              <p>{t.tagline1}</p>
              <p>{t.tagline2}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs">
            {t.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`transition-colors ${
                  isDark
                    ? 'text-[#B9C2D6] hover:text-[#FCFFFF]'
                    : 'text-[#12479e] hover:text-[#64748b]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* System Status & Copyright */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'border-[#B9C2D6]/15 text-[#B9C2D6]' : 'border-[#12479e]/10 text-[#64748b]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#12479e] animate-pulse" />
            <span>{t.systemStatus}</span>
          </div>

          <div>{t.rights}</div>
        </div>
      </motion.div>
    </footer>
  );
};
