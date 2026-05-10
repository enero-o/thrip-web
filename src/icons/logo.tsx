interface Props {
  /** Render only the circular mark (for app icons, favicons, avatars) */
  markOnly?: boolean;
  width?: number;
  height?: number;
}

const Logo = ({ markOnly = false, width, height }: Props) => {
  if (markOnly) {
    const s = width ?? 40;
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Thrip Concierge"
      >
        {/* Outer bezel */}
        <circle cx="20" cy="20" r="18.5" stroke="#D9C280" strokeWidth="1.2" />
        {/* Inner thin ring */}
        <circle cx="20" cy="20" r="15.5" stroke="#D9C280" strokeOpacity="0.35" strokeWidth="0.6" />
        {/* Crown: three points */}
        <path d="M12 18 L14.5 11.5 L17.5 15.5 L20 10 L22.5 15.5 L25.5 11.5 L28 18 Z" fill="#D9C280" />
        {/* T crossbar */}
        <rect x="13" y="19" width="14" height="2.2" rx="1.1" fill="#D9C280" />
        {/* T stem */}
        <rect x="18.9" y="19" width="2.2" height="10" rx="1.1" fill="#D9C280" />
      </svg>
    );
  }

  const w = width ?? 172;
  const h = height ?? 40;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 172 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Thrip Concierge"
    >
      {/* Outer bezel */}
      <circle cx="20" cy="20" r="18.5" stroke="#D9C280" strokeWidth="1.2" />
      {/* Inner thin ring */}
      <circle cx="20" cy="20" r="15.5" stroke="#D9C280" strokeOpacity="0.35" strokeWidth="0.6" />
      {/* Crown: three points */}
      <path d="M12 18 L14.5 11.5 L17.5 15.5 L20 10 L22.5 15.5 L25.5 11.5 L28 18 Z" fill="#D9C280" />
      {/* T crossbar */}
      <rect x="13" y="19" width="14" height="2.2" rx="1.1" fill="#D9C280" />
      {/* T stem */}
      <rect x="18.9" y="19" width="2.2" height="10" rx="1.1" fill="#D9C280" />

      {/* Wordmark — THRIP */}
      <text
        x="48"
        y="21"
        fontFamily="'Playfair Display', 'Times New Roman', serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="2.5"
        fill="#D9C280"
      >
        THRIP
      </text>
      {/* Divider */}
      <line x1="48" y1="24" x2="124" y2="24" stroke="#D9C280" strokeOpacity="0.25" strokeWidth="0.5" />
      {/* Sub-label — CONCIERGE */}
      <text
        x="48"
        y="33"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="6.5"
        fontWeight="300"
        letterSpacing="4"
        fill="#999999"
      >
        CONCIERGE
      </text>
    </svg>
  );
};

export { Logo };

