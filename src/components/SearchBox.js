import React, {useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom'
// import "../css_styles/Banner.css";
import SearchIcon from "@mui/icons-material/Search";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {

  Button,
  TextField
} from "@mui/material";


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    padding: "0 30px",
    backgrounColor: "red",
    flexWrap: "wrap",
    // height: '300px',
  },
  title1: {
    fontSize: "20px",
    padding: "5px 5px 0px 5px",
    color: "black",
    fontWeight: "bold",
  },
  title2: {
    fontSize: "16px",
    padding: "5px 5px 0px 5px",
    color: "black",
    margin: "20px",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  gridHeader: {
    display:'flex',
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    // border: "1px solid black",

    // borderRadius: "5px",
  },

  gridHeader1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    paddingBottom:"20px"
  },
  search: {
    "&:hover": {
      background: "green",
      color: "white",
      fontWeight: "900",
    },
  },

  button: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    "&:hover": {
      background: "green",
      color: "white",
      fontWeight: "900",
    },
  }
});

const SearchBox = () => {

  const [keyword, setKeyword] = useState("")

  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname

  const classes = useStyles();

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`${pathname}?keyword=${keyword}`)
    } else {
      navigate(pathname)
    }
  };
  return (
    
    <form style={{ margin: "0px" }} onSubmit={searchHandler}>
      <Grid className={classes.gridHeader1}>
        <Grid className={classes.gridHeader} xs={12} sm={12} lg={6} md={6} item>
          
          <TextField
            aria-label="empty textarea"
            label="Search"
            variant="filled" 
            value = {keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ width: "75%", height: "20px" }}
          />
          
          
          {/* <Button className={classes.button} type="submit" >
            <SearchIcon
              className={classes.search}
              style={{ fontWeight: "bold", color: "black" }}
            />
          </Button> */}
          
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBox;
