const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Suryadatta Institute of Management & Mass Communication",
    Year: "2024 - 2026",
    CGPA: "8.62/10",
    status: "Recently Completed",
    description:
      "Advanced studies in computer applications with a focus on software development, data, programming and emerging technologies.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kisan Veer Mahavidyalaya, Wai",
    Year: "2021 - 2024",
    CGPA: "7.64/10",
    status: "Completed",
    description:
      "Studied computer applications, programming, databases, web technologies and software development fundamentals.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            Academic Background
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Education
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            My academic journey and foundation in computer applications.
          </p>

        </div>

        {/* Education Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-10">

            {education.map((item) => (
              <div
                key={item.degree}
                className="relative pl-16"
              >

                {/* Dot */}
                <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xl">
                  🎓
                </div>

                {/* Card */}
                <div className="p-7 rounded-2xl bg-slate-950 border border-white/10 hover:border-blue-500/40 transition-all duration-300">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                      {item.status}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-white mt-4">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 font-medium mt-2">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 mt-1">
                    {item.Year}
                  </p>
                  <p className="text-slate-400 mt-1">
                    CGPA: {item.CGPA}
                  </p>
                  <p className="text-slate-400 leading-7 mt-4">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;