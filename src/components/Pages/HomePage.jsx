import HeroBanner from "../HeroBanner";
import Navbar from "../Navigation/Navbar";
import Featured from "../Featured";
import WhatsHappening from "../WhatsHappening";
import AppDownload from "../AppDownload";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div className="px-12 py-2">
      <HeroBanner />
      <Featured />
      <WhatsHappening />
      <AppDownload />
    </div>
  );
}
