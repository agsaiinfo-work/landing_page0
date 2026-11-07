import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface PricingSectionProps {
  lang: Language;
  theme: Theme;
  onSelectPlan: (planId: string) => void;
}

export type CurrencyCode = 'EGP' | 'SAR' | 'USD';

interface CurrencyPricingInfo {
  symbol: { ar: string; en: string };
  perMonth: { ar: string; en: string };
  perYear: { ar: string; en: string };
  plans: {
    pro: {
      monthlyPrice: number;
      monthlyOriginalPrice: number;
      monthlyDiscountBadge: { ar: string; en: string };
      annualTotal: number;
      annualOriginalTotal: number;
      annualEquivalentMonthlyPrice: number;
      annualSavingsBadge: { ar: string; en: string };
    };
    premium: {
      monthlyPrice: number;
      monthlyOriginalPrice: number;
      monthlyDiscountBadge: { ar: string; en: string };
      annualTotal: number;
      annualOriginalTotal: number;
      annualEquivalentMonthlyPrice: number;
      annualSavingsBadge: { ar: string; en: string };
    };
  };
}

const PRICING_MATRIX: Record<CurrencyCode, CurrencyPricingInfo> = {
  EGP: {
    symbol: { ar: 'ج.م', en: 'EGP' },
    perMonth: { ar: '/شهر', en: '/month' },
    perYear: { ar: '/سنوياً', en: '/year' },
    plans: {
      pro: {
        monthlyPrice: 2500,
        monthlyOriginalPrice: 3000,
        monthlyDiscountBadge: { ar: 'وفر 16%', en: 'Save 16%' },
        annualTotal: 27000,
        annualOriginalTotal: 36000,
        annualEquivalentMonthlyPrice: 2250,
        annualSavingsBadge: { ar: 'وفر 9,000 ج.م سنوياً', en: 'Save 9,000 EGP/year' },
      },
      premium: {
        monthlyPrice: 3750,
        monthlyOriginalPrice: 4500,
        monthlyDiscountBadge: { ar: 'وفر 16%', en: 'Save 16%' },
        annualTotal: 40500,
        annualOriginalTotal: 54000,
        annualEquivalentMonthlyPrice: 3375,
        annualSavingsBadge: { ar: 'وفر 13,500 ج.م سنوياً', en: 'Save 13,500 EGP/year' },
      },
    },
  },
  SAR: {
    symbol: { ar: 'ر.س', en: 'SAR' },
    perMonth: { ar: '/شهر', en: '/month' },
    perYear: { ar: '/سنوياً', en: '/year' },
    plans: {
      pro: {
        monthlyPrice: 450,
        monthlyOriginalPrice: 550,
        monthlyDiscountBadge: { ar: 'وفر 18%', en: 'Save 18%' },
        annualTotal: 5000,
        annualOriginalTotal: 6600,
        annualEquivalentMonthlyPrice: 417,
        annualSavingsBadge: { ar: 'وفر 1,600 ر.س سنوياً', en: 'Save 1,600 SAR/year' },
      },
      premium: {
        monthlyPrice: 650,
        monthlyOriginalPrice: 750,
        monthlyDiscountBadge: { ar: 'وفر 13%', en: 'Save 13%' },
        annualTotal: 6750,
        annualOriginalTotal: 9000,
        annualEquivalentMonthlyPrice: 563,
        annualSavingsBadge: { ar: 'وفر 2,250 ر.س سنوياً', en: 'Save 2,250 SAR/year' },
      },
    },
  },
  USD: {
    symbol: { ar: '$', en: '$' },
    perMonth: { ar: '/شهر', en: '/month' },
    perYear: { ar: '/year', en: '/year' },
    plans: {
      pro: {
        monthlyPrice: 199,
        monthlyOriginalPrice: 250,
        monthlyDiscountBadge: { ar: 'وفر 20%', en: 'Save 20%' },
        annualTotal: 2250,
        annualOriginalTotal: 3000,
        annualEquivalentMonthlyPrice: 188,
        annualSavingsBadge: { ar: 'وفر $750 سنوياً', en: 'Save $750/yr' },
      },
      premium: {
        monthlyPrice: 299,
        monthlyOriginalPrice: 350,
        monthlyDiscountBadge: { ar: 'وفر 15%', en: 'Save 15%' },
        annualTotal: 3150,
        annualOriginalTotal: 4200,
        annualEquivalentMonthlyPrice: 263,
        annualSavingsBadge: { ar: 'وفر $1,050 سنوياً', en: 'Save $1,050/yr' },
      },
    },
  },
};

export const PricingSection: React.FC<PricingSectionProps> = ({
  lang,
  theme,
  onSelectPlan,
}) => {
  const t = content[lang].pricing;
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('EGP');

  const currentMatrix = PRICING_MATRIX[selectedCurrency];

  const formatAmount = (num: number) => {
    const formatted = num.toLocaleString();
    if (selectedCurrency === 'USD') {
      return `$${formatted}`;
    }
    const sym = currentMatrix.symbol[lang];
    return `${formatted} ${sym}`;
  };

  return (
    <section
      id="pricing"
      className={`py-24 border-t transition-colors duration-250 ${
        isDark ? 'border-[#B9C2D6]/15' : 'border-[#12479e]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span
            id="pricing-section-tag"
            className={`text-xs font-semibold tracking-wider block mb-2 ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {t.tag}
          </span>
          <h2
            id="pricing-section-title"
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
            }`}
          >
            {t.title}
          </h2>
          <p
            id="pricing-section-subtitle"
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* Header Controls: Billing Toggle (Left) + Currency Selector (Right) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 w-full">
          {/* Billing Toggle */}
          <div
            id="pricing-billing-toggle-container"
            className={`inline-flex p-1.5 rounded-2xl border text-xs font-semibold ${
              isDark
                ? 'bg-white/[0.04] border-white/10'
                : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              id="pricing-toggle-monthly"
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
                !isAnnual
                  ? isDark
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'bg-[#12479e] text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-[#b9c2d6] hover:text-white'
                  : 'text-[#64748b] hover:text-[#12479e]'
              }`}
            >
              {t.monthlyLabel}
            </button>
            <button
              id="pricing-toggle-annual"
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? isDark
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'bg-[#12479e] text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-[#b9c2d6] hover:text-white'
                  : 'text-[#64748b] hover:text-[#12479e]'
              }`}
            >
              <span>{t.annualLabel}</span>
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                  isAnnual
                    ? isDark
                      ? 'bg-emerald-600/20 text-emerald-700'
                      : 'bg-white/20 text-white'
                    : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                }`}
              >
                {t.annualDiscountBadge || (isAr ? 'خصم 25%' : '-25%')}
              </span>
            </button>
          </div>

          {/* Currency Switcher */}
          <div
            id="pricing-currency-switcher"
            className={`inline-flex p-1.5 rounded-2xl border text-xs font-semibold ${
              isDark
                ? 'bg-white/[0.04] border-white/10'
                : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              id="pricing-currency-egp"
              type="button"
              onClick={() => setSelectedCurrency('EGP')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCurrency === 'EGP'
                  ? isDark
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'bg-[#12479e] text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-[#b9c2d6] hover:text-white'
                  : 'text-[#64748b] hover:text-[#12479e]'
              }`}
            >
              <span>🇪🇬</span>
              <span>{isAr ? 'مصر (ج.م)' : 'EGP (Egypt)'}</span>
            </button>

            <button
              id="pricing-currency-sar"
              type="button"
              onClick={() => setSelectedCurrency('SAR')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCurrency === 'SAR'
                  ? isDark
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'bg-[#12479e] text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-[#b9c2d6] hover:text-white'
                  : 'text-[#64748b] hover:text-[#12479e]'
              }`}
            >
              <span>🇸🇦</span>
              <span>{isAr ? 'الخليج (ر.س)' : 'SAR (GCC)'}</span>
            </button>

            <button
              id="pricing-currency-usd"
              type="button"
              onClick={() => setSelectedCurrency('USD')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCurrency === 'USD'
                  ? isDark
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'bg-[#12479e] text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-[#b9c2d6] hover:text-white'
                  : 'text-[#64748b] hover:text-[#12479e]'
              }`}
            >
              <span>🇺🇸</span>
              <span>{isAr ? 'دولار ($)' : 'USD ($)'}</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid (Side-by-Side on md/lg, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 items-stretch">
          {t.tiers.map((tier, index) => {
            const isCustom = tier.isCustomPrice;
            const planKey = tier.id as 'pro' | 'premium';
            const currencyPlan = currentMatrix.plans[planKey];

            return (
              <motion.div
                key={tier.id}
                id={`pricing-card-${tier.id}`}
                className={`p-4 sm:p-5 rounded-2xl border h-full flex flex-col justify-between transition-all relative ${
                  isDark
                    ? 'border-[#B9C2D6]/15 bg-[rgba(252,255,255,0.04)] hover:border-[#B9C2D6]/30'
                    : 'border-[#12479e]/10 bg-[#FFFFFF] hover:border-[#12479e]/30 shadow-xs'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                <div>
                  {/* Plan Name */}
                  <h3
                    className={`text-base sm:text-lg font-bold mb-3 ${
                      isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                    }`}
                  >
                    {tier.name}
                  </h3>

                  {/* Price Box */}
                  <div className="mb-4 p-3 sm:p-4 rounded-xl border bg-slate-500/5 border-slate-500/10 min-h-[96px] sm:min-h-[104px] flex flex-col justify-center">
                    {isCustom ? (
                      <div>
                        <div
                          className={`text-xl sm:text-2xl font-bold ${
                            isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                          }`}
                        >
                          {tier.customPriceLabel || (isAr ? 'مخصص' : 'Custom Quote')}
                        </div>
                        <div
                          className={`text-xs mt-1 ${
                            isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                          }`}
                        >
                          {isAr
                            ? 'حسب متطلبات واحتياجات شركتك'
                            : 'Tailored to your business needs'}
                        </div>
                      </div>
                    ) : !isAnnual ? (
                      /* Monthly View */
                      <div>
                        {currencyPlan?.monthlyOriginalPrice && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs line-through text-slate-400 dark:text-[#B9C2D6] font-mono">
                              {formatAmount(currencyPlan.monthlyOriginalPrice)}
                            </span>
                            {currencyPlan.monthlyDiscountBadge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                {currencyPlan.monthlyDiscountBadge[lang]}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex items-baseline gap-1.5 flex-nowrap">
                          <span
                            className={`text-xl sm:text-2xl font-bold font-mono tracking-tight shrink-0 ${
                              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                            }`}
                          >
                            {formatAmount(currencyPlan.monthlyPrice)}
                          </span>
                          <span
                            className={`text-xs font-semibold whitespace-nowrap ${
                              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                            }`}
                          >
                            {currentMatrix.perMonth[lang]}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Annual View */
                      <div>
                        {currencyPlan?.annualOriginalTotal && (
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-xs line-through text-slate-400 dark:text-[#B9C2D6] font-mono">
                              {formatAmount(currencyPlan.annualOriginalTotal)}
                            </span>
                            {currencyPlan.annualSavingsBadge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                {currencyPlan.annualSavingsBadge[lang]}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex items-baseline gap-1.5 flex-nowrap">
                          <span
                            className={`text-xl sm:text-2xl font-bold font-mono tracking-tight shrink-0 ${
                              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
                            }`}
                          >
                            {formatAmount(currencyPlan.annualTotal)}
                          </span>
                          <span
                            className={`text-xs font-semibold whitespace-nowrap ${
                              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                            }`}
                          >
                            {currentMatrix.perYear[lang]}
                          </span>
                        </div>
                        {currencyPlan?.annualEquivalentMonthlyPrice && (
                          <div
                            className={`text-[11px] mt-1 font-medium ${
                              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                            }`}
                          >
                            ({isAr ? 'يعادل' : 'equiv.'}{' '}
                            <span className="font-mono font-bold">
                              {formatAmount(currencyPlan.annualEquivalentMonthlyPrice)}
                            </span>{' '}
                            {currentMatrix.perMonth[lang]})
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="mb-6 flex-1">
                    <div
                      className={`text-xs uppercase tracking-wider font-semibold mb-2.5 ${
                        isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                      }`}
                    >
                      {isAr ? 'الميزات المتضمنة:' : "What's included:"}
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {tier.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#12479e] dark:text-[#B9C2D6] shrink-0 mt-0.5" />
                          <span
                            className={`leading-relaxed ${
                              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
                            }`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <button
                  id={`pricing-btn-${tier.id}`}
                  onClick={() => onSelectPlan(tier.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-xs ${
                    isDark
                      ? 'bg-[#B9C2D6] hover:bg-[#FCFFFF] text-[#00063d]'
                      : tier.id === 'pro' || tier.id === 'premium'
                      ? 'bg-[#12479e] hover:bg-[#0e387e] text-white'
                      : 'bg-white hover:bg-slate-50 text-[#12479e] border border-[#12479e]/30'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Note */}
        <p
          id="pricing-guarantee-note"
          className={`text-xs text-center font-mono max-w-xl mx-auto ${
            isDark ? 'text-[#b9c2d6]' : 'text-[#64748b]'
          }`}
        >
          {t.guarantee}
        </p>
      </div>
    </section>
  );
};
