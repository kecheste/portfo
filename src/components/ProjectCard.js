import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { github } from "../assets/img";
import internet from "../assets/img/internet.png";

const ProjectCard = ({ title, description, imgUrl, url, index, githubUrl }) => {
  return (
    <div className="w-[370px] h-full">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full sm:w-[360px]"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-3 rounded-2xl sm:w-[360px] border-b-[4px] border-slate-500"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={imgUrl}
              alt="project_image"
              className="w-full h-[210px] object-cover rounded-2xl"
            />

            <div className="absolute flex gap-2 inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(url, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={internet}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(githubUrl, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-3 h-[100px]">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
