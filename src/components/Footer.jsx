import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="bg-slate-950 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <a
              href="#home"
              className="text-2xl font-bold text-white"
            >
              Aniket<span className="text-blue-500">.</span>
            </a>

            <p className="mt-4 max-w-sm text-slate-400 leading-7">
              Full Stack Developer passionate about building
              modern web applications, data-driven solutions
              and practical digital products.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-white font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition"
              >
                <FiLinkedin size={19} />
              </a>

              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition"
              >
                <FiMail size={19} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © {currentYear} Aniket Vare. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 transition-all duration-300 z-50"
      >
        <FiArrowUp />
      </button>

    </footer>
  );
}

export default Footer;