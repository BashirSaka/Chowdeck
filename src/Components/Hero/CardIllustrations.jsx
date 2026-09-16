// Card Illustrations matching Chowdeck design

// 1. Pizza Illustration for "Start selling" card
export function PizzaIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Wavy background shapes */}
      <path d="M0 60 Q60 110 130 60 T260 80 T320 40 L320 180 L0 180 Z" fill="#F07C38" stroke="#000" strokeWidth="3" />
      <path d="M-20 110 Q50 70 110 110 T220 90 T320 130 L320 180 L-20 180 Z" fill="#E85D26" stroke="#000" strokeWidth="3" />

      {/* Pizza Crust */}
      <circle cx="150" cy="90" r="48" fill="#FCD34D" stroke="#000" strokeWidth="3" />
      {/* Pizza Cheese Inner */}
      <circle cx="150" cy="90" r="38" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />

      {/* Pepperoni & Toppings */}
      <circle cx="138" cy="78" r="6" fill="#DC2626" stroke="#000" strokeWidth="1.5" />
      <circle cx="162" cy="78" r="6" fill="#DC2626" stroke="#000" strokeWidth="1.5" />
      <circle cx="150" cy="102" r="6" fill="#DC2626" stroke="#000" strokeWidth="1.5" />
      <circle cx="134" cy="98" r="4" fill="#16A34A" />
      <circle cx="166" cy="94" r="4" fill="#16A34A" />
      <circle cx="150" cy="74" r="3.5" fill="#16A34A" />
    </svg>
  );
}

// 2. Delivery Box Illustration for "Deliver happiness" card
export function DeliveryBoxIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Wavy background shapes */}
      <path d="M-20 100 Q60 40 140 110 T280 80 T320 120 L320 180 L-20 180 Z" fill="#E85D26" stroke="#000" strokeWidth="3" />
      {/* Foreground green mound */}
      <ellipse cx="230" cy="165" rx="90" ry="35" fill="#10B981" stroke="#000" strokeWidth="3" />

      {/* Chowdeck Delivery Box */}
      <g transform="translate(155, 45)">
        {/* Box body */}
        <rect x="0" y="20" width="80" height="80" rx="10" fill="#047857" stroke="#000" strokeWidth="3" />
        {/* Top lid flap */}
        <path d="M-4 20 L40 0 L84 20 Z" fill="#065F46" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        {/* Yellow Chowdeck 'C' logo */}
        <circle cx="40" cy="60" r="12" fill="#FACC15" stroke="#000" strokeWidth="2" />
        <circle cx="43" cy="60" r="6" fill="#047857" />
      </g>
    </svg>
  );
}

// 3. Team Avatars Illustration for "Behind the scenes" card
export function TeamIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(15, 15)">
        {/* Row 1: 4 character avatars */}
        <rect x="5" y="5" width="55" height="60" rx="6" fill="#8B5CF6" stroke="#000" strokeWidth="2.5" />
        <circle cx="23" cy="28" r="4.5" fill="#000" />
        <circle cx="41" cy="28" r="4.5" fill="#000" />
        <ellipse cx="32" cy="45" rx="7" ry="3.5" fill="#000" />

        <rect x="70" y="5" width="55" height="60" rx="6" fill="#60A5FA" stroke="#000" strokeWidth="2.5" />
        <circle cx="87" cy="26" r="4" fill="#000" />
        <circle cx="107" cy="26" r="4" fill="#000" />
        <path d="M92 44 Q97 51 102 44" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

        <rect x="135" y="5" width="55" height="60" rx="6" fill="#3B82F6" stroke="#000" strokeWidth="2.5" />
        <polygon points="162,15 146,45 178,45" fill="#93C5FD" stroke="#000" strokeWidth="2" />

        <rect x="200" y="5" width="55" height="60" rx="6" fill="#F472B6" stroke="#000" strokeWidth="2.5" />
        <circle cx="218" cy="28" r="4" fill="#000" />
        <circle cx="238" cy="28" r="4" fill="#000" />
        <line x1="221" y1="44" x2="235" y2="44" stroke="#000" strokeWidth="2" />

        {/* Row 2: 4 character avatars */}
        <rect x="5" y="75" width="55" height="60" rx="6" fill="#FBBF24" stroke="#000" strokeWidth="2.5" />
        <circle cx="23" cy="94" r="5" fill="#FFF" stroke="#000" strokeWidth="1.5" />
        <circle cx="23" cy="94" r="2.5" fill="#000" />
        <circle cx="41" cy="94" r="5" fill="#FFF" stroke="#000" strokeWidth="1.5" />
        <circle cx="41" cy="94" r="2.5" fill="#000" />
        <path d="M22 114 Q32 124 42 114" stroke="#000" strokeWidth="2" fill="#DC2626" />

        <rect x="70" y="75" width="55" height="60" rx="6" fill="#FB923C" stroke="#000" strokeWidth="2.5" />
        <circle cx="87" cy="96" r="3.5" fill="#000" />
        <circle cx="107" cy="96" r="3.5" fill="#000" />
        <ellipse cx="97" cy="113" rx="5" ry="2.5" fill="#000" />

        <rect x="135" y="75" width="55" height="60" rx="6" fill="#F43F5E" stroke="#000" strokeWidth="2.5" />
        <circle cx="152" cy="96" r="3.5" fill="#000" />
        <circle cx="172" cy="96" r="3.5" fill="#000" />
        <path d="M157 112 Q162 118 167 112" stroke="#000" strokeWidth="2" strokeLinecap="round" />

        <rect x="200" y="75" width="55" height="60" rx="6" fill="#EF4444" stroke="#000" strokeWidth="2.5" />
        <circle cx="218" cy="97" r="3.5" fill="#000" />
        <circle cx="238" cy="97" r="3.5" fill="#000" />
        <line x1="220" y1="113" x2="236" y2="113" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
