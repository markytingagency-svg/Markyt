import React from 'react';
import { motion } from 'motion/react';
import { MDoodleMarquee } from './MDoodleMarquee';
import { CurrencyVisual } from './CurrencyVisual';

interface HeroProps {
  onOpenQuestionnaire: () => void;
  onNavigateToCreatives?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuestionnaire, onNavigateToCreatives }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#B8C1FA] text-slate-900 border-b border-slate-900/10">
      
      {/* 1. Animated Artistic "M" Doodle Marquee Banner across the top (from Screenshot 1) */}
      <div className="border-b border-slate-900/15 bg-[#ACB7F6]">
        <MDoodleMarquee textColor="text-slate-950" className="py-2.5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24 relative z-10">
        
        {/* Giant Display Typography */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Apple Liquid Glass Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/45 hover:bg-white/65 border border-white/90 text-slate-950 text-xs font-heading font-black uppercase tracking-widest mb-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-[#FF3B14] shadow-[0_0_8px_rgba(255,59,20,0.6)] animate-pulse" />
            <span className="tracking-wider">The ₹5,000 Validation Model for Indian SMBs</span>
          </div>

          {/* Headline Display: TEST IT is massive red hero text, THEN SCALE IT. is animated highlighted tagline */}
          <div
            className="relative flex flex-col items-center justify-center font-heading font-black tracking-tighter select-none py-2 px-4 sm:px-6"
          >
            {/* Top Line: Dominant Massive Red Text */}
            <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12rem] text-[#FF3B14] tracking-tighter leading-[0.88] drop-shadow-xs">
              TEST IT
            </div>

            {/* Bottom Line: Bold, High-Contrast Tagline in Anton Typography */}
            <motion.div
              className="relative inline-flex items-center justify-center mt-3 sm:mt-4 group cursor-default"
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Tagline Container */}
              <div className="relative px-3 sm:px-6 py-1">
                <span className="relative z-10 text-slate-950 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.75rem] font-anton uppercase leading-none tracking-wider block drop-shadow-xs">
                  THEN SCALE IT.
                </span>

                {/* Energetic Neon/Marker Highlighter Accent that expands and glows */}
                <motion.div
                  className="absolute bottom-1 sm:bottom-2 left-2 right-2 h-3 sm:h-5 md:h-6 bg-[#FF3B14]/25 rounded-md -z-0 pointer-events-none"
                  animate={{
                    opacity: [0.35, 0.75, 0.35],
                    scaleX: [0.95, 1.02, 0.95],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Dynamic Accent Underline Runner */}
              <div className="absolute -bottom-2 left-4 right-4 h-1 sm:h-1.5 rounded-full overflow-hidden bg-slate-950/20">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-[#FF3B14] rounded-full shadow-xs"
                  animate={{
                    left: ['0%', '0%', '100%'],
                    right: ['100%', '0%', '0%'],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: [0.65, 0, 0.35, 1],
                    repeatDelay: 0.4,
                  }}
                />
              </div>
            </motion.div>
          </div>

          <p className="mt-8 text-lg sm:text-2xl text-slate-900 font-medium max-w-2xl mx-auto leading-snug">
            You’ve probably burned money on marketing that didn’t deliver.
            <span className="block mt-1 font-bold text-slate-950">
              So test us with a ₹5,000 sprint, watch real numbers live, then scale only what works.
            </span>
          </p>
        </div>

        {/* Interactive Center Console: Expansive Rectangular Card across the page */}
        <div className="max-w-6xl mx-auto w-full">
          <CurrencyVisual
            onOpenQuestionnaire={onOpenQuestionnaire}
            onNavigateToCreatives={onNavigateToCreatives}
          />
        </div>

      </div>
    </section>
  );
};
