const stats = [
  {
    number: "5+",
    label: "Projects Built",
  },
  {
    number: "5+",
    label: "Technologies",
  },
  {
    number: "1+",
    label: "Internship",
  },
  {
    number: "100%",
    label: "Learning Mindset",
  },
];

const strengths = [
  {
    icon: "⌘",
    title: "Web Development",
    description:
      "Building responsive and user-friendly web applications using modern technologies.",
  },
  {
    icon: "▣",
    title: "Backend Development",
    description:
      "Creating APIs, database-driven applications and scalable backend solutions.",
  },
  {
    icon: "◈",
    title: "Data & Analytics",
    description:
      "Working with Python, SQL, Power BI and data visualization.",
  },
  {
    icon: "✦",
    title: "Problem Solving",
    description:
      "Breaking complex problems into practical solutions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About{" "}
            <span className="text-blue-400">
              Me
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            A passionate developer focused on building real-world
            applications and continuously expanding technical skills.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Turning Ideas Into{" "}
              <span className="text-blue-400">
                Digital Solutions
              </span>
            </h3>

            <p className="text-slate-400 leading-8 mb-5">
              I'm a passionate developer who enjoys creating modern
              applications that solve real-world problems.
            </p>

            <p className="text-slate-400 leading-8 mb-5">
              I enjoy working with technologies such as React,
              JavaScript, Python, SQL and modern development tools.
            </p>

            <p className="text-slate-400 leading-8">
              Currently, I'm focused on strengthening my full-stack
              development, data science and AI/ML skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/10"
                >

                  <div className="text-2xl font-bold text-blue-400">
                    {stat.number}
                  </div>

                  <p className="text-xs text-slate-500 mt-2">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="grid sm:grid-cols-2 gap-5">

              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-400 leading-6">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}