import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import creativa from "../assets/images/creativa-logo.svg";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import useCustom from "../hooks/useCustom";

const Footer = () => {
  const { bookMySeat } = useCustom();

  const [openService, setOpenService] = useState(true);
  const [openCareer, setOpenCareer] = useState(true);
  const [openContact, setOpenContact] = useState(true);

  useEffect(() => {
    autoResize();
    window.addEventListener("resize", autoResize);
    return () => window.removeEventListener("resize", autoResize);
  }, []);

  const autoResize = () => {
    if (window.innerWidth < 767) {
      setOpenService(false);
      setOpenCareer(false);
      setOpenContact(false);
    } else {
      setOpenService(true);
      setOpenCareer(true);
      setOpenContact(true);
    }
  };

  return (
    <footer className="hidden-in-pdf-view">
      <div className="footer-section">
        <Container>
          <Row>
            <Col xl={3}>
              <img src={creativa} alt="logo" />
              <div className="social-media-list mb-5">
                <a
                  href="https://www.facebook.com/creativadesignacademy"
                  target="_blank"
                >
                  <span className="fa-brands fa-facebook-f"></span>
                </a>
                <a
                  href="https://www.linkedin.com/company/creativa-design-academy/"
                  target="_blank"
                >
                  <span className="fa-brands fa-linkedin-in"></span>
                </a>
                <a href="https://twitter.com/creativadesigna" target="_blank">
                  <span className="fa-brands fa-x-twitter"></span>
                </a>
                <a
                  href="https://www.instagram.com/creativadesign.academy/"
                  target="_blank"
                >
                  <span className="fa-brands fa-instagram"></span>
                </a>
                <a
                  href="https://www.behance.net/creativa_academy"
                  target="_blank"
                >
                  <span className="fa-brands fa-behance"></span>
                </a>
                <a href="https://dribbble.com/Creativa_academy" target="_blank">
                  <i class="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </Col>
            <Col xl={9}>
              <Row>
                <Col lg={3}>
                  <h1
                    className="footer-list-title"
                    onClick={() => setOpenService(!openService)}
                  >
                    Quick Links
                    <i className="fa-solid fa-chevron-down float-right d-lg-none d-inline"></i>
                  </h1>
                  <Collapse in={openService}>
                    <ul className="list-unstyled footer-list" id="servicesList">
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li style={{ marginTop: -18 }}>
                        <Link to="/our-student-works">Students Work</Link>
                      </li>
                      <li style={{ marginTop: -18 }}>
                        <a href={void 0} onClick={bookMySeat}>
                          Book a Demo
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Col>
                <Col lg={5}>
                  <h1
                    className="footer-list-title"
                    onClick={() => setOpenCareer(!openCareer)}
                  >
                    Address
                    <i className="fa-solid fa-chevron-down  float-right d-lg-none d-inline"></i>
                  </h1>
                  <Collapse in={openCareer}>
                    <ul className="list-unstyled footer-list" id="careersList">
                      <li>
                        <a
                          href="https://maps.app.goo.gl/Xcjgg9eo78VHw89JA"
                          target="_blank"
                        >
                          #31/13, 2nd floor, Burkit Road,
                          <br /> Near Canara Bank, T. Nagar,
                          <br /> Chennai, Tamil Nadu 600017
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Col>
                <Col lg={4}>
                  <h1
                    className="footer-list-title"
                    onClick={() => setOpenContact(!openContact)}
                  >
                    Contact With
                    <i className="fa-solid fa-chevron-down  float-right d-lg-none d-inline"></i>
                  </h1>
                  <Collapse in={openContact}>
                    <ul
                      className="list-unstyled footer-list address"
                      id="contactList"
                    >
                      <li>
                        <a href="tel:+919790782986">+91 97907 82986</a>
                      </li>
                      <li style={{ marginTop: -18 }}>
                        <a href="tel:+919941557761">+91 99415 57761</a>
                      </li>
                      <li style={{ marginTop: -18 }}>
                        <a href="mailto:enquiry@creativa.academy">
                          enquiry@creativa.academy
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-rights-sections text-center">
        <p>&copy; 2023 Creativa Design Academy. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
