import { motion } from 'framer-motion';
import profilePic from '../assets/imageprof.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Added social icons

// Animation variants for a staggered, springy entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

// New ParticleBackground component (kept from previous version for context, though not directly modified by this request)
const ParticleBackground = () => {
  const particles = Array.from({ length: 40 }, (_, i) => i); // Generate 40 particles

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-10 blur-sm" // Subtle blur for a softer look
          initial={{
            x: Math.random() * 100 + '%', // Random X position
            y: Math.random() * 100 + '%', // Random Y position
            scale: Math.random() * 1.5 + 0.5, // Random size
            opacity: Math.random() * 0.2 + 0.05, // Very subtle opacity
          }}
          animate={{
            x: [null, Math.random() * 100 + '%', Math.random() * 100 + '%'], // Animate X
            y: [null, Math.random() * 100 + '%', Math.random() * 100 + '%'], // Animate Y
            scale: [null, Math.random() * 1.5 + 0.5, Math.random() * 1.5 + 0.5], // Animate scale
            opacity: [null, Math.random() * 0.2 + 0.05, Math.random() * 0.2 + 0.05], // Animate opacity
          }}
          transition={{
            duration: Math.random() * 30 + 20, // Long, random duration for slow movement
            repeat: Infinity, // Loop infinitely
            ease: "easeInOut", // Smooth easing
            delay: Math.random() * 5, // Stagger initial start times
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col-reverse md:flex-row items-center justify-center h-screen px-4 text-center md:text-left md:space-x-20 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80 z-0" />
      
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Content */}
      <motion.div
        className="z-10" // Higher z-index to be on top
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
        >
          Hi, I'm P Vidhath.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
        >
          A Creative Developer with a passion for building beautiful and functional web applications.
        </motion.p>
        
        {/* Action Buttons: View My Work & Download CV */}
        <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:from-blue-700 hover:to-pink-700 transition duration-300 transform hover:scale-105"
          >
            View My Work 🚀
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="/Resume_1 (3).pdf" // ⭐ Replace with the actual path to your CV PDF file in the public folder ⭐
            download="P Vidhath-CV.pdf"
            className="inline-block border border-gray-600 text-gray-300 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-700 hover:border-gray-500 transition duration-300 transform hover:scale-105"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-6">
          <a href="https://linkedin.com/in/p-vidhath" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
            <FaLinkedin size={35} />
          </a>
          <a href="https://github.com/ZenVidhath" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110">
            <FaGithub size={35} />
          </a>
          <a href="pejavarvidhath@gmail.com" aria-label="Email" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
            <FaEnvelope size={35} />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Profile Image with Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
        className="z-10 mt-12 md:mt-0"
      >
        <img
          src={profilePic}
          alt="Your Name"
          className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-gray-700"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
