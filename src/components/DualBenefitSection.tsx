import React from 'react';
import { motion } from 'motion/react';
import { Language, Theme } from '../types';

interface DualBenefitSectionProps {
  lang: Language;
  theme: Theme;
}

export const DualBenefitSection: React.FC<DualBenefitSectionProps> = ({
  lang,
  theme,
}) => {
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  return (
    <section
      id="experience"
      className={`py-20 sm:py-24 border-t transition-colors duration-250 ${
        isDark ? 'border-[#B9C2D6]/15' : 'border-[#12479e]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            className="w-full max-w-lg mx-auto lg:max-w-none overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="rounded-3xl overflow-hidden border border-[#12479e]/10 dark:border-[#B9C2D6]/15 shadow-2xl p-2 bg-[#FFFFFF] dark:bg-[rgba(252,255,255,0.04)] backdrop-blur-xs">
              <img
                src="/happy-owner.jpg"
                alt={
                  isAr
                    ? 'كل شخص سعيد. العميل و المالك'
                    : 'Everyone is Happy. The Client and The Owner'
                }
                className="w-full h-auto object-cover rounded-2xl dark:brightness-95 dark:contrast-[1.02] block"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text & Points Column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8 leading-snug ${
                isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
              }`}
            >
              {isAr
                ? 'كل شخص سعيد. العميل و المالك'
                : 'Everyone is Happy. The Client and The Owner'}
            </h2>

            {/* Benefit Points */}
            <div className="space-y-4">
              {/* Point 1: The Client */}
              <motion.div
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-[rgba(252,255,255,0.04)] border-[#B9C2D6]/15 hover:border-[#B9C2D6]/30'
                    : 'bg-[#FFFFFF] border-[#12479e]/10 hover:border-[#12479e]/30'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
              >
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-1.5 ${
                      isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                    }`}
                  >
                    {isAr ? 'العميل' : 'The Client'}
                  </span>
                  <p
                    className={`text-base sm:text-lg font-medium leading-relaxed ${
                      isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                    }`}
                  >
                    {isAr
                      ? 'العميل مبسوط و أنجز غرضه من غير ما يستني ساعات.'
                      : 'The client is happy and got things done without waiting for hours.'}
                  </p>
                </div>
              </motion.div>

              {/* Point 2: The Owner */}
              <motion.div
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-[rgba(252,255,255,0.04)] border-[#B9C2D6]/15 hover:border-[#B9C2D6]/30'
                    : 'bg-[#FFFFFF] border-[#12479e]/10 hover:border-[#12479e]/30'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: 0.23, ease: "easeOut" }}
              >
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-1.5 ${
                      isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                    }`}
                  >
                    {isAr ? 'المالك' : 'The Owner'}
                  </span>
                  <p
                    className={`text-base sm:text-lg font-medium leading-relaxed ${
                      isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                    }`}
                  >
                    {isAr
                      ? 'المالك مبسوط مبقاش شايل هم تأخير كل حاجة بتتم بسرعة.'
                      : 'The owner is happy and no longer worries about delays; everything happens fast.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
