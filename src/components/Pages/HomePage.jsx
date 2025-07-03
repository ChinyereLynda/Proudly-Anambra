import HeroBanner from "../HeroBanner";
import Featured from "../Featured";
import WhatsHappening from "../WhatsHappening";

export default function HomePage() {
  return (
    <div className="px-12 py-2">
      <HeroBanner />
      <Featured />
      <WhatsHappening />
    </div>
  );
}
