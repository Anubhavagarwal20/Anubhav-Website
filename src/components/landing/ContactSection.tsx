import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Calendar, Clock, Video } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

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

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const targetEmail = 'anubhavagarwal2020@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/anubhavagarwal20/';
  const calendlyUrl = 'https://calendly.com/anubhavagarwal/digital-marketing';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 text-[#D7E2EA]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            id="contact-heading"
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Let&apos;s Discuss Your Next Project
          </h2>
          <div className="text-center font-light text-[#D7E2EA]/75 text-sm sm:text-base md:text-lg mb-16 sm:mb-20 md:mb-24 max-w-2xl mx-auto space-y-2">
            <p>
              I&apos;m open to full-time digital marketing opportunities, freelance projects, e-commerce consulting, and performance marketing collaborations.
            </p>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/60">
              Whether you need help with SEO, AI search visibility, marketplace operations, or content strategy, let&apos;s discuss your goals.
            </p>
          </div>
        </FadeIn>

        {/* Two-Column Grid: Left Contact Info / Right Schedule Meeting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-20 sm:mb-32">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
            <FadeIn delay={0.1} y={30}>
              <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-5 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 h-full">
                <div>
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 block mb-2">
                    Direct Contact
                  </span>
                  <h3 className="font-medium uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA]">
                    Anubhav Agarwal
                  </h3>
                  <p className="font-light text-sm sm:text-base text-[#D7E2EA]/75 mt-2 leading-relaxed">
                    Digital Marketing Specialist based in Delhi NCR, India.
                  </p>
                </div>

                {/* Email Box */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/70">
                    Email Address
                  </span>
                  <div className="flex items-center justify-between gap-2 p-3 sm:p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15">
                    <a
                      href={`mailto:${targetEmail}`}
                      className="text-xs sm:text-sm font-light text-[#D7E2EA] hover:underline truncate"
                      aria-label="Send email to Anubhav Agarwal"
                    >
                      {targetEmail}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D7E2EA]/10 hover:bg-[#D7E2EA]/20 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors flex-shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
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

                {/* Primary & Secondary CTAs / Links */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/70">
                    Professional Networks
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/50 transition-colors"
                      aria-label="View LinkedIn Profile of Anubhav Agarwal (opens in new tab)"
                    >
                      <div className="flex items-center gap-2.5">
                        <LinkedinIcon className="w-4 h-4 text-[#D7E2EA]" />
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
                          View LinkedIn Profile
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/60" />
                    </a>

                    <a
                      href={`mailto:${targetEmail}`}
                      className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/50 transition-colors"
                      aria-label="Email Anubhav Agarwal directly"
                    >
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#D7E2EA]" />
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
                          Email
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/60" />
                    </a>
                  </div>
                </div>

                {/* Location / Status badge */}
                <div className="pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs font-light text-[#D7E2EA]/60">
                  <span>Location: Delhi NCR, India</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to opportunities
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Schedule Meeting */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30}>
              <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-5 sm:p-8 md:p-10 flex flex-col justify-between gap-6 sm:gap-8 h-full">
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 block">
                    1-on-1 Consultation & Discovery
                  </span>
                  <h3 className="font-medium uppercase tracking-tight text-2xl sm:text-4xl text-[#D7E2EA]">
                    Schedule A Meeting
                  </h3>
                  <p className="font-light text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed">
                    Pick a convenient time directly on my calendar to discuss your digital marketing strategy, SEO &amp; GEO audits, performance campaigns, marketplace operations, or potential collaborations.
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/10 flex flex-col gap-2">
                    <Clock className="w-5 h-5 text-[#D7E2EA]" />
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]">
                      30-Min Call
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 font-light">
                      Focused strategy &amp; goal discussion
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/10 flex flex-col gap-2">
                    <Video className="w-5 h-5 text-[#D7E2EA]" />
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]">
                      Google Meet
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 font-light">
                      Direct 1-on-1 video consultation
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/10 flex flex-col gap-2">
                    <Calendar className="w-5 h-5 text-[#D7E2EA]" />
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]">
                      Instant Booking
                    </span>
                    <span className="text-[11px] text-[#D7E2EA]/60 font-light">
                      Live sync with Calendly availability
                    </span>
                  </div>
                </div>

                {/* Schedule Button */}
                <div className="pt-2">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-widest px-8 py-5 text-sm sm:text-base hover:bg-transparent hover:text-[#D7E2EA] transition-all duration-200 cursor-pointer select-none active:scale-[0.99] group shadow-lg shadow-white/5"
                    aria-label="Schedule a meeting with Anubhav Agarwal on Calendly (opens in new tab)"
                  >
                    <Calendar className="w-5 h-5 text-[#0C0C0C] group-hover:text-[#D7E2EA] transition-colors" />
                    <span>Schedule Meeting</span>
                    <ArrowUpRight className="w-5 h-5 text-[#0C0C0C] group-hover:text-[#D7E2EA] transition-colors" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#D7E2EA]/75">
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
