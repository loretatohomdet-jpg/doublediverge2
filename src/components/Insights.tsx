import React, { useState } from 'react';
import { INSIGHTS } from '../data/content';
import { InsightArticle } from '../types';
import { ArrowUpRight, Clock, Calendar, X, User } from 'lucide-react';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Technology Strategy', 'Artificial Intelligence', 'Research & Innovation', 'Infrastructure'];

  const filteredInsights =
    selectedCategory === 'All'
      ? INSIGHTS
      : INSIGHTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="insights" className="py-24 sm:py-32 bg-[#FAFAF9] border-t border-[#111318]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#064BAE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE]" />
              <span>Perspectives & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#111318] leading-tight">
              Intellectual rigor before engineering commitment.
            </h2>
          </div>
          <p className="text-[#111318]/70 text-base max-w-md font-normal leading-relaxed">
            Our latest essays, field notes, and speculative research on navigating technological inflection points.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#111318]/8 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`insights-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#064BAE] text-white shadow-sm'
                  : 'bg-white hover:bg-[#F2F3F5] text-[#111318]/70 border border-[#111318]/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInsights.map((article) => (
            <article
              key={article.id}
              id={`insight-card-${article.id}`}
              onClick={() => setActiveArticle(article)}
              className="group p-8 rounded-3xl bg-white border border-[#111318]/8 hover:border-[#765ECE]/40 hover:shadow-[0_12px_32px_-12px_rgba(118,94,206,0.1)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Meta Header: Category, Date, ReadTime */}
                <div className="flex items-center justify-between text-xs text-[#111318]/60">
                  <span className="font-semibold uppercase tracking-wider text-[#765ECE]">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-[#111318]/40" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#111318]/40" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#064BAE] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-[#111318]/70 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Read More */}
              <div className="pt-6 mt-6 border-t border-[#111318]/6 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#064BAE]/8 flex items-center justify-center text-[#064BAE]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#111318]">{article.author.name}</div>
                    <div className="text-[#111318]/50">{article.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center text-xs font-bold text-[#064BAE] group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Essay Reading Modal */}
      {activeArticle && (
        <div
          id="insight-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111318]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            id="insight-modal-content"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#111318]/10 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#111318]/60 hover:text-[#111318] hover:bg-[#F2F3F5] transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Meta */}
            <div className="space-y-3 pr-8">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#765ECE]/10 text-[#765ECE]">
                {activeArticle.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318] leading-snug">
                {activeArticle.title}
              </h3>
              <div className="flex items-center space-x-3 text-xs text-[#111318]/50 pt-1">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>By {activeArticle.author.name}, {activeArticle.author.role}</span>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="p-5 rounded-2xl bg-[#FAFAF9] border-l-4 border-[#064BAE] italic text-[#111318]/85 text-sm sm:text-base leading-relaxed">
              "{activeArticle.excerpt}"
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#111318]/80 leading-relaxed font-normal">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-[#111318]/8 flex items-center justify-between">
              <div className="text-xs text-[#111318]/50">
                Published by DoubleDiverge Research
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#064BAE] hover:bg-[#053d8e] rounded-full transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
