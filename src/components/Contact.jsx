import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

function Contact() {
  const formRef = useRef();

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const result = await emailjs.sendForm(
        "service_r4tbehb",
        "templste_f05ytrq",
        formRef.current,
        {
          publicKey: "R6l2QOgAnQ8rER2ZT",
        }
      );

      console.log("EmailJS Success:", result);

      setStatus("success");

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-5">
            Get In Touch
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-5 text-slate-400 text-lg leading-8">
            Have a project, opportunity, or idea?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

              <h3 className="text-2xl font-bold text-white">
                Let's connect
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                I'm open to opportunities, freelance projects,
                internships, and collaborations in web development,
                data analytics, and machine learning.
              </p>

              {/* Email */}
              <a
                href="mailto:vareaniket330@gmail.com"
                className="group flex items-center gap-4 mt-10"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <FiMail size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="text-white font-medium group-hover:text-blue-400 transition">
                    vareaniket330@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919322819348"
                className="group flex items-center gap-4 mt-6"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <FiPhone size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="text-white font-medium">
                    +91 7020699657
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="text-white font-medium">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-white/10">

                <p className="text-sm text-slate-500 mb-4">
                  Connect with me
                </p>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/anikketvare212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
                  >
                    <FiGithub size={19} />
                  </a>

                  <a
                    href="https://linkedin.com/in/aniket-vare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
                  >
                    <FiLinkedin size={19} />
                  </a>

                  <a
                    href="mailto:vareaniket330@gmail.com"
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
                  >
                    <FiMail size={19} />
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-blue-500/60 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-blue-500/60 transition"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-blue-500/60 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-600 outline-none resize-none focus:border-blue-500/60 transition"
                  />
                </div>

                {/* Success */}
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                    <FiCheckCircle size={20} />

                    <span>
                      Message sent successfully!
                    </span>
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <FiAlertCircle size={20} />

                    <span>
                      Failed to send message. Please try again.
                    </span>
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-lg shadow-blue-600/20 transition"
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FiSend />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;