// src/components/Projects.jsx
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import RippleDot from "./RippleDot.jsx";
import { useState } from "react";

const projects = [
  {
    title: "Aura by GIVX",
    description:
      "A luxury e-commerce platform for authentic unboxed niche and designer perfumes, featuring scalable architecture, server/client components, SEO-friendly routing, and dynamic metadata.",
    tech: ["Next.js", "TypeScript", "PostgresSQL"],
    live: "#",
    github: "#",
    image: "/abg.png",
  },
  {
    title: "Style Pulse",
    description:
      "A modern, responsive Fashion e-commerce web application using Next.js and TypeScript, focused on performance, scalability, and clean, maintainable UI architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "#",
    github: "#",
    image: "/stylepulse.png",
  },
  {
    title: "Simplified Chinese",
    description:
      "A Chinese learning platform where students meet with teachers to learn Mandarin Chinese. Includes swift authentication flow, and student dashboard for managing learning across different levels.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "#",
    github: "#",
    image: "/smpch.png",
  },
  {
    title: "Coin Track",
    description:
      "A real-time cryptocurrency tracking application. It enables users to monitors crypto prices, compare coins, manage a watchlist, and access interactive charts for detailed analysis.",
    tech: ["React (JS)", "Material UI", "REST API"],
    live: "https://emmanuelchisom89.github.io/CoinTrack/#/",
    github: "https://github.com/Emmanuelchisom89/CoinTrack",
    image: "/cointrack.png",
  },
  {
    title: "TickPro",
    description:
      "A luxury wristwatch e-commerce platform featuring product browsing, cart management, and seamless checkout, with dynamic navigation and state-driven user interactions.",
    tech: ["React", "Firebase", "Paystack"],
    live: "https://emmanuelchisom89.github.io/Tickpro/",
    github: "https://www.github.com/Emmanuelchisom89/Tickpro",
    image: "/Tickpro.png",
  },
  {
    title: "Pocket Plan",
    description:
      "Pocket Plan is personal finance tracking app for managing expenses, monitoring income, and analyzing spending habits through a clean and intuitive user experience.",
    tech: ["React", "Firebase", "Ant Design Charts"],
    live: "https://emmanuelchisom89.github.io/PocketPlan-expense-tracker/",
    github: "https://github.com/Emmanuelchisom89/PocketPlan-expense-tracker",
    image: "/pocketplan.png",
  },
  {
    title: "Echo News",
    description:
      "A real-time news aggregation platform delivering headlines from multiple sources, featuring category filtering, live updates, and smooth navigation for fast reading experience app.",
    tech: ["React (JS)", "SASS", "REST APIs"],
    live: "https://emmanuelchisom89.github.io/echo_news_app/",
    github: "https://www.github.com/Emmanuelchisom89/echo_news_app",
    image: "/newsapp2.png",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-3 font-body text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <RippleDot size={6.5} />
            Projects
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 text-gray-700 dark:text-white">
            Things I’ve built
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="px-6 py-2 pb-6 text-start">
                <h3 className="font-heading text-md font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="font-body text-gray-700 dark:text-gray-300 text-[13px] mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < projects.length ? (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisibleCount(projects.length)}
              className="px-8 py-3 rounded-full border border-gray-900 dark:border-gray-300 text-gray-900 dark:text-white font-body text-sm hover:bg-gray-900 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 transition duration-300 ease-out"
            >
              Load more projects
            </button>
          </div>
        ) : (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisibleCount(3)}
              className="px-8 py-3 rounded-full border border-gray-900 dark:border-gray-300 text-gray-900 dark:text-white font-body text-sm hover:bg-gray-900 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 transition"
            >
              Show less projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
