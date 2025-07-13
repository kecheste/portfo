import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const techStacks = {
  Frontend: [
    { name: "React", icon: "react-original", color: "text-blue-400" },
    { name: "ThreeJS", icon: "threejs-original", color: "text-gray-300" },
    { name: "NextJS", icon: "nextjs-original", color: "text-white" },
    { name: "Flutter", icon: "flutter-original", color: "text-blue-300" },
    {
      name: "JavaScript",
      icon: "javascript-original",
      color: "text-yellow-400",
    },
    { name: "TypeScript", icon: "typescript-original", color: "text-blue-500" },
    {
      name: "TailwindCSS",
      icon: "tailwindcss-original",
      color: "text-cyan-400",
    },
    { name: "Redux", icon: "redux-original", color: "text-purple-400" },
    { name: "HTML5", icon: "html5-plain", color: "text-red-600" },
  ],
  Backend: [
    { name: "Spring", icon: "spring-original", color: "text-green-500" },
    { name: "Python", icon: "python-original", color: "text-blue-300" },
    { name: "NodeJS", icon: "nodejs-original", color: "text-green-500" },
    { name: "Laravel", icon: "laravel-original", color: "text-red-500" },
    { name: "Flask", icon: "flask-original", color: "text-gray-300" },
    { name: "PHP", icon: "php-original", color: "text-purple-400" },
    { name: "Express", icon: "express-original", color: "text-gray-400" },
    { name: "Django", icon: "django-plain", color: "text-green-600" },
    {
      name: "JavaScript",
      icon: "javascript-original",
      color: "text-yellow-400",
    },
  ],
  Tools: [
    { name: "Git", icon: "git-original", color: "text-orange-500" },
    { name: "MongoDB", icon: "mongodb-original", color: "text-green-500" },
    { name: "PostgreSQL", icon: "postgresql-original", color: "text-blue-400" },
    { name: "MySQL", icon: "mysql-original", color: "text-blue-600" },
    { name: "Docker", icon: "docker-original", color: "text-blue-400" },
    { name: "Kubernetes", icon: "kubernetes-plain", color: "text-blue-500" },
    {
      name: "Apache",
      icon: "apache-original",
      color: "text-yellow-500",
    },
    { name: "Firebase", icon: "firebase-plain", color: "text-yellow-400" },
    { name: "Figma", icon: "figma-original", color: "text-blue-400" },
  ],
};

function Stack() {
  return (
    <section className="w-full py-20" id="stacks">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header with animated underline */}
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className={`${styles.sectionSubText}`}>Technical Arsenal</p>
          <h2 className={`${styles.sectionHeadText} mb-6`}>My Tech Stack</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {Object.entries(techStacks).map(([category, technologies], index) => (
            <motion.div
              key={category}
              variants={fadeIn("up", "spring", 0.2 + index * 0.1, 0.75)}
              className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-[#03272fff] hover:border-quartery transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-quartery to-tertiary rounded-full"></div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map((tech, i) => (
                  <motion.div
                    key={`${category}-${tech.name}`}
                    variants={fadeIn("up", "spring", 0.3 + i * 0.05, 0.75)}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(55, 65, 81, 0.5)",
                    }}
                    className={`flex flex-col items-center gap-2 p-4 bg-gray-800/30 rounded-lg transition-all group hover:bg-gray-700/50`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${
                          tech.icon.split("-")[0]
                        }/${tech.icon}.svg`}
                        alt={tech.name}
                        className={`w-8 h-8 object-contain transition-all group-hover:scale-110 ${tech.color}`}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills with animated entry */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-16 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h4 className="text-gray-400 text-lg mb-4">Also experienced with:</h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              "GraphQL",
              "Jest",
              "Cypress",
              "Redis",
              "Nginx",
              "Jenkins",
              "GCP",
              "AWS",
            ].map((tech, i) => (
              <motion.span
                key={i}
                variants={fadeIn("up", "spring", 0.5 + i * 0.05, 1)}
                className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Stack, "stack");
