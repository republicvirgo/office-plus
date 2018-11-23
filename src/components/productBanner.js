import React from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

class ProductBanner extends React.Component {
  render() {
    const { key, image, title, text, left, linkLabel, linkTo } = this.props;

    const gridList = {
      transform: "translateZ(0)"
    };

    return (
      <Router>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <Grid item md={6} className={left ? "order-1" : "order-2"}>
            <GridList cellHeight={300} spacing={0} className={gridList}>
              <GridListTile key={key} cols="2" rows="1">
                <img src={image} alt={title} />
              </GridListTile>
            </GridList>
          </Grid>

          <Grid
            item
            md={6}
            align="left"
            className={left ? "order-2" : "order-1"}
            style={{ padding: "20px" }}
          >
            <h5 style={{ fontWeight: "bold" }}>{title}</h5>
            <p align="justify">{text}</p>
            <Link to={linkTo}>{linkLabel}</Link>
          </Grid>
        </Grid>
      </Router>
    );
  }
}

export default ProductBanner;
