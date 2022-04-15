import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container:{
    backgroundColor:"white",
    display:"flex",
    flexWrap: "wrap"

  },
 item: {
   margin: "10px 10px",
   border: "1px solid black",
   color: "black",
   flexWrap: "wrap",
   cursor:"pointer"
 }, 
 title:{
   margin: "5px 8px",
   fontFamily: "Monospace",
   color: "black",
   fontWeight: 600
 },
 link :{
   textDecoration: "none",

 }
});

const Categories = () => {
  const classes = useStyles();
  const listCategory =  [
    {
      title: "News",
      link: "/",

    },
    {
      title: "Jobs",
      link: "/jobs"
    },
    {
      title: "Advertise",
      link: "/advertise"
    },
    {
      title: "Tourisms",
      link: "/tourisms"
    },
    {
      title: "Celebrity",
      link: "/celebrity"
    },
  ]
  return (

        
        <div className={classes.container}>
          {listCategory && listCategory.map((list) => (

            <div  className={classes.item} key={list.title}>
              <Link className={classes.link} to={list.link}>
                <h2 className={classes.title} variant="h3">
                  {list.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>

  );
};

export default Categories;
