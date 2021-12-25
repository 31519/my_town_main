import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// COMPONENT IMPORT
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

// CSS IMPORT
import "../css_styles/Advertise.css";

// CONSTANT IMPORT
import {
  HOTEL_CREATE_RESET,
  HOTEL_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  hotelListAction,
  hotelCreateAction,
  hotelDeleteAction,
} from "../actions/advertiseActions2";



const HotelCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id } = params;


  // HOTEL CREATE

  const hotelCreate = useSelector((state) => state.hotelCreate);
  const {
    error:     createHotelError,
    loading:   createHotelLoading,
    hotel   :  createHotel,
    success:   createHotelSuccess,
  } = hotelCreate;

  // HOTEL LIST
  const hotelList = useSelector((state) => state.hotelList);
  const {
    error:      listHotelError,
    loading:    listHotelLoading,
    hotels  :    listHotel,
  } = hotelList;

  // HOTEL DELETE
  const hotelDelete = useSelector((state) => state.hotelDelete);
  const {
    error:     deleteHotelError,
    loading:   deleteHotelLoading,
    hotel:     deleteHotel,
    success:   deleteHotelSuccess,
  } = hotelDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(hotelListAction());
    dispatch({ type: HOTEL_CREATE_RESET });
    dispatch({ type: HOTEL_DELETE_RESET });

    if (createHotelSuccess) {
      navigate(`/hotel-update/${createHotel.id}/${createHotel.slug}`);
    }
  }, [dispatch, createHotelSuccess, deleteHotelSuccess, deleteHotel]);


  // CREATE HOTEL HANDLER
  const hotelCreateHandler = () => {
    dispatch(hotelCreateAction());
  };

  // DELETE HOTEL HANDLER
  const hotelDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(hotelDeleteAction(id,slug));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "50px",
      }}
    >
      <div>
        {createHotelError ? (
          <ErrorMessage type="error" error={createHotelError} />
        ) : createHotelError ? (
          <Loaders />
        ) : (
          <button onClick={hotelCreateHandler}>Create Hotels Post</button>
        )}
      </div>

      {listHotelLoading ? (
        <Loaders />
      ) : listHotelError ? (
        <ErrorMessage type="error" error={listHotelError} />
      ) : (
        <div className="post_table">
          {deleteHotelError && (
            <ErrorMessage type="error" error={deleteHotelError} />
          )}
          <table className="post_scroll">
            <thead>
              <tr className="post_header">
                <th>id</th>
                <th>title</th>
                <th>isApproved</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {listHotel.map((hotel) => (
                <tr>
                  <td>{hotel.id}</td>
                  <td>{hotel.title}</td>
                  <td>{hotel.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/hotel-update/${hotel.id}/${hotel.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteHotelLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => hotelDeleteHandler(hotel.id, hotel.slug)}>
                      Delete
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HotelCreate;
