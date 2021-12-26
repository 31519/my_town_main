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
  TOURISMS_CREATE_RESET,
  TOURISMS_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  tourismsListAction,
  tourismsCreateAction,
  tourismsDeleteAction,
} from "../actions/advertiseActions2";



const TourismsCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id } = params;


  // TOURISMS CREATE

  const tourismsCreate = useSelector((state) => state.tourismsCreate);
  const {
    error:     createTourismsError,
    loading:   createTourismsLoading,
    tourisms : createTourisms,
    success:   createTourismsSuccess,
  } = tourismsCreate;

  // TOURISMS LIST
  const tourismsList = useSelector((state) => state.tourismsList);
  const {
    error:      listTourismsError,
    loading:    listTourismsLoading,
    tourismss:  listTourisms,
  } = tourismsList;

  // TOURISMS DELETE
  const tourismsDelete = useSelector((state) => state.tourismsDelete);
  const {
    error:     deleteTourismsError,
    loading:   deleteTourismsLoading,
    tourisms : deleteTourisms,
    success:   deleteTourismsSuccess,
  } = tourismsDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(tourismsListAction());
    dispatch({ type: TOURISMS_CREATE_RESET });
    dispatch({ type: TOURISMS_DELETE_RESET });

    if (createTourismsSuccess) {
      navigate(`/tourisms-update/${createTourisms.id}/${createTourisms.slug}`);
    }
  }, [dispatch, createTourismsSuccess, deleteTourismsSuccess, deleteTourisms]);


  // CREATE TOURISMS HANDLER
  const tourismsCreateHandler = () => {
    dispatch(tourismsCreateAction());
  };

  // DELETE TOURISMS HANDLER
  const tourismsDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(tourismsDeleteAction(id, slug));
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
        {createTourismsError ? (
          <ErrorMessage type="error" error={createTourismsError} />
        ) : createTourismsError ? (
          <Loaders />
        ) : (
          <button onClick={tourismsCreateHandler}>Create Shops Post</button>
        )}
      </div>

      {listTourismsLoading ? (
        <Loaders />
      ) : listTourismsError ? (
        <ErrorMessage type="error" error={listTourismsError} />
      ) : (
        <div className="post_table">
          {deleteTourismsError && (
            <ErrorMessage type="error" error={deleteTourismsError} />
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
              {listTourisms.map((tourisms) => (
                <tr>
                  <td>{tourisms.id}</td>
                  <td>{tourisms.title}</td>
                  <td>{tourisms.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/tourisms-update/${tourisms.id}/${tourisms.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteTourismsLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => tourismsDeleteHandler(tourisms.id, tourisms.slug)}>
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

export default TourismsCreate;
