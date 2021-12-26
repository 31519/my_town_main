import React from "react";
import Footers from "../components/Footers";
import Event from "../components/Event";
import "../css_styles/DetailEntertainment.css";
import EntertainmentDetail from "../components/EntertainmentDetail";
import {useLocation} from  'react-router-dom'

const tech = {
  title: "title",
  urlToImage:
    "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
  description: "description",
  author: "author",
  content: "content",
};
const DetailEntertainment = () => {

  const location = useLocation()
  const {models} = location.state
  return (
    <div>
      <div className="entertainment_main">
        <div className="entertainment_cards">
          <EntertainmentDetail tech={tech} models={models}/>
        </div>
        <div className="entertainment_advertise">
        <Event celeb={tech} />
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default DetailEntertainment;
