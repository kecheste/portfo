/* eslint-disable jsx-a11y/alt-text */
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper.js";

const Projects = () => {
  const projects = [
    {
      title: "Gebeya",
      description:
        "Gebeya is an e-commerece website, built with Next.js and Sanity.io with Stripe payment integration.",
      imgUrl: projImg1,
      url: "https://gebeya-market.vercel.app/",
      github: "https://github.com/kecheste/Gebeya",
    },
    {
      title: "Yelp Camp",
      description:
        "A review based campground website, built with Next.js, Node.js and MongoDB.",
      imgUrl: projImg2,
      url: "https://yelp-camp-kohl.vercel.app/",
      github: "https://github.com/kecheste/YelpCamp",
    },
    {
      title: "Farm-Hub",
      description:
        "A website to buy and sell fresh agricultural products, which has a Generative AI tool to enhance user experience.",
      imgUrl: projImg3,
      url: "https://farmer-hub.vercel.app/",
      github: "https://github.com/A2SV-Farmers/Farm",
    },
    {
      title: "Selam Dating App",
      description:
        "Selam dating is a modern dating mobile app, it's built with flutter and firebase.",
      imgUrl: projImg4,
      url: "",
      github: "https://github.com/kecheste/Selam",
    },
    {
      title: "Nuun Branding",
      description: "I have created a portfolio website for Nuun Branding.",
      imgUrl: projImg5,
      url: "https://nuunbranding.com",
      github: "/",
    },
    {
      title: "Zemen",
      description:
        "Zemen is a P2P e-commerce mobile app which have got over 1000 downloads on PlayStore already.",
      imgUrl: projImg6,
      url: "",
      github: "https://github.com/kecheste/Zemen",
    },
  ];

  return (
    <section className="w-full m-0" id="work">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 gap-5 w-full flex flex-wrap items-center justify-center">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              url={project.url}
              githubUrl={project.github}
            />
          );
        })}
      </div>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

export default SectionWrapper(Projects, "Projects");
