import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  category: {
    color:'red'
  }

}));

const FilterData = ({datas}) => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const classes = useStyles();


  const AllData = []
  const unique = []
  // const DataSet=[]

  const data = ["cos", "maya", "bud"]
  const fetchData= async() => {
    const items = await datas;
    console.log('items before for loop', items)
    for (var i = 0; i < items.length; i++) {
      AllData.push(items[i].category)
      console.log("after for Alldata ", AllData)
      
    }

    
    const DataSet = [...new Set(AllData)]
    console.log("DataSet", DataSet)
  }


  fetchData()
  // console.log("aa", DataSet)
  console.log("aas", data)
  

  return (
      
      <div className={classes.mainContainer}>
        
        {data && (

        <div className={classes.container}>
            {data.map((dat) => (

            <div className={classes.category}>
              <h1>{dat}</h1>
            </div>

            ))}
            {/* <h2 onClick={()=> console.log('o',DataSet[0][1])}>{DataSet[0][1]}</h2> */}

        </div>
        )}

    </div>
  );
};

export default FilterData;
