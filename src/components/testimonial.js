import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  media: {
    objectFit: "cover"
  }
};

function ImgMediaCard(props) {
  const { classes, key, image, name, title, text } = props;

  return (
    <Grid item md={3}>
      <Card className={classes.card} key={key}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="{name}"
            className={classes.media}
            height="150"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography component="p">{name}</Typography>
            <Typography component="p">{title}</Typography>
            <hr />
            <Typography component="p" style={{ fontStyle: "italic" }}>
              "{text}"
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
