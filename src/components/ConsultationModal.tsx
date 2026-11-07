import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, Theme } from '../types';
import { content } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme: Theme;
  preselectedPlan?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
  theme,
  preselectedPlan,
}) => {
  const t = content[lang].modal;
  const isDark = theme === 'dark';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState(t.volumeOptions[1]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={handleResetAndClose}
    >
      <div
        id="consultation-modal-dialog"
        className={`w-full max-w-lg rounded-2xl border p-8 shadow-2xl relative transition-all ${
          isDark
            ? 'bg-[#00063d] border-[#B9C2D6]/15 text-[#FCFFFF]'
            : 'bg-[#FCFFFF] border-[#12479e]/20 text-[#00063d] shadow-[#12479e]/10'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className={`absolute top-5 right-5 rtl:right-auto rtl:left-5 p-1 rounded-lg transition-colors cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#12479e]'
          }`}
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div
              className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${
                isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
              }`}
            >
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-[#12479e]'
              }`}
            >
              {lang === 'en' ? 'Blueprint Request Dispatched' : 'تم استلام طلبك بنجاح'}
            </h3>
            <p
              className={`text-xs leading-relaxed max-w-sm mx-auto ${
                isDark ? 'text-[#b9c2d6]' : 'text-[#64748b]'
              }`}
            >
              {t.successMessage}
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-[#12479e] hover:bg-blue-600 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                {t.closeButton}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-left rtl:text-right">
              <h3
                className={`text-xl font-bold mb-1.5 ${
                  isDark ? 'text-white' : 'text-[#12479e]'
                }`}
              >
                {t.title}
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-[#b9c2d6]' : 'text-[#64748b]'
                }`}
              >
                {t.subtitle}
              </p>
              {preselectedPlan && (
                <div className="mt-3 inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#12479e]/20 text-blue-400 font-semibold">
                  Selected Plan: {preselectedPlan}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left rtl:text-right">
              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Tariq Mansour' : 'مثال: أحمد عبد الرحمن'}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-all ${
                    isDark
                      ? 'bg-white/[0.04] border border-white/10 text-white placeholder-slate-400 focus:border-blue-400'
                      : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#12479e]'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-all ${
                    isDark
                      ? 'bg-white/[0.04] border border-white/10 text-white placeholder-slate-400 focus:border-blue-400'
                      : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#12479e]'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {t.companyLabel}
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Apex Logistics' : 'مثال: شركة النيل للتجارة'}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-all ${
                    isDark
                      ? 'bg-white/[0.04] border border-white/10 text-white placeholder-slate-400 focus:border-blue-400'
                      : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#12479e]'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {t.volumeLabel}
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none transition-all ${
                    isDark
                      ? 'bg-[#0c0e35] border border-white/10 text-white focus:border-blue-400'
                      : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-[#12479e]'
                  }`}
                >
                  {t.volumeOptions.map((opt, idx) => (
                    <option key={idx} value={opt} className={isDark ? 'bg-[#08092b] text-white' : 'bg-white text-slate-900'}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#12479e] hover:bg-blue-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{t.submitButton}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
