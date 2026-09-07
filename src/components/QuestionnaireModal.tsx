import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, PhoneCall, Sparkles, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MARKYT_CONTACT } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppQuestionnaireUrl, saveInquiryLocally } from '../utils/whatsapp';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('High-intent Qualified Leads');
  const [currentMarketing, setCurrentMarketing] = useState('Tried agencies before, burned money on vanity reach');
  const [targetCityOrPanIndia, setTargetCityOrPanIndia] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppQuestionnaireUrl({
      businessName,
      businessType,
      primaryGoal,
      targetCityOrPanIndia,
      currentMarketing,
      contactNumber,
      additionalNotes,
    });
    setWhatsappUrl(url);

    // Save locally so no user answers are ever lost
    saveInquiryLocally({
      businessName,
      businessType,
      primaryGoal,
      targetCityOrPanIndia,
      currentMarketing,
      contactNumber,
      additionalNotes,
      source: 'Full Strategy Modal',
    });

    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    // Directly open WhatsApp with the pre-filled message
    try {
      window.open(url, '_blank');
    } catch {
      // ignore if pop-up blocked; user has primary button on screen
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-slate-950 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-slate-950 text-white p-6 sm:p-7 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FF3B14] text-white text-[11px] font-heading font-black tracking-wider uppercase">
                  Step 1 of 8
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Free Strategy Intake
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-black mt-3">
              Design Your ₹5,000 Test Sprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Tell us about your business so our senior media team can prepare a custom ad angle blueprint before spending a single rupee.
            </p>

            {/* Progress bar */}
            <div className="mt-5 flex items-center gap-2">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#FF3B14]' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#FF3B14]' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${isSubmitted ? 'bg-emerald-500' : 'bg-slate-800'}`} />
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8">
            {!isSubmitted ? (
              <form onSubmit={step === 1 ? (e) => { e.preventDefault(); if (businessName.trim()) setStep(2); } : handleComplete}>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        1. What is your business or brand name? *
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Therapy, Nomad Travels, QuickFix Care"
                        className="w-full px-4 py-3 rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        2. Which category describes your business?
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      >
                        <option value="">Select category...</option>
                        <option value="Professional Services (Therapists, Lawyers, Accountants)">Professional Services (Therapists, Lawyers, Consultants)</option>
                        <option value="Travel, Tours & Hospitality">Travel, Tours & Hospitality</option>
                        <option value="Local Repair, Home & Electronics Services">Local Repair, Home & Electronics Services</option>
                        <option value="B2B Manufacturing & Industrial Supplies">B2B Manufacturing & Industrial Supplies</option>
                        <option value="D2C / Ecommerce / Packaged Goods">D2C / Ecommerce / Packaged Goods</option>
                        <option value="Other High-Value SME">Other High-Value SME</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        3. What is your primary 30-day objective?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'High-intent Qualified Leads',
                          'Direct Phone Calls',
                          'Online Store Sales (ROAS)',
                          'Consultation Bookings',
                        ].map((goal) => (
                          <button
                            type="button"
                            key={goal}
                            onClick={() => setPrimaryGoal(goal)}
                            className={`px-3.5 py-3 rounded-2xl text-xs text-left border transition-all cursor-pointer font-medium ${
                              primaryGoal === goal
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 flex justify-end items-center">
                      <button
                        type="button"
                        onClick={() => {
                          if (businessName.trim()) setStep(2);
                        }}
                        disabled={!businessName.trim()}
                        className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-heading font-bold uppercase tracking-wider disabled:opacity-30 transition-all hover:scale-105 cursor-pointer shadow-md shadow-emerald-600/20"
                      >
                        Next Step <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        4. Target Location / Geographic Reach
                      </label>
                      <input
                        type="text"
                        value={targetCityOrPanIndia}
                        onChange={(e) => setTargetCityOrPanIndia(e.target.value)}
                        placeholder="e.g. Mumbai 10km radius / Bengaluru / Pan India"
                        className="w-full px-4 py-3 rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        5. What has your marketing experience been so far?
                      </label>
                      <select
                        value={currentMarketing}
                        onChange={(e) => setCurrentMarketing(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      >
                        <option value="Tried agencies before, burned money on vanity reach">Tried agencies before, burned money on vanity reach</option>
                        <option value="Boosted Instagram posts with zero real sales">Boosted Instagram posts with zero real sales</option>
                        <option value="Never run paid ads before, want to start safely">Never run paid ads before, want to start safely</option>
                        <option value="Running ads right now, need better ROAS & lower CAC">Running ads right now, need better ROAS & lower CAC</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        6. Your Contact Phone Number or Email (for strategy plan)
                      </label>
                      <input
                        type="text"
                        required
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="e.g. 98765 43210 or yourname@company.com"
                        className="w-full px-4 py-3 rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-slate-700 tracking-wider mb-1.5 font-bold">
                        Any extra details (Products, margins, ticket size)?
                      </label>
                      <textarea
                        rows={2}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="e.g. Average ticket size is ₹3,500; looking for 20 qualified inquiries in month one."
                        className="w-full px-4 py-2.5 rounded-2xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer py-2 text-center"
                      >
                        ← Back to Step 1
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/25 hover:scale-[1.02] cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send Answers to WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500 text-center font-medium pt-1">
                      Pre-fills your exact business answers directly to our senior strategist on WhatsApp (+91 70456 02440).
                    </p>
                  </motion.div>
                )}
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-black text-slate-950 uppercase">
                    Blueprint Ready to Send!
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Your answers for <strong className="text-slate-900">{businessName}</strong> are saved and formatted.
                  </p>
                </div>

                {/* Answer Summary Card */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-4 text-left text-xs space-y-1.5 font-mono text-slate-700 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-200 pb-1 font-sans font-bold text-slate-900 uppercase text-[11px]">
                    <span>Recorded Questionnaire</span>
                    <span className="text-emerald-600">✓ Ready</span>
                  </div>
                  <div><span className="text-slate-400 font-sans">Business:</span> <strong>{businessName}</strong></div>
                  {businessType && <div><span className="text-slate-400 font-sans">Category:</span> {businessType}</div>}
                  <div><span className="text-slate-400 font-sans">30-Day Goal:</span> {primaryGoal}</div>
                  {targetCityOrPanIndia && <div><span className="text-slate-400 font-sans">Location:</span> {targetCityOrPanIndia}</div>}
                  {contactNumber && <div><span className="text-slate-400 font-sans">Contact:</span> {contactNumber}</div>}
                </div>

                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                  We have pre-filled this message for you. Click below to continue directly into WhatsApp chat with our strategy operator, or call our direct phone line.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-lg shadow-[#25D366]/25 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send on WhatsApp (+91 70456 02440)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${MARKYT_CONTACT.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Call Direct</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="px-4 py-1.5 text-xs text-slate-500 hover:text-slate-800 font-bold uppercase cursor-pointer"
                  >
                    Done / Close Window
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Footer Contact */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 text-xs text-slate-600 flex justify-between items-center font-medium">
            <span>Direct Phone: <strong className="text-slate-900">{MARKYT_CONTACT.formattedPhone}</strong></span>
            <span>Email: <strong className="text-slate-900">{MARKYT_CONTACT.email}</strong></span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
