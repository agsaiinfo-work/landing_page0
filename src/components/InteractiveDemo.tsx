import React from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Instagram,
  MessageSquare,
  Globe,
  Music2,
  ShoppingBag,
} from 'lucide-react';
import { Language, Theme } from '../types';
import { content } from '../data/content';
import { AnimatedChatMock } from './AnimatedChatMock';

interface InteractiveDemoProps {
  lang: Language;
  theme: Theme;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ lang, theme }) => {
  const t = content[lang].demo;
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  return (
    <section
      id="demo"
      className={`pt-20 sm:pt-24 pb-14 sm:pb-16 border-t relative overflow-hidden transition-colors duration-250 ${
        isDark ? 'bg-[#00063d] border-[#B9C2D6]/15' : 'bg-[#FCFFFF] border-[#12479e]/10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight sm:leading-snug text-balance transition-colors duration-250 ${
              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
            }`}
          >
            {isAr
              ? 'شوف الذكاء الاصطناعي بيتعامل ازاي مع الطلبات والحجوزات'
              : 'See how AI handles orders and bookings'}
          </h2>
        </motion.div>

        {/* Automated Non-Interactive Animated Chat Mock */}
        <motion.div
          className="mb-12 overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <AnimatedChatMock lang={lang} theme={theme} />
        </motion.div>

        {/* Integrations Bar (Supported Platforms) */}
        <motion.div
          className="mt-10 pt-6 border-t border-slate-200/60 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 text-center uppercase tracking-wider mb-6">
            {isAr
              ? 'يتكامل بسلاسة مع كافة قنواتك ومنصاتك المفضلة'
              : 'Seamlessly integrates with your favorite channels and platforms'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {[
              {
                id: 'whatsapp',
                name: 'WhatsApp',
                icon: MessageCircle,
                label: isAr ? 'واتساب' : 'WhatsApp',
              },
              {
                id: 'instagram',
                name: 'Instagram',
                icon: Instagram,
                label: isAr ? 'إنستجرام' : 'Instagram',
              },
              {
                id: 'messenger',
                name: 'Messenger',
                icon: MessageSquare,
                label: isAr ? 'ماسنجر' : 'Messenger',
              },
              {
                id: 'webhooks',
                name: 'Website / Webhooks',
                icon: Globe,
                label: isAr ? 'الموقع وويب هوكس' : 'Website / Webhooks',
              },
              {
                id: 'tiktok',
                name: 'TikTok',
                icon: Music2,
                label: isAr ? 'تيك توك' : 'TikTok',
              },
              {
                id: 'shopify',
                name: 'Shopify',
                icon: ShoppingBag,
                label: isAr ? 'شوبيفاي' : 'Shopify',
              },
            ].map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <motion.div
                  key={platform.id}
                  id={`integration-platform-${platform.id}`}
                  title={platform.label}
                  aria-label={platform.label}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-200 shadow-sm text-[#64748b] dark:bg-[#0d1527] dark:border-white/10 dark:text-white transition-all duration-300 hover:border-[#12479e]"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                >
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

