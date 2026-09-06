import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STEP_PROCESS } from '../data/content';
import { 
  FileText, Target, Palette, ShieldCheck, Rocket, Table, 
  MessageSquare, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Flag, ArrowUpRight
} from 'lucide-react';

interface StepByStepProcessProps {
  onOpenQuestionnaire: () => void;
}

export const StepByStepProcess: React.FC<StepByStepProcessProps> = ({ onOpenQuestionnaire }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'Target': return Target;
      case 'Palette': return Palette;
      case 'ShieldCheck': return ShieldCheck;
      case 'Rocket': return Rocket;
      case 'Table': return Table;
      case 'MessageSquare': return MessageSquare;
      case 'TrendingUp': return TrendingUp;
      default: return Sparkles;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAFAFB] text-slate-900 relative overflow-hidden border-t border-slate-200/70">
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Rocket className="w-3.5 h-3.5 text-emerald-700" />
            <span>Structured Sprint Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-slate-950 leading-tight mb-4">
            How it works, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">step by step.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No guessing, no surprises. A transparent sprint sequence where you review the full strategy and creative assets before spending ad budget, monitored daily.
          </p>
        </div>

        {/* 8-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEP_PROCESS.map((step) => {
            const Icon = getIcon(step.icon);
            const isMilestone = step.isMilestone;
            const isSelected = activeStep === step.number;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: step.number * 0.04 }}
                onClick={() => setActiveStep(step.number)}
                className={`relative p-6 rounded-3xl transition-all cursor-pointer flex flex-col justify-between border ${
                  isMilestone
                    ? 'bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30 border-emerald-300 shadow-md shadow-emerald-500/10 ring-2 ring-emerald-400/30'
                    : isSelected
                    ? 'bg-white border-emerald-300 shadow-md ring-1 ring-emerald-300/40'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-lg'
                }`}
              >
                {/* Top Header: Step Number & Cost Note */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <span className={`w-9 h-9 rounded-2xl flex items-center justify-center font-heading font-black text-xs ${
                      isMilestone 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : isSelected
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{step.number}
                    </span>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isMilestone
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : step.number <= 2
                        ? 'bg-teal-50 text-teal-800 border border-teal-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {step.costNote}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${isMilestone ? 'text-emerald-700' : 'text-slate-600'}`} />
                    <h3 className="text-base font-heading font-extrabold text-slate-950 tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className={`text-xs font-bold mb-2.5 leading-snug ${isMilestone ? 'text-emerald-800' : 'text-slate-800'}`}>
                    {step.summary}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.details}
                  </p>
                </div>

                {/* Milestone Badge */}
                {isMilestone && (
                  <div className="mt-5 pt-3.5 border-t border-emerald-200/80 text-xs text-emerald-900 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>0 Fee until strategy approval</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Action Prompt Below Process */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Initiate Step 1 Sprint
            </span>
            <h4 className="text-xl sm:text-2xl font-heading font-black text-slate-950 mb-1.5">
              Complete the 3-minute intake for your custom growth blueprint.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              100% Free • No credit card • Strategic funnel architecture prepared within 24 hours.
            </p>
          </div>

          <button
            onClick={onOpenQuestionnaire}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-heading font-bold uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>Start Step 1 (Free)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
