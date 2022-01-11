import "./App.css";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbars from "./navbars/Navbars";
import {useEffect} from "react";
// import RouteChangeTracker from "./components/RouteChangeTracker";


// import TechList from "./screens/TechLIst";
import TechCreate from "./admin-screen/TechCreate";
import DetailTechList from "./screens/DetailTechList";

import HealthScreen from "./screens/HealthScreen"
import BusinessScreen from "./screens/BusinessScreen";
import ScienceScreen from "./screens/ScienceScreen";

import LoginScreens from "./screens/LoginScreens"
import CelebrityScreen from "./screens/CelebrityScreen";
import Tourisms from "./screens/TourismsScreen";
import DetailEntertainment from "./screens/DetailEntertainment";
import ShopScreen from "./screens/ShopScreen";
import DetailProductiivity from "./screens/DetailProductivity";
import AdminDashboard from "./admin-screen/AdminDashboard";
import Register  from "./screens/Register"
import UserDashboard from "./screens/UserDashboard";
import Hotels from "./screens/HotelsScreen"
import JobsScreen from "./screens/JobsScreen";
import AdvertiseScreen from "./screens/AdvertiseScreen";
import ResellerScreen from "./screens/ResellerScreen";
import EventScreen from "./screens/EventScreen";
import ProductivityCreate from "./admin-screen/ProductivityCreate";
import UserProfileEdit from "./screens/UserProfileEdit";
import UserUpdate from "./screens/UserUpdate";
import HomeScreen from "./screens/HomeScreen";

// import ShopHomePage from "./screens/ShopHomePage";

// DETAIL PAGES

import TechnologyDetail from "./detailPage/TechnologyDetail"

import AdvertiseDetail from "./detailPage/AdvertiseDetail";
import CelebrityDetail from "./detailPage/CelebrityDetail";
import EventDetail from "./detailPage/EventDetail";
import ResellerDetail from "./detailPage/ResellerDetail";
import JobDetail from "./detailPage/JobDetail";
import HotelDetail from "./detailPage/HotelDetail";
import ShopDetail from "./detailPage/ShopDetail";
import TourismsDetail from "./detailPage/TourismsDetail";
import UserDetail from "./detailPage/UserDetail";
import MemeDetail from "./detailPage/MemeDetail";
import LocalDetail from "./detailPage/LocalDetail";

// CREATE SCREEN
import AdvertiseCreate from "./createPage/AdvertiseCreate";
import CelebrityCreate from "./createPage/CelebrityCreate";
import EventCreate from "./createPage/EventCreate";
import ResellerCreate from "./createPage/ResellerCreate";
import JobCreate from "./createPage/JobCreate";
import HotelCreate from "./createPage/HotelCreate";
import ShopCreate from "./createPage/ShopCreate";
import TourismsCreate from "./createPage/TourismsCreate"
import RequestFormCreate from "./updatePage/RequestFormCreate"

// UPDATE SCREEN
import UserPostUpdate  from "./screens/UserPostUpdate"
import CelebrityUpdate from "./updatePage/CelebrityUpdate";
import EventUpdate from "./updatePage/EventUpdate";
import ResellerUpdate from "./updatePage/ResellerUpdate";
import JobUpdate from "./updatePage/JobUpdate";
import HotelUpdate from "./updatePage/HotelUpdate";
import ShopUpdate from "./updatePage/ShopUpdate";
import TourismsUpdate from "./updatePage/TourismsUpdate";
import MemeUpdate from "./updatePage/MemeUpdate";
import LocalnewsUpdate from "./updatePage/LocalNewsUpdate";
import RequestFormUpdate from "./updatePage/RequestFormUpdate"
// import AdvertiseUpdate from "./updatePage/AdvertiseUpdate";


import LocalScreen from "./screens/LocalScreen";
import MemeScreen from "./screens/MemeScreen";



// PRIVACY POLICY

import PrivacyPolicy from "./screens/PrivacyPolicy"

// ABOUT US 
import AboutUs from "./screens/AboutUs"


function App() {

  // ReactGA.initialize("G-PY5JB3D19S");


  return (
    <div className="App" style={{backgrounColor:"#e0e7e9ee"}}>
      <Router>
        <Navbars />
        <Routes>


          <Route path="/login" element={<LoginScreens/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/user-update/:id" element={<UserUpdate/>} />
          <Route path="/my-dashboard" element={<UserDashboard/>} />

          <Route path="/health-screen" element={<HealthScreen/>} />
          <Route path="/business-screen" element={<BusinessScreen/>} />
          <Route path="/science-screen" element={<ScienceScreen/>} />

          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/local" element={<LocalScreen/>} />
          <Route path="/meme" element={<MemeScreen/>} />

          <Route path="/celebrity" element={<CelebrityScreen/>} />
          <Route path="/tourisms" element={<Tourisms/>} />
          <Route path="/shops" element={<ShopScreen/>} />
          <Route path="/hotels" element={<Hotels/>} />
          <Route path="/jobs" element={<JobsScreen/>} />
          <Route path="/advertise" element={<AdvertiseScreen/>} />
          <Route path="/reseller" element={<ResellerScreen/>} />
          <Route path="/event" element={<EventScreen/>} />
          
          <Route path="/news-detail" element={<DetailTechList/>} />
          <Route path="/productivity-detail" element={<DetailProductiivity/>} />
          <Route path="/celebrity-detail" element={<DetailEntertainment/>} />
          

          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/tech-create" element={<TechCreate/>} />
          <Route path="/productivity-create" element={<ProductivityCreate/>} />
          <Route path="/user-profile-edit" element={<UserProfileEdit/>} />


          <Route path="/technology-detail/:id/:slug" element={<TechnologyDetail/>} />

          <Route path="/advertise-detail/:id/:slug" element={<AdvertiseDetail/>} />
          <Route path="/celebrity-detail/:id/:slug" element={<CelebrityDetail/>} />
          <Route path="/event-detail/:id/:slug" element={<EventDetail/>} />
          <Route path="/reseller-detail/:id/:slug" element={<ResellerDetail/>} />
          <Route path="/job-detail/:id/:slug" element={<JobDetail/>} />
          <Route path="/hotel-detail/:id/:slug" element={<HotelDetail/>} />
          <Route path="/shop-detail/:id/:slug" element={<ShopDetail/>} />
          <Route path="/tourisms-detail/:id/:slug" element={<TourismsDetail/>} />
          <Route path="/user-detail" element={<UserDetail/>} />
          <Route path="/meme-detail/:id/:slug" element={<MemeDetail/>} />
          <Route path="/local-detail/:id/:slug" element={<LocalDetail/>} />

          <Route path="/advertise-create" element={<AdvertiseCreate/>} />
          <Route path="/celebrity-create" element={<CelebrityCreate/>} />
          <Route path="/event-create" element={<EventCreate/>} />
          <Route path="/reseller-create" element={<ResellerCreate/>} />
          <Route path="/job-create" element={<JobCreate/>} />
          <Route path="/hotel-create" element={<HotelCreate/>} />
          <Route path="/shop-create" element={<ShopCreate/>} />
          <Route path="/tourisms-create" element={<TourismsCreate/>} />
          <Route path="/requestform-update/:id/:slug" element={<RequestFormUpdate/>} />

          <Route path="/advertise-update/:id/:slug" element={<UserPostUpdate/>} />
          <Route path="/celebrity-update/:id/:slug" element={<CelebrityUpdate/>} />
          <Route path="/event-update/:id/:slug" element={<EventUpdate/>} />
          <Route path="/reseller-update/:id/:slug" element={<ResellerUpdate/>} />
          <Route path="/job-update/:id/:slug" element={<JobUpdate/>} />
          <Route path="/hotel-update/:id/:slug" element={<HotelUpdate/>} />
          <Route path="/shop-update/:id/:slug" element={<ShopUpdate/>} />
          <Route path="/tourisms-update/:id/:slug" element={<TourismsUpdate/>} />
          <Route path="/meme-update/:id/:slug" element={<MemeUpdate/>} />
          <Route path="/local-update/:id/:slug" element={<LocalnewsUpdate/>} />
          <Route path="/requestform-create" element={<RequestFormCreate/>} />

          {/* Privacy policy */}

          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          
          {/* About us */}
          <Route path="/about-us" element={<AboutUs/>} />
          {/* <Route path="/shop-home-page" element={<ShopHomePage/>} /> */}


        </Routes>
      </Router>
    </div>
  );
}

export default App;