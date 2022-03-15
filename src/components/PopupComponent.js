import React, {useState} from 'react'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../css_styles/PopupComponent.css";

import { Grid } from "@mui/material";

const PopupComponent = ({image, title}) => {
    return (
    <Popup
        trigger={open => (
        <img
            src={image}
            alt={title}
            // style={{ width:'700px', height:'500px', margin:'0px', padding:'0px'}}
        />)
        }
        position=" left"
    >
        {close => (
        <Grid  className="image-popup">
            <button className="close" onClick={close}>
                &times;
            </button>
            <img
           
            src={image}
            alt={title}
            onClick={close}
            />
        </Grid>
        )}
    </Popup>
    )
}

export default PopupComponent