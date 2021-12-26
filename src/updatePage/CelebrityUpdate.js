import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";


// IMPORT COMPONENT
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { celebrityDetailAction } from "../actions/advertiseActions";
import { celebrityUpdateAction } from "../actions/advertiseActions";
import { CELEBRITY_UPDATE_RESET , CELEBRITY_DETAIL_RESET} from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const CelebrityUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  // console.log("params celeb", params)
  const navigate = useNavigate();



  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const celebrityDetail = useSelector((state) => state.celebrityDetail);
  const {
    error: detailCelebrityError,
    loading: detailCelebrityLoading,
    celebrity: detailCelebrity,
  } = celebrityDetail;

  const celebrityUpdate = useSelector((state) => state.celebrityUpdate);
  const {
    error: updateCelebrityError,
    loading: updateCelebrityLoading,
    success: updateCelebritySuccess,
    advertise: updateCelebrity,
  } = celebrityUpdate;


  useEffect(() => {
    if (updateCelebritySuccess) {
      dispatch({ type: CELEBRITY_UPDATE_RESET });
      // dispatch({ type: CELEBRITY_DETAIL_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/celebrity-create")
      }
    } else {
      if (
        !detailCelebrity.title ||
        detailCelebrity.id !== Number(id) 
      ) {
        dispatch(celebrityDetailAction(id, slug));
      } else {
        setCategory(detailCelebrity.category);
        setCountry(detailCelebrity.country);
        setState(detailCelebrity.state);
        setAddress(detailCelebrity.address);
        setContact(detailCelebrity.contact);
        setImage(detailCelebrity.image);
        setTitle(detailCelebrity.title);
        setContent(detailCelebrity.content);
      }
    }
  }, [dispatch, id, detailCelebrity,updateCelebritySuccess, updateCelebrity]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      celebrityUpdateAction({
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
                  placeholder="categorygfhfg"
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
              {/* {userInfo.isAdmin && (
              <div className="input-container ic2">
              <label>Approved</label>
              <input
                id="approved"
                className="input"
                type="text"
                placeholder="approved"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            )} */}
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

export default CelebrityUpdate;