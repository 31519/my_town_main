import React, {useState} from "react";
import { useLocation, Link } from "react-router-dom";
import "../css_styles/Banner.css";
// import Pagination from '@mui/material/Pagination';
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactPaginate from "react-paginate";

const useStyles = makeStyles({
  gridHeader: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "blue",
    // border: "1px solid black",

    // borderRadius: "5px",
  },

  gridHeader1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  paginate: {
    border: "1px solid #da30f2",
    borderRadius: "2px",
    margin: "5px",
    "&:hover": {
      background: "#da30f2",
      color: "black",
      fontWeight: "900",
    },

  },

  activePaginate: {
    border: "1px solid #da30f2",
    borderRadius: "2px",
    margin: "5px",
    background: "#da30f2",
    "&:hover": {
      background: "black",
      color: "#da30f2",
      fontWeight: "900",
      border: "1px solid black",
    },

  },
  ptag: {
    padding: "8px 16px",
    textDecoration: "none",
    color: "black",
    fontFamily: "Helvetica",

    "&:hover": {
      color: "white",
      fontWeight: "900",
    },
  },
});

const Paginate = ({ pages, page, keyword = "" }) => {
  // const navigate = useNavigate()
  const [activePage, setActivePage] = useState(1);
  const location = useLocation();
  const pathname = location.pathname;
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  const classes = useStyles();


  
  return (
    pages > 1 && (
      <Grid className={classes.gridHeader1}>
        <Grid className={classes.gridHeader} xs={12} sm={12} lg={6} md={6} item>
          {[...Array(pages).keys()].map((x) => (
            <Link
              style={{ textDecoration: "none" }}
              key={x + 1}
              to={`${pathname}?keyword=${keyword}&page=${x + 1}`}
            >
              <div className={`${x + 1 === page  ? classes.activePaginate : classes.paginate} `}>
                <p className={classes.ptag}>{x + 1}</p>
                
              </div>

            </Link>
          ))}
        </Grid>
       
      </Grid>
    )
  );
};

export default Paginate;
