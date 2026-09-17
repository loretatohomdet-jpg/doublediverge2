import React, { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/content';
import { Compass, Lightbulb, GitBranch, Layers, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'divergence1' | 'divergence2'>('divergence1');

  const icons = [
    <Compass className="w-5 h-5 text-[#064BAE]" key="compass" />,
    <Lightbulb className="w-5 h-5 text-[#3C54BE]" key="lightbulb" />,
    <GitBranch className="w-5 h-5 text-[#765ECE]" key="gitbranch" />,
    <Layers className="w-5 h-5 text-[#9B63D9]" key="layers" />,
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#111318]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#064BAE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE]" />
            <span>About DoubleDiverge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#111318] leading-tight">
            We exist at the intersection of deep curiosity and rigorous engineering.
          </h2>

          <p className="text-lg text-[#111318]/70 font-normal leading-relaxed pt-2">
            Most technology initiatives fail not from lack of effort, but from premature
            answers to poorly understood questions. DoubleDiverge was founded on a simple
            conviction: transformative solutions emerge when you have the courage to explore
            unorthodox possibilities and the engineering discipline to execute them flawlessly.
          </p>
        </div>

        {/* Editorial Purpose & Philosophy Statement */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Core Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#111318]/8 shadow-[0_4px_24px_-8px_rgba(17,19,24,0.03)] space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111318] tracking-tight">
                Why "DoubleDiverge"?
              </h3>
              <p className="text-[#111318]/75 leading-relaxed">
                In classical design methodology, divergence means expanding the field of enquiry
                before narrowing down. At DoubleDiverge, we double that principle:
              </p>

              {/* Interactive Paradigm Switcher */}
              <div className="flex rounded-xl bg-[#F2F3F5] p-1 border border-[#111318]/6">
                <button
                  id="tab-divergence-problem"
                  onClick={() => setActivePhase('divergence1')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    activePhase === 'divergence1'
                      ? 'bg-white text-[#064BAE] shadow-sm'
                      : 'text-[#111318]/60 hover:text-[#111318]'
                  }`}
                >
                  01. Problem Divergence
                </button>
                <button
                  id="tab-divergence-solution"
                  onClick={() => setActivePhase('divergence2')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    activePhase === 'divergence2'
                      ? 'bg-white text-[#765ECE] shadow-sm'
                      : 'text-[#111318]/60 hover:text-[#111318]'
                  }`}
                >
                  02. Solution Divergence
                </button>
              </div>

              {/* Dynamic explanation of the paradigm */}
              {activePhase === 'divergence1' ? (
                <div className="p-5 rounded-xl bg-[#064BAE]/4 border border-[#064BAE]/12 space-y-3">
                  <div className="text-sm font-bold text-[#064BAE]">
                    Divergence I: Deconstructing Problem Space
                  </div>
                  <p className="text-xs sm:text-sm text-[#111318]/75 leading-relaxed">
                    Before rushing to code, we question stated assumptions. We interview peripheral
                    stakeholders, trace hidden edge cases, and analyze upstream system inputs. By
                    diverging across systemic perspectives, we uncover the authentic problem worth
                    solving.
                  </p>
                  <div className="text-xs font-semibold text-[#064BAE] flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    Deliverable: Invariant Root-Cause Synthesis
                  </div>
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-[#765ECE]/4 border border-[#765ECE]/12 space-y-3">
                  <div className="text-sm font-bold text-[#765ECE]">
                    Divergence II: Speculative Architecture & Prototyping
                  </div>
                  <p className="text-xs sm:text-sm text-[#111318]/75 leading-relaxed">
                    Once the core constraint is isolated, we diverge again across architectures. We
                    evaluate competing algorithms, stress-test radical alternative frameworks, and build
                    throwaway proof-of-concepts before converging on the resilient, future-proof stack.
                  </p>
                  <div className="text-xs font-semibold text-[#765ECE] flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    Deliverable: Production-Hardened Architecture
                  </div>
                </div>
              )}

              <div className="pt-2 text-xs text-[#111318]/50 border-t border-[#111318]/8">
                Disciplined exploration prevents million-dollar missteps.
              </div>
            </div>
          </div>

          {/* Right Column: Four Fundamental Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                id={`philosophy-card-${idx}`}
                className="p-6 rounded-2xl bg-white border border-[#111318]/8 hover:border-[#064BAE]/25 transition-all duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-[#F2F3F5] group-hover:bg-[#064BAE]/8 transition-colors shrink-0">
                    {icons[idx % icons.length]}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-[#111318] group-hover:text-[#064BAE] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#111318]/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global studio perspective quote */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#111318] text-white relative overflow-hidden">
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#064BAE] via-[#765ECE] to-[#B168DF] opacity-20 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#B168DF]">
              The DoubleDiverge Standard
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#FAFAF9] leading-snug">
              "We don't build software to win temporary awards. We build resilient technical engines
              that expand enterprise capability and solve authentic human problems."
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-white/60">
              <span className="font-semibold text-white">DoubleDiverge Leadership Council</span>
              <span>•</span>
              <span>London &bull; San Francisco &bull; Singapore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
