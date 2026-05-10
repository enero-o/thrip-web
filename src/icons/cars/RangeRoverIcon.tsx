/**
 * RangeRoverIcon
 * Minimalist Range Rover SUV icon in Mercedes-Benz UX style
 * Clean geometric silhouette with negative space
 */
export const RangeRoverIcon = ({ 
  width = 64, 
  height = 64, 
  color = "currentColor",
  className = ""
}: { 
  width?: number; 
  height?: number; 
  color?: string;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer circle frame (Mercedes-style) */}
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.5" />
    
    {/* Vehicle silhouette */}
    <g>
      {/* Roof line - characteristic Range Rover squared-off top */}
      <path
        d="M 18 28 L 22 18 L 42 18 L 46 28"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Body - boxy SUV profile */}
      <path
        d="M 18 28 L 16 38 L 16 44 Q 16 46 18 46 L 46 46 Q 48 46 48 44 L 48 38 L 46 28"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Front wheel */}
      <circle cx="23" cy="46" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Rear wheel */}
      <circle cx="41" cy="46" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Window - subtle detail */}
      <path
        d="M 20 26 L 23 20"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
    </g>
  </svg>
);
