import React, { useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle, Send, Globe, Linkedin, Twitter, Github } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organisation: '',
    serviceInterest: [],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'Artificial Intelligence',
    'Digital Transformation',
    'R&D Prototyping',
    'Technology Strategy',
    'Data & Analytics',
    'Digital Products',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter((s) => s !== service)
        : [...prev.serviceInterest, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organisation: '',
      serviceInterest: [],
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#111318]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Studio Presence */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#064BAE]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE]" />
                <span>Start an Engagement</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.035em] text-[#111318] leading-[1.1]">
                Let's build what's next.
              </h2>
              <p className="text-base sm:text-lg text-[#111318]/70 font-normal leading-relaxed">
                Whether you have an undefined high-stakes technical hypothesis or a mission-critical
                transformation roadmap, we welcome ambitious conversations.
              </p>
            </div>

            {/* Direct Contact Metadata */}
            <div className="space-y-6 pt-4 border-t border-[#111318]/8">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#111318]/8 text-[#064BAE] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111318]/50 uppercase tracking-wider">
                    Direct Partner Inquiries
                  </div>
                  <a
                    href="mailto:hello@doublediverge.com"
                    className="text-base font-bold text-[#111318] hover:text-[#064BAE] transition-colors"
                  >
                    hello@doublediverge.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#111318]/8 text-[#765ECE] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111318]/50 uppercase tracking-wider">
                    Response Window
                  </div>
                  <div className="text-sm font-medium text-[#111318]">
                    Reviewed by technical partners within 24 business hours
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#111318]/8 text-[#3C54BE] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111318]/50 uppercase tracking-wider">
                    Global Studio Presence
                  </div>
                  <div className="text-sm font-medium text-[#111318] space-y-0.5">
                    <div>London &bull; 14-16 Great Portland St, W1W 8QW</div>
                    <div>San Francisco &bull; 548 Market St, CA 94104</div>
                    <div>Singapore &bull; 79 Robinson Rd, 068897</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#111318]/40 mb-3">
                Connect With Us
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="#linkedin"
                  onClick={(e) => e.preventDefault()}
                  className="p-2.5 rounded-xl bg-white border border-[#111318]/8 hover:border-[#064BAE] text-[#111318]/70 hover:text-[#064BAE] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  onClick={(e) => e.preventDefault()}
                  className="p-2.5 rounded-xl bg-white border border-[#111318]/8 hover:border-[#064BAE] text-[#111318]/70 hover:text-[#064BAE] transition-all"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#github"
                  onClick={(e) => e.preventDefault()}
                  className="p-2.5 rounded-xl bg-white border border-[#111318]/8 hover:border-[#064BAE] text-[#111318]/70 hover:text-[#064BAE] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#111318]/8 shadow-[0_16px_48px_-16px_rgba(17,19,24,0.06)] relative overflow-hidden">
              {submitted ? (
                <div
                  id="contact-form-success-state"
                  className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#064BAE]/10 text-[#064BAE] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-[#111318]">
                      Conversation Initiated
                    </h3>
                    <p className="text-sm text-[#111318]/70 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#111318]">{formData.name}</span>.
                      Your inquiry has been routed to our managing partners. We will review your context
                      and respond via {formData.email} promptly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-sm font-semibold text-[#064BAE] bg-[#064BAE]/8 hover:bg-[#064BAE]/15 rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-600">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-[#111318]/70">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF9] border border-[#111318]/10 text-sm text-[#111318] focus:bg-white focus:border-[#064BAE] focus:outline-none focus:ring-1 focus:ring-[#064BAE] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-[#111318]/70">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@organisation.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF9] border border-[#111318]/10 text-sm text-[#111318] focus:bg-white focus:border-[#064BAE] focus:outline-none focus:ring-1 focus:ring-[#064BAE] transition-all"
                      />
                    </div>
                  </div>

                  {/* Organisation */}
                  <div className="space-y-2">
                    <label htmlFor="contact-organisation" className="text-xs font-bold uppercase tracking-wider text-[#111318]/70">
                      Organisation / Enterprise
                    </label>
                    <input
                      id="contact-organisation"
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Apex Health Systems or Horizon Ventures"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF9] border border-[#111318]/10 text-sm text-[#111318] focus:bg-white focus:border-[#064BAE] focus:outline-none focus:ring-1 focus:ring-[#064BAE] transition-all"
                    />
                  </div>

                  {/* What can we help with? */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111318]/70 block">
                      What can we help with? (Select relevant disciplines)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.serviceInterest.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleService(opt)}
                            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                              isSelected
                                ? 'bg-[#064BAE] text-white shadow-sm'
                                : 'bg-[#FAFAF9] hover:bg-[#F2F3F5] text-[#111318]/75 border border-[#111318]/10'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-[#111318]/70">
                      Message / Problem Framing *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the challenge, system constraints, or vision you are exploring..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF9] border border-[#111318]/10 text-sm text-[#111318] focus:bg-white focus:border-[#064BAE] focus:outline-none focus:ring-1 focus:ring-[#064BAE] transition-all resize-y"
                    />
                  </div>

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#064BAE] to-[#765ECE] hover:from-[#053e92] hover:to-[#634cb8] rounded-full shadow-[0_4px_18px_rgba(6,75,174,0.22)] hover:shadow-[0_6px_24px_rgba(6,75,174,0.3)] active:scale-[0.99] transition-all duration-200 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Initiating...</span>
                      ) : (
                        <>
                          <span>Start a Conversation</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#111318]/45 text-center">
                    Confidentiality guaranteed. All exploratory discussions protected under mutual NDA.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
