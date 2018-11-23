import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";

import ProductBanner from "./productBanner";
import ProfileBanner from "./profileBanner";
import Testimonial from "./testimonial";

import image1 from "../assets/images/breakfast.jpg";
import image2 from "../assets/images/burgers.jpg";

import foto1 from "../assets/images/testimonial/foto1.png";
import foto2 from "../assets/images/testimonial/foto2.png";
import foto3 from "../assets/images/testimonial/foto3.png";
import foto4 from "../assets/images/testimonial/foto4.png";

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

const testimoniData = [
  {
    id: 1,
    img: foto1,
    name: "Ramon Ray",
    title: "Entrepreneur & Global Speaker",
    text:
      "My favorite thing about WeWork is the easy access to facilities and network of peers (online and at each location) who I can help or get help from!"
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

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grow in="true" {...{ timeout: 1000 }}>
          <ProfileBanner />
        </Grow>

        <Grow in="true" {...{ timeout: 1000 }}>
          <div className="my-5">
            {contentData.map(cd => (
              <ProductBanner
                key={cd.id}
                image={cd.img}
                title={cd.title}
                text={cd.text}
                left={cd.left}
                linkLabel={cd.link.label}
                linkTo={cd.link.to}
              />
            ))}
          </div>
        </Grow>

        <Grid
          container
          spacing={8}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {" "}
          {testimoniData.map(td => (
            <Testimonial
              key={td.id}
              image={td.img}
              name={td.name}
              title={td.title}
              text={td.text}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
