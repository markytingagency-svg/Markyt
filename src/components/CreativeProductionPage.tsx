import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight, 
  Scissors, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Eye, 
  Clock, 
  Award,
  ChevronRight,
  Sliders,
  Volume2,
  Subtitles,
  MousePointerClick
} from 'lucide-react';
import { MARKYT_CONTACT } from '../data/content';
import { MDoodleIcons } from './MDoodleMarquee';

interface CreativeProductionPageProps {
  onOpenQuestionnaire: () => void;
  onBackToHome?: () => void;
}

export const CreativeProductionPage: React.FC<CreativeProductionPageProps> = ({
  onOpenQuestionnaire,
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<'option-a' | 'option-b'>('option-b');

  return (
    <div id="creatives" className="relative bg-[#F6F3EC] text-slate-900 selection:bg-[#FF3B14]/20 selection:text-slate-950 border-t border-slate-200/70 scroll-mt-24">

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-[#B8C1FA] border-b border-black/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Floating doodle accents */}
        <div className="absolute top-8 left-8 opacity-25 pointer-events-none hidden md:block">
          <MDoodleIcons.brush className="w-16 h-16 text-slate-950" />
        </div>
        <div className="absolute bottom-8 right-12 opacity-25 pointer-events-none hidden md:block">
          <MDoodleIcons.bubble className="w-20 h-20 text-[#FF3B14]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-slate-950 tracking-tight leading-[1.02]">
            Two Simple Paths to <span className="text-[#FF3B14]">High-Converting</span> Video Ads.
          </h1>

          <p className="mt-6 text-lg sm:text-2xl text-slate-900 font-medium leading-relaxed max-w-3xl mx-auto">
            You don’t need an expensive ₹1,00,000 production crew to run ads that sell. 
            Choose the path that suits your team, and we'll handle the performance science either way.
          </p>

          {/* Quick value badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-900 text-xs sm:text-sm font-bold shadow-xs flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FF3B14]" />
              Proven 3-Second Hook Strategy
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-900 text-xs sm:text-sm font-bold shadow-xs flex items-center gap-2">
              <Scissors className="w-4 h-4 text-teal-600" />
              In-House DFY Video Editors
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-900 text-xs sm:text-sm font-bold shadow-xs flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Nominal Subsidized Rates For Ad Clients
            </span>
          </div>
        </div>
      </section>

      {/* The Two Main Options: Interactive Detailed Comparison */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3B14] bg-[#FF3B14]/10 px-3 py-1 rounded-full border border-[#FF3B14]/20">
            Choose Your Preferred Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight mt-3">
            Option 1: You Shoot, We Guide vs Option 2: Full In-House Edit
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3">
            Every business is at a different stage. Select the option that matches your current bandwidth.
          </p>
        </div>

        {/* Side by Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* OPTION 1: You Shoot Raw Clips (Guided by MARKYT) */}
          <div className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-heading font-bold text-xs uppercase px-4 py-1.5 rounded-bl-xl border-l border-b border-black/10">
              ₹0 Extra Fee • Included
            </div>

            <div>
              <div className="w-14 h-14 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-6 shadow-xs">
                <Smartphone className="w-7 h-7" />
              </div>

              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Option 01 • DIY Guided
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 mt-1 tracking-tight">
                You Provide Raw Footage, We Provide The Battle-Tested Blueprint
              </h3>

              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Take out your smartphone, record short 5-10 second clips of your product, store, or service based on our direct guidance, and send them over.
              </p>

              {/* What We Guide You On */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-black/10">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF3B14]" />
                  What We Guide You On Step-by-Step:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Tailored Format Blueprint:</strong> We determine the exact ad format that fits your goal best, whether that means testimonial carousels to establish trust, explainer videos to set yourself apart, or fast teasers to spark curiosity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Market-Tested Competitor Intel:</strong> We research top performers in your industry and give you exact winning ad angles to reference that are already proven and converting.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Rapid Creative Review & Feedback:</strong> Once you send your clips, we audit them for pacing, trim unnecessary length, and make sure unmistakable brand presence lands firmly within the first few seconds.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 block">Cost Structure</span>
                <span className="text-xl font-heading font-bold text-slate-950 tracking-tight">Included in ₹5,000 Ads Sprint + Token Fee</span>
              </div>
              <button
                onClick={onOpenQuestionnaire}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Choose Guided Option
              </button>
            </div>
          </div>

          {/* OPTION 2: Hand Off Entirely to Our In-House Video Editor */}
          <div className="bg-[#FFE5B4] rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FF3B14] text-white font-heading font-bold text-xs uppercase px-4 py-1.5 rounded-bl-xl border-l border-b border-black/10">
              🔥 Most Popular • High-Retention
            </div>

            <div>
              <div className="w-14 h-14 rounded-xl bg-white border border-black/10 flex items-center justify-center text-[#FF3B14] mb-6 shadow-xs">
                <Scissors className="w-7 h-7" />
              </div>

              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3B14]">
                Option 02 • Done-For-You Editing
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 mt-1 tracking-tight">
                Hand It Off Entirely to Our In-House Video Editors at Nominal Fees
              </h3>

              <p className="text-slate-800 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                Shoot clips exactly as we direct and send the footage over. Our video team cuts the pacing, layers in relevant B-rolls, animates captions, and formats everything into high-converting 9:16 reels.
              </p>

              {/* What Our Editors Deliver */}
              <div className="mt-6 p-4 rounded-xl bg-white/90 border border-black/10">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#FF3B14]" />
                  What Our In-House Editors Handle For You:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF3B14] shrink-0 mt-0.5" />
                    <span><strong>High-Energy Jump Cuts & Zoom Punches:</strong> Keeps viewer eyes glued with zero awkward pauses.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF3B14] shrink-0 mt-0.5" />
                    <span><strong>Bold Animated Subtitles (Alex Hormozi / Reel Style):</strong> Word-by-word highlighted captions so 85%+ muted viewers read every word.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF3B14] shrink-0 mt-0.5" />
                    <span><strong>Crisp B-Rolls & Visual Cutaways:</strong> We integrate sharp contextual B-rolls to break the monotony, hold viewer attention, and maintain strong pacing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF3B14] shrink-0 mt-0.5" />
                    <span><strong>Sound Design & Trending SFX:</strong> Whooshes, pops, and non-copyright licensed background beats engineered for ad compliance.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-700 block">Subsidized Pricing</span>
                <span className="text-xl font-heading font-bold text-slate-950 tracking-tight">Nominal Low Cost (Ad Client Rate)</span>
              </div>
              <button
                onClick={onOpenQuestionnaire}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#FF3B14] hover:bg-[#E0300D] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Select In-House Editing
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* The 4-Pillar MARKYT Creative Engine (Why it out-converts standard agency ads) */}
      <section className="bg-white border-y border-slate-200/70 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3B14] bg-[#FF3B14]/10 px-3 py-1 rounded-full border border-[#FF3B14]/20">
              The Science Behind Every Ad
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight mt-3">
              Either Way, We Advise On These 4 Performance Pillars
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Whether you edit it or we edit it, every single creative must pass this 4-step framework before launching into the ₹5,000 ad sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-[#F6F3EC] p-6 rounded-xl border border-black/10 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-100 border border-black/10 flex items-center justify-center text-amber-700 font-heading font-bold text-xl mb-4 shadow-xs">
                  01
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-950 tracking-tight">
                  The 3-Second Hook
                </h3>
                <p className="text-xs text-slate-700 mt-2.5 leading-relaxed font-medium">
                  80% of ad budget is wasted when viewers swipe in seconds 1 to 3. We formulate high-contrast visual or verbal pattern interrupts that force mobile thumbs to stop.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-300 flex items-center gap-2 text-xs font-mono text-[#FF3B14] font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>Pattern Interrupt</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F6F3EC] p-6 rounded-xl border border-black/10 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-sky-100 border border-black/10 flex items-center justify-center text-sky-700 font-heading font-bold text-xl mb-4 shadow-xs">
                  02
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-950 tracking-tight">
                  Script Structure
                </h3>
                <p className="text-xs text-slate-700 mt-2.5 leading-relaxed font-medium">
                  Problem → Proof → Frictionless Offer. No corporate rambling or vanity intros. We speak directly in the language your Indian customer searches for.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-300 flex items-center gap-2 text-xs font-mono text-sky-700 font-bold">
                <Sliders className="w-3.5 h-3.5" />
                <span>High-Converting Flow</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F6F3EC] p-6 rounded-xl border border-black/10 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-teal-100 border border-black/10 flex items-center justify-center text-teal-700 font-heading font-bold text-xl mb-4 shadow-xs">
                  03
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-950 tracking-tight">
                  Pacing & Retention
                </h3>
                <p className="text-xs text-slate-700 mt-2.5 leading-relaxed font-medium">
                  Cuts timed every 1.8 to 2.4 seconds with subtle zooms and sound accents. Algorithms on Meta and Instagram reward higher average watch times with lower CPMs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-300 flex items-center gap-2 text-xs font-mono text-teal-700 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Algorithm Retention</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#F6F3EC] p-6 rounded-xl border border-black/10 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-100 border border-black/10 flex items-center justify-center text-purple-700 font-heading font-bold text-xl mb-4 shadow-xs">
                  04
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-950 tracking-tight">
                  Muted-Ready Captions
                </h3>
                <p className="text-xs text-slate-700 mt-2.5 leading-relaxed font-medium">
                  Over 85% of people watch social feeds with sound muted during commutes or at work. Bold, animated captions ensure your message is delivered 100% visually.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-300 flex items-center gap-2 text-xs font-mono text-purple-700 font-bold">
                <Subtitles className="w-3.5 h-3.5" />
                <span>85%+ Mute Optimization</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why We Keep In-House Editing Fees Strictly Nominal */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-black/10 p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#FF3B14] text-white border border-[#FF3B14] flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="flex-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3B14]">
              The MARKYT Commercial Philosophy
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 mt-1 tracking-tight">
              Why Are Our Editing Fees Kept Nominal?
            </h3>
            <p className="text-slate-700 text-sm sm:text-base mt-2 leading-relaxed font-medium">
              Because we are a <strong>performance growth agency</strong>, not an overpriced video studio trying to bill you ₹50,000 for a 30-second reel. 
              Our priority is helping you validate ad metrics on Google & Meta with low CAC. 
              Our in-house editing is provided at nominal cost exclusively to equip your ₹5,000 sprint with winning creatives that actually generate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Bar */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight">
            Ready to test ad creatives with zero risk?
          </h3>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Launch your ₹5,000 ad validation sprint today. We will guide your raw recordings or edit them in-house so your ads launch within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuestionnaire}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF3B14] hover:bg-[#E0300D] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start ₹5,000 Validation Sprint
            </button>

            <a
              href={`tel:${MARKYT_CONTACT.phone}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-bold text-sm uppercase tracking-wider border border-slate-300 shadow-sm flex items-center justify-center gap-2.5 transition-all hover:scale-105"
            >
              <PhoneCall className="w-5 h-5 text-slate-900" />
              <span>Call Direct: {MARKYT_CONTACT.formattedPhone}</span>
            </a>
          </div>

          <div className="pt-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white text-xs font-mono underline uppercase tracking-wider transition-colors cursor-pointer"
            >
              ↑ Back to Top of Page
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
