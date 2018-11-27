import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import ProductList from "./productList";
import Testimonial from "./testimonial";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
});

class Workspace extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ProductList />
        <Testimonial />
      </div>
    );
  }
}

Workspace.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Workspace);
