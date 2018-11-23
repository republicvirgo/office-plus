import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
  //View,
  //Mask
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar color="white" light expand="md" scrolling fixed="top">
            <Container>
              <NavbarBrand href="/">
                <strong className="NavBrand">Officeplus</strong>
              </NavbarBrand>

              <NavbarToggler onClick={this.onClick} />

              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav className="NavbarUl" left>
                  <NavItem active>
                    <NavLink to="/">Home</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/workspace">Workspace</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/location">Location</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/our-profile">Our Profile</NavLink>
                  </NavItem>
                </NavbarNav>

                <NavbarNav className="NavbarUl" right>
                  <NavItem>
                    <NavLink to="/contact-us">Contact US</NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default NavBar;
