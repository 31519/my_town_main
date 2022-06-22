import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",

    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {},
  },

  inputDiv: {
    // border: "1px solid #a5b5be",
    margin: "10px 10px",
    borderRadius: "2px",
    // background: "red",
    padding: "5px",
    color: "black",
    display: "flex",
    border: "2px solid #cc93b3",
    width: "90%",
    "&:hover":{
      border: "2px  solid #fb008d"
    }
  },

  formInput: {
    flex: 1,
    border: "none",
    outline: "none",
    width: "60%",
    color: "black",
    letterSpacing:'1px'
  },
  formButton: {
    // padding: "5px 27px",
    border: "none",
    outline: "#fff",
    letterSpacing: "1px",
    cursor: "pointer",
    borderRadius: "3px",
    padding: "2px",
    background: "#cc93b3",
    color: " white",
    "&:hover":{
      background: "2px  solid #fb008d"
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

  return (
    <div className={classes.container}>
      {/* <form className={classes.formContainer} onSubmit={searchHandler}> */}
        <div className={classes.inputDiv}>
          <input
            className={classes.formInput}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="what you are looking for ?"
          />
          <button className={classes.formButton} onClick={searchHandler} type="submit">
            Search
          </button>
        </div>
      {/* </form> */}
    </div>
  );
};

// < className={classes.container}>
//* <Box
//   sx={{
//     width: 500,
//     maxWidth: "100%",
//   }}
// >
//   <TextField
//   className={classes.textField}
//     fullWidth
//     label="Search"
//     id="fullWidth"
//     value={keyword}
//     onChange={(e) => setKeyword(e.target.value)}
//   />
// </Box> */}
// </>
export default SearchBox;
