export default function AppleStoreBadge() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 bg-black text-white px-2 py-1 rounded-lg shadow-md hover:opacity-90 transition-opacity"
    >
      <img
        src="/assets/apple_store.svg"
        alt="Download on the App Store"
        className="w-10"
      />
      <div className="text-left leading-tight">
        <span className="text-xs font-roboto block">Download on the</span>
        <span className="text-base font-medium">App Store</span>
      </div>
    </a>
  );
}
