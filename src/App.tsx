/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhyMarketingBurnsSMBs } from './components/WhyMarketingBurnsSMBs';
import { HowMarkytWorks } from './components/HowMarkytWorks';
import { LiveGoogleSheetDemo } from './components/LiveGoogleSheetDemo';
import { ServicesSection } from './components/ServicesSection';
import { StepByStepProcess } from './components/StepByStepProcess';
import { IndustriesSection } from './components/IndustriesSection';
import { FAQSection } from './components/FAQSection';
import { InteractiveTestBuilder } from './components/InteractiveTestBuilder';
import { Footer } from './components/Footer';
import { QuestionnaireModal } from './components/QuestionnaireModal';
import { CreativeProductionPage } from './components/CreativeProductionPage';
import { RedTrailCursor } from './components/RedTrailCursor';

export default function App() {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  useEffect(() => {
    // If user lands on a specific hash (e.g., #creatives, #problem, #services), smoothly scroll to it
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, []);

  const scrollToCreatives = () => {
    const el = document.getElementById('creatives');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#creatives');
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-slate-900 flex flex-col font-sans selection:bg-[#FF3B14]/20 selection:text-slate-950 scroll-smooth">
      
      {/* 1. Header Navigation */}
      <Header 
        onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)} 
          onNavigateToCreatives={scrollToCreatives}
        />

        {/* 3. Who We Are */}
        <WhoWeAre />

        {/* 4. Why Marketing Burns SMBs */}
        <WhyMarketingBurnsSMBs />

        {/* 5. How Markyt Works */}
        <HowMarkytWorks onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)} />

        {/* 6. Live Google Sheet Demo */}
        <LiveGoogleSheetDemo />

        {/* 8. Growth Stack & Capabilities */}
        <ServicesSection onNavigateToCreatives={scrollToCreatives} />

        {/* 9. Ad Creatives & High-Converting Video Production */}
        <CreativeProductionPage
          onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)}
        />

        {/* 10. Step By Step Sprint Roadmap */}
        <StepByStepProcess onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)} />

        {/* 11. Industries & Vertical Specialization */}
        <IndustriesSection onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)} />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 14. Interactive Quick Test Form */}
        <InteractiveTestBuilder />
      </main>

      {/* 15. Footer */}
      <Footer 
        onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)}
        onNavigateToCreatives={scrollToCreatives}
      />

      {/* Smooth Red Snake Trail Cursor */}
      <RedTrailCursor />

      {/* Step 1 Questionnaire Modal */}
      <QuestionnaireModal
        isOpen={isQuestionnaireOpen}
        onClose={() => setIsQuestionnaireOpen(false)}
      />
    </div>
  );
}
