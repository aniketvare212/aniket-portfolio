
import { useState } from "react";
import { FiGithub, FiX } from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  {
    id: 2,
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    image: "/heart-disease.png",
    description:
      "Machine learning application that predicts the likelihood of heart disease using patient health-related features.",
    longDescription:
      "A machine learning project using classification algorithms to analyze healthcare-related data and generate a prediction through an interactive Streamlit interface.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/",
    featured: true,
  },

  {
    id: 3,
    title: "Telco Customer Churn Prediction",
    category: "Machine Learning",
    image: "/churn.png",
    description:
      "Predictive analytics application that identifies customers who may be likely to leave a telecom service.",
    longDescription:
      "The project focuses on data preprocessing, exploratory analysis, feature engineering and machine learning classification to estimate customer churn probability.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/",
    featured: false,
  },

  {
    id: 4,
    title: "Power BI Sales Dashboard",
    category: "Data Analytics",
    image: "/sales-dashboard.png",
    description:
      "Interactive dashboard for monitoring sales performance, KPIs, trends and business insights.",
    longDescription:
      "A business intelligence dashboard designed to transform sales data into interactive visualizations and actionable business insights.",
    technologies: ["Power BI", "Excel", "Data Analysis"],
    github: "https://github.com/",
    featured: false,
  },

  {
    id: 5,
    title: "Komal Cake Corner",
    category: "Web Development",
    image: "/komal-cake-corner.png",
    description:
      "Online cake shop website with product browsing, ordering, customer accounts and payment integration.",
    longDescription:
      "A PHP and MySQL based e-commerce website created for an online cake business. The platform includes product management, cart functionality, checkout and order management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/",
    featured: true,
  },

  {
    id: 6,
    title: "EDUSITY",
    category: "Web Development",
    image: "/edusity.png",
    description:
      "Modern educational website interface built with React and responsive UI components.",
    longDescription:
      "A responsive educational platform interface developed using React with reusable components and a modern user experience.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/",
    featured: false,
  },
];

const categories = [
  "All",
  "Machine Learning",
  "Data Analytics",
  "Web Development",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <Reveal>
          <div className="text-center mb-12">

            <p className="text-blue-400 font-medium mb-3">
              My Work
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Featured{" "}
              <span className="text-blue-400">
                Projects
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400">
              Practical projects demonstrating my skills in
              machine learning, data analytics and modern
              web development.
            </p>

          </div>
        </Reveal>

        {/* ================= FILTERS ================= */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-950 text-slate-400 border border-white/10 hover:text-white hover:border-blue-500/30"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </Reveal>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
            >

              <article className="group h-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">

                {/* ================= IMAGE ================= */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">

                    <span className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur text-xs text-blue-400 border border-white/10">
                      {project.category}
                    </span>

                  </div>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-6 flex flex-col">

                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-5">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-slate-400 border border-white/5"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* ================= BUTTONS ================= */}
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">

                    {/* View Details */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
                    >
                      View Details
                    </button>

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
                    >
                      <FiGithub />
                    </a>

                  </div>

                </div>

              </article>

            </Reveal>
          ))}

        </div>

        {/* ================= EMPTY STATE ================= */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found.
          </div>
        )}

      </div>

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-white/10 rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition"
            >
              <FiX />
            </button>

            {/* Image */}
            <div className="aspect-video bg-slate-900 overflow-hidden">

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

            </div>

            {/* Details */}
            <div className="p-7">

              <span className="text-sm text-blue-400">
                {selectedProject.category}
              </span>

              <h3 className="text-3xl font-bold text-white mt-2">
                {selectedProject.title}
              </h3>

              <p className="mt-5 text-slate-400 leading-7">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">

                {selectedProject.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-sm border border-blue-500/10"
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>

              {/* GitHub Only */}
              <div className="flex flex-wrap gap-3 mt-8">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
                >
                  <FiGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;

