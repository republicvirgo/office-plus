import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import ProductList from "./productList";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
});

class Workspace extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ProductList />
      </div>
    );
  }
}

Workspace.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Workspace);
