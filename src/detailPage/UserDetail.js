import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

import { profileDetailActions } from "../actions/userActions";

import {useSelector, useDispatch} from "react-redux"


const UserDetail = ({ tech }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const profileDetail = useSelector((state) => state.profileDetail);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

  const {
    profile
  } = profileDetail   

  useEffect(() => {
    if (!userInfo) {
        navigate('/register')
    }
    dispatch(profileDetailActions())
  }, [dispatch, userInfo])


  return (
    <>
      <div className="dashboard">
        <div className="dashboard_header">
          <div className="profile-img">this</div>
          <div className="dashboard_email">
            {
            profile
            ? (
                <div>
            
            <h3> {profile.username} </h3>
            <h3> {profile.firstName} </h3>
            <h3> {profile.lastName} </h3>
            <h3> {profile.state} </h3>
            <h3> {profile.town} </h3>
            <h3> {profile.country} </h3>
            <h3> {profile.pincode} </h3>
            <h3> {profile.phoneNumber} </h3>
            <h3> {profile.profession} </h3>
            <h3> {profile.isApproved} </h3>
            </div>
            
            )
            :<h3>No profile </h3>
            
            }
          </div>
          {profile &&
          <Link to={`/user-update/${profile.id}`}>
            <div className="dashboard_edit">
              <h3> Edit Profile </h3>
            </div>
          </Link>
          }
        </div>

      </div>
    </>
  );
};

export default UserDetail;
