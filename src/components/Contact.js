import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: " #d7e3d7",
    
  },
  phoneCall: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
    backgroundColor: " white",
    border: "1px solid #00fe69",
    widht: "100%"
  },
  whatsApp: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#00fe69",
    margin: "5px",
    widht: "100%"
  },
  textCall: {
    fontFamily: "Helvetica",
    margin: "10px",
    color: "green",
    fontSize: "14px",
    flex: 1
  },
  textChat: {
    fontFamily: "Helvetica",
    margin: "10px",
    fontSize: "14px",
    color: "white",
    flex: 1
  },
}));

const Contact = ({ phoneNumber }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.phoneCall}>
        <h3 className={classes.textCall}>Contact Seller</h3>
      </div>
      <div className={classes.whatsApp}>
        <h3 className={classes.textChat}>Chat</h3>
      </div>
    </div>
  );
};

export default Contact;
