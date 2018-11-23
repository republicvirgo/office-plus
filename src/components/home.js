import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

import ProductBanner from "./productBanner";
import ProfileBanner from "./profileBanner";
import Testimonial from "./testimonial";

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
        <ProfileBanner />

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

        <Testimonial />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
