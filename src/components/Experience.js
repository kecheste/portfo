import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #001c21 0%, #003847 100%)",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      contentArrowStyle={{
        borderRight: "10px solid rgba(0, 56, 71, 0.8)",
      }}
      date={experience.date}
      dateClassName="text-white font-medium"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #001c21",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      }
    >
      <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-white text-[22px] font-bold">
              {experience.title}
            </h3>
            <p className="text-secondary text-[16px] font-semibold mt-1">
              {experience.company_name}
            </p>
            {experience.location && (
              <p className="text-gray-400 text-sm mt-1">
                {experience.location}
              </p>
            )}
          </div>
          {experience.year && (
            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
              {experience.year}
            </span>
          )}
        </div>

        <ul className="mt-5 space-y-3">
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-5 relative before:text-white before:content-['▹'] before:absolute before:left-0"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {point}
            </motion.li>
          ))}
        </ul>

        {experience.skills && (
          <div className="mt-5 flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>

      <motion.div
        variants={textVariant()}
        id="experience"
        className="text-center"
      >
        <p className={`${styles.sectionSubText}`}>My professional journey</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work <span className="text-purple-500">Experience</span>
        </h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-lg max-w-3xl leading-[30px] mx-auto text-center"
      >
        My career path with key roles and responsibilities at each position.
      </motion.p>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
