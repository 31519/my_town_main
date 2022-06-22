import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Footers from "../components/Footers";
import SideBar from "../components/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Loaders from "../components/Loader";
import imageCompression from "browser-image-compression";
// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { advertiseDetailAction } from "../actions/advertiseActions";
import { advertiseUpdateAction } from "../actions/advertiseActions";
import { ADVERTISE_UPDATE_RESET } from "../constants/productivityConstants";

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

  advertiseInput: {
    width: "80%",
    fontSize: "14px",
    margin: "0px",
    fontFamily: "Helvetica",
    letterSpacng: "1px",
    height: "35px",
    padding: "0px 10px",
    opacity:"0.6",
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
      opacity: "1"
    },
  },

  advertiseInputContent: {
    width: "80%",
    fontSize: "14px",
    margin: "0px",
    fontFamily: "Helvetica",
    letterSpacng: "1px",
    background: "#191c24",
    borderRadius: "2px",
    opacity:"0.6",
    padding: "10px",
    backgroundColor: "black",
    letterSpacing: "1.2px",
    lineHeight: "20px",
    color: "rgb(0 224 255)",
    "&:hover": {
      border: "2px solid #078295",
    },
    transition: "all 0.2s ease",
    "&:focus": {
      border: "2px solid #078295",
      opacity:"1",
    },
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
    fontFamily: "Helvetica",
    marginTop: "5px ",
  },
  advertiseLabel: {
    fontSize: "0.9em",
    width: "80%",
    marginTop: "5px",
    color: "#2990d1",
    flex: "1",
    letterSpacing: "1.2px",
    fontFamily: "Helvetica"
  },
  inputImage: {
    margin: "10px auto",
    width: "60%",
    height: "30%",
    objectFit: "cover",
  },
  advertiseInputSubmit: {
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

const UserPostUpdate = () => {
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
  const [days, setDays] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const advertiseDetail = useSelector((state) => state.advertiseDetail);
  const {
    error: advertiseDetailError,
    loading: advertiseDetailLoading,
    advertise: detailAdvertise,
  } = advertiseDetail;

  const advertiseUpdate = useSelector((state) => state.advertiseUpdate);
  const {
    error: updateAdvertiseError,
    loading: updateAdvertiseLoading,
    success: updateAdvertiseSuccess,
    advertise: updateAdvertise,
  } = advertiseUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateAdvertiseSuccess) {
      dispatch({ type: ADVERTISE_UPDATE_RESET });
      navigate("/my-dashboard");
    } else {
      if (!detailAdvertise.title || detailAdvertise.id !== Number(id)) {
        dispatch(advertiseDetailAction(id, slug));
      } else {
        setCategory(detailAdvertise.category);
        setCountry(detailAdvertise.country);
        setState(detailAdvertise.state);
        setAddress(detailAdvertise.address);
        setContact(detailAdvertise.contact);
        setImage(detailAdvertise.image);
        setTitle(detailAdvertise.title);
        setContent(detailAdvertise.content);
        setDays(detailAdvertise.day);
      }
    }
  }, [dispatch, slug, id, detailAdvertise, updateAdvertiseSuccess]);

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
        `api/advertisement/image/`,
        formData,
        config
      );
  
      setImage(data.image);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  // const file = e.target.files[0];
  // const formData = new FormData();
  // const reader = new FileReader();
  // reader.readAsDataURL(file);

  // reader.onload = (e) => {
  //   const image_url = e.target.result;

  //   const image = document.createElement("img");
  //   image.src = image_url;

  //   image.onload = (event) => {
  //     const canvas = document.createElement("canvas");
  //     const ratio = WIDTH / event.target.width;
  //     canvas.width = WIDTH;
  //     canvas.height = event.target.height * ratio;

  //     const context = canvas.getContext("2d");
  //     context.drawImage(image, 0, 0, canvas.width, canvas.height);

  //     const new_image_url = context.canvas.toDataURL("image/jpeg", 80);

  //     let new_image = document.createElement("img");
  //     new_image.src = new_image_url;
  //     document.getElementById("wrapper").appendChild(new_image);
  //     return new_image_url;



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      advertiseUpdateAction({
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
        days
      })
    );
  };

  return (
    <div>
      <SideBar />
      <div>
        <div className={classes.advertiseContainer}>
          <div className={classes.advertiseHeader}> Update Advertise</div>
          <form onSubmit={submitHandler} className={classes.formContainer}>
            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Category</label>
              </div>
              <input
                id="category"
                type="text"
                className={classes.advertiseInput}
                placeholder="eg . Job , Business"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Country</label>
              </div>
              <input
                id="country"
                type="text"
                className={classes.advertiseInput}
                placeholder="eg . India"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>State</label>
              </div>
              <input
                id="state"
                className={classes.advertiseInput}
                type="text"
                placeholder="eg . Shillong"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Address</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="address"
                className={classes.advertiseInput}
                type="text"
                placeholder="eg . West Jaintia Hill District , 793150"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Contact</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="contact"
                type="number"
                className={classes.advertiseInput}
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Title</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="title"
                className={classes.advertiseInput}
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Content</label>
                <p className={classes.required}>*</p>
              </div>
              <textarea
                id="content"
                className={classes.advertiseInputContent}
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
                <label className={classes.advertiseLabel}>Number of Days to Advertising</label>
                <p className={classes.required}>*</p>
              </div>
              <input
                id="title"
                className={classes.advertiseInput}
                type="number"
                placeholder="eg. 2, 3, 4, 5, 6.......etc"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
              />
            </div>

            <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.advertiseLabel}>Image</label>
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

            {updateAdvertiseLoading ? (
              <Loaders />
            ) : (
              <div className={classes.divInput}>
                <input
                  id="submit"
                  className={classes.advertiseInputSubmit}
                  type="submit"
                  value="Submit"
                />
              </div>
            )}
          </form>
          {/* {loading && (

          <div style={{position:"absolute",backgroundColor: "white", top:"0", width: "100%", height: "1500px", opacity: "0.1"}}>
            <Loaders />
          </div>
          )} */}
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default UserPostUpdate;
