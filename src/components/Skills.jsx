// // src/components/Skills.jsx
// import { motion } from "framer-motion";
// import { BadgeCheck } from "lucide-react";
// import RippleDot from "./RippleDot.jsx";

// const skillsData = [
//   {
//     title: "Frontend Development",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "TypeScript",
//       "React JS",
//       "Next JS",
//       "Tailwind CSS",
//     ],
//   },
//   {
//     title: "Backend Development",
//     skills: ["Node.js", "Express", "Python", "Django"],
//   },
//   {
//     title: "Database & Tools",
//     skills: ["MongoDB", "MySQL", "Git", "REST APIs"],
//   },
//   {
//     title: "System & DevOps",
//     skills: ["Linux", "Bash", "Networking"],
//   },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <p className="flex items-center justify-center gap-3 font-body text-sm uppercase tracking-widest text-gray-500">
//             <RippleDot size={6.5} />
//             Skills
//           </p>
//           <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 text-gray-700">
//             Tools & Technologies I Use
//           </h2>
//         </motion.div>

//         {/* Skill Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {skillsData.map((group, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition"
//               whileHover={{ y: -4 }}
//             >
//               <h3 className="font-semibold text-lg text-gray-900 mb-4 text-start">
//                 {group.title}
//               </h3>

//               <ul className="space-y-2">
//                 {group.skills.map((skill, idx) => (
//                   <li className="group flex items-center gap-2 font-body text-gray-600 text-sm">
//                     <BadgeCheck
//                       size={15}
//                       className="text-[#646CFF] group-hover:text-gray-800 transition"
//                     />
//                     {skill}
//                   </li>

//                   //   <li
//                   //     key={idx}
//                   //     className="font-body text-gray-600 text-sm text-start"
//                   //   >
//                   //     • {skill}
//                   //   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// src/components/Skills.jsx
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import RippleDot from "./RippleDot.jsx";

const skillsData = [
  {
    img: "/front.png",
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Next JS",
      "Tailwind CSS",
    ],
  },
  {
    img: "/back.png",
    title: "Backend Development",
    skills: ["Node.js", "Express", "Python", "Django"],
  },
  {
    img: "/backend.png",
    title: "Database & Tools",
    skills: ["MySQL", "PostgreSQL", "Git", "REST APIs"],
  },
  {
    img: "/settings.png",
    title: "System & DevOps",
    skills: ["Linux", "Bash", "Networking"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-3 font-body text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <RippleDot size={6.5} />
            Skills
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 text-gray-700 dark:text-white">
            Tools & Technologies I Use
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition"
              whileHover={{ y: -4 }}
            >
              <div className="w-12">
                <img
                  src={group.img}
                  alt={group.title}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-semibold text-lg lg:text-xl text-gray-900 dark:text-white mb-4 mt-2 text-start">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="group flex items-center gap-2 font-body text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <BadgeCheck
                      size={15}
                      className="text-[#646CFF] group-hover:text-gray-800 dark:group-hover:text-gray-100 transition"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
