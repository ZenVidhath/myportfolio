import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate, FaReact } from 'react-icons/fa';

// Define your certification data
const certificationsData = [
  {
    name: 'Finalist, Skill Sangham 2025 Hackathon',
    issuer: 'Technical Career Education',
    date: 'Top 14 teams out of large applicant pool',
    icon: <FaAward size={30} className="text-yellow-400" />,
  },
  {
    name: 'Database and SQL Certification',
    issuer: 'Infosys Springboard',
    date: 'Completed 30+ hours course',
    icon: <FaCertificate size={30} className="text-orange-400" />,
  },
  {
    name: 'JobReady Employability Skills',
    issuer: 'Wadhwani Foundation',
    date: 'Certified in workplace skills',
    icon: <FaGraduationCap size={30} className="text-blue-400" />,
  },
];

// Variants for staggered card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient Overlay - removed z-index from here */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-70" />

      {/* Content wrapper - removed z-index from here */}
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Certifications & Awards
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700 flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)', borderColor: '#A78BFA' }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              <div className="mb-4">{cert.icon || <FaCertificate size={30} className="text-gray-400" />}</div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;