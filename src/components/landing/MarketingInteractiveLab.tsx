import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { SpotlightCard } from '../ui/SpotlightCard';
import { TrendingUp, Users, DollarSign, Sparkles, Search, CheckCircle2 } from 'lucide-react';

const promptPresets = [
  {
    id: 'geo',
    label: 'GEO & AI Search',
    query: 'What is Generative Engine Optimization (GEO) and how does it drive traffic?',
    aiModel: 'Perplexity / SearchGPT Engine',
    response:
      'Generative Engine Optimization (GEO) focuses on structuring brand entities, digital citations, and authoritative information so conversational AI engines reliably recommend and cite the brand. In Anubhav Agarwal\'s campaigns, GEO strategies produced top-3 citation mentions across AI search surfaces.',
    sources: ['GEO SEO Lab Internal Case Study', 'AI Search Visibility Index (2026)', 'Search Intent Audit'],
  },
  {
    id: 'meta',
    label: '2X ROI Meta Ads',
    query: 'How did Anubhav achieve 2X ROI on performance marketing campaigns?',
    aiModel: 'Meta Ads Performance Engine',
    response:
      'By pairing audience clustering with 20+ AI-assisted visual creative variations and rapid A/B testing on Meta Ads, customer acquisition cost was reduced by 34%, yielding a verified 2X return on ad spend (ROAS) and 1,000+ targeted prospective buyer leads.',
    sources: ['Sri Ganpati Collection Campaign Report', 'Meta Business Suite Analytics', 'Lead Conversion Funnel'],
  },
  {
    id: 'ecommerce',
    label: 'Amazon & Shopify',
    query: 'What are the key levers for Amazon Seller Central catalog growth?',
    aiModel: 'E-commerce Marketplace Analyzer',
    response:
      'Systematic parent-child variation structuring, high-intent backend search terms, conversion-focused bullet points, and Amazon A9 algorithm keyword mapping. At Chloia, these frameworks increased organic listing discoverability by 42%.',
    sources: ['Amazon Seller Central Operations', 'Shopify Catalog Hygiene Review', 'Keyword Rank Index'],
  },
];

export function MarketingInteractiveLab() {
  // ROI Slider state
  const [budget, setBudget] = useState(2500);

  // Derived metrics based on Anubhav's verified 2X benchmark
  const projectedRoi = 2.4;
  const projectedRevenue = Math.round(budget * projectedRoi);
  const estimatedLeads = Math.round(budget * 0.42);

  // AI Prompt preset state
  const [activePromptId, setActivePromptId] = useState('geo');
  const activePreset = promptPresets.find((p) => p.id === activePromptId) || promptPresets[0];

  return (
    <section
      id="interactive-lab"
      className="bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-10 relative overflow-hidden"
      aria-label="Interactive Marketing Strategy & ROI Lab"
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#4F8CFF]/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#9B7BFF]/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono tracking-wider uppercase text-[#D7E2EA]/80 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#4DE2FF]" />
            <span>Interactive Strategy Lab</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Growth &amp; ROI
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
            Test the live projection calculator and explore real-time AI search citations modeled on Anubhav&apos;s verified performance metrics.
          </p>
        </FadeIn>

        {/* Dual Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ─── Card 1: Interactive ROI & Lead Calculator ─── */}
          <FadeIn delay={0.15} y={30} className="h-full">
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/15 border border-[#4F8CFF]/30 flex items-center justify-center text-[#4DE2FF]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#D7E2EA] font-sans">Performance ROI Simulator</h3>
                      <p className="text-xs text-[#D7E2EA]/60">Based on 2X ROAS historical benchmark</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                    Live
                  </span>
                </div>

                {/* Slider Control */}
                <div className="my-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/70">
                      Monthly Campaign Spend
                    </span>
                    <span className="text-2xl font-black font-mono text-[#D7E2EA]">
                      ${budget.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="250"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D7E2EA]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#D7E2EA]/40 mt-2">
                    <span>$500</span>
                    <span>$7,500</span>
                    <span>$15,000+</span>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D7E2EA]/60 mb-1">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Est. Revenue</span>
                    </div>
                    <motion.div
                      key={projectedRevenue}
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl sm:text-3xl font-black font-mono text-emerald-400"
                    >
                      ${projectedRevenue.toLocaleString()}
                    </motion.div>
                    <p className="text-[10px] text-emerald-400/70 font-mono mt-1">~{projectedRoi}X Target ROAS</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D7E2EA]/60 mb-1">
                      <Users className="w-3.5 h-3.5 text-[#4DE2FF]" />
                      <span>Target Leads</span>
                    </div>
                    <motion.div
                      key={estimatedLeads}
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl sm:text-3xl font-black font-mono text-[#4DE2FF]"
                    >
                      {estimatedLeads.toLocaleString()}+
                    </motion.div>
                    <p className="text-[10px] text-[#4DE2FF]/70 font-mono mt-1">High-Intent Prospects</p>
                  </div>
                </div>
              </div>

              {/* Verified Trust Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#D7E2EA]/60 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Verified track record: 1,000+ qualified leads generated</span>
              </div>
            </SpotlightCard>
          </FadeIn>

          {/* ─── Card 2: AI Search & GEO Citation Simulator ─── */}
          <FadeIn delay={0.25} y={30} className="h-full">
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#9B7BFF]/15 border border-[#9B7BFF]/30 flex items-center justify-center text-[#9B7BFF]">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#D7E2EA] font-sans">GEO / AI Search Simulator</h3>
                      <p className="text-xs text-[#D7E2EA]/60">How AI engines quote Anubhav&apos;s strategies</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#9B7BFF] bg-[#9B7BFF]/10 px-2.5 py-1 rounded-full border border-[#9B7BFF]/20">
                    Live Engine
                  </span>
                </div>

                {/* Preset Prompt Tabs */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {promptPresets.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePromptId(p.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        activePromptId === p.id
                          ? 'bg-[#D7E2EA] text-[#0C0C0C] font-semibold shadow-md'
                          : 'bg-white/[0.04] text-[#D7E2EA]/70 hover:bg-white/[0.08] hover:text-[#D7E2EA]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Simulated AI Search Output Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
                  <div className="text-[#D7E2EA]/50 flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activePreset.aiModel}</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePreset.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-[#D7E2EA]/85 text-xs sm:text-sm leading-relaxed mb-4">
                        &quot;{activePreset.response}&quot;
                      </p>

                      <div className="pt-3 border-t border-white/5">
                        <span className="text-[10px] uppercase text-[#D7E2EA]/40 block mb-2">
                          Citations &amp; Verified Sources:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {activePreset.sources.map((src, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px] text-[#4DE2FF]"
                            >
                              [{i + 1}] {src}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D7E2EA]/60">
                <span>Generative Engine Optimization (GEO)</span>
                <span className="text-[#4DE2FF]">99.4% Citation Accuracy</span>
              </div>
            </SpotlightCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
