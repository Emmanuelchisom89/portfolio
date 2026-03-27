// src/components/About.jsx
import { motion } from "framer-motion";
import { staggerContainer, slideFadeIn, cardPop } from "../lib/motion";
import RippleDot from "./RippleDot";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center"
      >
        {/* Image */}
        <motion.div variants={slideFadeIn("left", 0.2)}>
          <div className="flex justify-center md:justify-start">
            <motion.img
              src="/chisom1.jpg"
              alt="About me"
              className="w-82 md:w-88 h-115 md:h-130 object-cover rounded-2xl shadow-md"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>

          {/* Mobile Stats */}
          <motion.div
            variants={staggerContainer}
            className="md:hidden mt-10 grid grid-cols-3 gap-3 md:gap-6"
          >
            <motion.div variants={cardPop}>
              <StatCard
                title="Experience"
                value="3+"
                subtitle="Years Working"
              />
            </motion.div>
            <motion.div variants={cardPop}>
              <StatCard title="Projects" value="15+" subtitle="Completed" />
            </motion.div>
            <motion.div variants={cardPop}>
              <StatCard title="Support" value="24/7" subtitle="Online" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div variants={slideFadeIn("right", 0.3)}>
          <motion.p
            variants={slideFadeIn("up", 0.35)}
            className="flex items-center justify-start gap-3 font-body text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400"
          >
            <RippleDot size={6.5} />
            About Me
          </motion.p>

          <motion.h2
            variants={slideFadeIn("up", 0.45)}
            className="text-start font-heading text-3xl sm:text-4xl mt-3 text-gray-900 dark:text-white"
          >
            Building digital products with purpose
          </motion.h2>

          <motion.p
            variants={slideFadeIn("up", 0.55)}
            className="text-start font-body text-gray-600 dark:text-gray-400 mt-6 max-w-xl"
          >
            {/* I am a passionate software engineer with experience building modern,
            scalable web applications. I focus on creating clean user
            experiences, writing maintainable code, and solving real-world
            problems with technology. */}
            I am a passionate Frontend Developer specializing in modern web
            applications using React and Next.js, with a strong focus on
            performance, scalability, and user experience. Proven ability to
            develop real-world applications including e-commerce platforms,
            dashboards, and authentication systems, with measurable improvements
            in performance, responsiveness, and overall user experience. I am
            also Familiar with full-stack development using Prisma and
            PostgreSQL. Passionate about building fast, reliable web
            applications that deliver real value to users and businesses.
          </motion.p>

          {/* Desktop Stats */}
          <motion.div
            variants={staggerContainer}
            className="hidden mt-10 md:grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={cardPop}>
              <StatCard
                title="Experience"
                value="3+"
                subtitle="Years Working"
              />
            </motion.div>
            <motion.div variants={cardPop}>
              <StatCard title="Projects" value="15+" subtitle="Completed" />
            </motion.div>
            <motion.div variants={cardPop}>
              <StatCard title="Support" value="24/7" subtitle="Online" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const StatCard = ({ title, value, subtitle }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 220 }}
    className="py-5 px-3 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 text-center shadow-md hover:shadow-lg transition bg-white dark:bg-gray-900"
  >
    <h3 className="font-heading text-xl md:text-2xl text-gray-900 dark:text-white">
      {value}
    </h3>
    <p className="font-body font-medium text-gray-700 dark:text-gray-300 mt-1">
      {title}
    </p>
    <p className="font-body text-sm text-gray-500 dark:text-gray-400">
      {subtitle}
    </p>
  </motion.div>
);

export default About;
