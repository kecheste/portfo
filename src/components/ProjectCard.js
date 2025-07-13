import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { github } from "../assets/img";
import internet from "../assets/img/internet.png";
import { useState } from "react";
import ProjectModal from "./ProjectModel";

const ProjectCard = ({ index, project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full h-full cursor-pointer"
        whileHover={{
          y: -5,
          transition: { duration: 0.3 },
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <Tilt
          options={{
            max: 10,
            scale: 1.02,
            speed: 500,
            glare: true,
            "max-glare": 0.1,
          }}
          className="bg-tertiary p-5 rounded-xl h-full flex flex-col border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          {/* Project Image with Gradient Overlay */}
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4 group">
            <motion.img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Action Buttons */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3 p-4">
              {project.url && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.url, "_blank");
                  }}
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <img src={internet} alt="Live demo" className="w-4 h-4" />
                  Demo
                </motion.button>
              )}
              {project.github && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, "_blank");
                  }}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg hover:bg-gray-800 transition-all border border-gray-700"
                >
                  <img src={github} alt="Source code" className="w-4 h-4" />
                  Code
                </motion.button>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
              {project.year && (
                <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                  {project.year}
                </span>
              )}
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies?.length > 0 && (
              <div className="mt-auto pt-3 border-t border-gray-800">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-gray-800/80 text-gray-300 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-gray-800/50 text-gray-400 px-2.5 py-1 rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </Tilt>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
