// import "./App.css";
import "./css_styles/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import RouteChangeTracker from "./components/RouteChangeTracker";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./component/Theme";
import CelebrityScreen from "./screen/CelebrityScreen";
import Tourisms from "./screen/TourismsScreen";
import AdminDashboard from "./admin-screen/AdminDashboard";
import Signup from "./screen/Signup";
import Login from "./screen/Login";
import UserDashboard from "./screens/UserDashboard";
import JobsScreen from "./screen/JobsScreen";
import ResellScreen from "./screen/ResellScreen";
import EducationScreen from "./screen/EducationScreen";
import AdvertiseScreen from "./screen/AdvertiseScreen";
import EventScreen from "./screen/EventScreen";
import RentalScreen from "./screen/RentalScreen";
import UserUpdate from "./screens/UserUpdate";

// import ShopHomePage from "./screens/ShopHomePage";

// DETAIL PAGES

import AdvertiseDetail from "./detailScreen/AdvertiseDetail";
import CelebrityDetail from "./detailScreen/CelebrityDetail";
import JobDetail from "./detailScreen/JobDetail";
import TourismsDetail from "./detailScreen/TourismsDetail";
import UserDetail from "./detailPage/UserDetail";
import LocalDetail from "./detailScreen/LocalDetail";
import ResellDetail from "./detailScreen/ResellDetail";
import EducationDetail from "./detailScreen/EducationDetail";
import EventDetail from "./detailScreen/EventDetail";
import RentalDetail from "./detailScreen/RentalDetail";

// import RequestFormCreate from "./updatePage/RequestFormCreate";

// UPDATE SCREEN
import CelebrityUpdate from "./updatePage/CelebrityUpdate";
import JobUpdate from "./updatePage/JobUpdate";
import TourismsUpdate from "./updatePage/TourismsUpdate";
import LocalnewsUpdate from "./updatePage/LocalNewsUpdate";
// import RequestFormUpdate from "./updatePage/RequestFormUpdate";
import AdvertiseUpdate from "./updatePage/AdvertiseUpdate";
import ResellerUpdate from "./updatePage/ResellerUpdate";

import News from "./screen/News";


import { Helmet } from "react-helmet";

// PRIVACY POLICY

import PrivacyPolicy from "./screens/PrivacyPolicy";

// ABOUT US
import AboutUs from "./screens/AboutUs";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    overflowX: 'hidden'
  }
}));

function App() {
  const classes = useStyles();
  // ReactGA.initialize("G-PY5JB3D19S");
  const dispatch = useDispatch();
  
  const PageVisit = async (e) => {
    try{

      const { data } = await axios.put(
        `api/users/createViews/`,
        {VeiwPage : 'UserVisit'}
        
        );
      } catch (eror){
        return;
      }
  }

  useEffect(() => {
    PageVisit()
  }, [dispatch,]);

  return (
    <div className="App" style={{ backgrounColor: "#e0e7e9ee" }}>
      <Helmet>
        <title>Inmatown</title>
        <meta name="description" content="inmatown" />
      </Helmet>
      <ThemeProvider theme={Theme}>
        <Router>
          
          {/* <!-- Ezoic - top_of_page - top_of_page --> */}
          <div id="ezoic-pub-ad-placeholder-104"> </div>
          {/* <!-- End Ezoic - top_of_page - top_of_page --> */}
          
          <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
            {/* app test git nwo now test build */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-update/:id" element={<UserUpdate />} />
            <Route path="/my-dashboard" element={<UserDashboard />} />
            <Route path="/" element={<News />} />

            <Route path="/celebrity" element={<CelebrityScreen />} />
            <Route path="/tourisms" element={<Tourisms />} />
            <Route path="/jobs" element={<JobsScreen />} />
            <Route path="/resell" element={<ResellScreen />} />
            <Route path="/education" element={<EducationScreen />} />
            <Route path="/advertise" element={<AdvertiseScreen />} />
            <Route path="/event" element={<EventScreen />} />
            <Route path="/rental" element={<RentalScreen />} />

      

            <Route
              path="/advertise-detail/:id/:slug"
              element={<AdvertiseDetail />}
            />
            <Route
              path="/rental-detail/:id/:slug"
              element={<RentalDetail />}
            />
            <Route
              path="/resell-detail/:id/:slug"
              element={<ResellDetail />}
            />
            <Route
              path="/celebrity-detail/:id/:slug"
              element={<CelebrityDetail />}
            />
            <Route
              path="/education-detail/:id/:slug"
              element={<EducationDetail />}
            />

            <Route path="/job-detail/:id/:slug" element={<JobDetail />} />
            <Route
              path="/tourisms-detail/:id/:slug"
              element={<TourismsDetail />}
            />
            <Route
              path="/event-detail/:id/:slug"
              element={<EventDetail />}
            />
            <Route path="/user-detail" element={<UserDetail />} />
            <Route path="/local-detail/:id/:slug" element={<LocalDetail />} />

            {/* <Route
              path="/requestform-update/:id/:slug"
              element={<RequestFormUpdate />}
            /> */}

            <Route
              path="/advertise-update/:id/:slug"
              element={<AdvertiseUpdate />}
            />
            <Route
              path="/reseller-update/:id/:slug"
              element={<ResellerUpdate />}
            />
            <Route
              path="/celebrity-update/:id/:slug"
              element={<CelebrityUpdate />}
            />
            <Route path="/job-update/:id/:slug" element={<JobUpdate />} />
            <Route
              path="/tourisms-update/:id/:slug"
              element={<TourismsUpdate />}
            />
            <Route
              path="/local-update/:id/:slug"
              element={<LocalnewsUpdate />}
            />
            {/* <Route path="/requestform-create" element={<RequestFormCreate />} /> */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <div className={classes.container}>
            
            {/* <!-- Ezoic - bottom_of_page - bottom_of_page --> */}
            <div id="ezoic-pub-ad-placeholder-107"> </div>
            {/* <!-- End Ezoic - bottom_of_page - bottom_of_page --> */}
            
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
