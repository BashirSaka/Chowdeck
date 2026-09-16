export default function Advertisment({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 whitespace-nowrap shrink-0">
      <span className="flex items-center justify-center">{icon}</span>
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  );
}
