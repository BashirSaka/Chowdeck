import Image2 from "../../assets/Image2.png";
import { Dot, Bird, } from "lucide-react";


const testimonials = [
  {
    id: 1,
    name: "Fá",
    handle: "@victorfatanmi",
    text: "Chowdeck is the best Nigerian mobile app I have ever used. Yes, quote me.",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "THEE AWAZI",
    handle: "@THEAWAZI",
    text: "Food!!! 😄💚 So excited that I can now order through @chowdeck on the island. Go team Chowdeck!!! 🚀 https://t.co/0Sr3bUid46",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Teffy Billion Dollars",
    handle: "@Jegc_tola",
    text: "My Yam and pepper sauce just came in from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week! https://t.co/DBm6E2u2hQ",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Temz👑",
    handle: "@TheRealTemz",
    text: "I wan go baff but I can't. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate. The efficiency and speed is crazy 😭😭😭😭",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "先生",
    handle: "@TheFisola",
    text: 'Chowdeck delivered in 20 minutes. Rider said "pardon my lateness" 💀',
    avatar: null,
  },
  {
    id: 6,
    name: "Wine",
    handle: "@RedWhinee",
    text: "I genuinely love @chowdeck A top app with with service",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 7,
    name: "Folasade Daini",
    handle: "@folasade_daini",
    text: "Have you seen the new list of vendors on Chowdeck?? Omo. It is giving 🔥🔥",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: 8,
    name: "Scheherazade",
    handle: "@_chiisom",
    text: "You'll order Chowdeck and say yeah I have about 20 minutes to get home. In 5 minutes, delivery man will tell you he's outside 😄",
    avatar: "https://i.pravatar.cc/40?img=7",
  },
];

function TweetCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-black" />
          )}
          <div>
            <p className="font-semibold text-sm leading-tight">
              {testimonial.name}
            </p>
            <p className="text-gray-500 text-xs leading-tight">
              {testimonial.handle}
            </p>
          </div>
        </div>
        <div className="bg-blue-500 rounded-full p-1.5 flex items-center justify-center">
          <Bird size={12} className="text-white" fill="white" />
        </div>
      </div>
      <p className="text-sm text-gray-800">{testimonial.text}</p>
    </div>
  );
}

export default function Footer2() {
  return (
    <section className="items-center">
      {/* Images of customers and map*/}
      <div className="flex justify-center">
        <div className="mt-24">
          <img src={Image2} alt="location where order can be placed" />
        </div>
      </div>

      <div className="pt-6 flex flex-col justify-center items-center">
        <div className="flex items-center gap-1 bg-amber-100 px-4 py-2 rounded-lg border-2 border-black">
          <Dot size={20} />
          <p className="font-bold">Street Cred</p>
        </div>

        {/* Community */}
        <div className="mt-6 flex items-center gap-1 bg-blue-300 px-4 py-2 rounded-lg">
          <Bird size={20} />
          <p className="font-bold">Join our community</p>
        </div>

        {/* Tweet grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 max-w-7xl">
          {testimonials.map((t) => (
            <TweetCard key={t.id} testimonial={t} />
          ))}
        </div>

       
      </div>
    </section>
  );
}
