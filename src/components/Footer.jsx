// import { motion } from "framer-motion";
// import { Github, Linkedin, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="border-t border-gray-200 py-6 bg-white">
//       <div className="max-w-5xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row items-center justify-between gap-8"
//         >
//           {/* Left */}
//           <div className="text-center sm:text-left">
//             <p className="font-semibold text-lg text-gray-900">
//               Emmanuel Chisom
//             </p>
//             <p className="font-body text-sm text-gray-500 mt-1">
//               Building thoughtful digital experiences.
//             </p>
//           </div>

//           {/* Socials */}
//           <div className="flex items-center gap-6">
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-gray-900 transition"
//             >
//               <Github size={18} />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-gray-900 transition"
//             >
//               <Linkedin size={18} />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-gray-900 transition"
//             >
//               <Twitter size={18} />
//             </a>
//           </div>
//         </motion.div>

//         {/* Bottom */}
//         <div className="mt-10 text-center">
//           <p className="font-body text-xs text-gray-400">
//             © {new Date().getFullYear()} Emmanuel Chisom. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };


// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";


const socialLinks = [
  { icon: Github, url: "#" },
  { icon: Linkedin, url: "#" },
  { icon: Twitter, url: "#" },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-lg text-gray-900 dark:text-white">
              Emmanuel Chisom
            </p>
            <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1">
              Building thoughtful digital experiences.
            </p>
          </div>

          {/* Socials */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-10 text-center">
          <p className="font-body text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Emmanuel Chisom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
