import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#F2F3F5] border-t border-[#111318]/8 pt-16 pb-12 text-[#111318]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#111318]/8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064BAE] rounded-md"
            >
              <Logo size="md" />
            </button>
            <p className="text-sm text-[#111318]/70 max-w-sm leading-relaxed">
              DoubleDiverge is a modern technology and innovation studio helping global organisations
              explore, build, and apply technology to solve meaningful real-world problems.
            </p>
            <div className="text-xs text-[#111318]/50 pt-2 font-mono">
              PRECISION &bull; SPECULATION &bull; PRODUCTION
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#111318]/50">
              Navigation
            </div>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#111318]/70 hover:text-[#064BAE] transition-colors"
                >
                  About DoubleDiverge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#111318]/70 hover:text-[#064BAE] transition-colors"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('approach')}
                  className="text-[#111318]/70 hover:text-[#064BAE] transition-colors"
                >
                  Our Approach (01-05)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-[#111318]/70 hover:text-[#064BAE] transition-colors"
                >
                  Featured Deployments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="text-[#111318]/70 hover:text-[#064BAE] transition-colors"
                >
                  Perspectives & Research
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Locations */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#111318]/50">
              Studios & Presence
            </div>
            <div className="space-y-2 text-sm text-[#111318]/70">
              <div>
                <span className="font-semibold text-[#111318]">London</span> &mdash; EMEA Headquarters
              </div>
              <div>
                <span className="font-semibold text-[#111318]">San Francisco</span> &mdash; Americas Lab
              </div>
              <div>
                <span className="font-semibold text-[#111318]">Singapore</span> &mdash; APAC Operations
              </div>
              <div className="pt-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-[#064BAE] hover:underline"
                >
                  Schedule an in-person workshop &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#111318]/50">
          <div>
            &copy; {new Date().getFullYear()} DoubleDiverge Ltd. All rights reserved. Registered Technology Practice.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#111318] transition-colors"
            >
              Privacy Notice
            </a>
            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#111318] transition-colors"
            >
              Terms of Engagement
            </a>
            <button
              id="footer-back-to-top-button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 hover:text-[#064BAE] transition-colors font-medium ml-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
