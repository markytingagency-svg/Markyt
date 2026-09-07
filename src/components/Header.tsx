import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Sparkles, 
  Flame, 
  Compass, 
  Layers, 
  FileSpreadsheet, 
  HelpCircle, 
  PhoneCall,
  Zap,
  Video,
  Users,
  Instagram
} from 'lucide-react';
import { MARKYT_CONTACT } from '../data/content';
import headerLogo from '../assets/images/markyt_header_logo_trimmed.png';

const HEADER_LOGO_URL = 'https://i.ibb.co/fVmGZ7zQ/Picsart-26-09-04-21-21-11-757-1.png';

interface HeaderProps {
  onOpenQuestionnaire: () => void;
  onNavigateToCreatives?: () => void;
  onNavigateToHome?: () => void;
  currentView?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenQuestionnaire,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Nav items aligned to the exact chronological scroll order of sections on the page:
  // 1. Who We Are (#who-we-are)
  // 2. Why Agencies Fail (#problem)
  // 3. Test → Scale (#philosophy)
  // 4. Live Data (#live-sheet)
  // 5. Growth Stack (#services)
  // 6. Ad Creatives (#creatives)
  // 7. FAQ (#faq)
  const navLinks = [
    { name: 'Who We Are', href: '#who-we-are', id: 'who-we-are', icon: Users },
    { name: 'Why Agencies Fail', href: '#problem', id: 'problem', icon: Flame, badge: 'Crucial' },
    { name: 'Test → Scale', href: '#philosophy', id: 'philosophy', icon: Compass },
    { name: 'Live Data', href: '#live-sheet', id: 'live-sheet', icon: FileSpreadsheet, badge: 'Live' },
    { name: 'Growth Stack', href: '#services', id: 'services', icon: Layers },
    { name: 'Ad Creatives', href: '#creatives', id: 'creatives', icon: Video, badge: 'New' },
    { name: 'FAQ', href: '#faq', id: 'faq', icon: HelpCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll by checking from bottom to top
      const scrollPosition = window.scrollY + 140;
      const sectionIds = navLinks.map(l => l.id);

      let current = '';
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          current = sectionIds[i];
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', ' ');
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* Top micro announcement bar with bold dynamic styling */}
      <div className="bg-slate-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF3B14] text-white text-xs font-black uppercase tracking-wider">
              <Zap className="w-3 h-3 fill-white" />
              <span>₹5K Test Model</span>
            </span>
            <span className="text-slate-300 text-xs sm:text-sm font-medium hidden md:inline">
              Controlled ₹5,000 budget • Real-time live sheet • 0% lock-in
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="header-top-contact-info"
              href={`tel:${MARKYT_CONTACT.phone}`}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/25 text-xs font-mono text-slate-200 hover:text-white transition-all duration-200 group cursor-pointer shadow-xs"
              title={`Click to call ${MARKYT_CONTACT.formattedPhone}`}
              aria-label={`Call direct line ${MARKYT_CONTACT.formattedPhone}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse group-hover:scale-125 transition-transform" title="Direct Line Available" />
              <PhoneCall className="w-3 h-3 text-amber-300 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 group-hover:text-white font-semibold tracking-tight">{MARKYT_CONTACT.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Modernized Navbar with iPhone Liquid Glass Aesthetic */}
      <nav
        className={`relative w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-b from-white/90 via-[#FBF9F5]/80 to-slate-200/30 backdrop-blur-2xl backdrop-saturate-150 border-b border-black/[0.06] shadow-[0_6px_28px_rgba(0,0,0,0.05)] py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-white/85 via-[#FBF9F5]/70 to-slate-200/20 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.04] py-3 sm:py-3.5'
        }`}
      >
        {/* Optical Gray-to-White Gradient Beam below navigation for liquid glass refraction & shine */}
        <div 
          aria-hidden="true"
          className="absolute -bottom-5 left-0 right-0 h-5 bg-gradient-to-b from-slate-300/25 via-slate-200/10 to-transparent pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Bold Brand Identity with Transparent PNG Logo */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0 select-none py-1"
            aria-label="MARKYT Home"
          >
            <img
              src={headerLogo}
              onError={(e) => {
                e.currentTarget.src = HEADER_LOGO_URL;
              }}
              alt="MARKYT"
              referrerPolicy="no-referrer"
              className="h-8 sm:h-9 md:h-9.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-[#FF3B14] text-white tracking-wider shadow-xs hidden xs:inline-flex">
              AGENCY
            </span>
          </a>

          {/* iPhone Liquid Glass Pill Bar: Floating dynamic island with optical gray-to-white sheen */}
          <div className="relative hidden lg:flex items-center">
            {/* Ambient specular back-glow behind the pill to make glass caustic shine */}
            <div 
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-slate-300/40 via-white/80 to-slate-300/40 blur-md pointer-events-none -z-10"
            />
            
            <div className="flex items-center gap-1 bg-gradient-to-b from-white/90 via-white/50 to-slate-200/40 backdrop-blur-2xl p-1 rounded-full border border-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.04)]">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative flex items-center gap-1.5 px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all duration-200 group shrink-0 select-none ${
                      isActive 
                        ? 'bg-gradient-to-b from-white via-white to-slate-50 text-slate-950 font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] border border-black/[0.04]' 
                        : 'text-slate-600 hover:text-slate-950 hover:bg-white/80 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 transition-colors shrink-0 ${
                      isActive ? 'text-[#FF3B14]' : 'text-slate-400 group-hover:text-slate-700'
                    }`} />
                    <span className="tracking-tight whitespace-nowrap">{link.name}</span>
                    {link.badge && (
                      <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full font-bold leading-none tracking-tight ${
                        isActive 
                          ? 'bg-[#FF3B14]/10 text-[#FF3B14]' 
                          : 'bg-black/5 text-slate-500 group-hover:bg-[#FF3B14]/10 group-hover:text-[#FF3B14]'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Direct High-Impact CTAs with Liquid Capsule Glass styling */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={MARKYT_CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#FF3B14] border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md flex items-center justify-center transition-all group cursor-pointer hover:scale-105"
              title="Follow @markyt_agency on Instagram"
              aria-label="Instagram @markyt_agency"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <button
              id="header-cta-test-btn"
              onClick={onOpenQuestionnaire}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF3B14] hover:bg-[#E0300D] text-white text-xs font-heading font-black tracking-wide border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_4px_16px_rgba(255,59,20,0.3)] hover:shadow-[0_6px_20px_rgba(255,59,20,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>START ₹5K TEST</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle with liquid glass button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuestionnaire}
              className="px-3.5 py-1.5 rounded-full bg-[#FF3B14] text-white text-xs font-bold font-heading shadow-xs sm:hidden"
            >
              ₹5k Test
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-slate-900 shadow-xs hover:bg-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown with Liquid Glass Frosted Aesthetic */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-4 my-2.5 p-3 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2">
            <div className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-white text-slate-950 font-semibold shadow-xs border border-black/5'
                        : 'hover:bg-white/60 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF3B14]' : 'text-slate-400'}`} />
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-[#FF3B14]/10 text-[#FF3B14]'
                          : 'bg-black/5 text-slate-500'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-black/5 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuestionnaire();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#FF3B14] text-white text-xs font-bold font-heading uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(255,59,20,0.3)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" /> Start ₹5,000 Validation Sprint
              </button>

              <a
                href={MARKYT_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 px-4 rounded-full bg-white/70 hover:bg-white text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 border border-black/5 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#FF3B14]" />
                <span>Follow {MARKYT_CONTACT.instagramHandle} on Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
