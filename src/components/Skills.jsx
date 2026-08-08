const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and database-driven applications.",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "PHP", level: 75 },
      { name: "REST APIs", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Data & AI",
    description: "Analyzing data and developing machine learning solutions.",
    skills: [
      { name: "Python", level: 85 },
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 80 },
      { name: "Scikit-learn", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development, analytics and collaboration tools.",
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 80 },
    ],
  },
];

const technologies = [
  "React",
  "JavaScript",
  "Python",
  "SQL",
  "Node.js",
  "MongoDB",
  "MySQL",
  "PHP",
  "Power BI",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Skills &{" "}
            <span className="text-blue-400">
              Technologies
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            Technologies and tools I use to build applications,
            analyze data and solve real-world problems.
          </p>

        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-7 rounded-2xl bg-slate-950 border border-white/10 hover:border-blue-500/40 transition-all duration-300"
            >

              <h3 className="text-xl font-bold text-white">
                {category.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2 mb-7">
                {category.description}
              </p>

              <div className="space-y-5">

                {category.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between mb-2">

                      <span className="text-sm text-slate-300">
                        {skill.name}
                      </span>

                      <span className="text-sm text-blue-400">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Technologies */}
        <div className="mt-16">

          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-3">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="px-5 py-2.5 rounded-full bg-slate-950 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;