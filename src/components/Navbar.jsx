// // src/components/Navbar.jsx
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = ["Home", "About", "Skills", "Portfolio", "Contact"];

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
//       <div className="max-w-5xl mx-auto px-6 flex justify-between items-center h-16">
//         {/* Logo / Name */}
//         <div className="font-bowlby text-xl font-semibold text-gray-900">
//           Emmanuel
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 font-medium">
//           {links.map((link) => (
//             <li key={link}>
//               <a
//                 href={`#${link.toLowerCase()}`}
//                 className="text-gray-700 text-sm hover:text-blue-500 transition-colors duration-200"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-6 text-gray-700">
//           <a href="#" target="_blank">
//             <FaGithub size={20} />
//           </a>
//           <a href="#" target="_blank">
//             <FaLinkedin size={20} />
//           </a>
//           <a href="#" target="_blank">
//             <FontAwesomeIcon
//               icon={faXTwitter}
//               style={{ fontSize: "17.5" }}
//               className="text-gray-700 scale-110"
//             />
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <div className="space-y-1">
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
//             {links.map((link) => (
//               <li key={link}>
//                 <a
//                   href={`#${link.toLowerCase()}`}
//                   className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//             <div className="flex space-x-6 mt-2">
//               <a href="#" target="_blank">
//                 <FaGithub size={20} />
//               </a>
//               <a href="#" target="_blank">
//                 <FaLinkedin size={20} />
//               </a>
//               <a href="#" target="_blank">
//                 <FontAwesomeIcon
//                   icon={faXTwitter}
//                   style={{ fontSize: "17.5" }}
//                   className="text-gray-700 scale-110"
//                 />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/Emmanuelchisom89" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/agbachukwu-chisom-513081288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { icon: FaTwitter, link: "http://www.twitter.com/ChisomEmmauel" },
  ];

  // Apply dark mode to <html> and save preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    setDarkMode(saved === "true");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.remove("no-transition");
  }, []);

  // Animation variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    },
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-950 shadow-md transition-colors">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="font-bowlby text-xl font-semibold text-gray-900 dark:text-white">
          Emmanuel
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons + Dark Mode Toggle (Desktop) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300"
        >
          {/* {[FaGithub, FaLinkedin, FaTwitter].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))} */}

          {socialLinks.map(({ icon: Icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            variants={item}
            className="p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1"
          >
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="md:hidden bg-white dark:bg-gray-950 shadow-lg transition-colors"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <div className="flex space-x-6 mt-2">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, idx) => (
                <Icon
                  key={idx}
                  size={20}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                />
              ))}
            </div>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
