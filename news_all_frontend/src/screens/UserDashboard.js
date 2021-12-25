import React, {useEffect} from "react";
import "../css_styles/UserDashboard.css";
import AdminSidebar from "../components/AdminSidebar";
import PerformanceChart from "../components/PerformanceChart";
// import AdminTable from "../components/Table";
import PostTable from "../components/PostTable";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom"

const tech = [
  {
    title: "title",
    urlToImage:
      "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
    description: "description",
    author: "author",
    content: "content",
  },
  {
    title: "title",
    urlToImage:
      "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
    description: "description",
    author: "author",
    content: "content",
  },
];
const UserDashboard = ({ tech }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo){
      navigate("/")
    }
  }, [dispatch, userInfo])

  return (
    <div className="user_dashboard">
      <div className="user_dashboard_top">User Dashboard</div>

      <div className="user_dashboard_main">
        <div className="user_dashboard_sidebar">
          <AdminSidebar />
        </div>
        <div className="user_dashboard_body">
          <div className="user_dashboard_post_update">
            <div className="user_dashboard_post_text">Create Post</div>
            <div className="user_dashboard_post_item">
              <div className="user_dashboard_post_item1">
                <Link to="/advertise-create">Advertise</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/celebrity-create">Celebrity</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/event-create">Event</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/reseller-create">Reseller</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/job-create">Jobs</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/hotel-create">Hotels</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/shop-create">Shops</Link>
              </div>
              <div className="user_dashboard_post_item1">
                <Link to="/tourisms-create">Tourisms</Link>
              </div>
              
            </div>
          </div>
          <PerformanceChart />
          <div className="user_dashboard_status">
            <div className="user_dashboard_status1">
              <div className="user_dashboard_status1_items">Icon</div>
              <div className="user_dashboard_status1_items">
                Visitors
                <br />
                1235
              </div>
            </div>
            <div className="user_dashboard_status1">
              <div className="user_dashboard_status1_items">Icon</div>
              <div className="user_dashboard_status1_items">
                Page Views
                <br />
                1235
              </div>
            </div>
          </div>
          <div className="user_dashboard_post">
            <h2 className="user_dashboard_post_text">Jobs</h2>
            <PostTable cat={"Jobs"} />
            <h2 className="user_dashboard_post_text">Advertise</h2>
            <PostTable cat={"Advertise"} />
            <h2 className="user_dashboard_post_text">Shops</h2>
            <PostTable cat={"Shops"} />
            <h2 className="user_dashboard_post_text">Business</h2>
            <PostTable cat={"Business"} />
            <h2 className="user_dashboard_post_text">Celebrities</h2>
            <PostTable cat={"Celebrities"} />
            <h2 className="user_dashboard_post_text">Hotels</h2>
            <PostTable cat={"Hotels"} />
            <h2 className="user_dashboard_post_text">Tourisms</h2>
            <PostTable cat={"Tourisms"} />
          </div>
        </div>
        <div className="users">Hi</div>
      </div>
    </div>
  );
};

export default UserDashboard;
