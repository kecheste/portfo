import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "react-bootstrap-icons";
import SectionWrapper from "../hoc/SectionWrapper.js";
import BallCanvas from "./Ball.js";
import { useMediaQuery } from "react-responsive";
import resume from "../assets/pdf/resume.pdf";

const Banner = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  const toRotate = useMemo(
    () => [
      { text: "Innovative Creator", color: "text-red-500" },
      { text: "Tech Enthusiast", color: "text-green-500" },
      { text: "Visionary Designer", color: "text-blue-500" },
    ],
    []
  );

  const period = 1000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i].text;
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text.length, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  const currentColor = toRotate[loopNum % toRotate.length].color;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Abenezer_Tesfaye_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between h-screen overflow-hidden"
      id="about"
    >
      <motion.div
        className="relative z-10 w-full md:w-1/2 h-1/2 lg:h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <BallCanvas onMediaDevice={isTabletOrMobile} />
      </motion.div>

      <motion.div
        className="relative z-10 w-full md:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-center text-white p-2 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.span>
        <h1 className="text-3xl md:text-6xl font-extrabold mt-2">
          {`Hi! I'm Abenezer Tesfaye. `}
          <span className="txt-rotate block">
            <span className={`wrap ${currentColor}`}>{text}</span>
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          As a software engineer, I excel at solving complex challenges with
          innovative technology. I'm passionate about creating intuitive
          software solutions that enhance user experiences and make technology
          accessible.
        </p>
        <motion.button
          onClick={handleDownloadCV}
          className="mt-6 bg-white text-blue-600 py-3 px-6 shadow-lg hover:bg-gray-200 transition duration-300 flex items-center relative overflow-hidden border-none"
          whileHover={{
            boxShadow: "0 0 0 1px #3b82f6, 0 0 0 1px #3b82f6 inset",
          }}
          aria-label="Download CV"
        >
          <span className="relative z-10">Download CV</span>
          <ArrowRightCircle size={25} className="ml-2 relative z-10" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Banner, "banner");
