import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import Footers from "../components/Footers";
import Advertise from "../components/Advertise";
import "../css_styles/DetailProductivity.css";
import ProductivityDetail from "../components/ProductivityDetail";
import {useLocation} from  'react-router-dom'

import { advertiseListAction } from "../actions/advertiseActions";




const DetailProductiivity = () => {
  const location = useLocation()
  const {models} = location.state

  const dispatch = useDispatch();
  const advertiseList = useSelector(state => state.advertiseList);


  const {
    error: advertiseError,
    loading: advertiseLoading,
    advertises,
  } = advertiseList;

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);


  return (
    <div>
      <div className="productivity_main">
        <div className="productivity_advertise">

        </div>
        <div className="productivity_cards">
          {/* <ProductivityDetail tech={advertise} models={models}/> */}
        </div>
        <div className="productivity_advertise">
          {/* <Advertise tech={techs} /> */}
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default DetailProductiivity;
