// src/components/Hero.jsx

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";
import { FiDownload, FiBriefcase } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 lg:px-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-semibold text-base uppercase tracking-widest text-gray-500 dark:text-gray-400"
          >
            Hey there{" "}
            <motion.span
              style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 0.6,
                delay: 1,
                repeat: 2,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading mt-3 text-3xl lg:text-4xl text-gray-800 dark:text-white hero-header"
          >
            I’m Emmanuel Chisom
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="font-heading text-xl sm:text-2xl mt-4 text-gray-700 dark:text-gray-300"
          >
            Software Engineer & Frontend Specialist
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-gray-600 dark:text-gray-400 mt-6 max-w-xl mx-auto md:mx-0"
          >
            I design and build modern, responsive web applications with clean
            user experiences and scalable architecture.
          </motion.p>

          {/* Image / Visual */}
          <motion.div
            variants={fadeInUp}
            className="md:hidden relative flex justify-center mt-10"
          >
            {/* Accent Shape */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-72 h-72 bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40"
            ></motion.div>

            <motion.img
              src="/chisom.jpg"
              alt="Profile"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-full bg-gray-700 text-white dark:bg-white dark:text-black font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition"
            >
              <FiBriefcase />
              View My Work
            </motion.a>{" "}
            <motion.a
              href="/Agbachukwu Chisom.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-500 dark:hover:border-gray-500 transition shadow-sm"
            >
              <FiDownload />
              Download Resume
            </motion.a>{" "}
          </motion.div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden relative md:flex justify-center md:justify-end"
        >
          {/* Accent Shape */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-72 h-72 bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40"
          ></motion.div>

          <motion.img
            src="/chisom.jpg"
            alt="Profile"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
