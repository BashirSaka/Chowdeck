import {
  Sparkle,
  MoveRight,
  Circle,
  CircleCheck,
  Copyright,
  PaperBag,
} from "lucide-react";

export default function Faqs2() {
  return (
    <section className="bg-black">
      {/* Newsletter header */}
      <div className="pt-16 flex flex-col sm:flex-row justify-between mx-4 sm:mx-8 gap-4 sm:gap-2 items-start sm:items-center">
        <div className="flex gap-2 items-center flex-wrap">
          <Sparkle size={40} className="text-green-400" />
          <p className="text-3xl text-white md:text-5xl font-bold">
            Cool stuff only
          </p>
          <p className="text-xs font-bold text-amber-200 md:mt-8">
            Subscribe to our newsletter
          </p>
        </div>
        <div>
          <PaperBag size={90} className="text-white mt-2" />
        </div>
      </div>

      {/* Email input row */}
      <div className="mx-4 sm:mx-14 mt-8">
        <div className="border-t border-white" />
        <div className="flex justify-between items-center mt-4 gap-2 cursor-pointer">
          <p className="text-gray-400 text-sm sm:text-base truncate">
            yourname@email.com
          </p>
          <MoveRight
            strokeWidth={4}
            size={28}
            className="text-purple-500 font-bold shrink-0 sm:w-10 sm:h-10"
          />
        </div>
        <div className="border-t border-white mt-4" />
      </div>

      {/* Footer link columns */}
      <div className="mt-14 mx-4 sm:mx-10 text-white flex flex-col relative">
        <Circle
          size={60}
          strokeWidth={5}
          className="hidden md:block text-white absolute -top-4 left-0"
        />

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 sm:gap-16 md:gap-24">
          {/* 1st column */}
          <div className="border-l border-gray-700 pl-4 flex flex-col gap-3 min-w-[140px]">
            <p className="text-gray-600 text-base font-semibold">Company</p>
            <p>Customer</p>
            <p>Vendor</p>
            <p>Rider</p>
            <p>Storefront</p>
            <p>About</p>
            <p>Career</p>
            <p>FAQs</p>
            <p>Blogs</p>
            <p>Contact</p>
            <p>Term of use</p>
            <p>Privacy policy</p>
          </div>
          {/* 2nd column */}
          <div className="border-l border-gray-700 pl-4 flex flex-col gap-2 min-w-[160px]">
            <p className="text-gray-600 text-base font-semibold">
              Cuisines near you
            </p>
            <p>Pasta near me</p>
            <p>Rice near me</p>
            <p>Fast food near me</p>
            <p>Asian food in Lagos</p>
            <p>African food in Lagos</p>
            <p>Breakfast food in Lagos</p>
            <p>Fitfam store in Lagos</p>
            <p>American food in Lagos</p>
            <p>Pastries in Lagos</p>
            <p>Salad in Lagos</p>
            <p>Fruits in Lagos</p>
          </div>
          {/* 3rd column */}
          <div className="border-l border-gray-700 pl-4 flex flex-col gap-3 min-w-[140px]">
            <p className="text-gray-600 text-base font-semibold">Popular</p>
            <p>Food delivery</p>
            <p>Surulere</p>
            <p>Iyaba</p>
            <p>Ikeja</p>
            <p>Lekki</p>
            <p>King Glab</p>
            <p>Korede Spaghetti</p>
            <p>Iya Aladuke</p>
            <p>Food fusion</p>
            <p>Bellefull</p>
          </div>
        </div>

        {/* Social links - 2x2 grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 text-white">
          <span className="border-t border-b border-gray-700 py-5 px-4 sm:px-8 flex items-center justify-center gap-2 cursor-pointer">
            <Sparkle size={20} className="text-blue-800" />
            Twitter
          </span>
          <span className="border-t border-b sm:border-l border-gray-700 py-5 px-4 sm:px-8 flex items-center justify-center gap-2 cursor-pointer">
            <CircleCheck size={20} className="text-pink-800" />
            Instagram
          </span>
          <span className="border-b border-gray-700 py-5 px-4 sm:px-8 flex items-center justify-center gap-2 cursor-pointer">
            <Circle
              size={20}
              className="bg-purple-500 rounded-full text-purple-500"
            />
            Facebook
          </span>
          <span className="border-b sm:border-l border-gray-700 py-5 px-4 sm:px-8 flex items-center justify-center gap-2 cursor-pointer">
            <Circle
              size={20}
              className="bg-orange-600 rounded-full text-orange-600"
            />
            LinkedIn
          </span>
        </div>

        <div className="flex justify-center mt-6 pb-8">
          <p className="flex items-center gap-1 text-gray-700 text-xs text-center">
            <Copyright size={15} /> All Rights Reserved. 2022, Chowdeck
            Logistics
          </p>
        </div>
      </div>
    </section>
  );
}
