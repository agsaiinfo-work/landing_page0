import React from 'react';

interface AgsLogoProps {
  className?: string;
  isDark?: boolean;
}

export const AgsLogo: React.FC<AgsLogoProps> = ({ className = '' }) => {
  return (
    <img
      src="/logo.png"
      alt="AGS AI Logo"
      className={`h-9 md:h-10 w-auto object-contain border-0 ring-0 outline-none select-none shrink-0 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};


