import React, { useState } from 'react';
import { APPROACH_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Approach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1); // Default to 02 Explore
  const activeStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#111318]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#064BAE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE]" />
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#111318] leading-tight">
            How we solve the unsolvable: from divergence to scale.
          </h2>
          <p className="text-base sm:text-lg text-[#111318]/70 font-normal leading-relaxed">
            Linear thinking creates incremental solutions. Our five-stage framework weaves
            intentional divergence with industrial-grade convergence.
          </p>
        </div>

        {/* Step Progression Bar / Connecting Element */}
        <div className="relative mb-12">
          {/* Subtle Connecting Gradient Line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#064BAE] via-[#765ECE] to-[#B168DF] opacity-40" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {APPROACH_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  id={`approach-step-btn-${step.number}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064BAE] ${
                    isSelected
                      ? 'bg-white border-2 border-[#064BAE] shadow-[0_8px_28px_-8px_rgba(6,75,174,0.18)] translate-y-[-2px]'
                      : 'bg-white/80 hover:bg-white border border-[#111318]/8 hover:border-[#111318]/20'
                  }`}
                >
                  {/* Step Indicator Dot (aligning with connecting line on desktop) */}
                  <div className="hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-[#064BAE] mb-4 -mt-9 mx-auto relative z-10">
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? 'bg-[#064BAE] scale-125' : 'bg-[#765ECE]/40'
                      }`}
                    />
                  </div>

                  {/* Number & Phase tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-2xl sm:text-3xl font-bold font-mono tracking-tight transition-colors ${
                        isSelected ? 'text-[#064BAE]' : 'text-[#111318]/40 group-hover:text-[#111318]/70'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        step.divergentPhase === 'Diverge'
                          ? 'bg-[#B168DF]/10 text-[#765ECE]'
                          : 'bg-[#064BAE]/10 text-[#064BAE]'
                      }`}
                    >
                      {step.divergentPhase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold tracking-tight transition-colors ${
                      isSelected ? 'text-[#111318]' : 'text-[#111318]/80 group-hover:text-[#111318]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#111318]/60 line-clamp-1 mt-1 font-normal">
                    {step.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed View */}
        <div
          id="approach-detailed-card"
          className="p-8 sm:p-12 rounded-3xl bg-white border border-[#111318]/8 shadow-[0_12px_40px_-16px_rgba(17,19,24,0.06)] relative overflow-hidden"
        >
          {/* Subtle top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#064BAE] via-[#765ECE] to-[#B168DF]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#064BAE]">
                  STAGE {activeStep.number} &mdash; {activeStep.divergentPhase.toUpperCase()}
                </span>
                <span className="text-[#111318]/20">•</span>
                <span className="text-xs font-medium text-[#111318]/60">Operational Playbook</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318]">
                {activeStep.title}:{' '}
                <span className="text-[#064BAE] font-medium">{activeStep.tagline}</span>
              </h3>

              <p className="text-base text-[#111318]/75 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Core Stage Activities */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                  Key Sprint Activities
                </h4>
                <div className="space-y-2">
                  {activeStep.activities.map((act, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm text-[#111318]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#765ECE] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverables Card */}
            <div className="lg:col-span-5 bg-[#FAFAF9] p-6 sm:p-8 rounded-2xl border border-[#111318]/8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111318]/50 block mb-1">
                  Concrete Deliverable
                </span>
                <div className="text-base font-bold text-[#111318]">
                  {activeStep.deliverables}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#111318]/6 space-y-2">
                <div className="text-xs font-semibold text-[#064BAE] uppercase tracking-wider">
                  Divergence Guarantee
                </div>
                <p className="text-xs text-[#111318]/70 leading-relaxed">
                  We refuse to settle for the first plausible approach. Every decision is benchmarked
                  against alternative hypotheses to eliminate systemic blindspots.
                </p>
              </div>

              {/* Next step button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#111318]/50">
                  Step {activeStepIndex + 1} of {APPROACH_STEPS.length}
                </span>
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % APPROACH_STEPS.length)
                  }
                  className="inline-flex items-center text-xs font-bold text-[#064BAE] hover:text-[#053d8e] transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
