/**
 * CadillacEscaladeIcon
 * Minimalist Cadillac Escalade luxury SUV icon
 * Mercedes-Benz UX style: bold presence, geometric precision
 */
export const CadillacEscaladeIcon = ({ 
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
    
    {/* Vehicle silhouette - bold American luxury SUV */}
    <g>
      {/* Tall roofline - Escalade signature height */}
      <path
        d="M 18 30 L 20 16 L 44 16 L 46 30"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Strong body - presence and proportion */}
      <path
        d="M 18 30 L 16 40 L 16 45 Q 16 47 18 47 L 46 47 Q 48 47 48 45 L 48 40 L 46 30"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bold character line - Escalade styling */}
      <path
        d="M 18 32 L 46 32"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.6"
      />
      
      {/* Front wheel - pronounced */}
      <circle cx="22" cy="47" r="3.5" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Rear wheel - pronounced */}
      <circle cx="42" cy="47" r="3.5" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Windshield angle - dramatic Escalade look */}
      <path
        d="M 20 28 L 25 16"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* Rear window angle */}
      <path
        d="M 39 16 L 44 28"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />
    </g>
  </svg>
);
