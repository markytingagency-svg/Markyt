import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, PhoneCall, CheckCircle2, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MARKYT_CONTACT } from '../data/content';

export const InteractiveTestBuilder: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Local Service / Repair');
  const [goal, setGoal] = useState('High-intent Qualified Leads');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.7 } });
    } catch {
      // ignore
    }
  };

  return (
    <section id="get-in-touch" className="py-20 md:py-28 bg-[#FAFAFB] text-slate-900 relative overflow-hidden border-t border-slate-200/70">
      
      {/* Background Glows */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contacts & Value Promise */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Zero Risk Validation Sprint</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight text-slate-950">
              Launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">₹5,000 test</span> today.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Worst case, you’re out ₹5,000 and 30 days with full perpetual ownership of all creative assets, audiences, and conversion data. Best case, you’ve discovered what actually scales and locked in a performance engine that compounds month over month.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <motion.a
                whileHover={{ y: -3 }}
                href={`tel:${MARKYT_CONTACT.phone}`}
                className="p-4.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Direct Phone Line</div>
                    <div className="text-sm font-black font-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {MARKYT_CONTACT.formattedPhone}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={`mailto:${MARKYT_CONTACT.email}`}
                className="p-4.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-purple-300 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Email Inquiries</div>
                    <div className="text-sm font-black font-heading text-slate-900 group-hover:text-purple-700 transition-colors">
                      {MARKYT_CONTACT.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-700 group-hover:translate-x-1 transition-all" />
              </motion.a>
            </div>

            <div className="flex items-center gap-5 text-xs text-slate-600 font-semibold pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Zero Lock-in Contract</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Daily Google Sheet</span>
              </span>
            </div>
          </div>

          {/* Right Column: Inline Quick Test Configurator in Radiant White Card */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-xl">
            <h3 className="text-2xl font-heading font-black text-slate-950 mb-1">
              Quick Intake Blueprint
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Takes 60 seconds. We inspect your unit margins and return an actionable roadmap.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Business Name
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Apex Therapy / Nomad Travels"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Industry Category
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  >
                    <option value="Therapist / Mental Health">Therapist / Mental Health</option>
                    <option value="Travel Agency / Tours">Travel Agency / Tours</option>
                    <option value="Laptop Repair / Local Service">Laptop Repair / Local Service</option>
                    <option value="B2B Construction / Industrial Supplies">B2B Construction / Industrial Supplies</option>
                    <option value="FMCG & Food Goods">FMCG & Food Goods</option>
                    <option value="D2C / B2C Ecommerce">D2C / B2C Ecommerce</option>
                    <option value="Other Small & Medium Enterprise">Other Small & Medium Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Primary Conversion Objective
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  >
                    <option value="High-intent Qualified Leads">High-intent Qualified Leads</option>
                    <option value="Direct Inbound Phone Calls">Direct Inbound Phone Calls</option>
                    <option value="Online Ecommerce Orders">Online Ecommerce Orders</option>
                    <option value="Consultation Bookings">Consultation Bookings</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-semibold">Test Ad Budget Cap:</span>
                  <strong className="text-emerald-800 text-sm font-black font-heading">₹5,000 / 30 Days</strong>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Submit Strategy Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-heading font-black text-slate-950">
                  Strategy Request Initiated
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
                  We have received your test campaign details for {businessName}. Our senior strategy director will inspect your business model and contact you directly.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${MARKYT_CONTACT.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 text-white text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:bg-emerald-700 transition-all"
                  >
                    <PhoneCall className="w-4 h-4" /> Call Strategy Line Directly
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
