import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    width: "500px",
    padding: "25px",
    margin: "10px auto 0",
    borderTop: "5px solid #ff0000",
    boxShadow: "0 0 5px rgba(0,0,0, 0.5)",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "80%",
    },
  },
  header: {
    fontSize: "16px",
    lineHeight: "24px",
    padding: "5px 30px",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "#811c6c",
  },
  inputName: {
    width: "90%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
  },

  contactIcon: {
    position: "absolute",
    fontSize: "18px",
    color: "#078295",
    borderRight: "1px solid #cccccc",
    padding: "5px",
  },
  textName: {
    width: "100%",
    padding: "8px 0px 8px 10px",
    border: "1px solid #cccccc",
    outline: "none",
    transition: "all 0.30s ease-in-out",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#fafafa",
      border: "1px solid #078295",
    },
    "&:focus": {
      border: "1px solid #078295",
    },
  },
  radioButton: {
    marginRight: "4px",
  },
  radioButtonLabel: {
    marginRight: "30px",
  },
  textLink: {
    textDecoration: "none",
  },
  textSignup: {
    fontSize: "16px",
    fontFamily: "Helvetica",
    margin: "10px auto",
  },
  inputSubmit: {
    width: "90%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    height: "35px",
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
  required: {
    position: "absolute",
    right: "10px",
    color: "red",
  },

  textArea: {
    width: "100%",
    padding: "8px 0px 8px 10px",
    border: "1px solid #cccccc",
    outline: "none",
    transition: "all 0.30s ease-in-out",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#fafafa",
      border: "1px solid #078295",
    },
    "&:focus": {
      border: "1px solid #078295",
    },
  },
  success: {
    width: "90%",
    background: "rgb(148, 246, 129 , 68%)",
    margin: "0px auto",
    postion: "relative",
  },
  successText: {
    fontSize: "16px",
    lineHeight: "20px",
    padding: "5px 30px",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    alignItems: "center",
    letterSpacing: "1.2px",
  },
  successClose: {
    position: "absolute",
    right: "15%",
    color: "red",
    padding: "5px 10px",
    fontSize: "16px",
    opacity: "0.5",
    cursor: "pointer",
  },
  poster: {
    // width: "280px",
    height: "400px",
    display: "flex",
    margin: "5px auto",
    // padding:"25px",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      width: "280px",
      padding: "25px",
    },

    [theme.breakpoints.down("sm")]: {
      // width: "150px",
    },
    [theme.breakpoints.down("md")]: {
      // width: "260px",
    },
  },
  image: {
    height: "100%",
    // width: "100%",
    objectFit: "cover",
  },
  whatsappLink:{
    padding: "6px 10px",
    color:"white",
    backgroundColor:"#14ffa3",
    borderRadius: "25px",
    letterSpacing: "1.5px",
    fontFamily: "Helvetica",
    display:"flex",
    alignItems:"center",
    cursor:"pointer"

  },
  whatsappLinkDiv:{
    display: "flex",
    justifyContent:"center"
  },
  icons:{
    margin:"0px 5px"
  }
}));

const ContactUs = () => {
  const classes = useStyles();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const contactUsHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `api/users/users-forms/`,
        {
          full_name: fullName,
          email: email,
          message: message,
        },

        config
      );

      setSuccess(data.detail);
      setEmail("");
      setMessage("");
      setFullName("");

      //   console.log("daata", success);
      //   setImage(data.image);
      //   setLoading(false);
    } catch (error) {
      //   setLoading(false);
    }
  };

  const successClose = () => {
    setSuccess("");
  };

  const image = "images/static/contactus.jpg";

  return (
    <>
      <div className={classes.poster}>
        <img className={classes.image} src={image} alt="contact us" />
      </div>
      <div className={classes.container}>
        {success && (
          <div className={classes.success}>
            <p className={classes.successClose} onClick={successClose}>
              X
            </p>
            <p className={classes.successText}>{success}</p>
          </div>
        )}
        {/* Contact us  portion */}
        <div className={classes.whatsappLinkDiv}>
          <a
            className={classes.whatsappLink}
            href="https://wa.me/8257984943?text=Hi"
            target="_blank"
          >
            <WhatsAppIcon className={classes.icons}/>
            whatsapp
          </a>
        </div>
        <h2 className={classes.header}>
          Send Us Your Feedback , Complaint , Insights
        </h2>
        <div className="signup-form">
          <form className="form" onSubmit={contactUsHandler}>
            <div className={classes.inputName}>
              <input
                className={classes.textName}
                type="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                fullWidth
                required
              />
              <div className={classes.required}>*</div>
            </div>

            <div className={classes.inputName}>
              <input
                className={classes.textName}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <div className={classes.required}>*</div>
            </div>

            <div className={classes.inputName}>
              <textarea
                className={classes.textArea}
                type="textArea"
                placeholder="Message, Enquiry, Feedback"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                required
                rows="8"
              />
              <div className={classes.required}>*</div>
            </div>

            <input
              type="submit"
              className={classes.inputSubmit}
              value="Submit"
              //   onClick={contactUsHandler}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
