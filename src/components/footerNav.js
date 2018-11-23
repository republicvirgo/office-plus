import React from "react";
import { loadCSS } from "fg-loadcss/src/loadCSS";

import { Col, Container, Row, Footer } from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/footerNav.css";

class FooterNav extends React.Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

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
                      <i className="far fa-building footerIcon" /> Podomoro City
                      Ruko GSA B / 8DH
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-map-marker-alt footerIcon" /> Jl.
                      S.Parman - Jakarta Barat
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-phone-volume footerIcon" /> 021 2920
                      6264
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-mobile-alt footerIcon" /> 0812 9072
                      3828
                    </li>
                    <li className="list-unstyled">
                      <i className="far fa-envelope footerIcon" />{" "}
                      sales@officepluscenter.com
                    </li>
                  </ul>
                </Col>

                <Col md="4">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <i className="fas fa-caret-right footerIcon" />{" "}
                      <Link to="/workspace">Workspace</Link>
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-caret-right footerIcon" />{" "}
                      <Link to="/location">Location</Link>
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-caret-right footerIcon" />{" "}
                      <Link to="/our-profile">Our Profile</Link>
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-caret-right footerIcon" />{" "}
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="list-unstyled">
                      <i className="fas fa-caret-right footerIcon" />{" "}
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </Col>

                <Col md="4">
                  <h5 className="title">Connect with Us</h5>
                  <ul>
                    <li className="list-unstyled">
                      <i className="fab fa-facebook-square footerIcon" />{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <i className="fab fa-instagram footerIcon" />{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <i className="fab fa-youtube footerIcon" />{" "}
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
