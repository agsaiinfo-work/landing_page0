import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, FileCheck2, Database } from 'lucide-react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface SecuritySectionProps {
  lang: Language;
  theme: Theme;
  onOpenConsultation?: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({
  lang,
  theme,
}) => {
  const t = content[lang].security;
  const isDark = theme === 'dark';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Lock':
        return <Lock className="w-5 h-5" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="security"
      className={`py-20 sm:py-24 border-t transition-colors duration-250 ${
        isDark ? 'border-[#B9C2D6]/15' : 'border-[#12479e]/10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span
            className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {t.tag}
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              className={`p-7 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                isDark
                  ? 'bg-[rgba(252,255,255,0.04)] border-[#B9C2D6]/15 hover:border-[#B9C2D6]/30'
                  : 'bg-[#FFFFFF] border-[#12479e]/10 hover:border-[#12479e]/30 shadow-xs'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            >
              <div>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                    isDark
                      ? 'bg-white/10 text-[#B9C2D6] border border-[#B9C2D6]/20'
                      : 'bg-[#64748b]/10 text-[#64748b] border border-[#12479e]/20'
                  }`}
                >
                  {getIcon(badge.iconName)}
                </div>
                <div
                  className={`text-xs font-mono mb-2 font-semibold ${
                    isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                  }`}
                >
                  {badge.standard}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                  }`}
                >
                  {badge.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                  }`}
                >
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

