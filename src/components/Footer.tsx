import React from 'react';
import { motion } from 'motion/react';
import { MARKYT_CONTACT } from '../data/content';
import { Phone, Mail, Sparkles, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import headerLogo from '../assets/images/markyt_header_logo_trimmed.png';

const FOOTER_LOGO_URL = 'https://i.ibb.co/fVmGZ7zQ/Picsart-26-09-04-21-21-11-757-1.png';

interface FooterProps {
  onOpenQuestionnaire: () => void;
  onNavigateToCreatives?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuestionnaire, onNavigateToCreatives }) => {
  return (
    <footer className="bg-[#FAFAFB] text-slate-900 border-t border-slate-200 relative overflow-hidden">
      
      {/* Final Quote Callout Bar in Soft Mint Gradient */}
      <div className="border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-sky-50 py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-snug">
            “Worst case, you’re out ₹5,000 and 30 days. Best case, you’ve discovered what actually scales and locked in a performance engine that compounds month over month.”
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenQuestionnaire}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-heading font-bold uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Start ₹5,000 Test Now</span>
            </button>
            <a
              href={`tel:${MARKYT_CONTACT.phone}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:text-slate-950 text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Strategy Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 text-xs text-slate-600">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src={headerLogo}
                onError={(e) => {
                  e.currentTarget.src = FOOTER_LOGO_URL;
                }}
                alt="MARKYT"
                referrerPolicy="no-referrer"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="leading-relaxed text-slate-600 font-medium">
              Modern performance marketing agency engineered for small & medium businesses. Full-funnel testing sprints with daily Google Sheet telemetry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-slate-900 font-extrabold uppercase tracking-wider mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5 font-medium text-xs">
              <li><a href="#problem" className="hover:text-emerald-700 transition-colors">Why Agencies Burn SMBs</a></li>
              <li><a href="#philosophy" className="hover:text-emerald-700 transition-colors">Test → Scale Philosophy</a></li>
              <li><a href="#services" className="hover:text-emerald-700 transition-colors">Growth Engine Capabilities</a></li>
              {onNavigateToCreatives && (
                <li>
                  <button 
                    onClick={onNavigateToCreatives} 
                    className="text-[#FF3B14] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ad Creatives & Video Lab</span>
                    <span className="text-[9px] font-mono px-1 py-0.2 bg-[#FF3B14]/10 rounded-sm">NEW</span>
                  </button>
                </li>
              )}
              <li><a href="#process" className="hover:text-emerald-700 transition-colors">8-Step Sprint Sequence</a></li>
              <li><a href="#live-sheet" className="hover:text-emerald-700 transition-colors">Live Google Sheet Demo</a></li>
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="font-heading text-slate-900 font-extrabold uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <a
                  href={`tel:${MARKYT_CONTACT.phone}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Phone: {MARKYT_CONTACT.formattedPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${MARKYT_CONTACT.email}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <span>{MARKYT_CONTACT.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Transparency */}
          <div>
            <h4 className="font-heading text-slate-900 font-extrabold uppercase tracking-wider mb-4">
              Channels & Insights
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 font-medium">
              <a 
                href={MARKYT_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-950 group transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#FF3B14] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{MARKYT_CONTACT.instagramHandle} (Instagram)</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-slate-950 transition-colors" />
              </a>
              <a 
                href={MARKYT_CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-950 group transition-colors"
                title="Watch MARKYT on YouTube"
              >
                <Youtube className="w-4 h-4 text-[#FF0000] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{MARKYT_CONTACT.youtubeHandle} (YouTube)</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-slate-950 transition-colors" />
              </a>
              <div className="pt-2 text-xs text-slate-500">
                Operating with 5+ years experience per practitioner.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 font-medium">
          <div>
            © {new Date().getFullYear()} MARKYT. All rights reserved. Precision Performance Marketing.
          </div>
          <div className="text-slate-600 font-semibold">
            ₹5,000 Validation Model • Zero Lock-in Contracts
          </div>
        </div>

      </div>
    </footer>
  );
};
