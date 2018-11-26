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
        <Navbar color="white" light expand="md" scrolling fixed="top">
          <Container>
            <NavbarBrand>
              <strong className="NavBrand">Officeplus</strong>
            </NavbarBrand>

            <NavbarToggler onClick={this.onClick} />

            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav className="NavbarUl" right>
                <NavItem active>
                  <NavLink to="/">Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/workspace">Workspace</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/our-location">Location</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/our-profile">Our Profile</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/contact-us">Contact US</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
