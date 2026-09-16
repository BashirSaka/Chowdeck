// Bottle and Can Illustration for the Categories section
export default function DrinksIllustration({ className = "w-48 h-56 md:w-64 md:h-72" }) {
  return (
    <svg
      viewBox="0 0 260 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Drinks category illustration"
    >
      {/* Soft ground shadow */}
      <ellipse cx="135" cy="290" rx="90" ry="12" fill="#EAA81E" opacity="0.8" />

      {/* --- TALL BOTTLE (Right) --- */}
      <g id="bottle">
        {/* Cap */}
        <rect x="144" y="32" width="22" height="16" rx="3" fill="#E05D38" />
        <rect x="142" y="46" width="26" height="5" rx="2" fill="#C84826" />

        {/* Main Bottle Body (Neck, Shoulder, Base) */}
        <path
          d="M145 51
             L145 95
             Q145 125 130 148
             L130 276
             Q130 286 142 286
             L168 286
             Q180 286 180 276
             L180 148
             Q165 125 165 95
             L165 51
             Z"
          fill="#F07153"
        />

        {/* Bottle Neck Highlight */}
        <path d="M148 56 L148 95 Q148 115 140 135" stroke="#FFA18A" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

        {/* Cream/Yellow Label Band */}
        <path
          d="M130 162
             L180 162
             L180 228
             L130 228
             Z"
          fill="#FDE68A"
        />
        {/* Label top and bottom accent lines */}
        <line x1="130" y1="166" x2="180" y2="166" stroke="#FCD34D" strokeWidth="3" />
        <line x1="130" y1="224" x2="180" y2="224" stroke="#FCD34D" strokeWidth="3" />
      </g>

      {/* --- CHUBBY DRINK CAN (Left Foreground) --- */}
      <g id="can">
        {/* Can Shadow onto Bottle */}
        <path d="M110 190 Q120 220 110 270 Z" fill="#000" opacity="0.1" />

        {/* Can Metallic Top Rim */}
        <ellipse cx="78" cy="184" rx="28" ry="7" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5" />
        <ellipse cx="78" cy="183" rx="22" ry="5" fill="#F3F4F6" />

        {/* Can Main Body */}
        <rect x="50" y="184" width="56" height="96" rx="12" fill="#F5B82A" />

        {/* Can Oval Red Label Block */}
        <path
          d="M50 200
             L80 200
             Q92 200 92 215
             L92 250
             Q92 265 80 265
             L50 265
             Z"
          fill="#E05D38"
        />

        {/* Water Droplets / Bubbles */}
        <circle cx="95" cy="214" r="3.5" fill="#FFFBEB" />
        <circle cx="88" cy="245" r="3" fill="#FFFBEB" />
        <circle cx="92" cy="256" r="2" fill="#FFFBEB" />
        <circle cx="70" cy="192" r="2" fill="#FFFBEB" opacity="0.7" />

        {/* Can Base Highlight */}
        <path d="M54 274 Q78 284 102 274" stroke="#D99715" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
