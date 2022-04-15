import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextField, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    [theme.breakpoints.down('md')]: {
    }
  },
}));

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const classes = useStyles();

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`${pathname}?keyword=${keyword}`);
    } else {
      navigate(pathname);
    }
  };

  const searchInput = (e) => {
    if (keyword) {
      navigate(`${pathname}?keyword=${keyword}`);
    } else {
      navigate(pathname);
    }
  };
  return (
    <form style={{ margin: "0px" }} onSubmit={searchHandler}>
      <Grid className={classes.container}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
          className={classes.textField}
            fullWidth
            label="Search"
            id="fullWidth"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Box>
      </Grid>
    </form>
  );
};

export default SearchBox;
