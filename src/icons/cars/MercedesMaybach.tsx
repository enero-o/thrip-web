/**
 * MercedesMaybach Icon
 * Minimalist Mercedes-Maybach GLS luxury SUV icon
 * Mercedes-Benz UX style: elegant curves, refined proportions
 */
export const MercedesMaybachIcon = ({ 
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
    {/* Outer circle frame */}
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.5" />
    
    {/* Vehicle silhouette - luxury sedan proportions */}
    <g>
      {/* Hood and roof - smooth, elegant line */}
      <path
        d="M 16 32 Q 16 22 24 18 L 40 18 Q 48 22 48 32"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Body - elongated luxury profile */}
      <path
        d="M 16 32 L 14 40 Q 14 46 18 48 L 46 48 Q 50 46 50 40 L 48 32"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Distinctive Maybach character line */}
      <path
        d="M 16 34 Q 32 36 48 34"
        stroke={color}
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
      
      {/* Front wheel */}
      <circle cx="21" cy="48" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Rear wheel */}
      <circle cx="43" cy="48" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Window detail - upper */}
      <path
        d="M 20 26 L 28 20"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* Window detail - lower */}
      <path
        d="M 36 20 L 44 26"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
    </g>
  </svg>
);
