import { useState } from "react";
import { motion } from "framer-motion";
import api from "../api";
import SectionWrapper from "../hoc/SectionWrapper.js";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await api.post("/contact", formDetails);
      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Network error, please try again later.",
      });
    }
  };

  return (
    <section className="py-12 bg-[#001c21] rounded-lg" id="connect">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className={`${styles.sectionSubText} text-center mb-6 text-white`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>
        <motion.form
          variants={fadeIn("", "", 0.1, 1)}
          onSubmit={handleSubmit}
          className="p-8 bg-[#0a3d3e] rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <motion.input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              className="outline-none rounded py-5 px-4 text-[15px] bg-[#1a6e70] text-white border border-transparent focus:border-[#1de4e4] transition duration-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              className="outline-none rounded py-5 px-4 text-[15px] bg-[#1a6e70] text-white border border-transparent focus:border-[#1de4e4] transition duration-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(e) => onFormUpdate("email", e.target.value)}
              className="outline-none rounded py-5 px-4 text-[15px] bg-[#1a6e70] text-white border border-transparent focus:border-[#1de4e4] transition duration-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
            <motion.input
              type="tel"
              value={formDetails.phone}
              placeholder="Phone No."
              onChange={(e) => onFormUpdate("phone", e.target.value)}
              className="outline-none rounded py-5 px-4 text-[15px] bg-[#1a6e70] text-white border border-transparent focus:border-[#1de4e4] transition duration-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            />
          </div>
          <motion.textarea
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
            className="outline-none rounded py-5 px-4 text-[15px] w-full mb-4 bg-[#1a6e70] text-white border border-transparent focus:border-[#1de4e4] transition duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="w-full bg-[#1de4e4] text-black py-4 rounded hover:bg-[#16b2b3] transition-all duration-300 shadow-lg glow-effect"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span>{buttonText}</span>
          </motion.button>
          {status.message && (
            <div
              className={`mt-4 ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              <p>{status.message}</p>
            </div>
          )}
        </motion.form>
      </div>
      <style jsx>{`
        .glow-effect {
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease-in-out;
        }

        .glow-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 0.5rem;
          box-shadow: 0 0 15px rgba(29, 228, 228, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: -1;
        }

        .glow-effect:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
