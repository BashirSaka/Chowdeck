import { Play, MessageSquare, Apple } from "lucide-react";
import Rider from "./Rider";
import Imagechow from "../../assets/bg-image.png"; 

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center  min-h-[70vh] md:min-h-[60vh]  md:overflow-hidden">
      <img
        src={Imagechow}
        className="h-screen md:w-full h-full object-cover -z-10"
        alt="Image of a city view"
      />
      <h1 className="font-bold text-center text-black text-5xl md:text-6xl mt-10 md:mt-20 absolute">
        Se o ti jeun?
      </h1>

      <div className="flex gap-4 justify-center items-center mt-32 px-4 md:mt-46 absolute">
        <p className="bg-green-800 rounded-md p-4 flex flex-wrap  items-center gap-2 text-white cursor-pointer hover:bg-green-900 transition-colors">
          <Play size={25} className="text-green-400" />
          Download on Google Play
        </p>
        <p className="bg-green-800 rounded-md p-4 flex flex-wrap items-center gap-2 text-white cursor-pointer hover:bg-green-900 transition-colors">
          <Apple size={23} className="text-yellow-400" />
          Download on Apple Store
        </p>
      </div>

      <div>
        {/* Bottom-left Delivery Rider Icon (facing left) */}
        <div className="absolute bottom-2 left-8 md:left-24 lg:left-32 cursor-pointer">
          <Rider />
        </div>

        {/* Right-side Support / Message Icon — positioned above the rider */}
        <div className="absolute right-4 md:right-8 bottom-44 md:bottom-52">
          <button
            className="bg-[#033b2c] text-white p-3.5 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
            aria-label="Open Intercom Messenger"
          >
            <MessageSquare size={26} className="text-white fill-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
