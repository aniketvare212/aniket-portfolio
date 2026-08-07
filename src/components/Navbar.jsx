import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((link) => link.href.substring(1))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavigation = (href) => {
    setMobileOpen(false);

    const id = href.substring(1);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <button
              onClick={() => handleNavigation("#home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                AV
              </span>

              <span className="hidden sm:block text-lg font-bold text-white">
                Aniket<span className="text-blue-400">.</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">

              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive =
                  activeSection === sectionId;

                return (
                  <button
                    key={link.name}
                    onClick={() =>
                      handleNavigation(link.href)
                    }
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-blue-400" />
                    )}
                  </button>
                );
              })}

            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">

              <button
                onClick={() =>
                  handleNavigation("#contact")
                }
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow-lg shadow-blue-600/20 transition-all"
              >
                Hire Me

                <FiArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </div>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <FiX size={22} />
              ) : (
                <FiMenu size={22} />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >

        {/* Backdrop */}
        <button
          aria-label="Close mobile menu"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Panel */}
        <div
          className={`absolute top-20 left-4 right-4 rounded-2xl bg-slate-950 border border-white/10 shadow-2xl transition-transform duration-300 ${
            mobileOpen
              ? "translate-y-0"
              : "-translate-y-5"
          }`}
        >

          <nav className="p-4">

            {navLinks.map((link) => {
              const sectionId =
                link.href.substring(1);

              const isActive =
                activeSection === sectionId;

              return (
                <button
                  key={link.name}
                  onClick={() =>
                    handleNavigation(link.href)
                  }
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left transition-colors ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  )}
                </button>
              );
            })}

            <button
              onClick={() =>
                handleNavigation("#contact")
              }
              className="w-full mt-3 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
            >
              Hire Me
              <FiArrowRight />
            </button>

          </nav>

        </div>

      </div>
    </>
  );
}

export default Navbar;