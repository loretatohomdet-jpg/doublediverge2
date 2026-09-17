import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowUpRight, X, Check, Activity, Zap, Cpu } from 'lucide-react';

export const Work: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const renderProjectVisual = (id: string) => {
    // Modern abstract technology-oriented SVG illustrations in brand palette
    if (id === 'synapse-nexus') {
      return (
        <svg viewBox="0 0 500 280" className="w-full h-full object-cover" fill="none">
          <rect width="500" height="280" fill="#F8FAFC" />
          <defs>
            <linearGradient id="vis-grad-1" x1="0" y1="0" x2="500" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#064BAE" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#765ECE" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#B168DF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="500" height="280" fill="url(#vis-grad-1)" />

          {/* Coordinate matrix lines */}
          <g stroke="#111318" strokeOpacity="0.06" strokeWidth="1">
            <line x1="50" y1="0" x2="50" y2="280" strokeDasharray="4 4" />
            <line x1="150" y1="0" x2="150" y2="280" strokeDasharray="4 4" />
            <line x1="250" y1="0" x2="250" y2="280" strokeDasharray="4 4" />
            <line x1="350" y1="0" x2="350" y2="280" strokeDasharray="4 4" />
            <line x1="450" y1="0" x2="450" y2="280" strokeDasharray="4 4" />
            <line x1="0" y1="70" x2="500" y2="70" strokeDasharray="4 4" />
            <line x1="0" y1="140" x2="500" y2="140" strokeDasharray="4 4" />
            <line x1="0" y1="210" x2="500" y2="210" strokeDasharray="4 4" />
          </g>

          {/* Medical Intelligence Neural Mesh */}
          <path
            d="M 60 140 C 120 70, 180 210, 250 140 C 320 70, 380 210, 440 140"
            stroke="#064BAE"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 60 140 C 140 190, 200 60, 280 180 C 360 260, 400 110, 440 140"
            stroke="#765ECE"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Clinical Node Pulses */}
          <circle cx="150" cy="105" r="7" fill="#064BAE" />
          <circle cx="250" cy="140" r="9" fill="#765ECE" />
          <circle cx="350" cy="175" r="7" fill="#B168DF" />
          <circle cx="280" cy="180" r="5" fill="#3C54BE" />
        </svg>
      );
    }

    if (id === 'aether-grid') {
      return (
        <svg viewBox="0 0 500 280" className="w-full h-full object-cover" fill="none">
          <rect width="500" height="280" fill="#F8FAFC" />
          <defs>
            <linearGradient id="vis-grad-2" x1="500" y1="0" x2="0" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3C54BE" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#765ECE" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#9B63D9" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <rect width="500" height="280" fill="url(#vis-grad-2)" />

          {/* High voltage grid telemetry vectors */}
          <g stroke="#3C54BE" strokeOpacity="0.2" strokeWidth="1.5">
            <polygon points="250,40 380,120 340,240 160,240 120,120" fill="none" />
            <polygon points="250,70 340,130 310,210 190,210 160,130" fill="none" />
          </g>

          <path
            d="M 120 120 L 250 40 L 380 120 L 250 160 Z"
            stroke="#765ECE"
            strokeWidth="2.5"
            fill="#765ECE"
            fillOpacity="0.08"
          />

          <circle cx="250" cy="40" r="6" fill="#064BAE" />
          <circle cx="380" cy="120" r="6" fill="#3C54BE" />
          <circle cx="340" cy="240" r="6" fill="#765ECE" />
          <circle cx="160" cy="240" r="6" fill="#9B63D9" />
          <circle cx="120" cy="120" r="6" fill="#B168DF" />
          <circle cx="250" cy="160" r="8" fill="#064BAE" />
        </svg>
      );
    }

    // Meridian Exchange
    return (
      <svg viewBox="0 0 500 280" className="w-full h-full object-cover" fill="none">
        <rect width="500" height="280" fill="#F8FAFC" />
        <defs>
          <linearGradient id="vis-grad-3" x1="0" y1="280" x2="500" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#064BAE" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#3C54BE" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#765ECE" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="500" height="280" fill="url(#vis-grad-3)" />

        {/* High frequency order book depth charts & matching channels */}
        <path
          d="M 50 220 L 120 190 L 180 200 L 230 140 L 270 140 L 320 80 L 380 100 L 450 50"
          stroke="#064BAE"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 50 240 L 120 220 L 200 220 L 270 180 L 350 180 L 450 110"
          stroke="#765ECE"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Latency markers */}
        <line x1="230" y1="50" x2="230" y2="230" stroke="#064BAE" strokeOpacity="0.25" strokeDasharray="2 3" />
        <line x1="320" y1="50" x2="320" y2="230" stroke="#765ECE" strokeOpacity="0.25" strokeDasharray="2 3" />

        <circle cx="230" cy="140" r="7" fill="#064BAE" />
        <circle cx="320" cy="80" r="7" fill="#765ECE" />
        <circle cx="450" cy="50" r="6" fill="#B168DF" />
      </svg>
    );
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#111318]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#064BAE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE]" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#111318] leading-tight">
              Selected deployments solving complex reality.
            </h2>
          </div>
          <p className="text-[#111318]/70 text-base max-w-md font-normal leading-relaxed">
            Every engagement reflects our commitment to intellectual rigor, architectural defensibility,
            and measurable enterprise value.
          </p>
        </div>

        {/* Large Visual Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              id={`case-study-card-${project.id}`}
              onClick={() => setSelectedCase(project)}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-[#111318]/8 overflow-hidden hover:border-[#064BAE]/30 hover:shadow-[0_16px_40px_-16px_rgba(6,75,174,0.1)] transition-all duration-300 cursor-pointer"
            >
              {/* Abstract Conceptual Tech Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F5] border-b border-[#111318]/6">
                {renderProjectVisual(project.id)}

                {/* Industry / Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/95 backdrop-blur-md text-[#111318] shadow-sm">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono font-semibold text-[#064BAE]">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#064BAE] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#111318]/70 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4 pt-4 border-t border-[#111318]/6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#F2F3F5] text-[#111318]/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Impact Stats summary */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.stats.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="bg-[#FAFAF9] p-2.5 rounded-xl border border-[#111318]/6">
                        <div className="text-base font-extrabold text-[#064BAE]">{s.value}</div>
                        <div className="text-[11px] text-[#111318]/60 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Case Study CTA Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#064BAE]">
                  <span>View Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-[#064BAE]/8 group-hover:bg-[#064BAE] flex items-center justify-center text-[#064BAE] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Narrative Modal */}
      {selectedCase && (
        <div
          id="case-study-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111318]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div
            id="case-study-modal-content"
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#111318]/10 space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#111318]/60 hover:text-[#111318] hover:bg-[#F2F3F5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-3 pr-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#064BAE]">
                <span>{selectedCase.client}</span>
                <span className="text-[#111318]/20">•</span>
                <span>{selectedCase.industry}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318]">
                {selectedCase.title}
              </h3>
            </div>

            {/* Visual Header */}
            <div className="h-56 rounded-2xl overflow-hidden border border-[#111318]/8">
              {renderProjectVisual(selectedCase.id)}
            </div>

            {/* Challenge & Invariant Constraint */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                The Initial Challenge
              </h4>
              <p className="text-sm sm:text-base text-[#111318]/80 leading-relaxed">
                {selectedCase.challenge}
              </p>
            </div>

            {/* The Divergence (How we thought differently) */}
            <div className="p-5 rounded-2xl bg-[#765ECE]/6 border border-[#765ECE]/15 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#765ECE]">
                The DoubleDiverge Divergence
              </h4>
              <p className="text-sm sm:text-base text-[#111318]/85 leading-relaxed font-medium">
                {selectedCase.divergence}
              </p>
            </div>

            {/* Solution & Implementation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                Engineered Solution
              </h4>
              <p className="text-sm sm:text-base text-[#111318]/80 leading-relaxed">
                {selectedCase.solution}
              </p>
            </div>

            {/* Metrics & Impact */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                Measurable Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedCase.stats.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAFAF9] border border-[#111318]/6 text-center">
                    <div className="text-2xl font-extrabold text-[#064BAE]">{s.value}</div>
                    <div className="text-xs text-[#111318]/60 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-2">
                {selectedCase.impact.map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#111318]/80">
                    <Check className="w-4 h-4 text-[#064BAE] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#F2F3F5] text-[#111318]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#111318]/8 flex items-center justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#064BAE] hover:bg-[#053d8e] rounded-full transition-all"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
