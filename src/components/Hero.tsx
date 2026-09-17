import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { DivergenceVisual } from './DivergenceVisual';

interface HeroProps {
  onExploreClick: () => void;
  onTalkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#FAFAF9]"
    >
      {/* Subtle brand ambient accents - restrained and sophisticated */}
      <div
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#765ECE]/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-48 w-96 h-96 rounded-full bg-[#064BAE]/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Studio Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F2F3F5] border border-[#111318]/6 text-xs font-semibold tracking-wide text-[#111318]/80">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#064BAE] to-[#B168DF]" />
              <span>Technology & Innovation Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-[-0.035em] text-[#111318] leading-[1.08]">
              Where technology meets{' '}
              <span className="dd-gradient-text block sm:inline">
                new possibilities.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#111318]/70 max-w-2xl font-normal leading-relaxed">
              DoubleDiverge helps organisations explore, build and apply technology to solve
              meaningful real-world problems.
            </p>

            {/* Actions / CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
              {/* Primary CTA */}
              <button
                id="hero-cta-talk-to-us"
                onClick={onTalkClick}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#064BAE] to-[#765ECE] hover:from-[#053e92] hover:to-[#634cb8] rounded-full shadow-[0_4px_18px_rgba(6,75,174,0.22)] hover:shadow-[0_6px_24px_rgba(6,75,174,0.3)] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-cta-explore-what-we-do"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-[#111318] bg-white hover:bg-[#F2F3F5] border border-[#111318]/10 rounded-full transition-all duration-200 active:scale-[0.98] hover:border-[#111318]/20"
              >
                <span>Explore What We Do</span>
              </button>
            </div>

            {/* Micro value highlights */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#111318]/8 max-w-xl">
              <div>
                <div className="text-2xl font-bold tracking-tight text-[#111318]">01</div>
                <div className="text-xs text-[#111318]/60 mt-0.5 font-medium">Speculative R&D</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-[#064BAE]">02</div>
                <div className="text-xs text-[#111318]/60 mt-0.5 font-medium">Enterprise Systems</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-[#765ECE]">03</div>
                <div className="text-xs text-[#111318]/60 mt-0.5 font-medium">Global Scale</div>
              </div>
            </div>
          </div>

          {/* Minimal Abstract Divergence Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <DivergenceVisual />
          </div>
        </div>

        {/* Global Impact Statement / Proof Strip */}
        <div className="mt-20 pt-10 border-t border-[#111318]/8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-[#111318]/60">
          <div className="font-semibold text-xs tracking-wider uppercase text-[#111318]/45">
            Trusted by forward-looking leaders across
          </div>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-medium text-xs sm:text-sm text-[#111318]/70">
            <span className="hover:text-[#064BAE] transition-colors">Frontier AI Laboratories</span>
            <span className="text-[#111318]/20">•</span>
            <span className="hover:text-[#064BAE] transition-colors">National Energy Grids</span>
            <span className="text-[#111318]/20">•</span>
            <span className="hover:text-[#064BAE] transition-colors">Hospital & Clinical Networks</span>
            <span className="text-[#111318]/20">•</span>
            <span className="hover:text-[#064BAE] transition-colors">Institutional Capital Markets</span>
          </div>
        </div>
      </div>
    </section>
  );
};
