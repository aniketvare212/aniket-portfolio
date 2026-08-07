const experiences = [
  {
    type: "Internship",
    role: "Frontend Developer Intern",
    company: "CleverGround Technology Pvt. Ltd.",
    period: "Internship",
    location: "India",
    description:
      "Worked on frontend development for a React Native mobile application, focusing on responsive screens, reusable components and user-friendly interfaces.",
    responsibilities: [
      "Developed 10+ responsive application screens.",
      "Created reusable React Native components.",
      "Worked with JavaScript and React Native.",
      "Improved UI consistency and user experience.",
      "Collaborated on application development and testing.",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            My Journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Experience
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            My professional experience and hands-on development journey.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="relative mb-12"
            >

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg shadow-blue-500/30" />

              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >

                <div className="group p-7 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-all duration-300">

                  {/* Top */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {experience.type}
                    </span>

                    <span className="text-sm text-slate-500">
                      {experience.period}
                    </span>

                  </div>

                  {/* Role */}
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-blue-400 font-medium">
                    {experience.company}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {experience.location}
                  </p>

                  {/* Description */}
                  <p className="mt-5 text-slate-400 leading-7">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6">

                    <h4 className="text-sm font-semibold text-white mb-3">
                      Key Contributions
                    </h4>

                    <ul className="space-y-2">

                      {experience.responsibilities.map(
                        (responsibility) => (
                          <li
                            key={responsibility}
                            className="flex gap-3 text-sm text-slate-400"
                          >
                            <span className="text-blue-400 mt-1">
                              •
                            </span>

                            <span>
                              {responsibility}
                            </span>
                          </li>
                        )
                      )}

                    </ul>

                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">

                    {experience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      )
                    )}

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

export default Experience;