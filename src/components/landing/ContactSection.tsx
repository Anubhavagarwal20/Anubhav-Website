import { useState, useEffect } from 'react';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Calendar,
  Clock,
  Video,
  MapPin,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { SpotlightCard } from '../ui/SpotlightCard';
import avatarImg from '../../assets/avatar.png';

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6 0 .89.72 1.61 1.6 1.61.89 0 1.6-.72 1.6-1.61 0-.88-.71-1.6-1.6-1.6Z" />
    </svg>
  );
}

const discussionTopics = [
  { label: 'SEO & GEO Growth', subject: 'Inquiry: SEO & AI Search Optimization' },
  { label: 'E-commerce & Amazon', subject: 'Inquiry: Marketplace Operations & Catalog Growth' },
  { label: 'Meta Paid Ads', subject: 'Inquiry: Performance Marketing & Paid Social' },
  { label: 'Full-Time Role', subject: 'Career Opportunity: Marketing Role for Anubhav' },
  { label: 'Freelance Project', subject: 'Freelance Collaboration with Anubhav' },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copiedTopic, setCopiedTopic] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState<string>('');

  const targetEmail = 'anubhavagarwal2020@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/anubhavagarwal20/';
  const calendlyUrl = 'https://calendly.com/anubhavagarwal/digital-marketing';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setLocalTime(timeStr);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleTopicClick = (topic: { label: string; subject: string }) => {
    setCopiedTopic(topic.label);
    setTimeout(() => setCopiedTopic(null), 2000);
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(topic.subject)}`;
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 text-[#D7E2EA] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Floating Ambient Glows */}
      <div
        className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none animate-float-reverse"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Heading & Subtitle */}
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center mb-16 sm:mb-20 md:mb-24 text-center">
            {/* Top Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-emerald-300 mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Time &amp; High-Impact Projects</span>
            </div>

            <div className="relative">
              {/* Ambient backlight glow behind text */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/15 to-purple-500/10 blur-2xl -z-10 rounded-full animate-aura-pulse pointer-events-none"
                aria-hidden="true"
              />
              <h2
                id="contact-heading"
                className="hero-heading font-black uppercase leading-none tracking-tight mb-4 sm:mb-6"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
              >
                Let&apos;s Discuss Your Next Project
              </h2>
            </div>

            <div className="text-center font-light text-[#D7E2EA]/75 text-sm sm:text-base md:text-lg max-w-2xl mx-auto space-y-2 mb-8">
              <p>
                I&apos;m open to full-time digital marketing opportunities, freelance projects, e-commerce consulting, and performance marketing collaborations.
              </p>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/60">
                Whether you need help with SEO, AI search visibility, marketplace operations, or content strategy, let&apos;s discuss your goals.
              </p>
            </div>

            {/* Interactive Discussion Topics Quick Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D7E2EA]/50 mr-1 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                Quick Topics:
              </span>
              {discussionTopics.map((topic) => (
                <button
                  key={topic.label}
                  type="button"
                  onClick={() => handleTopicClick(topic)}
                  className={`group px-3 py-1.5 rounded-full text-xs font-mono tracking-wider border transition-all duration-200 cursor-pointer select-none active:scale-95 flex items-center gap-1.5 ${
                    copiedTopic === topic.label
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                      : 'border-white/10 bg-white/[0.03] text-[#D7E2EA]/75 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white'
                  }`}
                  title={`Start email inquiry about ${topic.label}`}
                >
                  <span>{topic.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Two-Column Grid: Left Direct Info / Right Schedule Meeting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-20 sm:mb-32">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
            <FadeIn delay={0.1} y={30} className="h-full">
              <SpotlightCard
                spotlightColor="rgba(79, 140, 255, 0.1)"
                spotlightSize={550}
                className="group rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/15 bg-gradient-to-b from-[#16161B] via-[#121215] to-[#0E0E12] p-5 sm:p-8 md:p-9 flex flex-col justify-between gap-6 sm:gap-8 h-full shadow-2xl hover:border-white/35 transition-all duration-300"
              >
                {/* Atmospheric ambient radiant glow */}
                <div
                  className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#4F8CFF]/15 via-[#4DE2FF]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-24 -left-24 w-52 h-52 bg-gradient-to-tr from-[#9B7BFF]/10 to-transparent rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Profile Header with Avatar & Live Availability Beacon */}
                <div className="relative z-10 flex items-center gap-4 pb-5 border-b border-white/10">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-[1.5px] bg-gradient-to-br from-white/30 via-white/10 to-transparent flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#18181F] flex items-center justify-center">
                      <img
                        src={avatarImg}
                        alt="Anubhav Agarwal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Live status dot */}
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4" title="Online and available">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#121215]" />
                    </span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#D7E2EA]/60">
                        Direct Contact
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available
                      </span>
                    </div>
                    <h3 className="font-semibold uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-[#D7E2EA] truncate group-hover:text-white transition-colors">
                      Anubhav Agarwal
                    </h3>
                    <p className="font-light text-xs sm:text-sm text-[#D7E2EA]/75 mt-0.5 leading-snug truncate">
                      Digital Marketing Specialist &amp; MBA Candidate
                    </p>
                  </div>
                </div>

                {/* Email Box with Interactive Quick-Copy */}
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                      Email Address
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Avg. Response: &lt; 24h
                    </span>
                  </div>
                  <div className="group/box relative flex items-center justify-between gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#18181F] border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-xl bg-white/5 text-[#D7E2EA]/70 group-hover/box:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <a
                        href={`mailto:${targetEmail}`}
                        className="text-xs sm:text-sm font-mono text-[#D7E2EA] hover:text-white hover:underline truncate"
                        aria-label="Send email to Anubhav Agarwal"
                      >
                        {targetEmail}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-200 flex-shrink-0 cursor-pointer active:scale-95 ${
                        copied
                          ? 'bg-emerald-500 text-[#0C0C0C] shadow-lg shadow-emerald-500/25 font-bold'
                          : 'bg-white/10 hover:bg-white/20 text-[#D7E2EA] hover:text-white'
                      }`}
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#0C0C0C]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Primary & Secondary CTAs / Links with Brand Glow Micro-Interactions */}
                <div className="relative z-10 flex flex-col gap-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                    Professional Networks
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#18181F] border border-white/10 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_25px_rgba(10,102,194,0.18)] transition-all duration-300"
                      aria-label="View LinkedIn Profile of Anubhav Agarwal (opens in new tab)"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white/5 group-hover/link:bg-[#0A66C2]/20 text-[#D7E2EA] group-hover/link:text-[#4F8CFF] transition-colors">
                          <LinkedinIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] group-hover/link:text-white transition-colors">
                          LinkedIn
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/50 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
                    </a>

                    <a
                      href={`mailto:${targetEmail}`}
                      className="group/email flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#18181F] border border-white/10 hover:border-white/40 hover:bg-white/[0.08] hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] transition-all duration-300"
                      aria-label="Email Anubhav Agarwal directly"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white/5 group-hover/email:bg-white/10 text-[#D7E2EA] group-hover/email:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] group-hover/email:text-white transition-colors">
                          Direct Email
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/50 group-hover/email:text-white group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 transition-all duration-200" />
                    </a>
                  </div>
                </div>

                {/* Location / Status badge with Live Indian Standard Time */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#D7E2EA]/65">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D7E2EA]/50" />
                    <span>Delhi NCR, India</span>
                    {localTime && (
                      <span className="text-white/40">• {localTime} IST</span>
                    )}
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-emerald-400/90 font-sans uppercase tracking-wider text-[11px]">
                      Open to opportunities
                    </span>
                  </span>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* Right Column: Schedule Meeting */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30} className="h-full">
              <SpotlightCard
                spotlightColor="rgba(215, 226, 234, 0.08)"
                spotlightSize={600}
                className="group/sched rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/15 bg-gradient-to-b from-[#16161B] via-[#121215] to-[#0E0E12] p-5 sm:p-8 md:p-10 flex flex-col justify-between gap-6 sm:gap-8 h-full shadow-2xl hover:border-white/35 transition-all duration-300 relative overflow-hidden"
              >
                {/* Atmospheric ambient radiant glow in opposite corner */}
                <div
                  className="absolute -top-24 -left-24 w-60 h-60 bg-gradient-to-br from-indigo-500/10 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover/sched:scale-125 transition-transform duration-700"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      1-on-1 Consultation &amp; Discovery
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Calendar Synced
                    </span>
                  </div>

                  <h3 className="font-semibold uppercase tracking-tight text-2xl sm:text-4xl text-[#D7E2EA] group-hover/sched:text-white transition-colors">
                    Schedule A Meeting
                  </h3>
                  <p className="font-light text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed">
                    Pick a convenient time directly on my calendar to discuss your digital marketing strategy, SEO &amp; GEO audits, performance campaigns, marketplace operations, or potential collaborations.
                  </p>
                </div>

                {/* Interactive 3D Feature Highlights */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="group/chip p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(79,140,255,0.2)] transition-all duration-300 flex flex-col gap-2">
                    <div className="p-2 rounded-xl bg-white/5 w-fit text-[#D7E2EA] group-hover/chip:text-cyan-300 group-hover/chip:scale-110 transition-all">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA] group-hover/chip:text-white transition-colors">
                      30-Min Call
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 font-light leading-snug">
                      Focused strategy &amp; goal discussion
                    </span>
                  </div>

                  <div className="group/chip p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(79,140,255,0.2)] transition-all duration-300 flex flex-col gap-2">
                    <div className="p-2 rounded-xl bg-white/5 w-fit text-[#D7E2EA] group-hover/chip:text-cyan-300 group-hover/chip:scale-110 transition-all">
                      <Video className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA] group-hover/chip:text-white transition-colors">
                      Google Meet
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 font-light leading-snug">
                      Direct 1-on-1 video consultation
                    </span>
                  </div>

                  <div className="group/chip p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(79,140,255,0.2)] transition-all duration-300 flex flex-col gap-2">
                    <div className="p-2 rounded-xl bg-white/5 w-fit text-[#D7E2EA] group-hover/chip:text-cyan-300 group-hover/chip:scale-110 transition-all">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA] group-hover/chip:text-white transition-colors">
                      Instant Booking
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 font-light leading-snug">
                      Live sync with Calendly availability
                    </span>
                  </div>
                </div>

                {/* 3-Step Visual Process Progression */}
                <div className="relative z-10 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/70">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>1. Pick Slot</span>
                  </span>
                  <span className="text-white/20">➔</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>2. Auto Calendar Invite</span>
                  </span>
                  <span className="text-white/20">➔</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>3. Strategic Plan</span>
                  </span>
                </div>

                {/* Schedule Button with Animated Glowing Border Beam Effect */}
                <div className="relative z-10 pt-1">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full inline-flex items-center justify-center p-[1.5px] rounded-2xl sm:rounded-full overflow-hidden transition-all duration-300 active:scale-[0.99] group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D7E2EA]"
                    aria-label="Schedule a meeting with Anubhav Agarwal on Calendly (opens in new tab)"
                  >
                    {/* Atmospheric soft blur beam for glowing halo */}
                    <span
                      className="absolute inset-[-150%] aspect-square pointer-events-none opacity-80 blur-[8px] transition-opacity duration-300 group-hover:opacity-100 group-hover:blur-[10px]"
                      style={{
                        background:
                          'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 280deg, rgba(215, 226, 234, 0.4) 325deg, rgba(255, 255, 255, 0.9) 352deg, #FFFFFF 360deg)',
                        animation: 'border-beam-spin 4s linear infinite',
                      }}
                      aria-hidden="true"
                    />

                    {/* Sharp glowing perimeter beam line */}
                    <span
                      className="absolute inset-[-150%] aspect-square pointer-events-none"
                      style={{
                        background:
                          'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 280deg, rgba(215, 226, 234, 0.25) 320deg, rgba(255, 255, 255, 0.8) 348deg, #FFFFFF 360deg)',
                        animation: 'border-beam-spin 4s linear infinite',
                      }}
                      aria-hidden="true"
                    />

                    {/* Subtle translucent perimeter border */}
                    <span
                      className="absolute inset-0 rounded-2xl sm:rounded-full border border-white/15 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Button interior surface */}
                    <span className="relative z-10 w-full flex items-center justify-center gap-3 rounded-[calc(1rem-1.5px)] sm:rounded-full bg-gradient-to-b from-[#18181D] to-[#101014] group-hover:from-[#202028] group-hover:to-[#15151B] px-8 py-5 text-sm sm:text-base font-semibold uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 shadow-xl shadow-black/40">
                      <Calendar className="w-5 h-5 text-[#D7E2EA] group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                      <span className="tracking-widest">Schedule Meeting</span>
                      <ArrowUpRight className="w-5 h-5 text-[#D7E2EA] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </span>
                  </a>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#D7E2EA]/75">
          <p>© {new Date().getFullYear()} Anubhav Agarwal. All rights reserved.</p>
          <div className="flex items-center gap-6 uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
