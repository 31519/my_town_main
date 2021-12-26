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
  ADVERTISE_CREATE_RESET,
  ADVERTISE_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  advertiseListAction,
  advertiseCreateAction,
  advertiseDeleteAction,
} from "../actions/advertiseActions";



const AdvertiseCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id, slug } = params;


  // ADVERTISE CREATE

  const advertiseCreate = useSelector((state) => state.advertiseCreate);
  const {
    error: advertiseCreateError,
    loading: advertiseCreateLoading,
    advertise: advertise,
    success: advertiseCreateSuccess,
  } = advertiseCreate;

  // ADVERTISE LIST
  const advertiseList = useSelector((state) => state.advertiseList);
  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  // ADVERTISE DELETE
  const advertiseDelete = useSelector((state) => state.advertiseDelete);
  const {
    error: deleteAdvertiseError,
    loading: deleteAdvertiseLoading,
    advertise: deleteAdvertise,
    success: deleteAdvertiseSuccess,
  } = advertiseDelete;

  // USEEFFECT

  useEffect(() => {
    dispatch(advertiseListAction());
    dispatch({ type: ADVERTISE_CREATE_RESET });
    dispatch({ type: ADVERTISE_DELETE_RESET });

    if (advertiseCreateSuccess) {
      navigate(`/advertise-update/${advertise.id}/${advertise.slug}`);
    }
  }, [dispatch, advertiseCreateSuccess, deleteAdvertiseSuccess]);


  // CREATE ADVERTISE HANDLER
  const createProductHandler = () => {
    dispatch(advertiseCreateAction());
  };

  // DELETE ADVERTISE HANDLER
  const advertiseDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(advertiseDeleteAction(id, slug));
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
        {advertiseCreateError ? (
          <ErrorMessage type="error" error={advertiseCreateError} />
        ) : advertiseCreateLoading ? (
          <Loaders />
        ) : (
          <button onClick={createProductHandler}>Create Advertise</button>
        )}
      </div>

      {listAdvertiseLoading ? (
        <Loaders />
      ) : listAdvertiseError ? (
        <ErrorMessage type="error" error={listAdvertiseError} />
      ) : (
        <div className="post_table">
          {deleteAdvertiseError && (
            <ErrorMessage type="error" error={deleteAdvertiseError} />
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
              {listAdvertise.map((advertise) => (
                <tr>
                  <td>{advertise.id}</td>
                  <td>{advertise.title}</td>
                  <td>{advertise.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/advertise-update/${advertise.id}/${advertise.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteAdvertiseLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => advertiseDeleteHandler(advertise.id)}>
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

export default AdvertiseCreate;