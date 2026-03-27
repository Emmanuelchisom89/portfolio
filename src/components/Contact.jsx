// src/components/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import RippleDot from "./RippleDot.jsx";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-start"
        >
          <p className="flex items-center justify-start gap-3 font-body text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <RippleDot size={6.5} />
            Contact Me
          </p>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 text-gray-900 dark:text-white">
            Let’s build something meaningful
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Whether you have a project in mind, a question, or just want to
            connect, feel free to reach out. I’m always open to new ideas and
            collaborations.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-sm"
          >
            <div className="text-start">
              <p className="font-body text-sm text-gray-500 dark:text-gray-400 mb-2">
                Prefer email?
              </p>
              <a
                href="mailto:agbachukwuchisom89@email.com"
                className="inline-flex items-center gap-3 text-lg font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
              >
                <Mail size={18} />
                agbachukwuchisom89@email.com
              </a>
            </div>

            <p className="font-body text-gray-600 dark:text-gray-300 text-start lg:w-4/5">
              I usually respond within 24 hours. If you’re reaching out about a
              project, feel free to include timelines and goals.
            </p>
          </motion.div>

          {/* Right – Minimal Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-3 text-sm bg-transparent dark:text-gray-200 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-3 text-sm bg-transparent dark:text-gray-200 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 transition"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full border-b border-gray-300 dark:border-gray-700 py-3 text-sm bg-transparent dark:text-gray-200 focus:outline-none focus:border-gray-900 dark:focus:border-gray-300 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 text-sm font-body text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              <Send size={16} />
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
