import React, { Component } from "react";
import PropTypes from "prop-types";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import Grow from "@material-ui/core/Grow";
import Zoom from "@material-ui/core/Zoom";
import Icon from "@material-ui/core/Icon";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

//import RestoreIcon from "@material-ui/icons/Restore";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import LocationOnIcon from "@material-ui/icons/LocationOn";
import Done from "@material-ui/icons/Done";
//https://material.io/tools/icons/?style=baseline

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  demo: {
    height: 150
  },
  wrapper: {
    maxWidth: 400
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Percobaan extends Component {
  state = {
    direction: "row", //row, row-reverse, column, column-reverse
    justify: "space-evenly", //flex-start, center, flex-end, space-between, space-around, space-evenly
    alignItems: "center", //flex-start, center, flex-end, stretch, baseline
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify, value } = this.state;
    const message = `Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support. `;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              alignItems="center"
              spacing={16}
            >
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.paper}>{`Cell ${value + 1}`}</Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={16}
              className={classes.demo}
              alignItems={alignItems}
              direction={direction}
              justify={justify}
            >
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper
                    className={classes.paper}
                    style={{
                      paddingTop: (value + 1) * 10,
                      paddingBottom: (value + 1) * 10
                    }}
                  >
                    {`Cell ${value + 1}`}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={24}>
          <Grid item xs={6} wrap="nowrap">
            <Paper className={classes.paper}>
              <Grid item xs={3}>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item xs={9}>
                <Typography noWrap>{message}</Typography>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={6} wrap="nowrap">
            <Paper className={classes.paper}>
              <Grid item xs={3}>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item zeroMinWidth xs={9}>
                <Typography noWrap>{message}</Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Zoom in="true" {...{ timeout: 1000 }}>
              <Paper className={classes.paper}>Content</Paper>
            </Zoom>
          </Grid>

          <Grid item xs={6}>
            <Grow in="true" {...{ timeout: 3000 }}>
              <Paper className={classes.paper}>Content</Paper>
            </Grow>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <BottomNavigation
              value={value}
              onChange={this.handleChange}
              showLabels
              className="btnNoFocus"
            >
              <BottomNavigationAction label="Favorites" icon={<Done />} />

              <BottomNavigationAction
                label="Supports"
                icon={
                  <Icon className={classNames(classes.icon, "fa fa-heart")} />
                }
              />

              <BottomNavigationAction
                label="Supports"
                icon={
                  <Icon
                    className={classNames(classes.icon, "fa fa-plus-circle")}
                  />
                }
              />
            </BottomNavigation>
          </Grid>
        </Grid>

        <hr />
      </div>
    );
  }
}

Percobaan.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Percobaan);
