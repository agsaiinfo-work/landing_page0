import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface FaqSectionProps {
  lang: Language;
  theme: Theme;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, theme }) => {
  const t = content[lang].faq;
  const isDark = theme === 'dark';
  const [openId, setOpenId] = useState<string | null>(t.items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className={`py-24 border-t transition-colors duration-250 ${
        isDark ? 'border-[#B9C2D6]/15' : 'border-[#12479e]/10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span
            className={`text-xs font-semibold tracking-wider block mb-2 ${
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

        {/* Minimal Accordion List */}
        <div
          className={`border-t divide-y ${
            isDark
              ? 'border-[#B9C2D6]/15 divide-[#B9C2D6]/15'
              : 'border-[#12479e]/10 divide-[#12479e]/10'
          }`}
        >
          {t.items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                className="py-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                <button
                  id={`faq-toggle-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left rtl:text-right gap-4 focus:outline-none cursor-pointer group"
                >
                  <span
                    className={`font-semibold text-right text-base md:text-lg hover:no-underline ${
                      isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-200 ${
                      isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                    } ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pr-2 pl-2">
                    <p
                      className={`text-sm md:text-base leading-relaxed ${
                        isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
