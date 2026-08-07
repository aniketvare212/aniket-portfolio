import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let's{" "}
            <span className="text-blue-400">
              Work Together
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            Have a project, opportunity or idea? Feel free to
            reach out. I'd be happy to connect.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-white/10">

              <h3 className="text-2xl font-bold text-white">
                Let's Connect
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                I'm open to opportunities, freelance projects,
                collaborations and interesting technical discussions.
              </p>

              {/* Email */}
              <div className="mt-8 flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:vareaniket330@gmail.com"
                    className="text-white hover:text-blue-400 transition"
                  >
                    vareaniket330@gmail.com
                  </a>
                </div>

              </div>

              {/* Location */}
              <div className="mt-6 flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="text-white">
                    Maharashtra, India
                  </p>
                </div>

              </div>

              {/* Availability */}
              <div className="mt-6 flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  ✓
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Availability
                  </p>

                  <p className="text-white">
                    Open to opportunities
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}
            <div className="mt-6 p-8 rounded-2xl bg-slate-900 border border-white/10">

              <h3 className="text-lg font-semibold text-white mb-5">
                Find Me Online
              </h3>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://github.com/aniketvare212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/aniket-vare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-400 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-white/10">

            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                Your message has been submitted successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-slate-400 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-600 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-slate-400 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-600 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-slate-400 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-600 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-slate-400 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-600 outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;