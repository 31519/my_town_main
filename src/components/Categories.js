import React from "react";
import "../css_styles/Categories.css";
import { Link } from "react-router-dom";

// import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  title: {
    fontSize: "16px",
    padding: "5px 5px 5px 5px",
    color: "white",
    backgroundColor: "green",
    borderRadius: "5px",
    "&:hover": {
      background: "white",
      color: "green",
      fontWeight: "900",
    },
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
    "&:hover": {
      background: "white",
    },
  },

  date: {
    opacity: 0.6,
    fontSize: "14px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
  },
  header: {
    fontSize: "20px",
  },
});

const Categories = () => {
  const classes = useStyles();
  return (
    <div className="techlist_footer_items_component">
      <div className="techlist_footers_category">
        <div className="techlist_footer_category_title">
          <h2>CATEGORIES</h2>
        </div>
        <div className="techlist_footer_category_item">
          <div>
            <Link className="text-link" to="/">
              <h2 className={classes.title} variant="h3">
                News
              </h2>
            </Link>
          </div>
          {/* <div className="hover-item">
            <Link className="text-link" to="/science-screen">
              <h2 className={classes.title} variant="h3">
                Science
              </h2>
            </Link>
          </div> */}
          {/* <div>
            <Link className="text-link" to="/health-screen">
              <h2 className={classes.title} variant="h3">
                Health
              </h2>
            </Link>
          </div> */}

          {/* <div>
            <Link className="text-link" to="/technology">
              <h2 className={classes.title} variant="h3">
                Technology
              </h2>
            </Link>
          </div> */}

          {/* <div>
            <Link className="text-link" to="/business-screen">
              <h2 className={classes.title} variant="h3">
                Business
              </h2>
            </Link>
          </div> */}

          <div>
            <Link className="text-link" to="/jobs">
              <h2 className={classes.title} variant="h3">
                Jobs
              </h2>
            </Link>
          </div>

          <div>
            <Link className="text-link" to="/tourisms">
              <h2 className={classes.title} variant="h3">
                Tourisms
              </h2>
            </Link>
          </div>

          <div>
            <Link className="text-link" to="/celebrity">
              <h2 className={classes.title} variant="h3">
                Celebrity
              </h2>
            </Link>
          </div>

          <div>
            <Link className="text-link" to="/event">
              <h2 className={classes.title} variant="h3">
                Event
              </h2>
            </Link>
          </div>
          
          <div>
            <Link className="text-link" to="/advertise">
              <h2 className={classes.title} variant="h3">
                Advertise
              </h2>
            </Link>
          </div>

          <div>
            <Link className="text-link" to="/reseller">
              <h2 className={classes.title} variant="h3">
                Reseller
              </h2>
            </Link>
          </div>
          <div>
            <Link className="text-link" to="/hotels">
              <h2 className={classes.title} variant="h3">
                Hotels
              </h2>
            </Link>
          </div>
          <div>
            <Link className="text-link" to="/shops">
              <h2 className={classes.title} variant="h3">
                Shop
              </h2>
            </Link>
          </div>

          <div>
            <Link className="text-link" to="/meme">
              <h2 className={classes.title} variant="h3">
                Meme
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
