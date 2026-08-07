const achievements = [
  {
    title: "Deloitte Technology Job Simulation",
    organization: "Deloitte",
    type: "Job Simulation",
    description:
      "Completed a technology-focused job simulation involving practical tasks and professional problem-solving.",
  },
  {
    title: "NPTEL Certification",
    organization: "SWAYAM / NPTEL",
    type: "Certification",
    description:
      "Completed an NPTEL course as part of continuous technical and academic development.",
  },
  {
    title: "Frontend Development Internship",
    organization: "CleverGround Technology Pvt. Ltd.",
    type: "Experience",
    description:
      "Completed frontend development internship experience working with React Native and application interfaces.",
  },
  {
    title: "Multiple Full-Stack & ML Projects",
    organization: "Personal / Academic",
    type: "Projects",
    description:
      "Built practical projects across web development, machine learning, data analytics and business applications.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            Milestones
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Achievements &{" "}
            <span className="text-blue-400">
              Certifications
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            Certifications, professional experiences and milestones
            from my development journey.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group p-7 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-all duration-300"
            >

              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                  🏆
                </div>

                {/* Content */}
                <div className="flex-1">

                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-3">
                    {achievement.type}
                  </span>

                  <h3 className="text-xl font-bold text-white">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-blue-400 mt-1">
                    {achievement.organization}
                  </p>

                  <p className="text-sm text-slate-400 leading-6 mt-4">
                    {achievement.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;