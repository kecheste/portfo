import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper.js";
import { projects } from "../constants/projects.js";

const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full mx-auto py-20 max-w-7xl"
      id="work"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            transition: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"
        ></motion.div>
      </div>

      <motion.div variants={textVariant()} className="relative z-10 mb-16">
        <p className={`${styles.sectionSubText} text-center`}>PORTFOLIO</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-3 text-gray-400 text-lg md:text-xl max-w-4xl leading-[32px] mx-auto text-center mb-16"
      >
        Each project represents a unique challenge I've solved with clean code
        and innovative thinking. Hover over cards to explore details.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", projects.length * 0.1 + 0.5, 1)}
        className="flex justify-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center group"
        >
          <span className="font-medium">Explore All Projects</span>
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Projects, "projects");
