import {  createTheme, 
    useMediaQuery, 
    useTheme } from '@mui/material/styles'

const green = "#16b859"
const white = "#763A7A"
const secondary = "#1a1917"


export default createTheme({
    palette: {
        common: {
            blue: 'green'
        },
        primary:{
            main:`${green}`
        },
        secondary:{
            main: `${secondary}`
        }
        
         
    },
    
    typography:{
        // fontFamily: "Pacifico",
        // fontSize: 20,

        h6: {
            // fontSize: "16px",
            // fontWeight: 400
        },

        estimate: {
            textTransform: "none",
            borderRadius : "50px",
            // fontFamily: "Pacifico",
            fontFamily: "SanSerif",
            fontSize: "16px",
            color: "black",
            border: "blue 2px solid",
            fontWeight: 400,
            
          }
    },

    breakpoints: {
        values: {
            xs: 200,
            sm: 450,
            md: 600,
            lg: 900
        }
    }

})