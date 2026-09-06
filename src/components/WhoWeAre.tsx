import React from 'react';
import { motion } from 'motion/react';
import { MDoodleIcons } from './MDoodleMarquee';
import { Sparkles, PhoneCall, ArrowUpRight, Instagram } from 'lucide-react';
import { MARKYT_CONTACT } from '../data/content';
import founderNewImage from '../assets/images/founder_new.jpg';
import clientStrategyImage from '../assets/images/client_strategy_new.jpg';
import growthPractitionerImage from '../assets/images/growth_practitioner_new.jpg';

const FOUNDER_PHOTO_URL = 'https://i.ibb.co/jCxjg9y/Picsart-26-09-06-18-27-39-991-jpg.jpg';
const CLIENT_STRATEGY_URL = 'https://i.ibb.co/spVX6q5c/Picsart-26-09-06-18-39-13-445-jpg.jpg';
const GROWTH_PRACTITIONER_URL = 'https://i.ibb.co/C515mDg4/Picsart-26-09-06-19-00-32-985-jpg.jpg';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="relative py-20 md:py-32 bg-[#F6F3EC] text-slate-900 overflow-hidden border-b border-slate-900/10 scroll-mt-24">
      
      {/* Decorative Red Dot from Screenshot 2 */}
      <div className="absolute top-12 left-8 sm:left-16 w-2.5 h-2.5 rounded-full bg-[#FF3B14]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Editorial Layout (Matching Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column: Overlapping Editorial Photos with "M" Doodle Stickers */}
          <div className="lg:col-span-6 relative">
            
            {/* Top right floating photo */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="absolute -top-10 right-4 sm:right-12 z-20 w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white"
            >
              <img
                src={clientStrategyImage}
                onError={(e) => {
                  e.currentTarget.src = CLIENT_STRATEGY_URL;
                }}
                alt="Client Strategy Session"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-2 left-2">
                <span className="w-2 h-2 rounded-full bg-[#FF3B14] block" />
              </div>
            </motion.div>

            {/* Left Main Editorial Photo with Disco Ball & "M" Doodle */}
            <div className="relative inline-block mt-8 sm:mt-12">
              <div className="absolute -top-8 -left-6 z-30 text-slate-950">
                <MDoodleIcons.brush className="w-12 h-12 sm:w-16 sm:h-16 rotate-[-12deg]" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 sm:w-76 md:w-84 rounded-2xl overflow-hidden border border-black/10 shadow-md bg-[#D69698] z-10"
              >
                <img
                  src={founderNewImage}
                  onError={(e) => {
                    e.currentTarget.src = FOUNDER_PHOTO_URL;
                  }}
                  alt="MARKYT Founder & Performance Strategist"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[940/1464] object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-900/10 shadow-md flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading font-black text-slate-950 text-sm tracking-tight">Anshbir Singh Arora</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B14]" title="Founder" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-600 tracking-tight">Founder & Growth Strategist</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-900 bg-slate-100 border border-slate-900/10 px-2 py-1 rounded-md font-bold uppercase tracking-wider shrink-0">
                    Lead
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Right Floating Photo with Doodle */}
            <div className="absolute -bottom-10 right-0 sm:right-6 z-20">
              <div className="absolute -top-6 -left-8 text-slate-950 z-30">
                <MDoodleIcons.curly className="w-12 h-12 rotate-[8deg]" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white"
              >
                <img
                  src={growthPractitionerImage}
                  onError={(e) => {
                    e.currentTarget.src = GROWTH_PRACTITIONER_URL;
                  }}
                  alt="Growth Practitioner"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </div>

          </div>

          {/* Right Column: Editorial Copy & Statement of Values */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] font-mono font-bold uppercase tracking-wider">
              <span>What We Stand For • Manifesto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.12]">
              Marketing built to hold up when someone <span className="squiggly-underline">looks closely</span>.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              <p className="text-slate-950 font-semibold text-lg sm:text-xl leading-snug">
                Marketing's job is to create real value for the brand, for the advertiser, and for the person actually watching.
              </p>
              <p>
                Somewhere along the way, a lot of it became fluff: polished reels with nothing behind them, claims dressed up to look like proof. And audiences have gotten better at spotting it because they've seen enough behind the curtain to know when something's real.
              </p>
              
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/90 border border-black/10 text-amber-950 space-y-2.5">
                <p className="text-base sm:text-lg font-heading font-bold leading-snug text-slate-950">
                  "We're a team of independent marketing professionals, 5+ years experience each, who came together on one belief: an honest, well-made offer still cuts through more noise than a clever one."
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`tel:${MARKYT_CONTACT.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-heading font-bold uppercase tracking-wider transition-transform hover:scale-105"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Talk with an Operator ({MARKYT_CONTACT.formattedPhone})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Clean Instagram link at bottom-right of Manifesto */}
              <a
                href={MARKYT_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-900/10 shadow-xs hover:shadow-md transition-all group"
                title="Follow @markyt_agency on Instagram"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold leading-none">Instagram</span>
                  <span className="text-xs font-heading font-bold text-slate-950 group-hover:text-[#FF3B14] transition-colors leading-tight">
                    {MARKYT_CONTACT.instagramHandle}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
