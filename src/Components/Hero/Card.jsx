import { MoveRight } from "lucide-react";

/**
 * Reusable Card Component using Props
 * @param {Object} props
 * @param {React.ReactNode} props.icon - The icon element at top-left
 * @param {string} props.title - Card heading
 * @param {string} props.description - Body paragraph
 * @param {string} [props.linkText="SEE MORE"] - Call-to-action text
 * @param {string} [props.href="#"] - Destination URL
 * @param {React.ReactNode} [props.children] - Bottom graphic/illustration
 * @param {string} [props.image] - Optional image URL to display at the bottom
 * @param {string} [props.bgColor="bg-amber-400"] - Background color for the bottom graphic area
 */
export default function Card({
  icon,
  title,
  description,
  linkText = "SEE MORE",
  href = "#",
  children,
  image,
  bgColor = "bg-amber-400",
}) {
  return (
    <div className="bg-white border-2 border-black rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      {/* Top Content Area */}
      <div className="p-6 md:p-8 flex flex-col items-start flex-1">
        {/* Icon Prop */}
        <div className="mb-3 flex items-center justify-center">
          {icon}
        </div>

        {/* Title Prop */}
        <h3 className="text-2xl font-bold text-black tracking-tight">
          {title}
        </h3>

        {/* Description Prop */}
        <p className="text-neutral-600 text-sm mt-3 leading-relaxed flex-1">
          {description}
        </p>

        {/* Call to Action Prop */}
        <a
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-black uppercase hover:gap-2.5 transition-all group"
        >
          <span>{linkText}</span>
          <MoveRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Bottom Illustration / Graphic Area */}
      <div className={`w-full h-44 md:h-52 relative overflow-hidden flex items-center justify-center border-t-2 border-black ${bgColor}`}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
