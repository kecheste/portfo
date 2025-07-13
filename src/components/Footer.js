import { motion } from "framer-motion";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";
import SectionWrapper from "../hoc/SectionWrapper.js";
import { HeartHalf } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gradient-to-b from-tertiary to-quartery text-white py-16 px-6 sm:px-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-40 h-auto mb-6 hover:scale-105 transition-transform duration-500"
              whileHover={{ rotate: 2, scale: 1.05 }}
            />
            <p className="text-gray-300 text-center lg:text-left max-w-xs">
              Crafting digital experiences with cutting-edge technology and
              innovative design.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 mr-3 bg-gray-800/50 rounded-full group-hover:bg-purple-500/20 transition-colors">
                  <img src={mail} alt="mail" className="w-5 h-5" />
                </div>
                <a
                  href="mailto:abenidevworking@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  abenidevworking@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 mr-3 bg-gray-800/50 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <img src={phone} alt="phone" className="w-5 h-5" />
                </div>
                <a
                  href="tel:+251936501702"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +251 936 501702
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center lg:items-end"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Connect With Me
            </h3>
            <div className="flex space-x-6">
              {[
                {
                  icon: navIcon1,
                  url: "https://www.linkedin.com/in/abenezer-tesfaye/",
                  alt: "LinkedIn",
                  color: "hover:bg-blue-600/20",
                },
                {
                  icon: navIcon2,
                  url: "https://github.com/kecheste",
                  alt: "GitHub",
                  color: "hover:bg-gray-600/20",
                },
                {
                  icon: navIcon3,
                  url: "https://instagram.com/kecheste11",
                  alt: "Instagram",
                  color: "hover:bg-pink-600/20",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-full ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={social.icon} alt={social.alt} className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-6 border-t border-gray-800/50 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            © {new Date().getFullYear()} Abenezer Tesfaye. All rights reserved.
          </p>
          <div className="inline-block">
            <p className="mt-2 flex items-center">
              Crafted with{" "}
              <span className="mx-1">
                <HeartHalf color="red" size={15} />
              </span>{" "}
              in Ethiopia
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
