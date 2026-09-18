import { ShoppingCart, CircleCheck, Truck, Menu, X } from "lucide-react";
import { useState } from "react";
import CompanyDropdown from "./CompanyDropdown";
import FaqsDropdown from "./FaqsDropdown";
import BlogDropdown from "./BlogDropdown";
import ContactDropdown from "./ContactDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <section className="sticky top-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center cursor-pointer">
      {/* Logo */}
      <div className="bg-green-800 text-white rounded-3xl py-[5.3px] px-4 flex gap-2 items-center">
        <Truck size={22} color="yellow" />
        Chowdeck
      </div>

      {/* Desktop nav links — hidden below md */}
      <ul className="hidden md:flex gap-10 cursor-pointer">
        <li className="relative hover:text-green-700 cursor-pointer transition-colors">
          <button
            onClick={() => toggleMenu("company")}
            className="flex items-center"
          >
            Company
          </button>
          {openMenu === "company" && <CompanyDropdown />}
        </li>
        <li className="relative hover:text-green-700 cursor-pointer transition-colors">
          <button
            onClick={() => toggleMenu("faqs")}
            className="flex items-center"
          >
            FAQs
          </button>
          {openMenu === "faqs" && <FaqsDropdown />}
        </li>
        <li className="relative hover:text-green-700 cursor-pointer transition-colors">
          <button
            onClick={() => toggleMenu("blog")}
            className="flex items-center"
          >
            Blog
          </button>
          {openMenu === "blog" && <BlogDropdown />}
        </li>
        <li className="relative hover:text-green-700 cursor-pointer transition-colors">
          <button
            onClick={() => toggleMenu("contact")}
            className="flex items-center"
          >
            Contact
          </button>
          {openMenu === "contact" && <ContactDropdown />}
        </li>
      </ul>

      {/* Desktop right side — hidden below md */}
      <div className="hidden md:flex gap-2 items-center hover:hover:text-green-700 cursor-pointer transition-colors">
        <p className="hover:text-green-700 cursor-pointer transition-colors">
          Customers
        </p>
        <CircleCheck size={17} color="black" className="mr-8" />
        <ShoppingCart size={20} color="green" />
      </div>

      {/* Hamburger toggle — visible only below md */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-6 p-6 md:hidden z-50">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                onClick={() => toggleMenu("company")}
                className="w-full text-left"
              >
                Company
              </button>
              {openMenu === "company" && (
                <div className="mt-3 bg-gray-50 rounded-lg p-4 text-sm">
                  <p className="text-gray-600 mb-3">
                    Chowdeck is a technology company that provides logistics
                    services to vendors and consumers, making food delivery
                    seamless across Nigeria.
                  </p>
                  <ul className="flex flex-col gap-2 font-medium">
                    <li>Customers</li>
                    <li>Vendors</li>
                    <li>Riders</li>
                    <li>Storefront</li>
                    <li>About</li>
                    <li>Careers</li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("faqs")}
                className="w-full text-left"
              >
                FAQs
              </button>
              {openMenu === "faqs" && (
                <p className="mt-3 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  Got questions? We've got answers. From how deliveries work to
                  payments and service fees, our FAQs page covers the things
                  people ask us most.
                </p>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("blog")}
                className="w-full text-left"
              >
                Blog
              </button>
              {openMenu === "blog" && (
                <p className="mt-3 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  Stories from our riders, vendors, and customers. Real
                  experiences, company updates, and a look behind how Chowdeck
                  is built.
                </p>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("contact")}
                className="w-full text-left"
              >
                Contact
              </button>
              {openMenu === "contact" && (
                <p className="mt-3 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  Need help or have a question for our team? We respond promptly
                  and we're always ready to assist, whether you're a customer,
                  vendor, or rider.
                </p>
              )}
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <p>Customers</p>
            <CircleCheck size={17} color="black" />
          </div>
          <div className="flex gap-2 items-center">
            <ShoppingCart size={20} color="green" />
            <p>Cart</p>
          </div>
        </div>
      )}
    </section>
  );
}
