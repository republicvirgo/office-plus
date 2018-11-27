import React, { Component } from "react";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { Col, Container, Row, Footer } from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faMobileAlt,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "../styles/footerNav.css";

class FooterNav extends Component {
  render() {
    return (
      <Router>
        <Footer color="pink" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Container>
              <Row className="footerRow">
                <Col md="4">
                  <h5 className="title">Officeplus Pte Ltd</h5>
                  <ul>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="footerIcon"
                      />{" "}
                      Podomoro City Ruko GSA B / 8DH
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="footerIcon"
                      />{" "}
                      Jl. S.Parman - Jakarta Barat
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="footerIcon"
                      />{" "}
                      021 2920 6264
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="footerIcon"
                      />{" "}
                      0812 9072 3828
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="footerIcon"
                      />{" "}
                      sales@officepluscenter.com
                    </li>
                  </ul>
                </Col>

                <Col md="4">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="footerIcon"
                      />{" "}
                      <Link to="/workspace">Workspace</Link>
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="footerIcon"
                      />{" "}
                      <Link to="/location">Location</Link>
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="footerIcon"
                      />{" "}
                      <Link to="/our-profile">Our Profile</Link>
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="footerIcon"
                      />{" "}
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="footerIcon"
                      />{" "}
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </Col>

                <Col md="4">
                  <h5 className="title">Connect with Us</h5>
                  <ul>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="footerIcon"
                      />{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="footerIcon"
                      />{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="footerIcon"
                      />{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://youtube.com"
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Container>

          <div className="footer-copyright text-center py-3">
            <Container fluid>
              Copyright &copy; 2018. Officeplus Pte Ltd. All rights reserved
            </Container>
          </div>
        </Footer>
      </Router>
    );
  }
}

export default FooterNav;
