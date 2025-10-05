import { useState } from "react";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const closeMenu = () => setExpanded(false);

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "Events", href: "#events", icon: "🌌" },
    { name: "Sponsors", href: "#sponsors", icon: "🤝" },
    { name: "About", href: "#about", icon: "ℹ️" },
  ];

  const handleNavClick = (href) => {
    window.location.href = href;
    closeMenu();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2.5">
          <a href="#home" className="flex items-center">
            <img
              src={"/images/logo.png"}
              alt="Logo"
              className="w-32 h-auto rounded-md transition-transform duration-300 hover:scale-105"
            />
          </a>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-8 h-0.5 bg-current rounded transform transition duration-300 ${
                expanded ? "rotate-45 translate-y-2.5" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-current rounded my-1 transition-opacity duration-300 ${
                expanded ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-current rounded transform transition duration-300 ${
                expanded ? "-rotate-45 -translate-y-2.5" : "translate-y-1"
              }`}
            />
          </button>

          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center space-x-2 px-3 py-1.5 text-white hover:text-gray-300 rounded-md transition-all duration-300 text-sm"
              >
                <span className="text-base">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {expanded && (
        <div className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="relative bg-transparent rounded-xl p-8 w-11/12 max-w-md shadow-none">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-3 px-4 py-2 text-white hover:text-gray-300 rounded-lg transition-all duration-300 text-base"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
