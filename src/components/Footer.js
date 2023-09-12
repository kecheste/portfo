import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p>
              <span>
                <img style={{ width: "18px" }} src={mail} alt="mail" />
              </span>
              aben.ezer443@gmal.com
            </p>
            <p>
              <span>
                <img style={{ width: "18px" }} src={phone} alt="phone" />
              </span>
              +251936501702
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abenezer-tesfaye/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/kecheste">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://instagram.com/kecheste11">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
