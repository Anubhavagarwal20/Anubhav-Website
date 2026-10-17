interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function LiveProjectButton({
  href,
  onClick,
  className = '',
}: LiveProjectButtonProps) {
  const classes = `
    inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base
    transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:scale-[0.98]
    cursor-pointer select-none whitespace-nowrap
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        Live Project
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      Live Project
    </button>
  );
}
