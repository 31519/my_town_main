import React from "react";

import {
  Typography,
  Button
} from "@mui/material";

import ShareIcon from '@mui/icons-material/Share';

import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon,
  } 
   from "react-share";


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  socialMediaButton:{
    // borderRadius: "50px",
    width: "30px",
    height: "30px",
    margin: "0 5px"

  },
  share :{
    fontSize: "5px"
  },
  container: {
    display: "flex",

  },
  button: {
    color:"blue",
    fontWeight:"600",
    fontSize: "20px"
  }
  // socialContainer7
  });
const SocialShare = ({url}) => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
        <Button className={classes.button} size="medium" startIcon={ <ShareIcon color="blue"/>}  >Share</Button>
       
        <TwitterShareButton 
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialContainer}
            >
              <TwitterIcon className={classes.socialMediaButton} />
          </TwitterShareButton>
          <TelegramShareButton 
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            >
              <TelegramIcon className={classes.socialMediaButton} />
          </TelegramShareButton>
        <FacebookShareButton 
            // url={`${process.env.REACT_APP_PORT}/#/${item.redirect}/${item.id}/${item.slug}`}
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            >
              <FacebookIcon className={classes.socialMediaButton}/>
          </FacebookShareButton>
          

          <WhatsappShareButton 
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            >
              <WhatsappIcon className={classes.socialMediaButton}/>
          </WhatsappShareButton>

          

          
        </div>
    )
}

export default SocialShare;
