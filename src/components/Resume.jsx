import { FiDownload, FiEye, FiFileText } from "react-icons/fi";
import Reveal from "./Reveal";

function Resume() {
  return (
    <section
      id="resume"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <Reveal>
          <div className="text-center">

            <p className="text-blue-400 font-medium mb-3">
              My Resume
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Professional{" "}
              <span className="text-blue-400">
                Resume
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-7">
              Explore my education, technical skills, projects,
              internship experience and professional certifications.
            </p>

          </div>
        </Reveal>

        <Reveal delay={0.15}>

          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-950 border border-white/10">

            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* Icon */}
              <div className="shrink-0">

                <div className="w-28 h-28 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                  <FiFileText
                    size={52}
                    className="text-blue-400"
                  />

                </div>

              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">

                <h3 className="text-2xl font-bold text-white">
                  Aniket Vare — Resume
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  Full Stack Developer • Data Analyst •
                  Machine Learning Enthusiast
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">

                  {/* View */}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all"
                  >
                    <FiEye />
                    View Resume
                  </a>

                  {/* Download */}
                  <a
                    href="/resume.pdf"
                    download="Aniket_Vare_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500/40 text-white transition-all"
                  >
                    <FiDownload />
                    Download PDF
                  </a>

                </div>

              </div>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}

export default Resume;