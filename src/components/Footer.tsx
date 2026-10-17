import { ExternalLink } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 md:py-14 border-t border-white/[0.06] bg-[#080B12]"
      aria-label="Site footer"
    >
      <div className="container-padded">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <p className="font-display font-bold text-sm tracking-[0.1em] uppercase text-[#F4F7FB]">
              Anubhav Agarwal
            </p>
            <p className="text-xs text-[#A7B1C2]">
              Digital Marketing · SEO · GEO · E-commerce
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs tracking-[0.12em] uppercase text-[#A7B1C2] hover:text-[#F4F7FB] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anubhavagarwal20/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#A7B1C2] hover:text-[#4F8CFF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            aria-label="Anubhav Agarwal on LinkedIn (opens in new tab)"
          >
            <ExternalLink size={14} />
            LinkedIn
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[11px] text-[#A7B1C2]/50">
            &copy; {year} Anubhav Agarwal. All rights reserved.
          </p>
          <p className="text-[11px] text-[#A7B1C2]/40 italic">
            Built around search, strategy, and continuous learning.
          </p>
        </div>
      </div>
    </footer>
  );
}
