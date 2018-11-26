import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grow from "@material-ui/core/Grow";

import image1 from "../assets/images/breakfast.jpg";
import image2 from "../assets/images/burgers.jpg";

const contentData = [
  {
    id: 1111,
    img: image1,
    left: true,
    title: "Virtual Office",
    text:
      "The nature of work is changing. Recruitment, retention, innovation, and productivity now require not just coffee, but also yoga, not just printers, but also art installations. WeWork offers companies of all sizes the opportunity to reimagine employees’ days through refreshing design, engaging community, and benefits for all.",
    link: {
      label: "Read More",
      to: "/virtual-office"
    }
  },
  {
    id: 2222,
    img: image2,
    left: false,
    title: "Coworking",
    text:
      "The nature of work is changing. Recruitment, retention, innovation, and productivity now require not just coffee, but also yoga, not just printers, but also art installations. WeWork offers companies of all sizes the opportunity to reimagine employees’ days through refreshing design, engaging community, and benefits for all.",
    link: {
      label: "Read More",
      to: "/coworking"
    }
  }
];

class ProductBanner extends React.Component {
  render() {
    //const { key, image, title, text, left, linkLabel, linkTo } = this.props;

    const gridList = {
      transform: "translateZ(0)"
    };

    return (
      <Router>
        <Grow in="true" {...{ timeout: 1000 }}>
          <div className="my-5">
            {contentData.map(cd => (
              <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                <Grid item md={6} className={cd.left ? "order-1" : "order-2"}>
                  <GridList cellHeight={300} spacing={0} className={gridList}>
                    <GridListTile key={cd.id} cols="2" rows="1">
                      <img src={cd.img} alt={cd.title} />
                    </GridListTile>
                  </GridList>
                </Grid>

                <Grid
                  item
                  md={6}
                  align="left"
                  className={cd.left ? "order-2" : "order-1"}
                  style={{ padding: "20px" }}
                >
                  <h5 style={{ fontWeight: "bold" }}>{cd.title}</h5>
                  <p align="justify">{cd.text}</p>
                  <Link to={cd.link.to}>{cd.link.label}</Link>
                </Grid>
              </Grid>
            ))}
          </div>
        </Grow>
      </Router>
    );
  }
}

export default ProductBanner;
