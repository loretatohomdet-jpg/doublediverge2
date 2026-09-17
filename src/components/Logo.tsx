import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  inverted = false,
}) => {
  const sizeMap = {
    sm: { icon: 26, text: 'text-lg', gap: 'gap-2' },
    md: { icon: 34, text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 42, text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 54, text: 'text-3xl', gap: 'gap-3.5' },
  };

  const { icon, text, gap } = sizeMap[size];

  return (
    <div
      id="doublediverge-brand-logo"
      className={`inline-flex items-center select-none ${gap} ${className}`}
    >
      {/* Precision Geometric Divergence Mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="DoubleDiverge Logo Mark"
      >
        <defs>
          <linearGradient
            id="dd-logo-gradient"
            x1="2"
            y1="6"
            x2="42"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#064BAE" />
            <stop offset="25%" stopColor="#3C54BE" />
            <stop offset="50%" stopColor="#765ECE" />
            <stop offset="75%" stopColor="#9B63D9" />
            <stop offset="100%" stopColor="#B168DF" />
          </linearGradient>
          <linearGradient
            id="dd-logo-gradient-secondary"
            x1="38"
            y1="10"
            x2="6"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#B168DF" />
            <stop offset="50%" stopColor="#765ECE" />
            <stop offset="100%" stopColor="#064BAE" />
          </linearGradient>
        </defs>

        {/* Primary trajectory: diverging upwards to new horizons */}
        <path
          d="M 6 22 C 14 22, 18 10, 28 8 C 34 6, 38 7, 40 8"
          stroke="url(#dd-logo-gradient)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Secondary trajectory: diverging downwards to foundational depth */}
        <path
          d="M 6 22 C 14 22, 18 34, 28 36 C 34 38, 38 37, 40 36"
          stroke="url(#dd-logo-gradient)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central convergence node / focal nexus */}
        <circle cx="6" cy="22" r="3.2" fill="#064BAE" />

        {/* Dynamic divergent terminal nodes */}
        <circle cx="40" cy="8" r="3.2" fill="#B168DF" />
        <circle cx="40" cy="36" r="3.2" fill="#765ECE" />

        {/* Subtle interconnecting harmonic vector */}
        <path
          d="M 28 8 L 28 36"
          stroke="url(#dd-logo-gradient-secondary)"
          strokeWidth="1.6"
          strokeDasharray="2 3"
          strokeOpacity="0.65"
        />
      </svg>

      {/* Typography Wordmark */}
      {showWordmark && (
        <span
          className={`font-semibold tracking-[-0.03em] leading-none ${text} ${
            inverted ? 'text-white' : 'text-[#111318]'
          }`}
        >
          <span>Double</span>
          <span className="font-extrabold text-[#064BAE]">Diverge</span>
        </span>
      )}
    </div>
  );
};
