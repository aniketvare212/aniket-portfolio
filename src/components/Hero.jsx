import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center"
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Blue Glow */}
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

        {/* Purple Glow */}
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

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* =================================================
              LEFT SIDE
          ================================================== */}
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-semibold text-slate-200"
              >
                Web Developer | Data Analyst | Data scientist
              </motion.div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg text-slate-400 leading-8">
              I build modern web applications and data-driven
              solutions using technologies like React, Node.js,
              Python, Machine Learning and SQL.
            </p>

            {/* Buttons */}
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
                download="Aniket_Vare_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-500/5 text-white font-medium transition-all"
              >
                <FiDownload />
                Download Resume
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/anikketvare212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <FiGithub size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/aniket-vare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <FiLinkedin size={19} />
              </a>

              {/* Email */}
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
                  5+
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  5+
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

          {/* =================================================
              RIGHT SIDE - PROFILE
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Large Glow */}
            <div
              className="
                absolute
                w-[350px]
                h-[350px]
                sm:w-[460px]
                sm:h-[460px]
                lg:w-[520px]
                lg:h-[520px]
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            {/* Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[340px]
                h-[340px]
                sm:w-[450px]
                sm:h-[450px]
                lg:w-[520px]
                lg:h-[520px]
                rounded-full
                border
                border-blue-500/10
              "
            />

            {/* =================================================
                MAIN PROFILE CIRCLE
            ================================================== */}
            <div
              className="
                relative

                w-[310px]
                h-[310px]

                sm:w-[400px]
                sm:h-[400px]

                lg:w-[450px]
                lg:h-[450px]

                rounded-full

                bg-slate-900

                border
                border-white/10

                flex
                items-center
                justify-center

                overflow-hidden

                shadow-2xl
                shadow-blue-500/20
              "
            >

              {/* Inner Blue Border */}
              <div
                className="
                  absolute
                  inset-[7px]
                  rounded-full
                  border-[4px]
                  border-blue-500/40
                  pointer-events-none
                  z-30
                "
              />

              {/* =================================================
                  IMAGE CONTAINER
              ================================================== */}
              <div
                className="
                  absolute
                  inset-[12px]

                  rounded-full

                  overflow-hidden

                  bg-white

                  flex
                  items-center
                  justify-center
                "
              >

                <img
                  src="/profile.png"
                  alt="Aniket Vare"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    scale-[1.04]
                    select-none
                  "
                />

              </div>

            </div>

            {/* =================================================
                REACT FLOATING CARD
            ================================================== */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-2
                left-0
                sm:left-0

                px-4
                py-3

                rounded-xl

                bg-slate-900/90
                backdrop-blur

                border
                border-white/10

                shadow-xl
              "
            >
              <span className="text-sm font-medium text-white">
                ⚛ React
              </span>
            </motion.div>

            {/* =================================================
                PYTHON FLOATING CARD
            ================================================== */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-5
                -left-3
                sm:-left-8

                px-4
                py-3

                rounded-xl

                bg-slate-900/90
                backdrop-blur

                border
                border-white/10

                shadow-xl
              "
            >
              <span className="text-sm font-medium text-white">
                🐍 Python
              </span>
            </motion.div>

            {/* =================================================
                SQL FLOATING CARD
            ================================================== */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-20
                -right-2
                sm:-right-10

                px-4
                py-3

                rounded-xl

                bg-slate-900/90
                backdrop-blur

                border
                border-white/10

                shadow-xl
              "
            >
              <span className="text-sm font-medium text-white">
                🗄 SQL
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
              className="
                absolute
                top-10
                -top-2
                sm:-top-10

                px-4
                py-3

                rounded-xl

                bg-slate-900/90
                backdrop-blur

                border
                border-white/10

                shadow-xl
              "
            >
              <span className="text-sm font-medium text-white">
                🤖 Machine Learning
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
              className="
                absolute
                left-6s0
                -bottom-2
                sm:-bottom-10

                px-4
                py-3

                rounded-xl

                bg-slate-900/90
                backdrop-blur

                border
                border-white/10

                shadow-xl
              "
            >
              <span className="text-sm font-medium text-white">
                📊 Data Analysis
              </span>
            </motion.div>

            {/* =================================================
                NODE.JS FLOATING CARD
            ================================================== */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-20
                -right-1
                sm:-right-8

                px-4
                py-3

                rounded-xl

                bg-slate-900/90
                backdrop-blur

                border
                border-white/10

                shadow-xl
              "
            >
              <span className="text-sm font-medium text-white">
                🟢 Node.js
              </span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2

          hidden
          sm:flex

          flex-col
          items-center

          text-slate-500
          hover:text-blue-400

          transition
        "
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