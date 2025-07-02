import { CloseCircle, HamburgerMenu } from "iconsax-reactjs";
import { useState } from "react";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", path: "/home" },
    { label: "STORE", path: "/more" },
    { label: "MORE", path: "/more" },
  ];

  return (
    <nav className="flex items-center justify-between px-16 py-2">
      {/* Logo */}
      <div className="w-40">
        <img
          src="/assets/proudly_anambra_logo.png"
          alt="Logo"
          className="cursor-pointer"
        />
      </div>

      {/* Desktop Nav*/}
      <div className="hidden lg:flex items-center gap-6 flex-wrap">
        <ul className="flex gap-7 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              {/* <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink> */}
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseCircle className="h-6 w-6" />
          ) : (
            <HamburgerMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute mt-14 top-0 right-16 z-10 lg:hidden transition-all duration-300 bg-white shadow-lg rounded-md p-4">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                {/* <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive ? "text-primary" : "hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink> */}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
