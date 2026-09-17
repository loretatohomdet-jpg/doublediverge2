import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ArrowUpRight, Check, X, Sparkles, Cpu, RefreshCw, FlaskConical, Target, Database, AppWindow } from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Cpu className="w-5 h-5 text-[#064BAE]" />;
      case 'digital-transformation':
        return <RefreshCw className="w-5 h-5 text-[#3C54BE]" />;
      case 'research-innovation':
        return <FlaskConical className="w-5 h-5 text-[#765ECE]" />;
      case 'tech-strategy':
        return <Target className="w-5 h-5 text-[#9B63D9]" />;
      case 'data-analytics':
        return <Database className="w-5 h-5 text-[#064BAE]" />;
      case 'digital-products':
        return <AppWindow className="w-5 h-5 text-[#765ECE]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#064BAE]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#111318]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#064BAE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE]" />
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#111318] leading-tight">
              Disciplines engineered for non-linear impact.
            </h2>
          </div>
          <p className="text-[#111318]/70 text-base max-w-md font-normal leading-relaxed">
            We operate at the convergence of strategic foresight, empirical research, and
            industrial-grade implementation.
          </p>
        </div>

        {/* 6 Clean, Sophisticated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#111318]/8 hover:border-[#064BAE]/30 hover:shadow-[0_12px_32px_-12px_rgba(6,75,174,0.08)] transition-all duration-300 cursor-pointer"
            >
              {/* Top Accent Line - Subtle brand gradient accent on hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#064BAE] group-hover:via-[#765ECE] group-hover:to-[#B168DF] transition-all duration-300 rounded-full" />

              <div className="space-y-6">
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#111318]/40 group-hover:text-[#064BAE] transition-colors">
                    {service.number}
                  </span>
                  <div className="p-2 rounded-lg bg-[#F2F3F5] group-hover:bg-[#064BAE]/8 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#064BAE] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#111318]/70 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Core deliverables teaser tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {service.deliverables.slice(0, 2).map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#F2F3F5] text-[#111318]/75"
                    >
                      {item}
                    </span>
                  ))}
                  {service.deliverables.length > 2 && (
                    <span className="px-2 py-1 text-[11px] font-medium rounded-md bg-[#F2F3F5] text-[#111318]/50">
                      +{service.deliverables.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Link indicator */}
              <div className="pt-8 mt-6 border-t border-[#111318]/6 flex items-center justify-between text-xs font-semibold text-[#111318]/70 group-hover:text-[#064BAE] transition-colors">
                <span>View Full Scope</span>
                <div className="w-8 h-8 rounded-full bg-[#F2F3F5] group-hover:bg-[#064BAE] flex items-center justify-center text-[#111318] group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 p-8 rounded-2xl bg-[#F2F3F5] border border-[#111318]/6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#111318]">
              Need a hybrid cross-disciplinary architecture?
            </h4>
            <p className="text-sm text-[#111318]/70">
              Most complex enterprise initiatives require combining AI, infrastructure modernisation, and technical strategy.
            </p>
          </div>
          <button
            id="service-discuss-scope-btn"
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#064BAE] hover:bg-[#053d8e] rounded-full transition-all shrink-0 shadow-sm"
          >
            <span>Discuss Custom Scope</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111318]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            id="service-detail-modal-content"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#111318]/10 space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="service-modal-close-btn"
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#111318]/60 hover:text-[#111318] hover:bg-[#F2F3F5] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#064BAE]">
                  SERVICE {selectedService.number}
                </span>
                <span className="text-[#111318]/20">•</span>
                <span className="text-xs font-medium text-[#111318]/60">DoubleDiverge Capability</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318]">
                {selectedService.title}
              </h3>
              <p className="text-base text-[#111318]/80 leading-relaxed">
                {selectedService.fullDescription}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                Core Deliverables & Engagements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAFAF9] border border-[#111318]/6 flex items-start space-x-2.5"
                  >
                    <Check className="w-4 h-4 text-[#064BAE] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#111318]/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Protocols */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111318]/60">
                Representative Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#F2F3F5] text-[#111318]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Outcome Highlight */}
            <div className="p-4 rounded-xl bg-[#064BAE]/6 border border-[#064BAE]/15">
              <div className="text-xs font-bold text-[#064BAE] uppercase tracking-wider mb-1">
                Verified Benchmark
              </div>
              <div className="text-sm font-medium text-[#111318]">
                {selectedService.keyOutcome}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#111318]/8 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-sm font-medium text-[#111318]/70 hover:text-[#111318] rounded-full"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onContactClick();
                }}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#064BAE] hover:bg-[#053d8e] rounded-full transition-all shadow-sm"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
