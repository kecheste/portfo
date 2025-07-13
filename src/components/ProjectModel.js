import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { github } from "../assets/img";
import internet from "../assets/img/internet.png";
import { X, ArrowLeft, ArrowRight, Maximize2, Minimize2 } from "lucide-react";
import Portal from "./Portal";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const allImages = project.images || [];

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      setIsImageExpanded(false);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] isolate flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className={`relative bg-tertiary rounded-xl w-full max-w-[95vw] xl:max-w-[85vw] h-[90vh] overflow-hidden flex flex-col ${
                isImageExpanded ? "max-w-none" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Main Content Area */}
              <div
                className={`flex ${
                  isImageExpanded ? "flex-col" : "flex-col lg:flex-row"
                } h-full overflow-hidden`}
              >
                {/* Image Display - Now at the top */}
                {allImages.length > 0 && (
                  <motion.div
                    layout
                    className={`relative ${
                      isImageExpanded
                        ? "h-full w-full"
                        : "h-64 sm:h-80 md:h-96 lg:h-full lg:w-1/2"
                    } bg-gray-900/50`}
                  >
                    <motion.img
                      key={selectedImageIndex}
                      src={allImages[selectedImageIndex]}
                      alt={project.title}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        isImageExpanded ? "cursor-zoom-out" : "cursor-zoom-in"
                      }`}
                      onClick={() =>
                        allImages.length > 0 &&
                        setIsImageExpanded(!isImageExpanded)
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Expand/Collapse Button */}
                    {allImages.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsImageExpanded(!isImageExpanded);
                        }}
                        className="absolute top-4 left-4 z-20 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors shadow-lg"
                        aria-label={
                          isImageExpanded ? "Minimize image" : "Expand image"
                        }
                      >
                        {isImageExpanded ? (
                          <Minimize2 className="w-5 h-5 text-white" />
                        ) : (
                          <Maximize2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    )}

                    {/* Navigation Arrows */}
                    {allImages.length > 1 && !isImageExpanded && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors shadow-lg z-10"
                          aria-label="Previous image"
                        >
                          <ArrowLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors shadow-lg z-10"
                          aria-label="Next image"
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {allImages.length > 1 && !isImageExpanded && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gray-800/80 text-white text-sm">
                        {selectedImageIndex + 1} / {allImages.length}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Text Content - Scrollable Area */}
                <div
                  className={`flex-1 overflow-y-auto ${
                    !isImageExpanded ? "p-6 md:p-8" : "hidden"
                  }`}
                >
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h2>
                      {project.tagline && (
                        <p className="text-purple-400 text-lg mt-1">
                          {project.tagline}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.year && (
                        <span className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                      )}
                      {project.status && (
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            project.status === "Live"
                              ? "bg-green-900/50 text-green-400"
                              : project.status === "In Development"
                              ? "bg-yellow-900/50 text-yellow-400"
                              : "bg-gray-800 text-gray-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Meta */}
                  {(project.client || project.duration || project.teamSize) && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-gray-900/50 p-4 rounded-lg mb-6">
                      {project.client && (
                        <div>
                          <p className="text-gray-400 text-xs">Client</p>
                          <p className="text-white font-medium">
                            {project.client}
                          </p>
                        </div>
                      )}
                      {project.duration && (
                        <div>
                          <p className="text-gray-400 text-xs">Duration</p>
                          <p className="text-white font-medium">
                            {project.duration}
                          </p>
                        </div>
                      )}
                      {project.teamSize && (
                        <div>
                          <p className="text-gray-400 text-xs">Team</p>
                          <p className="text-white font-medium">
                            {project.teamSize}{" "}
                            {project.teamSize > 1 ? "people" : "person"}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-gray-900/30 p-4 rounded-lg mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-purple-400 text-xl md:text-2xl font-bold">
                            {value}
                          </p>
                          <p className="text-gray-400 text-xs uppercase tracking-wider">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {project.features?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-400 mr-2 mt-1">•</span>
                            <span className="text-gray-300 text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges & Solutions */}
                  {project.challenges && project.solutions && (
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Challenges
                        </h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-400 mr-2 mt-1">•</span>
                              <span className="text-gray-300 text-base">
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Solutions
                        </h3>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-400 mr-2 mt-1">
                                •
                              </span>
                              <span className="text-gray-300 text-base">
                                {solution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-gray-800/80 text-gray-300 px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md"
                      >
                        <img
                          src={internet}
                          alt="Live demo"
                          className="w-4 h-4"
                        />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-md border border-gray-700"
                      >
                        <img
                          src={github}
                          alt="Source code"
                          className="w-4 h-4"
                        />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default ProjectModal;
