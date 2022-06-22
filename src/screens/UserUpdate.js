import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import axios from "axios";
import ProfileOverview from "../components/ProfileOverview";
import imageCompression from "browser-image-compression";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { userDetailActions, userUpdateActions } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    minHeight: "100vh",
    display: "flex",
    background: "#215c5e",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  profilePreview: {
    width: "30%",
    margin: "20px 20px 20px 10px",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "20px ",
    },
  },
  editFormContainer: {
    display: "flex",
    justifyContent: "center",
    width: "70%",
    margin: "20px 20px 20px 10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "20px ",
    },
  },

  formContainer: {
    margin: "0px",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  },

  profileInput: {
    width: "100%",
    padding: "8px 5px 8px 10px",
    border: "1px solid #cccccc",
    outline: "none",
    transition: "all 0.30s ease-in-out",
    "&:hover": {
      backgroundColor: "#fafafa",
      border: "1px solid #078295",
    },
    "&:focus": {
      border: "1px solid #078295",
    },
  },

  divInput: {
    justifyContent: "start",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  divInput2: {
    width: "80%",
    textAlign: "start",
    margin: "5px 0px",
  },
  profileLabel: {
    fontSize: "14px",
    width: "80%",
    marginBottom: "5px",
    color: "white",
    fontWeight: "900",
    letterSpacing: "1px",
  },
  advertiseLabel: {
    fontSize: "14px",
    width: "80%",
    marginBottom: "5px",
    color: "white",
    fontWeight: "900",
    letterSpacing: "1px",
  },
  inputImage: {
    margin: "10px auto",
    width: "60%",
    height: "30%",
    objectFit: "cover",
  },
  profileInputSubmit: {
    width: "80%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    height: "35px",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    background: "#181818",
    outline: "none",
    fontSize: "16px",
    letterSpacing: "1px",
    borderShadow: "none",
    "&:hover": {
      color: "black",
      background: "#00d25b",
    },
  },
  radioButton: {
    marginRight: "30px",
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "16px",
  },
  radioButtonLabel: {
    marginRight: "30px",
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "16px",
  },
  inputRadioButton: {
    width: "90%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
  gridHeader:{
    display: "flex",
    justifyContent: "center",
    background: "#215c5e",
  },
  backButton:{
    padding: "3px 10px",
    margin: "10px",
    fontSize: "20px",
    fontFamily: "Helvetica",
    background: "black",
    color : "white",
    borderRadius: "5px",
    "&:hover": {
      color: "black",
      background: "#00d25b",
    },
    borderShadow: "none"
  }
}));

const UserUpdate = () => {
  const classes = useStyles();
  const params = useParams();
  const user_id = params.id;

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");

  const [image, setImage] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userUpdate = useSelector((state) => state.userUpdate);

  const userDetail = useSelector((state) => state.userDetail);
  const {
    user: detailUser,
    loading: loadingUser,
    error: errorUser,
  } = userDetail;

  const {
    error: updateUserError,
    loading: updateUserLoading,
    user: updateUser,
    success: updateUserSuccess,
  } = userUpdate;

  useEffect(() => {
    if (updateUserSuccess) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/my-dashboard");
      // alert("Profile Updated Successfully");
    } else {
      if (detailUser.id !== Number(user_id)) {
        dispatch(userDetailActions(detailUser.id));
      } else {
        setEmail(detailUser.email);
        setFirstName(detailUser.first_name);
        setLastName(detailUser.last_name);
        setImage(detailUser.image);
        setState(detailUser.state);
        setCity(detailUser.city);
        setAddress(detailUser.address);
        setCountry(detailUser.country);
        setPincode(detailUser.pincode);
        setPhoneNumber(detailUser.phone_number);
      }
    }
  }, [dispatch, updateUserSuccess, detailUser]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    const options = {
      maxSizeMB: 3,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

      formData.append("image", compressedFile);
    } catch (error) {
      console.log(error);
    }
    formData.append("product_id", user_id);

    setLoading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/api/users/profile-image/",
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
      userUpdateActions({
        id: detailUser.id,
        email,
        firstName,
        lastName,
        state,
        city,
        country,
        pincode,
        phoneNumber,
        gender,
        address
      })
    );
  };

  const navigateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {/* <SideBar /> */}
      <div className={classes.mainDiv}>

          <div className={classes.gridHeader} container item>
            <button className={classes.backButton} onClick={navigateHandler} color="info" variant="contained">
              Go Back
            </button>
          </div>
        <div className={classes.profileContainer}>
          <div className={classes.profilePreview}>
            {detailUser && <ProfileOverview user={detailUser} />}
            <div className={classes.profileTextDetail}></div>
          </div>
          <div className={classes.editFormContainer}>
            <form onSubmit={submitHandler} className={classes.formContainer}>
              {/* <div className={classes.divInput}>
              <div className={classes.divInput2}>
                <label className={classes.profileLabel}>Username</label>
              </div>
              <input
                type="text"
                className={classes.profileInput}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div> */}

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>Email</label>
                </div>
                <input
                  className={classes.profileInput}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>First Name</label>
                </div>
                <input
                  id="state"
                  className={classes.profileInput}
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>Last Name</label>
                </div>
                <input
                  id="address"
                  className={classes.profileInput}
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>Address</label>
                </div>
                <input
                  id="address"
                  className={classes.profileInput}
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>State</label>
                </div>
                <input
                  id="contact"
                  type="text"
                  className={classes.profileInput}
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>City</label>
                </div>
                <input
                  id="title"
                  className={classes.profileInput}
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>Country</label>
                </div>
                <input
                  id="title"
                  className={classes.profileInput}
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>Pincode</label>
                </div>
                <input
                  id="title"
                  className={classes.profileInput}
                  type="number"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div className={classes.divInput}>
                <div className={classes.divInput2}>
                  <label className={classes.profileLabel}>Phone Number</label>
                </div>
                <input
                  id="title"
                  className={classes.profileInput}
                  type="text"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className={classes.divInput2}>
                  <p className={classes.profileLabel} style={{color:"#19ffe8"}}>{gender}</p>
                </div>
              <div className={classes.inputRadioButton}>

                <input
                  className={classes.radioButton}
                  type="radio"
                  name="r1"
                  value={gender}
                  onChange={(e) => setGender("Male")}
                />
                <label className={classes.radioButtonLabel}>Male</label>
                <input
                  className={classes.radioButton}
                  type="radio"
                  name="r1"
                  value={gender}
                  onChange={(e) => setGender("Female")}
                />
                <label className={classes.radioButton}>Female</label>
              </div>

              {/* <div className={classes.divInput}>
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
            {loading ? <Loaders />:(
              <img className={classes.inputImage} src={image} alt="" />
            )}
            </div> */}

              {updateUserLoading ? (
                <Loaders />
              ) : (
                <div className={classes.divInput}>
                  <input
                    id="submit"
                    className={classes.profileInputSubmit}
                    type="submit"
                    value="Update Profile"
                  />
                </div>
              )}

              {/* {updateUserLoading && <Loaders />} */}
              {updateUserError && (
                <ErrorMessage type="error" error={updateUserError} />
              )}
              {updateUserError && (
                <ErrorMessage type="error" error={updateUserError} />
              )}
            </form>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default UserUpdate;
