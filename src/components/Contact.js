import { useState } from "react";
import { motion } from "framer-motion";
import api from "../api";
import SectionWrapper from "../hoc/SectionWrapper.js";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({ success: false, message: "" });

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
      if (response.status >= 200 && response.status < 300) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Network error, please try again later.",
      });
    }

    setButtonText("Send Message");
  };

  return (
    <section className="relative w-full py-20 overflow-hidden" id="contact">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className={`${styles.sectionSubText}`}>Get in Touch</p>
          <h2 className={`${styles.sectionHeadText}`}>Contact Me</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            variants={fadeIn("right", "spring", 0.4, 1)}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-400">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out through this form or
                directly via email/phone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800/50 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a
                    href="mailto:abenidevworking@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    abenidevworking@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800/50 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a
                    href="tel:+251936501702"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +251 936 501702
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", "spring", 0.4, 1)}
            onSubmit={handleSubmit}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-400 text-sm mb-2"
                >
                  First Name
                </label>
                <motion.input
                  type="text"
                  id="firstName"
                  value={formDetails.firstName}
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Last Name
                </label>
                <motion.input
                  type="text"
                  id="lastName"
                  value={formDetails.lastName}
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Phone
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  value={formDetails.phone}
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-400 text-sm mb-2"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                rows="5"
                value={formDetails.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
            </motion.button>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center p-3 rounded-lg ${
                  status.success
                    ? "bg-green-900/30 text-green-400"
                    : "bg-red-900/30 text-red-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
