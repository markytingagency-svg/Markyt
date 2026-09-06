import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/content';
import { 
  Instagram, Search, Briefcase, Smartphone, Pin, 
  Video, Users, Percent, Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck, Zap
} from 'lucide-react';

export const ServicesSection: React.FC<{ onNavigateToCreatives?: () => void }> = ({ onNavigateToCreatives }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'performance' | 'beyond'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram': return Instagram;
      case 'Search': return Search;
      case 'Briefcase': return Briefcase;
      case 'Smartphone': return Smartphone;
      case 'Pin': return Pin;
      case 'Video': return Video;
      case 'Users': return Users;
      case 'Percent': return Percent;
      default: return Sparkles;
    }
  };

  const getIconColors = (idx: number) => {
    const palettes = [
      { bg: 'bg-emerald-100 text-emerald-800', border: 'hover:border-emerald-300' },
      { bg: 'bg-sky-100 text-sky-800', border: 'hover:border-sky-300' },
      { bg: 'bg-purple-100 text-purple-800', border: 'hover:border-purple-300' },
      { bg: 'bg-amber-100 text-amber-800', border: 'hover:border-amber-300' },
      { bg: 'bg-rose-100 text-rose-800', border: 'hover:border-rose-300' },
      { bg: 'bg-teal-100 text-teal-800', border: 'hover:border-teal-300' },
      { bg: 'bg-indigo-100 text-indigo-800', border: 'hover:border-indigo-300' },
      { bg: 'bg-orange-100 text-orange-800', border: 'hover:border-orange-300' },
    ];
    return palettes[idx % palettes.length];
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] text-slate-900 relative overflow-hidden border-t border-slate-200/70 scroll-mt-24">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>High-Impact Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-slate-950 leading-tight mb-4">
            Focused capabilities. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Zero fluff services.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            One specialized team operating the exact channels that move the needle for growing businesses, with no unnecessary services just to pad an agency proposal.
          </p>
        </div>

        {/* Filter Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-slate-100">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4.5 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            All Growth Channels ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('performance')}
            className={`px-4.5 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
              activeCategory === 'performance'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            Performance Media ({SERVICES.filter((s) => s.category === 'performance').length})
          </button>
          <button
            onClick={() => setActiveCategory('beyond')}
            className={`px-4.5 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
              activeCategory === 'beyond'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            Beyond Ads: Creative & Funnel ({SERVICES.filter((s) => s.category === 'beyond').length})
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = getIcon(service.icon);
            const palette = getIconColors(idx);
            return (
              <motion.div
                key={service.name}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`bg-white p-7 rounded-2xl border border-black/10 shadow-sm hover:shadow-md ${palette.border} transition-all flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-slate-100">
                    <div className={`w-11 h-11 rounded-xl ${palette.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 uppercase">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-950 mb-2.5 tracking-tight">
                    {service.name}
                  </h3>

                  {/* Best For Callout */}
                  <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="text-emerald-800 font-bold block mb-0.5">Best For:</span>
                    <span className="text-slate-700 leading-snug font-medium">{service.bestFor}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                    Included Deliverables
                  </div>
                  <div className="space-y-2 text-xs text-slate-700 font-medium">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-[10px]">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Closing Punchline Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white border border-emerald-700 flex items-center justify-center shrink-0 font-bold shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base text-slate-900 font-semibold">
              “We never add a channel unless it demonstrably earns its place in your conversion funnel.”
            </p>
          </div>
          <a
            href="#process"
            className="text-xs font-bold text-slate-900 hover:text-[#FF3B14] uppercase inline-flex items-center gap-1.5 shrink-0 bg-white px-4 py-2 rounded-xl border border-black/10 shadow-sm hover:shadow-md hover:scale-105 transition-transform font-mono"
          >
            <span>Inspect 8-Step Sprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
