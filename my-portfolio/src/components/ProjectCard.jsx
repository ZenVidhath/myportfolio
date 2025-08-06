import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ title, description, image, demoLink, githubLink, techStack, longDescription, additionalImages, features }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for carousel image index

  // Default placeholder image if no image is provided
  const defaultImage = "https://placehold.co/600x400/2D3748/A0AEC0?text=Project+Image";

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  // Carousel navigation functions
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % (additionalImages?.length || 1)
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + (additionalImages?.length || 1)) % (additionalImages?.length || 1)
    );
  };

  return (
    <>
      {/* Project Card (remains the same as previous version) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 10 }}
        viewport={{ once: true, amount: 0.3 }}
        
        whileHover={{
          scale: 1.05,
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)',
          borderColor: '#81E6D9',
        }}
        className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 transform cursor-pointer flex flex-col"
      >
        <img
          src={image || defaultImage}
          alt={title}
          className="w-full h-56 object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400 text-base mb-4 leading-relaxed flex-grow">{description}</p>
          
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => { setIsModalOpen(true); setCurrentImageIndex(0); }} // Reset carousel on open
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-full text-sm shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Details
            </button>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-600 text-gray-300 font-semibold py-2.5 px-6 rounded-full text-sm shadow-md hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4" 
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-75 z-[999]"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <motion.div
              // Modal content itself. Now it's a flex container for its header and scrollable body.
              // Reverted padding to standard as the close button is no longer absolutely positioned at the top.
              className="relative bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] z-[1001] border border-gray-700 flex flex-col p-6 md:p-8" // IMPORTANT CHANGE HERE
              variants={modalVariants}
            >
              {/* This div will now handle the scrolling */}
              <div className="flex-grow overflow-y-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Image/Carousel */}
                  <div>
                    {additionalImages && additionalImages.length > 1 ? (
                      // Carousel for multiple images
                      <div className="relative w-full h-auto rounded-lg mb-4 overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex} // Key for AnimatePresence to detect change
                            src={additionalImages[currentImageIndex]}
                            alt={`${title} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                          />
                        </AnimatePresence>
                        
                        {/* Carousel Navigation Buttons */}
                        <button
                          onClick={goToPrevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                          aria-label="Previous image"
                        >
                          &#10094; {/* Left arrow */}
                        </button>
                        <button
                          onClick={goToNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                          aria-label="Next image"
                        >
                          &#10095; {/* Right arrow */}
                        </button>

                        {/* Image Index Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                          {currentImageIndex + 1} / {additionalImages.length}
                        </div>
                      </div>
                    ) : (
                      // Single image or no additional images
                      <img
                        src={image || defaultImage}
                        alt={title}
                        className="w-full h-auto rounded-lg mb-4 object-cover"
                      />
                    )}
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{longDescription || description}</p>

                    {techStack && techStack.length > 0 && (
                      <>
                        <h4 className="text-xl font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {features && features.length > 0 && (
                      <>
                        <h4 className="text-xl font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
                          {features.map((feature, index) => (
                            <li key={index} className="text-base">{feature}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    </div> {/* End of Project Details content div */}
                  </div> {/* End of grid md:grid-cols-2 gap-8 */}
                </div> {/* End of flex-grow overflow-y-auto */}
                
                {/* Action Buttons (including the new Close Tab button) */}
                <div className="flex flex-wrap gap-4 mt-6 justify-center"> {/* Added justify-center for centering the buttons */}
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full text-md shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-full text-md shadow-md hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    GitHub Repository
                  </a>
                  {/* Moved Close Tab button here */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="inline-block border border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-full text-md shadow-md hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Close modal"
                  >
                    Close Tab
                  </button>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
