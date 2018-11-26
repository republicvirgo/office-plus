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

import foto1 from "../assets/images/testimonial/foto1.png";
import foto2 from "../assets/images/testimonial/foto2.png";
import foto3 from "../assets/images/testimonial/foto3.png";
import foto4 from "../assets/images/testimonial/foto4.png";

import "../styles/productList.css";

const styles = {
  media: {
    objectFit: "cover"
  },
  section: {
    height: "100%"
  }
};

const testimoniData = [
  {
    id: 1,
    img: foto1,
    name: "Ramon Ray",
    title: "Entrepreneur & Global Speaker",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    id: 2,
    img: foto2,
    name: "Saeed Jabbar",
    title: "Founder of Inclusion",
    text:
      "I've scaled my organization, hosted successful events, and most importantly met lifelong friends all within the WeWork ecosystem."
  },
  {
    id: 3,
    img: foto3,
    name: "Fabricio González Antuña",
    title: "CEO of Dynamia",
    text:
      "The most important thing is that all of the community has embedded a standard of trust. You breathe trust, and for developing business, it's a great plus!"
  },
  {
    id: 4,
    img: foto4,
    name: "Entrepreneur & Creative Director",
    title: "Founder of Inclusion",
    text:
      "There's something empowering about working in a space where you are encouraged to create brilliant ideas that disrupt culture followed by the support of a team of people who want you to win."
  }
];

function ImgMediaCard(props) {
  const { classes } = props;

  return (
    <Grow in="true" {...{ timeout: 3000 }}>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {testimoniData.map(td => (
          <Grid item md={3}>
            <Card className={classes.card} key={td.key}>
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
                    style={{ fontStyle: "italic" }}
                    className={classes.section}
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
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
