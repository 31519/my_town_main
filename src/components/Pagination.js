import React from "react";
import { useLocation,Link} from 'react-router-dom'
// import "../css_styles/Banner.css";
// import Pagination from '@mui/material/Pagination';

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({


  gridHeader: {
    display:'flex',
    flexWrap:'wrap',
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
  },

  paginate:{
    "&:hover": {
      background: "green",
      color: "white",
      fontWeight: "900",
    },

  },
  ptag: {
    color:"black",
    padding: '8px 16px',
    textDecoration:'none',

    "&:hover": {
      color: "white",
      fontWeight: "900",
    },
  }
});

const Paginate = ({pages, page, keyword=''}) => {
  // const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0]
  }



  const classes = useStyles();



  return (pages > 1 && (

    
      <Grid className={classes.gridHeader1}>
        <Grid className={classes.gridHeader} xs={12} sm={12} lg={6} md={6} item>
          {[...Array(pages).keys()].map((x) => (
            <Link
            style={{textDecoration:'none'}}
            key = {x +1}
            to={`${pathname}?keyword=${keyword}&page=${x + 1}`}>
              <div className={classes.paginate} >

              <p className={classes.ptag}>{x + 1}</p>
              </div>
            </Link>
          ))}
        </Grid>
      </Grid>
    
  ));
};

export default Paginate;
