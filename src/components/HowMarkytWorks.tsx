import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FUNNEL_STAGES } from '../data/content';
import {
  Compass,
  MapPin,
  RefreshCw,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface HowMarkytWorksProps {
  onOpenQuestionnaire: () => void;
}

export const HowMarkytWorks: React.FC<HowMarkytWorksProps> = ({ onOpenQuestionnaire }) => {
  const [activeStageId, setActiveStageId] = useState<string>('discovery');
  const activeStage = FUNNEL_STAGES.find((s) => s.id === activeStageId) || FUNNEL_STAGES[0];

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="philosophy" className="relative py-20 md:py-28 bg-[#BEE4F8] text-slate-950 overflow-hidden border-b border-slate-950/10 scroll-mt-24">
      
      {/* Decorative Red Marker */}
      <div className="absolute top-12 left-8 sm:left-16 w-3 h-3 rounded-full bg-[#FF3B14]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-300" />
            <span>Conversion Architecture</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-tight">
            How We Convert Cold Traffic Into Paying Customers
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            No vanity reach or empty impressions. A disciplined 5-stage customer journey engine engineered to turn cold prospects into qualified leads and repeat buyers.
          </p>
        </div>

        {/* Interactive 5-Stage Customer Journey Funnel */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
              The 5-Stage Conversion Engine
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-950 mt-1 tracking-tight">
              Interactive Funnel Blueprint
            </h3>
          </div>

          {/* Funnel Stage Nav Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
            {FUNNEL_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[90px] ${
                    isSelected
                      ? 'bg-blue-500 text-white border-blue-600 shadow-sm scale-[1.01]'
                      : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-heading font-bold">{stage.name}</span>
                    <div className={isSelected ? 'text-white' : 'text-blue-700'}>
                      {getStageIcon(stage.iconName)}
                    </div>
                  </div>
                  <span className={`text-[11px] line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    {stage.shortDesc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl bg-blue-50/70 border border-blue-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-200 text-blue-950 text-xs font-mono font-bold">
                    Active Stage: {activeStage.name}
                  </span>
                  {activeStage.isRetargetLoop && (
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-200 text-purple-950 text-xs font-mono font-bold">
                      Crucial Margin Saver
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-heading font-bold text-slate-950 tracking-tight">
                  {activeStage.shortDesc}
                </h4>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeStage.whatWeDo}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {activeStage.channels.map((chan) => (
                    <span key={chan} className="px-3 py-1 rounded-xl bg-white border border-blue-200 text-xs text-slate-900 font-semibold shadow-2xs">
                      {chan}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 bg-white p-5 rounded-xl border border-blue-200 shadow-xs space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-slate-500">
                  Primary Metric Tracked Daily
                </div>
                <div className="text-lg font-heading font-bold text-blue-900 tracking-tight">
                  {activeStage.metricTracked}
                </div>
                <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  Logged in real-time onto your shared Google Sheet for 100% client transparency.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
