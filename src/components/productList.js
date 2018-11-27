import React, { Component } from "react";
//import firebase from "../firebase";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import NumberFormat from "react-number-format";

import { productListData } from "../alldata";

import "../styles/productList.css";

class ProductList extends Component {
  /*
  state = {
    productListRef: firebase
      .database()
      .ref()
      .child("flamelink")
      .child("environments")
      .child("production")
      .child("content")
      .child("productCategory")
      .child("en-US")
  };

  componentDidMount() {
    this.addListeners();
  }

  addListeners = () => {
    let loadedProductList = [];
    this.state.productListRef.on("child_added", snap => {
      loadedProductList.push(snap.val());
      console.log(loadedProductList);
      //this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
    });
  };
  */

  render() {
    const styles = {
      media: {
        objectFit: "cover"
      },
      section: {
        height: "100%"
      }
    };

    return (
      <div className="my-3">
        <Grow in="true" {...{ timeout: 3000 }}>
          <Paper
            square={false}
            elevation={0}
            align="left"
            style={{ marginBottom: "20px" }}
          >
            <Typography variant="h5" component="h3">
              Membership Options
            </Typography>

            <Typography component="p">
              Short-term agreements keep things flexible.
            </Typography>
          </Paper>
        </Grow>

        <Grow in="true" {...{ timeout: 3000 }}>
          <Grid
            container
            spacing={8}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            {productListData.map(pl => (
              <Grid item md={3} key={pl.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="{name}"
                      className={styles.media}
                      height="150"
                      image={pl.photo}
                      title={pl.name}
                    />
                    <CardContent>
                      <Typography component="p">{pl.name}</Typography>
                      <Typography component="p">
                        <NumberFormat
                          value={pl.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={pl.currency}
                        />{" "}
                        /{pl.unit}
                      </Typography>
                      <hr />
                      <Typography
                        component="p"
                        style={{
                          minHeight: "20vh"
                        }}
                        align="left"
                        className={styles.section}
                      >
                        {pl.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        style={{ width: "100%" }}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </div>
    );
  }
}

export default ProductList;
