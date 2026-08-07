import {
  FiDownload,
  FiEye,
  FiDatabase,
  FiCode,
} from "react-icons/fi";
import Reveal from "./Reveal";

function Resume() {
  const resumes = [
    {
      id: 1,
      title: "Data Science Resume",
      subtitle:
        "Data Analyst • Data Scientist • Machine Learning Enthusiast",
      description:
        "Resume focused on Python, SQL, Machine Learning, Data Analysis, Power BI, Tableau, predictive modeling, data visualization and data-driven projects.",
      file: "/resume.pdf",
      downloadName: "Aniket_Vare_Data_Science_Resume.pdf",
      icon: FiDatabase,
    },
    {
      id: 2,
      title: "Web Developer Resume",
      subtitle:
        "Frontend Developer • React Developer • Full Stack Developer",
      description:
        "Resume focused on React, JavaScript, HTML, CSS, responsive design, PHP, MySQL and modern full-stack web development projects.",
      file: "/Web_Developer.pdf",
      downloadName: "Aniket_Vare_Web_Developer_Resume.pdf",
      icon: FiCode,
    },
  ];

  return (
    <section
      id="resume"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <Reveal>
          <div className="text-center">

            <p className="text-blue-400 font-medium mb-3">
              My Resumes
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Professional{" "}
              <span className="text-blue-400">
                Resumes
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-7">
              Explore my role-specific resumes and choose the version
              that best matches the position you are interested in.
            </p>

          </div>
        </Reveal>

        {/* ================= RESUME CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {resumes.map((resume, index) => {

            const Icon = resume.icon;

            return (
              <Reveal
                key={resume.id}
                delay={0.15 + index * 0.1}
              >

                <div className="group h-full p-7 sm:p-8 rounded-3xl bg-slate-950 border border-white/10 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">

                  {/* ICON */}
                  <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">

                    <Icon
                      size={40}
                      className="text-blue-400"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-white mt-7">
                    {resume.title}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="mt-3 text-blue-400 font-medium">
                    {resume.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-slate-400 leading-7">
                    {resume.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3 mt-7 pt-6 border-t border-white/10">

                    {/* VIEW RESUME */}
                    <a
                      href={resume.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
                    >
                      <FiEye size={18} />
                      View Resume
                    </a>

                    {/* DOWNLOAD RESUME */}
                    <a
                      href={resume.file}
                      download={resume.downloadName}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 text-white font-medium transition-all duration-300"
                    >
                      <FiDownload size={18} />
                      Download PDF
                    </a>

                  </div>

                </div>

              </Reveal>
            );
          })}

        </div>

        {/* ================= FOOTER NOTE ================= */}
        <Reveal delay={0.35}>
          <div className="text-center mt-10">

            <p className="text-sm text-slate-500">
              📄 Choose the resume that best matches the role you're applying for.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Resume;

