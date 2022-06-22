import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
// import randomColor from "randomcolor"

// const color = randomColor()

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "0px",
  },
  item: {
    margin: "10px 5px",
    border: "1px solid black",
    color: "black",
    flexWrap: "wrap",
    cursor: "pointer",
    backgroundColor: "#181818",
  },
  title: {
    margin: "5px 8px",
    fontFamily: "Monospace",
    color: "white",
    fontSize: "14px",
    fontWeight: 600,
  },
  link: {
    textDecoration: "none",
  },
  cardContainer: {
    display: "flex",
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "noWrap",
    padding: "0px 0px",
  },
  card: {
    display: "inline-block",
    borderRadius: "5px",
  },
  cardItem: {
    height: "120px",
    width: "100px",
    // border: "1px solid green",
    margin: "10px",
    borderRadius: "5px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    background: "#5de8ee3d",
  },
  cardTitle: {
    display: "flex",
    color: "#2d2f2f",
    fontFamily: "Helvetica",
    fontSize: "12px",
    position: "absolute",
    top: "80%",
    // left: "5%"
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },
});

const Categories = () => {
  const classes = useStyles();
  const listCategory = [
    {
      title: "Education",
      link: "/education",
      image: "images/static/education.jpg",
    },
    {
      title: "News",
      link: "/",
      image: "images/static/news.jpg",
    },
    {
      title: "Jobs",
      link: "/jobs",
      image: "images/static/jobs.jpg",
    },
    {
      title: "Advertise",
      link: "/advertise",
      image: "images/static/advertise.jpg",
    },
    {
      title: "Event/Scheme",
      link: "/event",
      image: "images/static/event.jpg",
    },
    {
      title: "Tourisms",
      link: "/tourisms",
      image: "images/static/tourisms.jpg",
    },
    // {
    //   title: "Celebrity",
    //   link: "/celebrity"
    // },
    {
      title: "Resell",
      link: "/resell",
      image: "images/static/resell.jpg",
    },
    // {
    //   title: "Rent In My Area",
    //   link: "/rental"
    // },
  ];

  // const init = () => {
  //   const items = document.getElementById('colors')
  //   items.style.backgroundColor = randomColor({hue: '#00FFFF', count: 18});
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].style.backgroundColor = randomColor({hue: '#00FFFF', count: 18});
  //   }
  // };

  // init();

  return (
    <>
      <div className={classes.cardContainer}>
        {listCategory &&
          listCategory.map((list) => (
            <div className={classes.card} key={list.title}>
              <Link className={classes.link} to={list.link}>
                <div className={classes.cardItem} id="allcolor">
                  {list.image && (
                    <img
                      className={classes.image}
                      src={list.image}
                      alt=""
                    />
                  )}
                  <h2 className={classes.cardTitle} variant="h3">
                    {list.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className={classes.container}>
        {listCategory &&
          listCategory.map((list) => (
            <div className={classes.item} key={list.title}>
              <Link className={classes.link} to={list.link}>
                <h2 className={classes.title} variant="h3">
                  {list.title}
                </h2>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
