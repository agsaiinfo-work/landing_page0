import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCheck, Disc3, ShoppingBag, Calendar } from 'lucide-react';
import { Language, Theme } from '../types';

interface AnimatedChatMockProps {
  lang?: Language;
  theme?: Theme;
}

type ScenarioType = 'ecommerce' | 'clinic';

export const AnimatedChatMock: React.FC<AnimatedChatMockProps> = ({
  lang = 'ar',
  theme = 'dark',
}) => {
  const [scenario, setScenario] = useState<ScenarioType>('ecommerce');
  const [step, setStep] = useState<number>(1);
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  // Handle scenario switch
  const handleScenarioChange = (newScenario: ScenarioType) => {
    if (newScenario === scenario) return;
    setScenario(newScenario);
    setStep(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (step === 0) {
      timer = setTimeout(() => setStep(1), 250);
    } else if (step === 1) {
      timer = setTimeout(() => setStep(2), 1400);
    } else if (step === 2) {
      timer = setTimeout(() => setStep(3), 1600);
    } else if (step === 3) {
      timer = setTimeout(() => setStep(4), 1200);
    } else if (step === 4) {
      timer = setTimeout(() => setStep(5), 1800);
    } else if (step === 5) {
      timer = setTimeout(() => setStep(6), 1600);
    } else if (step === 6) {
      timer = setTimeout(() => setStep(0), 3400);
    }

    return () => clearTimeout(timer);
  }, [step, scenario]);

  // Audio wave heights
  const waveHeights = [24, 45, 75, 50, 90, 60, 100, 70, 85, 40, 65, 95, 80, 55, 35, 70, 45, 20];

  // Scenarios content definitions
  const scenariosData = {
    ecommerce: {
      avatarBg: 'bg-[#12479e]',
      avatarText: isAr ? 'م' : 'M',
      name: isAr ? 'محمد' : 'Mohamed',
      platform: isAr ? 'ماسنجر' : 'Messenger',
      customerMsg1: isAr
        ? 'السلام عليكم، التيشرت الأسود العادي متوفر؟'
        : 'Hello, is the regular black t-shirt available?',
      customerMsg1Time: isAr ? '10:41 ص' : '10:41 AM',
      aiReply1: isAr
        ? 'وعليكم السلام! أهلاً يا أستاذ محمد منورنا في Sevix Store. متوفر بـ 450.'
        : 'Hello! Welcome Mr. Mohamed to Sevix Store. Available for 450.',
      aiReply1Status: isAr ? 'فحص المخزون فوري • 180ms' : 'Instant inventory check • 180ms',
      aiReply1Time: isAr ? '10:41 ص' : '10:41 AM',
      voiceNoteText: isAr
        ? 'ابعتلي 2 تيشرت مقاس L على عنوان المعادي...'
        : 'Send 2 t-shirts size L to Maadi address...',
      voiceNoteDuration: '0:12',
      voiceNoteTime: isAr ? '10:42 ص' : '10:42 AM',
      aiConfirmation: isAr
        ? 'تمام يا أستاذ محمد! اتسجل لحضرتك 2 تيشرت أسود L بـ (900). التوصيل بكرة للمعادي، ورقم طلبك #4892. محتاج أي تفاصيل تانية؟'
        : 'Done, Mr. Mohamed! Confirmed 2 black t-shirts (L) for (900). Delivery tomorrow to Maadi, Order #4892. Need any other details?',
      aiConfirmationStatus: isAr ? 'تم إنشاء الأوردر في السيستم • 210ms' : 'Order created in system • 210ms',
      aiConfirmationTime: isAr ? '10:42 ص' : '10:42 AM',
      badgeTranscribing: isAr ? 'بيفرّغ الرسالة الصوتية...' : 'Transcribing voice note...',
      badgeProcessing: isAr ? 'بيسجل الطلب تلقائياً...' : 'Recording order autonomously...',
      badgeCompleted: isAr ? 'اكتملت المحادثة بنجاح (إعادة تلقائية)' : 'Cycle complete (Looping...)',
    },
    clinic: {
      avatarBg: 'bg-emerald-600',
      avatarText: isAr ? 'س' : 'S',
      name: isAr ? 'ساره' : 'Sarah',
      platform: isAr ? 'واتساب' : 'WhatsApp',
      customerMsg1: isAr
        ? 'مساء الخير، فيه مواعيد متاحة لكشف وحشو الأسنان بكرة؟'
        : 'Good evening, are there available slots for dental checkup & filling tomorrow?',
      customerMsg1Time: isAr ? '06:15 م' : '06:15 PM',
      aiReply1: isAr
        ? 'مساء النور يا أستاذة ساره! منورة عيادة Dental Care. المواعيد المتاحة غداً: 6:00 مساءً و 8:00 مساءً.'
        : 'Good evening Ms. Sarah! Welcome to Dental Care clinic. Available slots tomorrow: 6:00 PM and 8:00 PM.',
      aiReply1Status: isAr ? 'فحص الأجندة والمواعيد • 140ms' : 'Calendar & slot check • 140ms',
      aiReply1Time: isAr ? '06:15 م' : '06:15 PM',
      voiceNoteText: isAr
        ? 'ممكن تحجزلي معاد الساعة 8 مساءً...'
        : 'Could you please book me the 8:00 PM slot...',
      voiceNoteDuration: '0:09',
      voiceNoteTime: isAr ? '06:16 م' : '06:16 PM',
      aiConfirmation: isAr
        ? 'تم الحجز بنجاح يا أستاذة ساره! كشف وحشو أسنان في Dental Care - غداً الساعة 8:00 مساءً. رقم الحجز #B-902. هنبعتلك تذكير قبل المعاد.'
        : 'Booking confirmed successfully, Ms. Sarah! Dental checkup & filling at Dental Care - Tomorrow at 8:00 PM. Booking ID #B-902. Reminder will be sent prior.',
      aiConfirmationStatus: isAr ? 'تم تأكيد الحجز في السيستم • 190ms' : 'Booking confirmed in system • 190ms',
      aiConfirmationTime: isAr ? '06:16 م' : '06:16 PM',
      badgeTranscribing: isAr ? 'بيفرّغ الرسالة الصوتية...' : 'Transcribing voice note...',
      badgeProcessing: isAr ? 'بيأكد الحجز في السيستم...' : 'Confirming appointment in system...',
      badgeCompleted: isAr ? 'اكتمل الحجز بنجاح (إعادة تلقائية)' : 'Appointment confirmed (Looping...)',
    },
  };

  const current = scenariosData[scenario];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 1. Segmented Toggle Switch Controller (Centered above Chat Container) */}
      <div className="flex justify-center mb-6">
        <div
          className={`inline-flex items-center p-1.5 rounded-full border transition-all duration-300 ${
            isDark
              ? 'bg-[#0d1527] border-white/10 shadow-lg shadow-black/30'
              : 'bg-white border-[#12479e]/15 shadow-md shadow-[#12479e]/5'
          }`}
        >
          {/* Tab 1: E-commerce */}
          <button
            type="button"
            onClick={() => handleScenarioChange('ecommerce')}
            className={`cursor-pointer px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              scenario === 'ecommerce'
                ? 'bg-[#12479e] text-white dark:bg-white dark:text-slate-900 font-bold shadow-md'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <span>{isAr ? 'إزاي بيتعامل مع الأوردرات' : 'How it handles orders'}</span>
          </button>

          {/* Tab 2: Clinic */}
          <button
            type="button"
            onClick={() => handleScenarioChange('clinic')}
            className={`cursor-pointer px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              scenario === 'clinic'
                ? 'bg-[#12479e] text-white dark:bg-white dark:text-slate-900 font-bold shadow-md'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <span>{isAr ? 'إزاي بيتعامل مع الحجوزات' : 'How it handles bookings'}</span>
          </button>
        </div>
      </div>

      {/* 2. Main Chat Container with seamless cross-fade */}
      <div
        id="animated-chat-mock-container"
        className={`relative w-full rounded-3xl overflow-hidden transition-all duration-250 ${
          isDark
            ? 'bg-[#00063d] border border-[#B9C2D6]/15 backdrop-blur-md shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/[0.05]'
            : 'bg-[#FCFFFF] border border-[#12479e]/10 backdrop-blur-md shadow-xs'
        }`}
        style={{
          fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-full"
          >
            {/* Header */}
            <div
              className={`px-5 py-3.5 border-b flex items-center justify-between transition-colors duration-250 select-none ${
                isDark
                  ? 'bg-[#0d1527]/90 text-white border-white/10'
                  : 'bg-slate-50/90 text-slate-800 border-[#12479e]/15'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* User Avatar Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base ${current.avatarBg} shrink-0 shadow-sm transition-colors`}
                >
                  {current.avatarText}
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {current.name}
                  </h4>
                  <p
                    className={`text-xs mt-0.5 font-medium ${
                      isDark ? 'text-[#b9c2d6]' : 'text-slate-500'
                    }`}
                  >
                    {current.platform}
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Window Messages Container (pointer-events-none select-none) */}
            <div
              className={`pointer-events-none select-none relative p-5 sm:p-6 min-h-[410px] flex flex-col justify-between transition-colors duration-250 ${
                isDark ? 'bg-transparent' : 'bg-transparent'
              }`}
            >
              {/* Messages Stream */}
              <div className="space-y-4">
                {/* Step 1: Customer text message */}
                <AnimatePresence>
                  {step >= 1 && (
                    <motion.div
                      key={`customer-msg-1-${scenario}`}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="flex flex-col items-start"
                    >
                      <div
                        className="max-w-[85%] rounded-2xl rounded-bl-xs px-4 py-3 text-sm bg-slate-100 border border-slate-200/80 text-slate-900 dark:bg-slate-800/80 dark:border-slate-700/50 dark:text-white shadow-sm transition-colors duration-250"
                      >
                        <p className="leading-relaxed font-medium text-slate-900 dark:text-white">{current.customerMsg1}</p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500 dark:text-[#b9c2d6]">
                          <span>{current.customerMsg1Time}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 2: Auto-reply instant AI message (Solid #12479e) */}
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div
                      key={`ai-reply-1-${scenario}`}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="flex flex-col items-end"
                    >
                      <div className="max-w-[88%] rounded-2xl rounded-br-xs px-4 py-3 bg-[#12479e] text-white text-sm shadow-sm dark:bg-[#12479e]/25 dark:border dark:border-[#12479e]/50 backdrop-blur-sm">
                        <p className="leading-relaxed font-medium text-white">{current.aiReply1}</p>
                        <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#b9c2d6] gap-3 border-t border-white/15 dark:border-[#12479e]/30 pt-1">
                          <span className="font-mono flex items-center gap-1 text-[#b9c2d6]">
                            {current.aiReply1Status}
                          </span>
                          <div className="flex items-center gap-1 text-[#b9c2d6]">
                            <span>{current.aiReply1Time}</span>
                            <CheckCheck className="w-3.5 h-3.5 text-[#b9c2d6]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 3: Customer Voice Note UI with wave audio bars */}
                <AnimatePresence>
                  {step >= 3 && (
                    <motion.div
                      key={`customer-voice-note-${scenario}`}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="flex flex-col items-start"
                    >
                      <div
                        className="w-[85%] sm:w-[75%] rounded-2xl rounded-bl-xs p-3.5 text-sm bg-slate-100 border border-slate-200/80 dark:bg-slate-800/80 dark:border-slate-700/50 shadow-sm transition-colors duration-250"
                      >
                        <div className="flex items-center gap-3">
                          {/* Play Button */}
                          <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-[#12479e] dark:bg-white transition-colors">
                            <Play className="w-4 h-4 fill-current ml-0.5 text-white dark:text-[#12479e]" />
                          </div>

                          {/* Wave Audio Bars */}
                          <div className="flex-1 flex items-center gap-[3px] h-8 px-1">
                            {waveHeights.map((h, i) => (
                              <motion.div
                                key={i}
                                animate={
                                  step >= 3 && step < 6
                                    ? {
                                        height: [
                                          `${Math.max(15, h * 0.4)}%`,
                                          `${h}%`,
                                          `${Math.max(15, h * 0.3)}%`,
                                        ],
                                        opacity: [0.6, 1, 0.7],
                                      }
                                    : { height: `${h}%`, opacity: 0.7 }
                                }
                                transition={{
                                  repeat: Infinity,
                                  duration: 1.1,
                                  delay: (i % 6) * 0.12,
                                  ease: 'easeInOut',
                                }}
                                style={{ height: `${h}%` }}
                                className="w-[3px] rounded-full bg-[#12479e] dark:bg-[#b9c2d6]"
                              />
                            ))}
                          </div>

                          <span
                            className="text-[11px] font-mono shrink-0 text-slate-500 dark:text-[#b9c2d6]"
                          >
                            {current.voiceNoteDuration}
                          </span>
                        </div>

                        <div
                          className="mt-2 flex items-center justify-between text-[10px] border-t border-slate-200/80 dark:border-slate-700/50 pt-1 px-0.5 text-slate-500 dark:text-[#b9c2d6]"
                        >
                          <span className="italic">{current.voiceNoteText}</span>
                          <span>{current.voiceNoteTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 5: Final confirmation message (Solid #12479e) */}
                <AnimatePresence>
                  {step >= 6 && (
                    <motion.div
                      key={`ai-final-confirmation-${scenario}`}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="flex flex-col items-end"
                    >
                      <div className="max-w-[90%] rounded-2xl rounded-br-xs px-4 py-3 bg-[#12479e] text-white text-sm shadow-sm dark:bg-[#12479e]/25 dark:border dark:border-[#12479e]/50 backdrop-blur-sm">
                        <p className="leading-relaxed font-medium text-white">{current.aiConfirmation}</p>
                        <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#b9c2d6] gap-3 border-t border-white/15 dark:border-[#12479e]/30 pt-1">
                          <span className="font-mono flex items-center gap-1 text-[#b9c2d6] font-semibold">
                            <CheckCheck className="w-3.5 h-3.5 inline text-[#b9c2d6]" />
                            {current.aiConfirmationStatus}
                          </span>
                          <div className="flex items-center gap-1 text-[#b9c2d6]">
                            <span>{current.aiConfirmationTime}</span>
                            <CheckCheck className="w-3.5 h-3.5 text-[#b9c2d6]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step 4: Bottom Floating Badge toggles status */}
              <div className="pt-6 pb-1 flex justify-center items-center min-h-[46px]">
                <AnimatePresence mode="wait">
                  {step === 4 && (
                    <motion.div
                      key={`badge-transcribing-${scenario}`}
                      initial={{ opacity: 0, y: 8, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.94 }}
                      transition={{ duration: 0.28 }}
                      className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors duration-250 ${
                        isDark
                          ? 'bg-[#151f38] text-[#b9c2d6] border-white/10'
                          : 'bg-white text-[#12479e] border-[#12479e]/20 shadow-sm'
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12479e] dark:bg-[#b9c2d6] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#12479e] dark:bg-[#b9c2d6]" />
                      </span>
                      <span>{current.badgeTranscribing}</span>
                      <Disc3 className="w-3.5 h-3.5 animate-spin text-[#12479e] dark:text-[#b9c2d6]" />
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      key={`badge-recording-${scenario}`}
                      initial={{ opacity: 0, y: 8, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.94 }}
                      transition={{ duration: 0.28 }}
                      className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors duration-250 ${
                        isDark
                          ? 'bg-[#151f38] text-[#b9c2d6] border-white/10'
                          : 'bg-white text-[#12479e] border-[#12479e]/20 shadow-sm'
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12479e] dark:bg-[#b9c2d6] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#12479e] dark:bg-[#b9c2d6]" />
                      </span>
                      <span>{current.badgeProcessing}</span>
                    </motion.div>
                  )}

                  {step === 6 && (
                    <motion.div
                      key={`badge-completed-${scenario}`}
                      initial={{ opacity: 0, y: 8, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.94 }}
                      transition={{ duration: 0.28 }}
                      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] border transition-colors duration-250 ${
                        isDark
                          ? 'bg-[#151f38] text-[#b9c2d6] border-white/10'
                          : 'bg-white text-slate-600 border-[#12479e]/15 shadow-sm'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#12479e] dark:bg-[#b9c2d6]" />
                      <span>{current.badgeCompleted}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


