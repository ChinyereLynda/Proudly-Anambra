import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer";
import AppDownload from "../AppDownload";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppDownload />
      <Footer />
    </div>
  );
}
