export default function GooglePlayBadge() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg shadow-md hover:opacity-90 transition-opacity"
    >
      <img
        src="/assets/google_play.svg"
        alt="Get it on Google Play"
        className="w-10"
      />
      <div className="text-left leading-tight">
        <span className="text-xs font-roboto block">GET IT ON</span>
        <span className="text-base font-medium">Google Play</span>
      </div>
    </a>
  );
}
