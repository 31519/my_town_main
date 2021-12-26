import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";

import {PROFILE_UPDATE_RESET} from "../constants/userConstants"

import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { 
    userDetailActions,
    userUpdateActions,

    profileDetailActions,
    profileUpdateActions

 } from "../actions/userActions";

import "../css_styles/Signup.css";

const UserUpdate = () => {
    const params = useParams()
    const profile_id = params.id



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [isApproved, setIsApproved] = useState(false);



  const navigate = useNavigate()

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const userUpdate = useSelector((state) => state.userUpdate)


  const profileDetail = useSelector((state) => state.profileDetail);
  const profileUpdate = useSelector((state) => state.profileUpdate)


  const {
    error:   detailUserError,
    loading: detailUserLoading,
    user   : detailUser,
  } = userDetail;

  const {
      error:    updateUserError,
      loading:  updateUserLoading,
      user    : updateUser,
      success : updateUserSuccess
  } = userUpdate

  const {
    error:   detailProfileError,
    loading: detailProfileLoading,
    profile 
  } = profileDetail;

  const {
      error:    updateProfileError,
      loading:  updateProfileLoading,
      profile : updateProfile,
      success : updateProfileSuccess
  } = profileUpdate


  useEffect(() => {
    if(updateProfileSuccess){
        dispatch({type: PROFILE_UPDATE_RESET})
        navigate('/my-dashboard')
    } else {
        if(profile.id !==Number(profile_id) ){

        dispatch(profileDetailActions())
        } else {
            setUsername(profile.username)
            setEmail(profile.email)
            setFirstName(profile.firstName)
            setLastName(profile.lastName)
            setState(profile.state)
            setTown(profile.town)
            setCountry(profile.country)
            setPincode(profile.pincode)
            setPhoneNumber(profile.phoneNumber)
            setProfession(profile.profession)
            setIsApproved(profile.isApproved)

        }

}
  },[ dispatch, updateProfileSuccess, profile])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(profileUpdateActions({
        id:profile.id,
        username,
        email,
        firstName,
        lastName,
        state,
        town,
        country,
        pincode,
        phoneNumber,
        profession,
        isApproved
    }
        
    ));
  };

  return (
    <>
      <div className="signup">
        <div className="signup_main">
          <div className="signup_form">
            <form onSubmit={submitHandler}>
              <div className="signup_text">
                <div className="signup_text1">LOGIN</div>
              </div>
              <div className="signup_container">
                <label>username</label>
                <input
                  id="username"
                  className="input"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="signup_container">
                <label>email</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>First Name</label>
                <input
                  id="firstName"
                  className="input"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Last Name</label>
                <input
                  id="lastName"
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>State</label>
                <input
                  id="state"
                  className="input"
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Town</label>
                <input
                  id="text"
                  className="input"
                  type="text"
                  placeholder="town"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Country</label>
                <input
                  id="country"
                  className="input"
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Pincode</label>
                <input
                  id="pincode"
                  className="input"
                  type="number"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Phone Number</label>
                <input
                  id="phonenumber"
                  className="input"
                  type="number"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Profession</label>
                <input
                  id="profession"
                  className="input"
                  type="text"
                  placeholder="Profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>

              <div className="signup_container">
                <label>Approved</label>
                <input
                  id="profession"
                  className="input"
                  type="text"
                  placeholder="Profession"
                  value={isApproved}
                  onChange={(e) => setIsApproved(e.target.value)}
                />
              </div>



              <div className="signup_button">
                <button className="button_input" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {updateUserLoading && <Loaders />}
            {updateUserError && (
              <ErrorMessage type="error" error={updateUserError} />
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default UserUpdate;
