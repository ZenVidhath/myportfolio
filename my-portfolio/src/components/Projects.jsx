import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Import your actual project images here
// Make sure these paths are correct and the images exist in your assets folder
// For now, using placeholders as no specific images were provided for these new projects.
// If you have specific images, replace these placeholder paths.
import projectImage1 from '../assets/iot.jpg'; // Placeholder, replace with actual IoT image if available
import projectImage2 from '../assets/asha.jpg'; // Placeholder, replace with actual AshaAid image if available
import projectImage3 from '../assets/itin.jpeg';
import projectImage4 from '../assets/rl.jpeg';
import projectImage5 from '../assets/pf.jpg'  // Placeholder, replace with actual TripTogether image if available

// Placeholder images for additionalImages (carousel)

import placeholderImage2 from '../assets/iotblock2.png';
import placeholderImage3 from '../assets/iotblock3.png';
import placeholderImage4 from '../assets/asha1.png';
import placeholderImage5 from '../assets/asha2.png';
import placeholderImage6 from '../assets/asha3.png';
import placeholderImage7 from '../assets/asha4.png';
import placeholderImage8 from '../assets/itin1.png';
import placeholderImage9 from '../assets/itin2.png';
import placeholderImage10 from '../assets/itin3.png';
import placeholderImage11 from '../assets/rl1.png';
import placeholderImage12 from '../assets/rl2.png';
import placeholderImage13 from '../assets/rl3.png';




// Define your project data with categories and tech stacks
const projectsData = [
  {
    title: 'SecureSense: AI-Powered Framework for IoT-Blockchain Integration',
    description: 'An AI-powered framework for secure IoT data handling, integrating blockchain for validated insights.',
    longDescription: 'Developed an intelligent data pipeline for secure IoT data handling, reducing data redundancy by over 50%. Implemented a Random Forest model for anomaly detection and an LSTM model for trend detection to filter critical sensor data from 100+ sensor data points per minute. Engineered a layered storage system: raw data (CSV), off-chain (trend), and blockchain (validated insights) to optimize storage efficiency. Utilized Python, TensorFlow, Scikit-learn, and Blockchain for implementation, including a real-time simulator using data from the Intel Berkeley Lab.',
    image: projectImage1, // Main image for the card
    additionalImages: [ // ⭐ This array will power the carousel ⭐

      placeholderImage2,
      placeholderImage3,
    ],
    demoLink: 'https://github.com/Karthik0018/iot-ai-blockchain-major-project', // Replace with actual demo link
    githubLink: 'https://github.com/Karthik0018/iot-ai-blockchain-major-project', // Replace with actual GitHub link
    category: 'backend', // Categorized as backend/AI due to data processing focus
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Blockchain', 'IoT'],
    features: [
      'Intelligent Data Pipeline',
      'Anomaly Detection (Random Forest)',
      'Trend Detection (LSTM)',
      'Layered Storage System (CSV, Off-chain, Blockchain)',
      'Real-time Simulator Integration',
      '50% Data Redundancy Reduction',
    ],
  },
  {
    title: 'AshaAid: Village Health Tracker',
    description: 'A full-stack MERN application to digitize rural health records and improve data management.',
    longDescription: 'Built a full-stack MERN application to digitize rural health records for a network of 50+ ASHA workers, doctors, and administrators. Integrated features like geo-tagging, automated follow-up alerts, and PDF export functionality, reducing manual data entry time by an estimated 30%. Utilized React.js, Node.js, Express.js, and MongoDB to create a scalable and user-friendly platform, improving health data management for up to 10,000+ villagers.',
    image: projectImage2,
    additionalImages: [
      placeholderImage4,
      placeholderImage5,
      placeholderImage6,
      placeholderImage7,
    ],
    demoLink: 'https://village-health-tracker-ew5n.vercel.app/', // Replace with actual demo link
    githubLink: 'https://github.com/swathipai28/Village-Health-Tracker', // Replace with actual GitHub link
    category: 'fullstack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
    features: [
      'Digitized Rural Health Records',
      'Geo-tagging',
      'Automated Follow-up Alerts',
      'PDF Export Functionality',
      'Scalable & User-Friendly Platform',
      '30% Reduction in Manual Data Entry Time',
    ],
  },
  {
    title: 'TripTogether: Group Travel Itinerary Collaborator',
    description: 'A full-stack web application for real-time collaborative group travel itinerary management.',
    longDescription: 'Created a full-stack web application enabling real-time collaboration for up to 15 group members per trip. Developed core features including shared itinerary management, a member invitation system, and a dynamic real-time chat, increasing planning efficiency by 40%. Engineered the platform using React.js, Node.js, Express.js, and MySQL to facilitate streamlined communication and coordination.',
    image: projectImage3,
    additionalImages: [
      placeholderImage8,
      placeholderImage9,
      placeholderImage10,
      
    ],
    demoLink: 'https://github.com/ZenVidhath/ItineraryPlanner', // Replace with actual demo link
    githubLink: 'https://github.com/ZenVidhath/ItineraryPlanner', // Replace with actual GitHub link
    category: 'fullstack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Real-time Collaboration'],
    features: [
      'Real-time Collaboration (up to 15 members)',
      'Shared Itinerary Management',
      'Member Invitation System',
      'Dynamic Real-time Chat',
      '40% Increase in Planning Efficiency',
    ],
  },
 
  {
    title: 'SecureRate: API Rate Limiter & Monitoring System',
    description: 'A full-stack API rate limiting solution with real-time monitoring and authentication layers.',
    longDescription: 'Developed a production-grade API rate limiting system implementing token bucket (authenticated users) and fixed window (anonymous) algorithms. Integrated Firebase for authentication, Redis for real-time rate tracking, and Firestore for request logging. Reduced API abuse by 90% while maintaining 99.9% availability for legitimate traffic. Built with Node.js, Express, Redis, and React with comprehensive analytics dashboard.',
    image: projectImage4, // Replace with actual image variable
    additionalImages: [
        placeholderImage11,
        placeholderImage12,
        placeholderImage13
    ],
    demoLink: 'https://ratelimterapp-8q3u.vercel.app/', // Replace with Vercel deployment link
    githubLink: 'https://github.com/ZenVidhath/ratelimterapp', // Replace with GitHub repo link
    category: 'fullstack',
    techStack: [
      'Node.js', 
      'Express.js', 
      'Redis', 
      'Firebase Auth', 
      'Firestore',
      'React',
      'Framer Motion'
    ],
    features: [
      'Dual-rate limiting: Token Bucket (10 req/min) for auth users',
      'Fixed Window (5 req/min) for anonymous access',
      'Real-time rate limit headers (X-RateLimit-*)',
      'Firestore request logging middleware',
      'JWT authentication with Firebase',
      'Animated React dashboard with usage analytics',
      '90% reduction in API abuse incidents'
    ],
},
{
    title: 'Interactive Portfolio Website',
    description: 'A dynamic, responsive personal portfolio website showcasing projects, skills, and certifications with smooth animations.',
    longDescription: 'Designed and developed a modern, interactive personal portfolio website from scratch. Leveraged React.js for component-based UI, Tailwind CSS for rapid and responsive styling, and Framer Motion for engaging, fluid animations. The site features dedicated sections for projects (with detailed modals and image carousels), a categorized skills display, a unique certifications showcase, and a contact form. Focused on performance optimization and a seamless user experience across all devices.',
    image: projectImage5, // Replace with an actual image variable for your portfolio's main image
    additionalImages: [
        // placeholderImage5, // Replace with actual screenshot 1
        // placeholderImage6, // Replace with actual screenshot 2
        // placeholderImage7  // Replace with actual screenshot 3
    ],
    demoLink: 'https://myportfolio-pied-xi.vercel.app/', // Replace with your live portfolio URL
    githubLink: 'https://github.com/ZenVidhath/myportfolio', // Replace with your portfolio's GitHub repo
    category: 'frontend', // Or 'fullstack' if it includes a custom backend for contact form etc.
    techStack: [
        'React.js',
        'Tailwind CSS',
        'Framer Motion',
        'JavaScript (ES6+)'
        
    ],
    features: [
        'Responsive design for desktop, tablet, and mobile',
        'Smooth page transitions and element animations',
        'Dynamic project modals with image carousels',
        'Categorized skills section with interactive elements',
        'Dedicated certifications and contact sections',
        'Clean, modern UI/UX'
    ],
},
];

// Variants for the staggered grid animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each project card's animation
    },
  },
};

const Projects = () => {
  const [filter, setFilter] = useState('all'); // State for active filter

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient Overlay - now covers the entire width */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-70 z-0" />

      {/* Content wrapper - added max-w to utilize more space and keep content centered */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
              filter === 'frontend'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
              filter === 'backend'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
              filter === 'fullstack'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Fullstack
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              techStack={project.techStack}
              longDescription={project.longDescription}
              additionalImages={project.additionalImages}
              features={project.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
