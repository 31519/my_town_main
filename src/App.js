import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./navbars/Navbars";
// import RouteChangeTracker from "./components/RouteChangeTracker";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./component/Theme";


import LoginScreens from "./screens/LoginScreens"
import CelebrityScreen from "./screen/CelebrityScreen";
import Tourisms from "./screen/TourismsScreen";
import AdminDashboard from "./admin-screen/AdminDashboard";
import Register  from "./screens/Register"
import UserDashboard from "./screens/UserDashboard";
import JobsScreen from "./screen/JobsScreen";
import AdvertiseScreen from "./screen/AdvertiseScreen";
import UserUpdate from "./screens/UserUpdate";
import Footers from "./components/Footers";




// import ShopHomePage from "./screens/ShopHomePage";

// DETAIL PAGES

import AdvertiseDetail from "./detailScreen/AdvertiseDetail";
import CelebrityDetail from "./detailScreen/CelebrityDetail";
import JobDetail from "./detailScreen/JobDetail";
import TourismsDetail from "./detailScreen/TourismsDetail";
import UserDetail from "./detailPage/UserDetail";
import LocalDetail from "./detailScreen/LocalDetail";


import RequestFormCreate from "./updatePage/RequestFormCreate"

// UPDATE SCREEN
import UserPostUpdate  from "./screens/UserPostUpdate"
import CelebrityUpdate from "./updatePage/CelebrityUpdate";
import JobUpdate from "./updatePage/JobUpdate";
import TourismsUpdate from "./updatePage/TourismsUpdate";
import LocalnewsUpdate from "./updatePage/LocalNewsUpdate";
import RequestFormUpdate from "./updatePage/RequestFormUpdate"


import News from "./screen/News";
import Header from "./screen/Header";



// PRIVACY POLICY

import PrivacyPolicy from "./screens/PrivacyPolicy"

// ABOUT US 
import AboutUs from "./screens/AboutUs"


function App() {

  // ReactGA.initialize("G-PY5JB3D19S");


  return (
    <div className="App" style={{backgrounColor:"#e0e7e9ee"}}>
      <ThemeProvider theme={Theme}>
      <Router>
      <Navbars />
      {/* <!-- Ezoic - top_of_page - top_of_page --> */}
      <div id="ezoic-pub-ad-placeholder-104"> </div>
      {/* <!-- End Ezoic - top_of_page - top_of_page --> */}
      <Header/>
        <Routes>

          {/* app test git nwo now test build */}


          <Route path="/login" element={<LoginScreens/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/user-update/:id" element={<UserUpdate/>} />
          <Route path="/my-dashboard" element={<UserDashboard/>} />
          <Route path="/" element={<News/>} />

          <Route path="/celebrity" element={<CelebrityScreen/>} />
          <Route path="/tourisms" element={<Tourisms/>} />
          <Route path="/jobs" element={<JobsScreen/>} />
          <Route path="/advertise" element={<AdvertiseScreen/>} />
          
          

          <Route path="/admin-dashboard" element={<AdminDashboard/>} />

          <Route path="/advertise-detail/:id/:slug" element={<AdvertiseDetail/>} />
          <Route path="/celebrity-detail/:id/:slug" element={<CelebrityDetail/>} />

          <Route path="/job-detail/:id/:slug" element={<JobDetail/>} />
          <Route path="/tourisms-detail/:id/:slug" element={<TourismsDetail/>} />
          <Route path="/user-detail" element={<UserDetail/>} />
          <Route path="/local-detail/:id/:slug" element={<LocalDetail/>} />

          <Route path="/requestform-update/:id/:slug" element={<RequestFormUpdate/>} />

          <Route path="/advertise-update/:id/:slug" element={<UserPostUpdate/>} />
          <Route path="/celebrity-update/:id/:slug" element={<CelebrityUpdate/>} />
          <Route path="/job-update/:id/:slug" element={<JobUpdate/>} />
          <Route path="/tourisms-update/:id/:slug" element={<TourismsUpdate/>} />
          <Route path="/local-update/:id/:slug" element={<LocalnewsUpdate/>} />
          <Route path="/requestform-create" element={<RequestFormCreate/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/about-us" element={<AboutUs/>} />


        </Routes>
        <>
        {/* <!-- Ezoic - bottom_of_page - bottom_of_page --> */}
        <div id="ezoic-pub-ad-placeholder-107"> </div>
        {/* <!-- End Ezoic - bottom_of_page - bottom_of_page --> */}
        <Footers/>
        </>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;