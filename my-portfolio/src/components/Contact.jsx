import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient Overlay - removed z-index */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-70" />

      {/* Content wrapper - removed z-index */}
      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">
              Let's Connect!
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-4">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-4">
              <FaEnvelope size={24} className="text-blue-400" />
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white text-lg transition-colors">
                your.email@example.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6 mt-6">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <FaLinkedin size={30} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110">
                <FaGithub size={30} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-cyan-500 transition-colors transform hover:scale-110">
                <FaTwitter size={30} />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6 text-center md:text-left">
              Send a Message
            </motion.h3>
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5" // Increased rows for better usability
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold py-3 rounded-full shadow-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
