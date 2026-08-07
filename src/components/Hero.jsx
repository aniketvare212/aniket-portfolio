import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "Data Analyst",
  "Machine Learning Enthusiast",
];

const techStack = [
  "React",
  "Python",
  "SQL",
  "Node.js",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm mb-6">

              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />

                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>

              Open to opportunities

            </div>

            {/* Greeting */}
            <p className="text-blue-400 font-medium mb-3">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">

              Aniket

              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Vare
              </span>

            </h1>

            {/* Role */}
            <div className="mt-7 min-h-[42px]">

              <motion.div
                key={roles[0]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl font-semibold text-slate-200"
              >
                Full Stack Developer
              </motion.div>

            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg text-slate-400 leading-8">
              I build modern web applications and data-driven
              solutions using technologies like React, Node.js,
              Python and SQL.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                View My Work

                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-500/5 text-white font-medium transition-all"
              >
                <FiDownload />
                Download Resume
              </a>

            </div>

            {/* Social */}
            <div className="mt-9 flex items-center gap-3">

              <a
                href="https://github.com/anikketvare212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/aniket-vare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <FiLinkedin size={19} />
              </a>

              <a
                href="mailto:vareaniket330@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <FiMail size={19} />
              </a>

            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <p className="text-3xl font-bold text-white">
                  6+
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  10+
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  App Screens
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  4+
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Tech Areas
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Outer Glow */}
            <div className="absolute w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] rounded-full border border-blue-500/10"
            />

            {/* Profile Card */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px] rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl shadow-blue-500/10">

              {/* Profile Image */}
              <div className="w-60 h-60 sm:w-68 sm:h-68 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">

                <img
                  src="/profile.png"
                  alt="Aniket Vare"
                  className="w-full h-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="absolute text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  AV
                </span>

              </div>

            </div>

            {/* Floating Tech Cards */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-3 left-2 sm:left-0 px-4 py-3 rounded-xl bg-slate-900/90 backdrop-blur border border-white/10 shadow-xl"
            >
              <span className="text-sm font-medium text-white">
                ⚛ React
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 -left-3 sm:-left-8 px-4 py-3 rounded-xl bg-slate-900/90 backdrop-blur border border-white/10 shadow-xl"
            >
              <span className="text-sm font-medium text-white">
                🐍 Python
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 -right-2 sm:-right-10 px-4 py-3 rounded-xl bg-slate-900/90 backdrop-blur border border-white/10 shadow-xl"
            >
              <span className="text-sm font-medium text-white">
                🗄 SQL
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 -right-1 sm:-right-8 px-4 py-3 rounded-xl bg-slate-900/90 backdrop-blur border border-white/10 shadow-xl"
            >
              <span className="text-sm font-medium text-white">
                🟢 Node.js
              </span>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Scroll */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-slate-500 hover:text-blue-400 transition"
      >
        <span className="text-xs mb-2">
          Scroll to explore
        </span>

        <span className="text-lg">
          ↓
        </span>
      </motion.a>

    </section>
  );
}

export default Hero;