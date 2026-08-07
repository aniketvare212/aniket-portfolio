import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold text-white"
          >
            Aniket<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all"
            >
              Hire Me
            </a>

          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? (
              <FiX size={25} />
            ) : (
              <FiMenu size={25} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[500px] opacity-100 pb-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="block mt-3 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-center font-medium transition"
            >
              Hire Me
            </a>

          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;