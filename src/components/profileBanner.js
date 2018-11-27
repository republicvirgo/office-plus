import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

import { profileBannerData } from "../alldata";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },

  gridList: {
    height: 300,
    transform: "translateZ(0)"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <Grow in="true" {...{ timeout: 1000 }}>
            <Grid
              container
              spacing={24}
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item md={6}>
                <GridList
                  cellHeight={200}
                  spacing={0}
                  className={classes.gridList}
                >
                  {profileBannerData.map(pb => (
                    <GridListTile
                      key={pb.img}
                      cols={pb.big ? 2 : 1}
                      rows={pb.big ? 2 : 1}
                    >
                      <img src={pb.img} alt={pb.title} />
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>

              <Grid item md={6} align="left">
                <h5>Why do you do what you do?</h5>
                <h3>Welcome to Officeplus</h3>
                <p>Make a life, not just a living.</p>
                <p align="justify">
                  Officeplus is a global network of workspaces where companies
                  and people grow together. We transform buildings into dynamic
                  environments for creativity, focus, and connection. More than
                  just the best place to work, though, this is a movement toward
                  humanizing work. We believe that CEOs can help each other,
                  offices can use the comforts of home, and we can all look
                  forward to Monday if we find real meaning in what we do.
                </p>
                <Link to="/our-profile">Read More...</Link>
              </Grid>
            </Grid>
          </Grow>
        </div>
      </Router>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
