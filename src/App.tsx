/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Work } from './components/Work';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Scroll spy to highlight active navigation link
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'approach', 'work', 'insights', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#111318] flex flex-col selection:bg-[#765ECE]/20 selection:text-[#064BAE]">
      {/* Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero
          onExploreClick={() => scrollToSection('services')}
          onTalkClick={() => scrollToSection('contact')}
        />

        {/* Editorial About Section with Double Divergence Paradigm */}
        <About />

        {/* What We Do / Services Section */}
        <Services onContactClick={() => scrollToSection('contact')} />

        {/* Our Approach (01 - 05) */}
        <Approach />

        {/* Featured Case Studies */}
        <Work />

        {/* Perspectives & Insights */}
        <Insights />

        {/* Contact ("Let's build what's next.") */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

