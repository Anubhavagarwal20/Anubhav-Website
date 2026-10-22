import type { CSSProperties } from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function ContactButton({
  onClick,
  href = '#contact',
  className = '',
}: ContactButtonProps) {
  const styles: CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid #FFFFFF',
    outlineOffset: '-3px',
  };

  const classes = `
    inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest
    px-6 py-2.5 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]
    cursor-pointer select-none whitespace-nowrap
    ${className}
  `;

  if (href && !onClick) {
    return (
      <a href={href} style={styles} className={classes}>
        Contact Me
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} style={styles} className={classes}>
      Contact Me
    </button>
  );
}
