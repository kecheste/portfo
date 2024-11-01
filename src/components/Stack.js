import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function Stack() {
  return (
    <section className="w-full mt-24 flex flex-col items-center" id="stacks">
      <div className="mx-5 sm:mx-0 flex gap-10 flex-wrap">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Tech Stacks</p>
          <h2 className={`${styles.sectionHeadText}`}>What I do</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="stack-container"
        >
          {["Frontend", "Backend", "Tools"].map((category, index) => (
            <div key={index} className="stacks mb-10">
              <motion.div
                className={`${styles.sectionSubText}`}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h4>{category}</h4>
              </motion.div>
              <motion.div
                className="stacks-row flex flex-wrap justify-center gap-6"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
              >
                {category === "Frontend" && (
                  <>
                    {[
                      "React",
                      "ThreeJS",
                      "NextJs",
                      "Flutter",
                      "JavaScript",
                      "Redux",
                    ].map((tech, i) => (
                      <div className="item" key={i}>
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                          alt={`${tech}-image`}
                          className="tech-icon"
                        />
                        <h6 className="stack-title">{tech}</h6>
                      </div>
                    ))}
                  </>
                )}
                {category === "Backend" && (
                  <>
                    {[
                      "Spring",
                      "Python",
                      "Nodejs",
                      "Laravel",
                      "Flask",
                      "PHP",
                    ].map((tech, i) => (
                      <div className="item" key={i}>
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                          alt={`${tech}-image`}
                          className="tech-icon"
                        />
                        <h6 className="stack-title">{tech}</h6>
                      </div>
                    ))}
                  </>
                )}
                {category === "Tools" && (
                  <>
                    {[
                      "Git",
                      "MongoDB",
                      "PostgreSQL",
                      "MySQL",
                      "Docker",
                      "Kubernetes",
                    ].map((tech, i) => (
                      <div className="item" key={i}>
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                          alt={`${tech}-image`}
                          className="tech-icon"
                        />
                        <h6 className="stack-title">{tech}</h6>
                      </div>
                    ))}
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(Stack, "Stack");
