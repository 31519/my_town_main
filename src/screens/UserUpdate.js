import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";

import { PROFILE_UPDATE_RESET } from "../constants/userConstants";
import axios from "axios"

import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import {
  userDetailActions,
  userUpdateActions,
  profileDetailActions,
  profileUpdateActions,
} from "../actions/userActions";

import "../css_styles/ProfileEdit.css";

import { Grid, Card, FormControl, Input, InputLabel } from "@mui/material";

const UserUpdate = () => {
  const params = useParams();
  const profile_id = params.id;

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
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const userUpdate = useSelector((state) => state.userUpdate);

  const profileDetail = useSelector((state) => state.profileDetail);
  const profileUpdate = useSelector((state) => state.profileUpdate);

  const {
    error: detailUserError,
    loading: detailUserLoading,
    user: detailUser,
  } = userDetail;

  const {
    error: updateUserError,
    loading: updateUserLoading,
    user: updateUser,
    success: updateUserSuccess,
  } = userUpdate;

  const {
    error: detailProfileError,
    loading: detailProfileLoading,
    profile,
  } = profileDetail;

  const {
    error: updateProfileError,
    loading: updateProfileLoading,
    profile: updateProfile,
    success: updateProfileSuccess,
  } = profileUpdate;

  useEffect(() => {
    if (updateProfileSuccess) {
      dispatch({ type: PROFILE_UPDATE_RESET });
      navigate("/my-dashboard");
    } else {
      if (profile.id !== Number(profile_id)) {
        dispatch(profileDetailActions());
      } else {
        setUsername(profile.username);
        setEmail(profile.email);
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setImage(profile.image);
        setState(profile.state);
        setTown(profile.town);
        setCountry(profile.country);
        setPincode(profile.pincode);
        setPhoneNumber(profile.phoneNumber);
        setProfession(profile.profession);
      }
    }
  }, [dispatch, updateProfileSuccess, profile]);


  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    formData.append('product_id', profile_id)

    setLoading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post('/api/users/profile-image/',
      formData, config)

      setImage(data.image)
      setLoading(false)
    } catch (error){
      setLoading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      profileUpdateActions({
        id: profile.id,
        username,
        email,
        firstName,
        lastName,
        image,
        state,
        town,
        country,
        pincode,
        phoneNumber,
        profession,
      })
    );
  };

  return (
    <>
      <div className="edit">
        <div className="edit-main">
          <Card className="edit-form">
            Edit
            <form onSubmit={submitHandler}>
              <FormControl variant="standard" className="signup_container">
                <label>username</label>
                <Input
                  id="username"
                  className="input"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl className="signup_container">
                <label>email</label>
                <Input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>First Name</label>
                <Input
                  id="firstName"
                  className="input"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>Last Name</label>
                <Input
                  id="lastName"
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
              <Grid className="signup_container">
                <label>Image</label>
                <img src={image} style={{width:"80%", height:"30%"}} alt="img"/>
                <Input 
                  type="file"
                  accept="image/*"
                  // value={image}
                  onChange={uploadFileHandler}
                />
                {loading && <Loaders/>}

              </Grid>




              <FormControl className="signup_container">
                <label>State</label>
                <Input
                  id="state"
                  className="input"
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>Town</label>
                <Input
                  id="text"
                  className="input"
                  type="text"
                  placeholder="town"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>Country</label>
                <Input
                  id="country"
                  className="input"
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>Pincode</label>
                <Input
                  id="pincode"
                  className="input"
                  type="number"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>Phone Number</label>
                <Input
                  id="phonenumber"
                  className="input"
                  type="number"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>

              <FormControl className="signup_container">
                <label>Profession</label>
                <Input
                  id="profession"
                  className="input"
                  type="text"
                  placeholder="Profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </FormControl>

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
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserUpdate;
