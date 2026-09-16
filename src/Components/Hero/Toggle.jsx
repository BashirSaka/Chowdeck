import { Play, Apple, MoveDown, Asterisk, Sparkle } from "lucide-react";
import { useState } from "react";
import Image1 from "../../assets/app-image.png";
import Card from "./Card";
import {
  PizzaIllustration,
  DeliveryBoxIllustration,
  TeamIllustration,
} from "./CardIllustrations";

// Data array containing the props for each card
const networkCards = [
  {
    id: "start-selling",
    icon: <Asterisk size={30} className="text-orange-500 stroke-[3.5]" />,
    title: "Start selling",
    description:
      "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    linkText: "SEE MORE",
    href: "#",
    bgColor: "bg-[#F9BC2C]",
    illustration: <PizzaIllustration />,
  },
  {
    id: "deliver-happiness",
    icon: (
      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-white" />
      </div>
    ),
    title: "Deliver happiness",
    description:
      "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
    linkText: "SEE MORE",
    href: "#",
    bgColor: "bg-[#008753]",
    illustration: <DeliveryBoxIllustration />,
  },
  {
    id: "behind-scenes",
    icon: <Sparkle size={26} className="text-purple-600 fill-purple-600" />,
    title: "Behind the scenes",
    description:
      "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
    linkText: "SEE MORE",
    href: "#",
    bgColor: "bg-[#F4B740]",
    illustration: <TeamIllustration />,
  },
];

export default function Toggle() {
  const [activeTab, setActiveTab] = useState("Customer");

  return (
    <section>
      <nav className="mt-8 mb-12 flex justify-center">
        {/* Pill Container */}
        <ul className="flex items-center gap-1 bg-amber-100/70 p-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
          <li
            onClick={() => setActiveTab("Customer")}
            className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
              activeTab === "Customer"
                ? "bg-amber-400 text-black font-semibold shadow-sm"
                : "text-neutral-700 hover:bg-amber-200/80 hover:text-black"
            }`}
          >
            Customer
          </li>
          <li
            onClick={() => setActiveTab("Vendors")}
            className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
              activeTab === "Vendors"
                ? "bg-amber-400 text-black font-semibold shadow-sm"
                : "text-neutral-700 hover:bg-amber-200/80 hover:text-black"
            }`}
          >
            Vendors
          </li>
          <li
            onClick={() => setActiveTab("Riders")}
            className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
              activeTab === "Riders"
                ? "bg-amber-400 text-black font-semibold shadow-sm"
                : "text-neutral-700 hover:bg-amber-200/80 hover:text-black"
            }`}
          >
            Riders
          </li>
        </ul>
      </nav>

      {/* Description Section with Centered Layout and Line Breaks */}
      <div className="flex flex-col items-center text-center px-6 mt-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Try the App
        </h2>
        <p className="max-w-lg text-neutral-600 text-base md:text-lg leading-relaxed">
          Have meals delivered to you within minutes from a wide{" "}
          <br className="hidden sm:inline" />
          variety of restaurants ranging from African to Continental{" "}
          <br className="hidden sm:inline" />
          cuisine to satisfy your cravings.
        </p>
      </div>

      <div className="flex items-center justify-center mt-4 gap-4">
        <Play size={42} className="text-white bg-green-900 p-2 rounded-full" />
        <Apple size={42} className="text-white bg-green-900 p-2 rounded-full" />
      </div>

      <div className="flex justify-center items-center">
        <img src={Image1} className="ml-12 md:ml-18" alt="Chowdeck app image" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2 px-4 text-center">
        <p className="text-2xl sm:text-3xl md:text-5xl text-gray-400 font-medium text-center">
          Join Our growing network
        </p>
        <MoveDown size={34} className="text-gray-400" />
      </div>

      {/* Network Cards Grid rendered with Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-12 mb-44">
        {networkCards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            href={card.href}
            bgColor={card.bgColor}
          >
            {card.illustration}
          </Card>
        ))}
      </div>
    </section>
  );
}
