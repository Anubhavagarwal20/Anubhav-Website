import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  showArrow?: boolean;
  external?: boolean;
}

export function PrimaryButton({
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  showArrow = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm
    bg-gradient-to-r from-[#4F8CFF] to-[#4DE2FF] text-[#080B12]
    transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,140,255,0.4)]
    hover:scale-[1.03] active:scale-[0.98] focus-visible:outline
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8CFF]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${className}
  `;

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-flex"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} disabled={disabled} type={type}>
      {content}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  showArrow = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm
    border border-white/20 text-[#F4F7FB]
    transition-all duration-300 hover:border-[#4F8CFF]/60 hover:text-[#4F8CFF]
    hover:bg-[#4F8CFF]/5
    active:scale-[0.98] focus-visible:outline
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8CFF]
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-flex"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} disabled={disabled} type={type}>
      {content}
    </button>
  );
}
