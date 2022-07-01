import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#0d1e26",
    padding: "20px",
    display: "flex",
    justifyCotent: "center",
  },
  list: {
    fontSize: "16px",
    padding: "10px",
    color: "white",
    fontWeight: 500,
    fontFamily: "Helvetica",
    textAlign: "start",
    textDecoration: "none",
    transition: "all .2s ease",
    "&:hover": {
      fontSize: "18px",
    },
  },
  item: {
    margin: "10px 20px",
  },
  itemList: {
    marginTop: "20px",
  },
  title: {
    fontSize: "16px",
    padding: "5px 5px 0px 5px",
    color: "white",
    fontWeight: 700,
    fontFamily: "Helvetica",
    textAlign: "start",
    textDecoration: "none",
  },
  textLink: {
    textDecoration: "none",
  },
  breakLine: {
    background: "red",
    fontWeight: "900",
  },
  socialIcon: {
    // color: "blue",
    // background: "white",
    margin: "0px",
    padding: "0px",
    borderRadius: "5px",
  },
  linkName: {
    color: "#ced6d6",
    fontFamily:"Helvetica",
    fontSize: "9px"
  },
  linkDiv: {
    display: "flex",
  },
  linkDivList:{
    margin:"5px",
    alignItems:"center",
    textAlign:"center"
  }
}));

const Footers = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid spacing={2} container className={classes.container}>
        <Grid
          spacing={1}
          item
          xs={12}
          sm={12}
          lg={4}
          md={12}
          className={classes.item}
        >
          <h2 className={classes.title}>GET IN TOUCH</h2>
          <hr className={classes.breakLine} />
          <div className={classes.itemList}>
            <h2 className={classes.list} variant="h2">
              Shillong, Meghalaya , India
            </h2>

            <a className={classes.list} href="mailto:inmatown@gmail.com">
              inmatown@gmail.com
            </a>
            <Link className={classes.textLink} to="/privacy-policy#content">
              <h2 className={classes.list}>Privacy Policy</h2>
            </Link>
            <Link className={classes.textLink} to="/about-us">
              <h2 className={classes.list}>About Us</h2>
            </Link>
            <h2 className={classes.list}>Connect with us on</h2>
            <div className={classes.linkDiv}>
              <div className={classes.linkDivList}>
                <a
                  className={classes.list}
                  href="https://wa.me/8257984943?text=Hi"
                  target="_blank"
                >
                  <WhatsAppIcon
                    className={classes.socialIcon}
                  />
                </a>
                {/* <p className={classes.linkName}>memelander</p> */}
              </div>
              <div className={classes.linkDivList}>
                <a
                  className={classes.list}
                  href="https://www.instagram.com/inmatown/"
                  target="_blank"
                >
                  <InstagramIcon
                    className={classes.socialIcon}
                  />
                </a>
                {/* <p className={classes.linkName}>memelander</p> */}
              </div>
              <div className={classes.linkDivList}>
                <a
                  className={classes.list}
                  href="http://www.facebook.com/memelanderofficial/"
                  target="_blank"
                >
                  <FacebookIcon
                    className={classes.socialIcon}
                  />
                </a>
                {/* <p className={classes.linkName}>memelander</p> */}
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          spacing={1}
          item
          xs={12}
          sm={12}
          lg={4}
          md={12}
          className={classes.item}
        >
          <h2 className={classes.title}>LINKS</h2>
          <hr className={classes.breakLine} />
          <div className={classes.itemList}>
            <h2 className={classes.list} variant="h2">
              STARDUST
            </h2>
            <Link className={classes.textLink} to="/">
              <h2 className={classes.list}>www.inmatown.com</h2>
            </Link>
            <h2 className={classes.list}>All Right Reserved</h2>
            <h2 className={classes.list}>Created by: Stardust</h2>
          </div>
        </Grid>
        <Grid
          spacing={1}
          item
          xs={12}
          sm={12}
          lg={4}
          md={12}
          className={classes.item}
        >
          <h2 className={classes.title}>SPONSORED BY</h2>
          <hr className={classes.breakLine} />
          <div className={classes.itemList}>
            <h2 className={classes.list} variant="h2">
              STARDUST
            </h2>
            <Link className={classes.textLink} to="/inmatown.com">
              <h2 className={classes.list} variant="h2">
                INMATOWN
              </h2>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footers;
