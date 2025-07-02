import AppleStoreBadge from "../Badges/AppleStoreBadge";
import GooglePlayBadge from "../Badges/GooglePlayBadge";

export default function AppDownload() {
  return (
    <div className="bg-white py-12 px-8 text-center md:text-left md:flex md:items-center md:gap-x-15 mx-auto max-w-5xl w-full">
      <div className="mb-6 md:mb-0">
        <img src="/assets/anambra_phone.png" alt="App Preview" className="" />
      </div>
      <div className="max-w-md">
        <h2 className="text-xl font-semibold">
          Download our Mobile Application
        </h2>
        <p className="text-base mb-6">
          To experience more on our platform, click on the button below to
          download our app on your mobile phone platform.
        </p>
        <div className="flex items-center gap-4">
          <button>
            <GooglePlayBadge />
          </button>
          <button>
            <AppleStoreBadge />
          </button>
        </div>
      </div>
    </div>
  );
}
