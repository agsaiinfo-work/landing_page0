import React from 'react';
import { motion } from 'motion/react';
import {
  Inbox,
  Clock,
  CreditCard,
  AlertTriangle,
  MessageCircle,
  ToggleRight,
  BarChart3,
  Mic,
  Zap,
  TrendingUp,
  ShieldCheck,
  Check,
  Activity,
  Timer,
  Sparkles,
} from 'lucide-react';
import { Language, Theme } from '../types';

interface OperationalFeaturesProps {
  lang: Language;
  theme: Theme;
}

export const BentoGrid: React.FC<OperationalFeaturesProps> = ({
  lang,
  theme,
}) => {
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  const operationalCards = [
    {
      id: 'op-1',
      title: isAr ? 'صندوق رسائل موحد' : 'Unified Inbox',
      desc: isAr
        ? 'إدارة كافة محادثات واتساب، إنستغرام، ماسنجر، والموقع من لوحة واحدة.'
        : 'Manage all conversations from WhatsApp, Instagram, Messenger, and Web in one single inbox.',
      icon: Inbox,
    },
    {
      id: 'op-2',
      title: isAr ? 'متابعة العملاء (Follow-up)' : 'Automated Follow-ups',
      desc: isAr
        ? 'إرسال تذكيرات ذكية للعملاء الذين لم يكملوا الشراء لإغلاق الصفقات.'
        : 'Sending smart reminders to customers who have not completed the purchase to close the deals.',
      icon: Clock,
    },
    {
      id: 'op-3',
      title: isAr ? 'روابط الدفع والتعديل' : 'Payment Links & Orders',
      desc: isAr
        ? 'إرسال روابط دفع مباشرة، وإمكانية تعديل أو إلغاء الطلبات والحجوزات.'
        : 'Send direct payment links, with ability to modify or cancel orders & bookings.',
      icon: CreditCard,
    },
    {
      id: 'op-4',
      title: isAr ? 'رصد العملاء الغاضبين' : 'Sentiment & Anger Alerts',
      desc: isAr
        ? 'تحليل مشاعر العميل وإرسال تنبيه فور رصد أي استياء للتدخل البشري.'
        : 'Real-time sentiment analysis triggering instant alerts on customer dissatisfaction.',
      icon: AlertTriangle,
    },
    {
      id: 'op-5',
      title: isAr ? 'الرد على الكومنتات' : 'Smart Comment Replies',
      desc: isAr
        ? 'الرد الفوري على تعليقات المنشورات والإعلانات وتحويلها لمحادثات خاصة.'
        : 'Instantly respond to comments on posts and ads and convert them into DMs.',
      icon: MessageCircle,
    },
    {
      id: 'op-6',
      title: isAr ? 'التحكم والتحويل اليدوي' : 'Instant Agent Toggle',
      desc: isAr
        ? 'خاصية إيقاف الأيجنت بنقرة زر داخل أي محادثة لاستلامها بنفسك.'
        : 'Pause or resume the AI agent instantly inside any chat to take over manually.',
      icon: ToggleRight,
    },
    {
      id: 'op-7',
      title: isAr ? 'داش بورد وتقارير شاملة' : 'Analytics Dashboard',
      desc: isAr
        ? 'تتبع عدد الرسائل، الليدز، المبيعات، الإيرادات، ومتوسط سرعة الرد.'
        : 'Track total messages, leads, sales revenue, and average response times.',
      icon: BarChart3,
    },
    {
      id: 'op-8',
      title: isAr ? 'فهم الصور والرسائل الصوتية' : 'Multimodal Vision & Voice',
      desc: isAr
        ? 'معالجة ذكية للصور والاستماع للرسائل الصوتية وفهمها.'
        : 'Smart AI processing for photos and listening to voice notes.',
      icon: Mic,
    },
  ];

  return (
    <div id="impact-features-container" className="pt-2 sm:pt-4 pb-16 md:pb-24">
      {/* Subtle Horizontal Section Divider between Live Demo and Results & Impact */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <hr
          id="demo-results-divider"
          className={`border-0 border-t ${
            isDark ? 'border-white/10 dark:border-slate-800/80' : 'border-slate-200/80'
          }`}
        />
      </div>

      {/* ================================================== */}
      {/* SECTION 1: BENTO IMPACT & METRICS (النتائج والأرقام)  */}
      {/* ================================================== */}
      <section id="impact" className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section 1 Header */}
        <motion.div
          className="max-w-3xl mb-10 text-right rtl:text-right ltr:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span
            id="impact-tag"
            className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {isAr ? 'النتائج والأرقام' : 'RESULTS & IMPACT'}
          </span>
          <h2
            id="impact-title"
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
            }`}
          >
            {isAr ? 'كل ثانية بتفرق في بيزنسك' : 'Every Second Counts for Your Business'}
          </h2>
          <p
            id="impact-subtitle"
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {isAr
              ? 'ثانية واحدة ممكن تساعد مريض، أو تخلي عميل مبسوط من سرعة وسلاسة الرد. AGS AI مصممة لتقدير قيمة كل ثانية في حياة عملائك.'
              : 'A single second can assist a critical patient or delight a customer with instant, seamless service. AGS AI is engineered to value every second in your customers’ lives.'}
          </p>
        </motion.div>

        {/* 2 Bento Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* BENTO CARD 1: SPEED */}
          <motion.div
            id="bento-card-speed"
            className="bg-[#FFFFFF] dark:bg-[rgba(252,255,255,0.04)] border border-[#12479e]/10 dark:border-[#B9C2D6]/15 rounded-3xl p-6 md:p-8 shadow-xs hover:border-[#12479e] dark:hover:border-[#B9C2D6]/40 transition-all duration-250 flex flex-col justify-between relative overflow-hidden group"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-[#64748b]/10 dark:bg-white/10 text-[#64748b] dark:text-[#B9C2D6]">
                  <Timer className="w-6 h-6 text-[#64748b] dark:text-[#B9C2D6]" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12479e] dark:text-[#FCFFFF] tracking-tight mb-2">
                {isAr ? 'أقل من 5 ثواني' : '< 5 Seconds'}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] dark:text-[#B9C2D6] leading-relaxed font-medium">
                {isAr
                  ? 'بدل 14 دقيقة انتظار في خدمة العملاء التقليدية'
                  : 'vs. 14 minutes average wait in traditional customer support'}
              </p>
            </div>

            {/* Visual: Comparison Bar Graphic */}
            <div className="mt-6 pt-4 border-t border-[#12479e]/10 dark:border-[#B9C2D6]/15 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="flex items-center gap-1 text-[#64748b] dark:text-[#B9C2D6]">
                  {isAr ? 'وكيل AGS AI' : 'AGS AI Agent'}
                </span>
              </div>
              <div className="w-full bg-[#12479e]/10 dark:bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#12479e] dark:bg-[#B9C2D6] h-full w-[95%] rounded-full animate-pulse" />
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#64748b]/70 dark:text-[#B9C2D6]/70 pt-1">
                <span>{isAr ? 'خدمة عملاء تقليدية' : 'Traditional Support'}</span>
              </div>
              <div className="w-full bg-[#12479e]/10 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-[#12479e]/30 dark:bg-[#B9C2D6]/30 h-full w-[20%] rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 2: QUALIFIED LEADS */}
          <motion.div
            id="bento-card-leads"
            className="bg-[#FFFFFF] dark:bg-[rgba(252,255,255,0.04)] border border-[#12479e]/10 dark:border-[#B9C2D6]/15 rounded-3xl p-6 md:p-8 shadow-xs hover:border-[#12479e] dark:hover:border-[#B9C2D6]/40 transition-all duration-250 flex flex-col justify-between relative overflow-hidden group"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-[#64748b]/10 dark:bg-white/10 text-[#64748b] dark:text-[#B9C2D6]">
                  <TrendingUp className="w-6 h-6 text-[#64748b] dark:text-[#B9C2D6]" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#12479e] dark:text-[#FCFFFF] tracking-tight mb-2">
                +340%
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] dark:text-[#B9C2D6] leading-relaxed font-medium">
                {isAr
                  ? 'تأهيل سريع للعملاء الجادين زيادة المبيعات 3.4 أضعاف'
                  : 'Instant lead qualification boosting sales conversions by 3.4x'}
              </p>
            </div>

            {/* Visual: Upward Growth Chart */}
            <div className="mt-6 pt-4 border-t border-[#12479e]/10 dark:border-[#B9C2D6]/15">
              <div className="flex items-end justify-between gap-2 h-12">
                <div className="flex-1 bg-[#12479e]/20 dark:bg-[#B9C2D6]/20 h-[25%] rounded-t-lg" />
                <div className="flex-1 bg-[#12479e]/35 dark:bg-[#B9C2D6]/35 h-[40%] rounded-t-lg" />
                <div className="flex-1 bg-[#12479e]/50 dark:bg-[#B9C2D6]/50 h-[60%] rounded-t-lg" />
                <div className="flex-1 bg-[#12479e]/70 dark:bg-[#B9C2D6]/70 h-[80%] rounded-t-lg" />
                <div className="flex-1 bg-[#12479e] dark:bg-[#B9C2D6] h-[100%] rounded-t-lg flex items-center justify-center text-white dark:text-[#00063d] text-[10px] font-bold">
                  3.4x
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2: OPERATIONAL FEATURES (المميزات التشغيلية)   */}
      {/* ================================================== */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 md:mt-32 pt-12 border-t border-[#12479e]/10 dark:border-[#B9C2D6]/15"
      >
        {/* Section 2 Header */}
        <motion.div
          className="max-w-3xl mb-10 text-right rtl:text-right ltr:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span
            id="operational-features-tag"
            className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {isAr ? 'المميزات التشغيلية' : 'OPERATIONAL FEATURES'}
          </span>
          <h2
            id="operational-features-title"
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-[#FCFFFF]' : 'text-[#12479e]'
            }`}
          >
            {isAr
              ? 'كل ما تحتاجه لإدارة عملياتك بذكاء'
              : 'Everything You Need to Manage Your Operations'}
          </h2>
          <p
            id="operational-features-subtitle"
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-[#B9C2D6]' : 'text-[#64748b]'
            }`}
          >
            {isAr
              ? 'منصة واحدة متكاملة لإدارة المحادثات، المبيعات، والدعم الفني بأعلى كفاءة'
              : 'An all-in-one platform to manage conversations, sales, and support with maximum efficiency.'}
          </p>
        </motion.div>

        {/* 8 Cards Operational Features Grid: STRICTLY 2-Column Feature Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {operationalCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                id={`feature-card-${card.id}`}
                className="bg-[#FFFFFF] dark:bg-[rgba(252,255,255,0.04)] border border-[#12479e]/10 dark:border-[#B9C2D6]/15 rounded-2xl p-5 md:p-6 shadow-xs transition-all duration-250 hover:border-[#12479e] dark:hover:border-[#B9C2D6]/40 hover:shadow-sm flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#64748b]/10 dark:bg-[#B9C2D6]/15 flex items-center justify-center text-[#64748b] dark:text-[#B9C2D6] shrink-0">
                    <IconComp className="w-5 h-5 text-[#64748b] dark:text-[#B9C2D6]" />
                  </div>
                  <h3
                    className="text-base md:text-lg font-bold text-[#12479e] dark:text-[#FCFFFF] leading-snug card-title"
                    style={{
                      fontFamily: isAr
                        ? "'Georgia Pro', 'Georgia', 'IBM Plex Sans Arabic', serif, sans-serif"
                        : "'Georgia Pro', 'Georgia', serif",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description - DIRECTLY BELOW TITLE */}
                <p className="text-xs md:text-sm text-[#64748b] dark:text-[#B9C2D6] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
