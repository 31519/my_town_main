import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// IMPORT COMPONENT

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import {
  hotelDetailAction,
  hotelUpdateAction,
} from "../actions/advertiseActions2";

import { HOTEL_UPDATE_RESET } from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const HotelUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isApproved, setIsApproved] = useState(true);

  const dispatch = useDispatch();
  const hotelDetail = useSelector((state) => state.hotelDetail);
  const {
    error:   detailHotelError,
    loading: detailHotelLoading,
    hotel   :detailHotel,
  } = hotelDetail;

  const hotelUpdate = useSelector((state) => state.hotelUpdate);
  const {
    error:   updateHotelError,
    loading: updateHotelLoading,
    success: updateHotelSuccess,
    hotel  : updateHotel,
  } = hotelUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (updateHotelSuccess) {
      dispatch({ type: HOTEL_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/hotel-create")
      }
    } else {
      if (!detailHotel.title || detailHotel.id !== Number(id)) {
        dispatch(hotelDetailAction(id, slug));
      } else {
        setCategory(detailHotel.category);
        setCountry(detailHotel.country);
        setState(detailHotel.state);
        setAddress(detailHotel.address);
        setContact(detailHotel.contact);
        setImage(detailHotel.image);
        setTitle(detailHotel.title);
        setContent(detailHotel.content);
      }
    }
  }, [dispatch, id, detailHotel, updateHotelSuccess, updateHotel]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      hotelUpdateAction({
        id: id,
        slug:slug,
        category,
        country,
        state,
        address,
        contact,
        image,
        title,
        content,
        isApproved,
      })
    );
  };

  return (
    <>
      <div className="techcreate">
        <div className="form">
          <form onSubmit={submitHandler}>
            <div className="text">
              <div className="subtitle">Let's Update Models</div>
            </div>
            <div className="input-container">
              <label>Category</label>
              <input
                id="category"
                className="input"
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Country</label>
              <input
                id="country"
                className="input"
                type="text"
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>State</label>
              <input
                id="state"
                className="input"
                type="state"
                placeholder="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Address</label>
              <input
                id="address"
                className="input"
                type="address"
                placeholder="Url"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Contact</label>
              <input
                id="contact"
                className="input"
                type="text"
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Title</label>
              <input
                id="title"
                className="input"
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input-container ic2">
              <label>Content</label>
              <textarea
                id="content"
                className="input"
                type="textfield"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="input-container ic2">
              <label>Images</label>
              <input
                id="image"
                className="input"
                type="text"
                placeholder="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            {userInfo.isAdmin && (
              <div className="input-container ic2">
                <label>Approved</label>
                <select className="input-container ic2">
                  <option>Choose</option>
                  <option
                    id="image"
                    className="input"
                    value={false}
                    onChange={(e) => setIsApproved(e.target.value)}
                  >
                    Do not Approved
                  </option>
                  <option
                    id="isApproved"
                    className="input"
                    value={true}
                    onChange={(e) => setIsApproved(e.target.value)}
                  >
                    Approved
                  </option>
                </select>
                {/* <input
                id="approved"
                className="input"
                type="text"
                placeholder="approved"
                value={isApproved}
                onChange={(e) => setIsApproved(e.target.value)}
              /> */}
              </div>
            )}
            <div className="input-container ic2">
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

export default HotelUpdate;
