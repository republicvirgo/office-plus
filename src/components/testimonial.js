import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";

import { testimonialData } from "../alldata";

const styles = {
  media: {
    objectFit: "cover"
  },
  section: {
    height: "100%"
  }
};

function Testimoni(props) {
  const { classes } = props;

  return (
    <div className="my-5">
      <Grow in="true" {...{ timeout: 3000 }}>
        <Paper
          className={classes.root}
          square={false}
          elevation={0}
          align="left"
          style={{ marginBottom: "20px" }}
        >
          <Typography variant="h5" component="h3">
            Community Insights
          </Typography>
          <Typography component="p">Our members tell it like it is.</Typography>
        </Paper>
      </Grow>

      <Grow in="true" {...{ timeout: 3000 }}>
        <Grid
          container
          spacing={8}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {testimonialData.map(td => (
            <Grid item md={3}>
              <Card className={classes.card} key={td.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="{name}"
                    className={classes.media}
                    height="150"
                    image={td.img}
                    title={td.title}
                  />
                  <CardContent>
                    <Typography component="p">{td.name}</Typography>
                    <Typography component="p">{td.title}</Typography>
                    <hr />
                    <Typography
                      component="p"
                      style={{ fontStyle: "italic", minHeight: "15vh" }}
                    >
                      "{td.text}"
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}

Testimoni.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Testimoni);
