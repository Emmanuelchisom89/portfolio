// // src/components/Experience.jsx
// import { motion } from "framer-motion";
// import RippleDot from "./RippleDot.jsx";

// const experiences = [
//   {
//     role: "Frontend Developer",
//     company: "Tech Studio",
//     period: "2023 – Present",
//     description:
//       "Building responsive web interfaces with React and Tailwind, focusing on performance, accessibility, and clean UI patterns.",
//   },
//   {
//     role: "Web Developer",
//     company: "Creative Agency",
//     period: "2021 – 2023",
//     description:
//       "Worked on multiple client projects, translating designs into functional websites and improving user experience.",
//   },
//   {
//     role: "Junior Developer (Intern)",
//     company: "Camelcase Technologies, Lagos, Nigeria",
//     period: "June 2023 – Nov 2023",
//     description:
//       "Assisted in developing MVPs, fixing bugs, and collaborating with designers and senior developers.",
//   },
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="mb-14 text-center">
//           <p className="flex items-center justify-center gap-3 font-body text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
//             <RippleDot size={6.5} />
//             Experience
//           </p>
//           <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 text-gray-700 dark:text-white">
//             Where I’ve worked
//           </h2>
//         </div>

//         {/* Timeline */}
//         <div className="relative border-l border-gray-200 dark:border-gray-800 pl-6 space-y-12">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="relative"
//             >
//               {/* Dot */}
//               <span className="absolute -left-2.5 top-2 w-4 h-4 bg-gray-900 dark:bg-gray-200 rounded-full" />

//               {/* Card */}
//               <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition">
//                 <h3 className="font-heading text-lg text-gray-900 dark:text-white">
//                   {exp.role}
//                 </h3>

//                 <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1">
//                   {exp.company} • {exp.period}
//                 </p>

//                 <p className="font-body text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
//                   {exp.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// src/components/Experience.jsx
import { motion } from "framer-motion";
import RippleDot from "./RippleDot.jsx";

const experiences = [
  {
    role: "Fullstack developer (Freelance)",
    company: "AuraByGivx - Luxury Perfume E-commerce Platform ",
    period: "Nov 2025 – Present",
    points: [
      "Built a full-stack luxury e-commerce platform using Next.js 15, TypeScript, and modern server/client architecture, delivering a scalable and SEO-optimized product experience.",
      "Engineered a secure checkout system with session-based validation, cart integrity hashing, and transactional order processing to ensure data consistency and reliability.",
      "Designed dynamic product and user systems, including variant-based inventory, authentication with NextAuth, and a personalized dashboard with order tracking and custom payment workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "InfiniMail — Email Automation Platform",
    period: "April 2025 – Oct 2025",
    points: [
      "Built and maintained a responsive frontend for an email automation platform using Next.js and TypeScript, translating product requirements and design mockups into production-ready interfaces.",
      "Integrated REST APIs for authentication, campaign workflows, email generation, and real-time updates in collaboration with a backend/AI engineer.",
      "Implemented secure client-side authentication (JWT), protected routes, and reusable UI components, improving dashboard usability for campaign management and email tracking.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Youverify Inc, Lagos, Nigeria",
    period: "Feb 2024 - Aug 2024",
    points: [
      "Developed and optimized user-facing features for KYC workflows, including dynamic form handling, validation, and structured data input interfaces.",
      "Built and maintained reusable frontend components for a traffic management system, implementing authentication flows, search functionality, and scalable data display.",
      "Collaborated with cross-functional teams to integrate APIs, resolve bugs, and enhance overall application performance and user experience.",
    ],
  },
  {
    role: "Junior Developer (Intern)",
    company: "Camelcase Technologies, Lagos, Nigeria",
    period: "June 2023 – Nov 2023",
    points: [
      "Assisted in building MVP features and fixing bugs in production applications.",
      "Worked closely with senior developers and designers in an agile environment.",
      "Contributed to codebase improvements and testing workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="flex items-center justify-center gap-3 font-body text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <RippleDot size={6.5} />
            Experience
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 text-gray-700 dark:text-white">
            Where I’ve worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-2.5 top-2 w-4 h-4 bg-gray-900 dark:bg-gray-200 rounded-full" />

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="font-heading text-lg text-gray-900 dark:text-white text-left">
                  {exp.role}
                </h3>

                <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1 text-left">
                  {exp.company} • {exp.period}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-left">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
