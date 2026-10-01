/**
 * Coding First Digital Presence
 * Official Company Profile & Interactive Landing Page
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Programs } from './components/Programs';
import { Curriculum } from './components/Curriculum';
import { Pricing } from './components/Pricing';
import { LearningProcess } from './components/LearningProcess';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FreeTrialForm } from './components/FreeTrialForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string>('Coding Fundamental');

  const handleSelectProgram = (programTitle: string) => {
    setSelectedProgram(programTitle);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans antialiased">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <About />
        <VisionMission />
        <Programs onSelectProgramForTrial={handleSelectProgram} />
        <Curriculum />
        <Pricing />
        <LearningProcess />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FreeTrialForm initialProgram={selectedProgram} />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Back-To-Top Quick Controls */}
      <FloatingActions />
    </div>
  );
}
