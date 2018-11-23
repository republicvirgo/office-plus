import React from "react";

import { Container } from "mdbreact";

import NavBar from "./components/navbar";
//import Percobaan from "./components/contents/percobaan";
import Home from "./components/home";
import FooterNav from "./components/footerNav";

import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />

        <Container className="container-box text-center mb-5">
          <Home />
        </Container>

        <FooterNav />
      </div>
    );
  }
}

export default App;
