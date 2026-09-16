// Chowdeck Delivery Scooter Rider Component
export default function Rider({ className = "w-16 h-16 md:w-20 md:h-20" }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Chowdeck delivery rider"
    >
      {/* Horizontally flipped so rider faces LEFT to match demo */}
      <g transform="translate(100, 0) scale(-1, 1)">
        {/* Yellow Chowdeck Food Delivery Box (Rear Rack) */}
        <rect x="8" y="26" width="24" height="24" rx="3" fill="#EAB308" />
        <rect x="11" y="29" width="18" height="18" rx="2" fill="#FACC15" />
        {/* Box brand strip */}
        <rect x="14" y="38" width="12" height="4" rx="1" fill="#15803D" />

        {/* Rear Wheel */}
        <circle cx="22" cy="62" r="11" fill="#1F2937" />
        <circle cx="22" cy="62" r="6" fill="#9CA3AF" />
        <circle cx="22" cy="62" r="2.5" fill="#111827" />

        {/* Rear Mudguard */}
        <path
          d="M10 58 C12 50 18 47 28 47"
          stroke="#15803D"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bike Chassis / Frame (Chowdeck Green) */}
        <path
          d="M22 62 L36 50 L56 52 L68 38"
          stroke="#15803D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M36 50 L34 42 L46 42 L52 52" fill="#166534" />
        {/* Footrest plate */}
        <rect x="40" y="52" width="16" height="4" rx="2" fill="#1F2937" />

        {/* Front Fork & Steering Column */}
        <path
          d="M74 62 L67 34"
          stroke="#4B5563"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Handlebars */}
        <path
          d="M62 34 L72 34"
          stroke="#1F2937"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Headlight */}
        <circle cx="73" cy="38" r="3" fill="#FEF08A" />

        {/* Front Wheel */}
        <circle cx="74" cy="62" r="11" fill="#1F2937" />
        <circle cx="74" cy="62" r="6" fill="#9CA3AF" />
        <circle cx="74" cy="62" r="2.5" fill="#111827" />

        {/* Front Mudguard */}
        <path
          d="M65 56 C68 49 74 48 83 52"
          stroke="#15803D"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Rider Leg (dark pants) */}
        <path
          d="M37 43 L48 48 L50 54"
          stroke="#1F2937"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Rider Torso (white shirt) */}
        <path
          d="M37 42 L47 27"
          stroke="#F3F4F6"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Rider Arm reaching to handlebar */}
        <path
          d="M46 29 L65 34"
          stroke="#F3F4F6"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Rider Hand */}
        <circle cx="65" cy="34" r="2.5" fill="#FBBF24" />

        {/* Rider Head with Yellow Helmet */}
        <circle cx="50" cy="17" r="9" fill="#EAB308" />
        {/* Helmet Visor */}
        <path d="M53 13 Q60 15 57 20 Q53 20 52 19 Z" fill="#1F2937" />
      </g>
    </svg>
  );
}
