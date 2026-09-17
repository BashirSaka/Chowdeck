import { useState } from "react";
import {
  MapPin,
  Sparkle,
  ArrowLeft,
  ArrowRight,
  Hamburger,
  Astroid,
  Soup,
  Sparkles,
  Headset,
} from "lucide-react";
import DrinksIllustration from "./DrinksIllustration";
import Advertisment from "./Advertisment";
import Image1 from "../../assets/Image1.png";
import Image3 from "../../assets/Image3.png";
import AppImage from "../../assets/app-image.png";
import Pickup from "../../assets/pickup.png";
import OrderTransit from "../../assets/order-transit.png";

export default function Footer() {
  const [activeCategory, setActiveCategory] = useState(2);

  // Data for Advertisement
  const Scroll = [
    {
      id: 1,
      icon: <Astroid size={20} className="text-yellow-400" />,
      text: "Quick and easy onboarding",
    },
    {
      id: 2,
      icon: <Soup size={20} className="text-orange-400" />,
      text: "Quality meal choices",
    },
    {
      id: 3,
      icon: <Sparkles size={20} className="text-purple-400" />,
      text: "Live updates on your order",
    },
    {
      id: 4,
      icon: <MapPin size={20} className="text-green-400" />,
      text: "Highly rated riders",
    },
    {
      id: 5,
      icon: <Headset size={20} className="text-pink-400" />,
      text: "24/7 customer support",
    },
  ];

  // Data for the scrolling phone-mockup strip
  const phoneImages = [Image1, Image3, AppImage, Pickup, OrderTransit];

  return (
    <section className="relative bg-[#003c2f] pb-16 md:pb-0 px-4 sm:px-8 flex flex-col items-center">
      {/* Yellow Categories Card — pulled up over the section above via negative margin, not absolute+top */}
      <div className="-mt-16 sm:-mt-28 md:-mt-24 w-[92%] sm:w-[88%] md:w-full max-w-5xl bg-[#F9BC2C] rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-center items-center shadow-xl min-h-[380px] sm:min-h-[460px] md:min-h-[580px]">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black text-center tracking-tight mt-2">
          Explore categories
        </h2>

        <div className="my-4 sm:my-6 md:my-8 flex justify-center items-center scale-75 sm:scale-90 md:scale-100">
          <DrinksIllustration />
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 mt-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-transform active:scale-95"
              aria-label="Location filter"
            >
              <MapPin size={16} />
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory(1)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full text-xs md:text-sm font-bold flex items-center justify-center cursor-pointer transition-all active:scale-95 ${
                activeCategory === 1
                  ? "bg-amber-300 text-black border-2 border-black shadow-sm"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              01
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory(2)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full text-xs md:text-sm font-bold flex items-center justify-center cursor-pointer transition-all active:scale-95 ${
                activeCategory === 2
                  ? "bg-amber-300 text-black border-2 border-black shadow-sm"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              02
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory(3)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full text-xs md:text-sm font-bold flex items-center justify-center cursor-pointer transition-all active:scale-95 ${
                activeCategory === 3
                  ? "bg-amber-300 text-black border-2 border-black shadow-sm"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              03
            </button>

            <button
              type="button"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black text-amber-400 flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-transform active:scale-95"
              aria-label="Featured category"
            >
              <Sparkle size={16} fill="#FBBF24" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() =>
                setActiveCategory((prev) => (prev > 1 ? prev - 1 : 3))
              }
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-transform active:scale-95"
              aria-label="Previous category"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveCategory((prev) => (prev < 3 ? prev + 1 : 1))
              }
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-transform active:scale-95"
              aria-label="Next category"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between gap-8 mt-12 sm:mt-16 md:mt-12">
        <div className="flex items-start gap-2 sm:gap-3">
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Chowdeck has
            <br /> you covered
          </p>
          <Hamburger className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-yellow-500 shrink-0 mt-1 sm:mt-2 z-20" />
        </div>

        <div>
          <p className="text-white text-base sm:text-lg md:mr-10">
            Hunry? Too tired to cook?
            <br /> Have friends over, or do you simply need to chop life? <br />
            Download
            <br /> chowdeck, and let deliver happiness to your
            <br /> doorstep in minutes.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Moving pills */}
        <div className="relative w-full max-w-full min-w-0 overflow-hidden mt-8 sm:mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 w-max animate-marquee">
            {[...Scroll, ...Scroll].map((item, i) => (
              <Advertisment
                key={`${item.id}-${i}`}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Moving phone-mockup strip */}
      <div className="pb-40 relative w-full max-w-full min-w-0 overflow-hidden mt-40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee-images">
          {[...phoneImages, ...phoneImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Chowdeck app screenshot"
              className="h-64 sm:h-80 md:h-[420px] w-auto rounded-3xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(10%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee-images {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-images {
          animation: marquee-images 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
