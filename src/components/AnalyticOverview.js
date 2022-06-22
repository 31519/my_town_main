import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OverviewDataTable from "../components/OverviewDataTable";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    padding: "20px 0px"
  },
  analyticContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    alignItem: "center",
    backgroundColor: "inherit",
  },
  analyticSubContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignItem: "center",
    width: "100%",
  },

  analyticDetailContainer: {
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#191c24",
    height: "150px",
    width: "100%",
    margin: "20px",
    borderRadius: "5px",
    border: "1px solid rgba(141, 75, 75, 0.125)",
  },
  pageViewText: {
    fontFamily: "Helvetica",
    fontSize: "20px",
    color: "white",
    margin: "5px"
  },
  pageViewNumber: {
    fontFamily: "Helvetica",
    fontSize: "25px",
    color: "rgb(0, 224, 255)",
    margin: "5px"
  },
  divContainer1:{
    margin: "20px 10px",
  },  
  divContainer2:{
    margin: "10px",
    width: "150px",
    height: "100px",
    display:"flex",
    justifyContent: "center",
    borderRadius: "5px",
    background: "#c3f2f4"
  },
  imageView:{
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "5px"
    // margin: "20px 10px",
  },
  YesterdayLog: {
    color:"#fc424a",
    fontFamily: "Helvetica",
    fontSize: "12px",
    margin: "5px",
    letterSpacing: "1.2px"
  },
  TodayLog: {
    color:"#00d25b",
    fontFamily: "Helvetica",
    fontSize: "12px",
    margin: "5px",
    letterSpacing: "1.2px"
  }
}));

const image1 = "images/static/analysis-tree-graph.png"
const image2 = "images/static/analytics-graph.png"
const image3 = "images/static/browser-graph.png"
const image4 = "images/static/business-graph.jpg"
const image5 = "images/static/chart-graph.jpg"
const image6 = "images/static/internet-graph.jpg"
const image7 = "images/static/line-graph.png"



const AnalyticOverview = ({ data }) => {
  const classes = useStyles();


  // Todays date
  const myDate =  new Date()
  // const date = myDate.getDate()
  // const currentMonth = myDate.getMonth() + 1
  // const year = myDate.getFullYear()

  const tday = myDate.toJSON()
  const today = tday.split("T")[0]
  // console.log("today", today)

  // const today = `${year }-0${currentMonth}-${date}`
  

  // Yesterday Date
  const prev_date = new Date()
  prev_date.setDate(prev_date.getDate() - 1)
  const YesDate = prev_date.toJSON();

  const yesterday = YesDate.split("T")[0]
  // console.log("yesterday", yesterday)
  
  const UserVisit = [];
  const Resell = [];
  const Tourisms = [];
  const Event = [];
  const Advertise = [];
  const Jobs = [];
  const Education = [];
  const News = [];



  const item = (models, pageName) => {
    models.forEach((data) => pageName.push(data.page));
  };

  const UserVisitArray = data.filter((pages) => pages.page === "UserVisit");
  const ResellArray = data.filter((pages) => pages.page === "Resell");
  const TourismsArray = data.filter((pages) => pages.page === "Tourisms");
  const EventArray = data.filter((pages) => pages.page === "Event");
  const AdvertiseArray = data.filter((pages) => pages.page === "Advertise");
  const JobsArray = data.filter((pages) => pages.page === "Jobs");
  const EducationArray = data.filter((pages) => pages.page === "Education");
  const NewsArray = data.filter((pages) => pages.page === "LocalNews");

  // Today Views
  const UserVisitDateArray = UserVisitArray.filter((datas) => datas.date === `${today}` && datas.page === "UserVisit")
  const NewsDateArray = NewsArray.filter((datas) => datas.date === `${today}` && datas.page === "LocalNews")
  const ResellDateArray = ResellArray.filter((datas) => datas.date === `${today}` && datas.page === "Resell")
  const TourismsDateArray = TourismsArray.filter((datas) => datas.date === `${today}` && datas.page === "Tourisms")
  const EventDateArray = EventArray.filter((datas) => datas.date === `${today}` && datas.page === "Event")
  const AdvertiseDateArray = AdvertiseArray.filter((datas) => datas.date === `${today}` && datas.page === "Advertise")
  const JobsDateArray = JobsArray.filter((datas) => datas.date === `${today}` && datas.page === "Jobs")
  const EducationDateArray = EducationArray.filter((datas) => datas.date === `${today}` && datas.page === "Education")


  // Yesterday Views
  const YesterdayUserVisitDateArray = UserVisitArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "UserVisit")
  const YesterdayNewsDateArray = NewsArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "LocalNews")
  const YesterdayResellDateArray = ResellArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "Resell")
  const YesterdayTourismsDateArray = TourismsArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "Tourisms")
  const YesterdayEventDateArray = EventArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "Event")
  const YesterdayAdvertiseDateArray = AdvertiseArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "Advertise")
  const YesterdayJobsDateArray = JobsArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "Jobs")
  const YesterdayEducationDateArray = EducationArray.filter((datas) => datas.date === `${yesterday}` && datas.page === "Education")
  

  item(UserVisitArray, UserVisit);
  item(ResellArray, Resell);
  item(TourismsArray, Tourisms);
  item(EventArray, Event);
  item(AdvertiseArray, Advertise);
  item(JobsArray, Jobs);
  item(EducationArray, Education);
  item(NewsArray, News);
  // item(DateArray, TodayDate);
  // console.log("items", UserVisitDateArray);
  // console.log("uservisitArray", UserVisitArray)

  return (
    <Grid className={classes.main}>
      <Grid className={classes.analyticContainer} container>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
            
            <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>User Visit</h6>
              <h4 className={classes.pageViewNumber}>{UserVisit && UserVisit.length}</h4>
              <p className={classes.TodayLog}>Today - {UserVisitDateArray && UserVisitDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayUserVisitDateArray && YesterdayUserVisitDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image1} alt ="" />
            </div>
          </div>

        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
            <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>News Visit</h6>
              <h4 className={classes.pageViewNumber}>{ News && News.length}</h4>
              <p className={classes.TodayLog}>Today - {NewsDateArray && NewsDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayNewsDateArray && YesterdayNewsDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image2} alt=""/>
            </div>
          </div>
        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>Advertise Visit</h6>
              <h4 className={classes.pageViewNumber}>{Advertise && Advertise.length}</h4>
              <p className={classes.TodayLog}>Today - {AdvertiseDateArray && AdvertiseDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayAdvertiseDateArray && YesterdayAdvertiseDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image3} alt=""/>
            </div>
          </div>
        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>Education Visit</h6>
              <h4 className={classes.pageViewNumber}>{Education && Education.length}</h4>
              <p className={classes.TodayLog}>Today - {EducationDateArray && EducationDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayEducationDateArray && YesterdayEducationDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image4} alt=""/>
            </div>
          </div>
        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>Event Visit</h6>
              <h4 className={classes.pageViewNumber}>{Event && Event.length}</h4>
              <p className={classes.TodayLog}>Today - {EventDateArray && EventDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayEventDateArray && YesterdayEventDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image1} alt=""/>
            </div>
          </div>
        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>Reseller Visit</h6>
              <h4 className={classes.pageViewNumber}>{Resell && Resell.length}</h4>
              <p className={classes.TodayLog}>Today - {ResellDateArray && ResellDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayResellDateArray && YesterdayResellDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image5} alt=""/>
            </div>
          </div>
        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>Tourisms Visit</h6>
              <h4 className={classes.pageViewNumber}>{Tourisms && Tourisms.length}</h4>
              <p className={classes.TodayLog}>Today - {TourismsDateArray && TourismsDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayTourismsDateArray && YesterdayTourismsDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image6} alt=""/>
            </div>
          </div>
        </Grid>
        <Grid className={classes.analyticSubContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.analyticDetailContainer} item xs={12} sm={12} lg={4}>
          <div className={classes.divContainer1} >
              <h6 className={classes.pageViewText}>Jobs Visit</h6>
              <h4 className={classes.pageViewNumber}>{Jobs && Jobs.length}</h4>
              <p className={classes.TodayLog}>Today - {JobsDateArray && JobsDateArray.length}</p>
              <p className={classes.YesterdayLog}>Yesterday - {YesterdayJobsDateArray && YesterdayJobsDateArray.length}</p>
            </div>
            <div className={classes.divContainer2}>
              <img className={classes.imageView} src={image7} alt=""/>
            </div>
          </div>
        </Grid>
      </Grid>
      <OverviewDataTable model={data}/>
    </Grid>
  );
};

export default AnalyticOverview;
