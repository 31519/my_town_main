import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Footers from "../components/Footers";
import SideBar from "../components/SideBar";
import { useSelector, useDispatch } from "react-redux";
import {  useParams, useNavigate } from "react-router-dom";
import Loaders from "../components/Loader";
import imageCompression from "browser-image-compression";
import {
  resellerDetailAction,
  resellerUpdateAction,
} from "../actions/advertiseActions2";

import { RESELLER_UPDATE_RESET } from "../constants/productivityConstants";


const useStyles = makeStyles({
  advertiseContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#191c24",
  },
  advertiseHeader: {
    display: "flex",
    justifyContent: "center",
    margin: "40px",
    border: "1px solid #2c2d2f",
    padding: "15px",
    fontSize: "1.5em",
    fontFamily: "Helvetica",
    color: "#9696a3",
  },
  formContainer: {
    margin: "0px",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  },

  resellerInput: {
    width: "80%",
    fontSize: "14px",
    margin: "0px",
    fontFamily: "Helvetica",
    letterSpacng: "1px",
    height: "35px",
    opacity: "0.6",
    padding: "0px 10px",
    backgroundColor: "black",
    letterSpacing: "1.2px",
    color: "rgb(0 224 255)",
    outline: "none",
    "&:hover": {
      border: "2px solid #078295",
    },
    transition: "all 0.2s ease",
    "&:focus": {
      border: "2px solid #078295",
      opacity: "1",

    },
  },

  resellerInputContent: {
    width: "80%",
    fontSize: "14px",
    margin: "0px",
    fontFamily: "Helvetica",
    letterSpacng: "1px",
    padding: "10px",
    background: "#191c24",
    backgroundColor: "black",
    opacity:"0.6",
    letterSpacing: "1.2px",
    lineHeight: "20px",
    color: "rgb(0 224 255)",
    "&:hover": {
      border: "2px solid #078295",
    },
    transition: "all 0.2s ease",
    "&:focus": {
      border: "2px solid #078295",
      opacity: "1",
    },
    borderRadius: "2px",
  },
  divInput: {
    justifyContent: "start",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    bacgroundColo: "white"
  },
  divInput2: {
    width: "80%",
    textAlign: "start",
    margin: "5px 0px",
    display: "flex",

  },
  required:{
    color: 'red', 
    fontFamily: "Helvetica"
  },
  resellerLabel: {
    fontFamily: "Helvetica",
    fontSize: "0.9em",
    width: "80%",
    marginBottom: "5px",
    color: "#2990d1",
    flex: "1",
    letterSpacing: "1.2px"
  },

  inputImage: {
    margin: "10px auto",
    width: "60%",
    height: "30%",
    objectFit: "cover",
  },
  resellerInputSubmit: {
    width: "80%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    height: "35px",
    fontFamily: "Helvetica",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    background: "#078295",
    outline: "none",
    fontSize: "16px",
    letterSpacing: "1px",
    borderShadow: "none",
    "&:hover": {
      color: "white",
      background: "#181818",
    },
  },
});

const ResellerUpdate = () => {
  const classes = useStyles();
  const params = useParams();
  const { id, slug } = params;
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  
  const resellerDetail = useSelector((state) => state.resellerDetail);
  const {
    error:   detailResellerError,
    loading: detailResellerLoading,
    reseller:   detailReseller,
  } = resellerDetail;

  const resellerUpdate = useSelector((state) => state.resellerUpdate);
  const {
    error:   updateResellerError,
    loading: updateResellerLoading,
    success: updateResellerSuccess,
    reseller:   updateReseller,
  } = resellerUpdate;

  

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateResellerSuccess) {
      dispatch({ type: RESELLER_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/my-dashboard");

      }
    } else {
      if (!detailReseller.title || detailReseller.id !== Number(id)) {
        dispatch(resellerDetailAction(id,slug));
      } else {
        setCategory(detailReseller.category);
        setCountry(detailReseller.country);
        setState(detailReseller.state);
        setAddress(detailReseller.address);
        setContact(detailReseller.contact);
        setImage(detailReseller.image);
        setTitle(detailReseller.title);
        setContent(detailReseller.content);
        setDays(detailReseller.day);
        setPrice(detailReseller.price);
      }
    }
  }, [dispatch, slug, id, detailReseller, updateResellerSuccess]);

  const uploadFileHandler = async (e) => {

    const file = e.target.files[0];
    const formData = new FormData();
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }

    try {
      const compressedFile = await imageCompression(file, options);
      // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

      
      formData.append("image", compressedFile);
    } catch (error) {
      console.log(error);
    }
    
    formData.append("product_id", id);
  
    setLoading(true);
  
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
  
      const { data } = await axios.post(
        `${process.env.REACT_APP_PORT}/api/resell/image/`,
        formData,
        config
      );
  
      setImage(data.image);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      resellerUpdateAction({
        id: id,
        slug: slug,
        category,
        country,
        state,
        address,
        contact,
        image,
        title,
        content,
        days,
        price
      })
    );
  };

  return (
    <div>
      <SideBar />
      <div>
        <div className={classes.advertiseContainer}>
          <div className={classes.advertiseHeader}> Update Product</div>
          <form onSubmit={submitHandler} className={classes.formContainer}>
            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Category</label>
              </div>
              <input
                id="category"
                type="text"
                className={classes.resellerInput}
                placeholder="eg . Bike, Car"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Country</label>
              </div>
              <input
                id="country"
                type="text"
                className={classes.resellerInput}
                placeholder="eg . India"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>State</label>
              </div>
              <input
                id="state"
                className={classes.resellerInput}
                type="text"
                placeholder="eg . Shillong"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Address</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="address"
                className={classes.resellerInput}
                type="text"
                placeholder="eg . West Jaintia Hill District , 793150"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Contact</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="contact"
                type="text"
                className={classes.resellerInput}
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Title</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="title"
                className={classes.resellerInput}
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Content</label>
                <p className={classes.required}>*</p>
              </div>
              <textarea
                id="content"
                className={classes.resellerInputContent}
                type="textfield"
                cols="50"
                rows="10"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Number of Days to Advertising</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="title"
                className={classes.resellerInput}
                type="number"
                placeholder="eg. 2, 3, 4, 5, 6.......etc"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Price</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="title"
                className={classes.resellerInput}
                type="number"
                placeholder="Rs ...."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.resellerLabel}>Image</label>
              </div>
              <input
                className="input"
                id="imageInput"
                type="file"
                onChange={uploadFileHandler}
              />
              {image && (
                <img className={classes.inputImage} src={image} alt="" />
              )}
            </div>
            {loading && <Loaders />}

            {detailResellerLoading ? (
              <Loaders />
            ) : (
              <div className={classes.divInput}>
                <input
                  id="submit"
                  className={classes.resellerInputSubmit}
                  type="submit"
                  value="Submit"
                />
              </div>
            )}
            <div className={classes.divInput} id="wrapper"></div>
          </form>

        </div>
      </div>
      <Footers />
    </div>
  );
};

export default ResellerUpdate;
