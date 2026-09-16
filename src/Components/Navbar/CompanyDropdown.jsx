export default function CompanyDropdown() {
  return (
    <div className="absolute top-full left-0 mt-3 w-72 bg-white text-black rounded-lg shadow-lg p-4 z-50 cursor-default">
      <p className="text-sm text-gray-600 mb-3">
        Chowdeck is a technology company that provides logistics services to
        vendors and consumers, making food delivery seamless across Nigeria.
      </p>
      <ul className="flex flex-col gap-2 text-sm font-medium">
        <li className="hover:text-green-700 cursor-pointer transition-colors">
          Customers
        </li>
        <li className="hover:text-green-700 cursor-pointer transition-colors">
          Vendors
        </li>
        <li className="hover:text-green-700 cursor-pointer transition-colors">
          Riders
        </li>
        <li className="hover:text-green-700 cursor-pointer transition-colors">
          Storefront
        </li>
        <li className="hover:text-green-700 cursor-pointer transition-colors">
          About
        </li>
        <li className="hover:text-green-700 cursor-pointer transition-colors">
          Careers
        </li>
      </ul>
    </div>
  );
}
