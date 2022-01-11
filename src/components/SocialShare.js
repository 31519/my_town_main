import React from "react";

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

  });
const SocialShare = ({url}) => {
    const classes = useStyles();
    console.log(url, 'share window url')
    return(
        <>
        <FacebookShareButton 
            // url={`${process.env.REACT_APP_PORT}/#/${item.redirect}/${item.id}/${item.slug}`}
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialMediaButton}>
              <FacebookIcon size={30}  style={{ paddingLeft:"5px", paddingRight:"5px"}}/>
          </FacebookShareButton>
          

          <WhatsappShareButton 
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialMediaButton}>
              <WhatsappIcon size={30} style={{ paddingLeft:"5px", paddingRight:"5px"}}/>
          </WhatsappShareButton>

          <TelegramShareButton 
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialMediaButton}>
              <TelegramIcon size={30} style={{ paddingLeft:"5px", paddingRight:"5px"}} />
          </TelegramShareButton>

          <TwitterShareButton 
            url={url}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialMediaButton}>
              <TwitterIcon size={30} style={{ paddingLeft:"5px", paddingRight:"5px"}} />
          </TwitterShareButton>
        </>
    )
}

export default SocialShare;
