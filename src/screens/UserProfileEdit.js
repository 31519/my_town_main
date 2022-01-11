import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from 'react-router-dom'
import { createTechs } from "../actions/techActions";

import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";

import "../css_styles/UserProfileEdit.css";

import {Grid, FormControl, Input, InputLabel } from "@mui/material"

const UserProfileEdit = () => {
  const [techs, setTechs] = useState([]);
  const newsApiKey = "d049a308e4634c8b8a28ce3b4b3059be";
  const techNewsApi = () => async () => {
    console.log("Fetching api");
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newsApiKey}`
    );
    console.log("data", data);
    console.log("techs1", techs);
    setTechs(data.articles);
    console.log("techs2", techs);
  };

  techs.map((tech) => console.log("techs.author", tech.author));

  // const userLogin = useSelector(state => state.userLogin)
  // const {userInfo} = userLogin;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastsName] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState()
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setsPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createTechs(
        firstName,
        lastName,
        username,
        email,
        phone,
        pincode,
        gender,
        country,
        state,
        town,
        image

      )
    );
  };

  return (
    <>
      <div className="profile_edit">
        <div className="profile_edit_form">
          <form onSubmit={submitHandler}>
            <div className="text">
              <div className="subtitle">Let's Update User Models</div>
            </div>
            <FormControl className="profile_edit_input">
              <label>First Name</label>
              <input
                id="author"
                className="input"
                type="text"
                placeholder="Name"
              />
            </FormControl>
            
            <div className="profile_edit_input_button ic2">
              <button className="button_input" type="submit">
                Submit
              </button>
            </div>
          </form>
          {/* <div className="techcreate">
            {<TechCreateNewsApi/>}
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserProfileEdit;