import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Container } from "mdbreact";

import NavBar from "./components/navbar";

import Home from "./components/home";
import Workspace from "./components/workspace";
//import OurLocation from "./components/location";
//import OurProfile from "./components/ourProfile";
//import ContactUs from "./components/contactUs";

import FooterNav from "./components/footerNav";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Container
          className="container-box text-center mb-5"
          style={{ minHeight: "100vh" }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/workspace" component={Workspace} />
            {/*
            <Route path="/our-location" component={OurLocation} />
            <Route path="/our-profile" component={OurProfile} />
            <Route path="/contact-us" component={ContactUs} />
            */}
          </Switch>
        </Container>

        <FooterNav />
      </div>
    );
  }
}

export default App;
