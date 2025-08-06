import { motion } from 'framer-motion';

// Animation variants for staggered text entrance
const textVariants = {
  hidden: { opacity: 0, y: 30 },
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

const About = () => {
  return (
    // Section remains full width
    <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient Overlay - covers the entire width */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-70 z-0" />

      {/* Content wrapper - maintains max-width for readability, centered */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          About Me
        </motion.h2>

        {/* Updated content for the About Me section */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          I am a dedicated front-end developer and a natural problem-solver. I have a deep passion for building modern, interactive, and visually stunning web applications that deliver exceptional user experiences.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }} // Stagger this paragraph
        >
          My portfolio is a testament to my commitment to solving real-world problems through creative and effective web development. I thrive on turning complex challenges into elegant solutions, always eager to learn new technologies and refine my craft.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }} // Stagger this paragraph
        >
          Beyond the screen, I enjoy a creative and analytical mix of hobbies, including singing, drawing, and solving Rubik's cubes and Sudoku. Let's connect and create something amazing together!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
