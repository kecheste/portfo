import { motion } from "framer-motion";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";
import SectionWrapper from "../hoc/SectionWrapper.js";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#001c21] text-white py-10 sm:px-10 px-5 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <motion.img
            src={logo}
            alt="Logo"
            className="mb-4 w-32 h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex items-center mb-2">
            <img src={mail} alt="mail" className="w-5 mr-2" />
            <span>abenidevworking@gmail.com</span>
          </div>
          <div className="flex items-center">
            <img src={phone} alt="phone" className="w-5 mr-2" />
            <span>+251936501702</span>
          </div>
        </div>
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/abenezer-tesfaye/">
              <motion.img
                src={navIcon1}
                alt="LinkedIn"
                className="w-8 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://github.com/kecheste">
              <motion.img
                src={navIcon2}
                alt="GitHub"
                className="w-8 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://instagram.com/kecheste11">
              <motion.img
                src={navIcon3}
                alt="Instagram"
                className="w-8 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2024. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
