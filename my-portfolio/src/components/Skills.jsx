import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3, FaJs, FaNode, FaGitAlt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiFirebase, SiPostman, SiJupyter } from 'react-icons/si';
import { IoLogoGithub } from "react-icons/io"; // Using IoLogoGithub for GitHub

// IMPORTANT: If you encounter "Could not resolve" errors for react-icons,
// make sure you have installed it by running: npm install react-icons

// Define skill data with categories
const skillsData = [
  {
    category: 'Programming Languages',
    icon: <FaJs size={24} />, // Icon for the category
    skills: [
      { name: 'C', icon: <span className="text-blue-500">C</span> }, // Simple text icon for C
      { name: 'C++', icon: <span className="text-blue-600">C++</span> }, // Simple text icon for C++
      { name: 'Python', icon: <FaPython size={30} /> },
      { name: 'JavaScript', icon: <FaJs size={30} /> },
      { name: 'HTML', icon: <FaHtml5 size={30} /> },
      { name: 'CSS', icon: <FaCss3 size={30} /> },
    ],
  },
  {
    category: 'Frameworks and Libraries',
    icon: <FaReact size={24} />,
    skills: [
      { name: 'React.js', icon: <FaReact size={30} /> },
      { name: 'Node.js', icon: <FaNode size={30} /> },
      { name: 'Express.js', icon: <SiExpress size={30} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} /> },
      { name: 'Framer Motion', icon: <motion.span className="text-purple-400">✨</motion.span> }, // Custom icon for Framer Motion
    ],
  },
  {
    category: 'Databases',
    icon: <FaDatabase size={24} />,
    skills: [
      { name: 'MySQL', icon: <SiMysql size={30} /> },
      { name: 'MongoDB', icon: <SiMongodb size={30} /> },
      { name: 'Firebase', icon: <SiFirebase size={30} /> },
    ],
  },
  {
    category: 'Tools and Technologies',
    icon: <FaGitAlt size={24} />,
    skills: [
      { name: 'Git', icon: <FaGitAlt size={30} /> },
      { name: 'GitHub', icon: <IoLogoGithub size={30} /> },
      { name: 'Postman', icon: <SiPostman size={30} /> },
      { name: 'VS Code', icon: <span className="text-blue-400">VS</span> }, // Simple text icon
      { name: 'Jupyter', icon: <SiJupyter size={30} /> },
    ],
  },
];

// Variants for category card animation
const categoryCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
      when: 'beforeChildren', // Animate parent before children
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

// Variants for individual skill pill animation
const skillPillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient Overlay - now covers the entire width */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-70 z-0" />

      {/* Content wrapper - added max-w to utilize more space and keep content centered */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          My Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 flex flex-col items-center text-center"
              variants={categoryCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-green-400 mb-6">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-white">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-2 bg-gray-700 text-gray-200 px-4 py-2 rounded-full shadow-md text-sm font-medium whitespace-nowrap"
                    variants={skillPillVariants}
                    whileHover={{ scale: 1.1, backgroundColor: '#4A5568', color: '#81E6D9' }} // Darker gray, teal text
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  >
                    {skill.icon && <span className="text-blue-300">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
