const achievements = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    organization: "Deloitte / Forage",
    type: "Job Simulation",
    image: "/certificates/deloitte.png",
    file: "/certificates/deloitte.pdf",
    icon: "🏆",
    description:
      "Completed a Data Analytics job simulation involving practical tasks in data analysis and forensic technology.",
  },
  {
    title: "Data Science Using Python",
    organization: "NPTEL / SWAYAM",
    type: "Certification",
    image: "/certificates/INI.png",
    file: "/certificates/INI.pdf",
    icon: "🐍",
    description:
      "Completed the 12-week Data Science Using Python course.",
  },
  {
    title: "The Joy of Computing using Python",
    organization: "NPTEL / SWAYAM",
    type: "Certification",
    image: "/certificates/NPTEL.png",
    file: "/certificates/Nptel.pdf",
    icon: "💻",
    description:
      "Completed The Joy of Computing using Python certification.",
  },
  {
    title: "Machine Learning Using Python",
    organization: "Certification",
    type: "Certification",
    image: "/certificates/ML.png",
    file: "/certificates/ML.pdf",
    icon: "🤖",
    description:
      "Completed Machine Learning Using Python certification.",
  },
  {
    title: "SQL for Data Analysis",
    organization: "Certification",
    type: "Certification",
    image: "/certificates/SQL.png",
    file: "/certificates/SQL.pdf",
    icon: "🗄️",
    description:
      "Completed SQL for Data Analysis certification.",
  },
  {
    title: "Frontend Developer Internship",
    organization: "CleverGround Technologies Pvt. Ltd.",
    type: "Experience",
    image: "/certificates/Experience.png",
    file: "/certificates/Experience.pdf",
    icon: "💼",
    description:
      "Completed a five-month Frontend Developer internship.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-6">

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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-slate-900
                border border-white/10
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-blue-500/10
                transition-all
                duration-300
              "
            >

              {/* ================= IMAGE ================= */}
              <div className="relative h-72 bg-slate-800 overflow-hidden">

                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="
                    w-full
                    h-full
                    object-contain
                    p-5
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Certificate Label */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    px-3
                    py-1
                    rounded-full
                    bg-slate-950/80
                    backdrop-blur-md
                    border border-white/10
                    text-xs
                    text-slate-300
                  "
                >
                  Certificate
                </div>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-7">

                <div className="flex items-start gap-5">

                  {/* Icon */}
                  <div
                    className="
                      shrink-0
                      w-14
                      h-14
                      rounded-xl
                      bg-blue-500/10
                      border border-blue-500/20
                      flex
                      items-center
                      justify-center
                      text-2xl
                    "
                  >
                    {achievement.icon}
                  </div>

                  <div className="flex-1">

                    {/* Type */}
                    <span
                      className="
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                        text-xs
                        font-medium
                        mb-3
                      "
                    >
                      {achievement.type}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                        group-hover:text-blue-400
                        transition-colors
                      "
                    >
                      {achievement.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-sm text-blue-400 mt-1">
                      {achievement.organization}
                    </p>

                    {/* Description */}
                    <p
                      className="
                        text-sm
                        text-slate-400
                        leading-6
                        mt-4
                      "
                    >
                      {achievement.description}
                    </p>

                    {/* View Certificate */}
                    <a
                      href={achievement.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        mt-6
                        px-5
                        py-2.5
                        rounded-lg
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:shadow-lg
                        hover:shadow-blue-500/25
                      "
                    >
                      <span>👁️</span>
                      View Certificate
                    </a>

                  </div>
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