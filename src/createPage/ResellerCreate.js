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
  RESELLER_CREATE_RESET,
  RESELLER_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  resellerListAction,
  resellerCreateAction,
  resellerDeleteAction,
} from "../actions/advertiseActions2";



const ResellerCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id } = params;


  // RESELLER CREATE

  const resellerCreate = useSelector((state) => state.resellerCreate);
  const {
    error:     createResellerError,
    loading:   createResellerLoading,
    reseller: createReseller,
    success: createResellerSuccess,
  } = resellerCreate;

  // RESELLER LIST
  const resellerList = useSelector((state) => state.resellerList);
  const {
    error:      listResellerError,
    loading:    listResellerLoading,
    resellers:  listReseller,
  } = resellerList;

  // RESELLER DELETE
  const resellerDelete = useSelector((state) => state.resellerDelete);
  const {
    error:     deleteResellerError,
    loading:   deleteResellerLoading,
    reseller:  deleteReseller,
    success:   deleteResellerSuccess,
  } = resellerDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(resellerListAction());
    dispatch({ type: RESELLER_CREATE_RESET });
    dispatch({ type: RESELLER_DELETE_RESET });

    if (createResellerSuccess) {
      navigate(`/reseller-update/${createReseller.id}/${createReseller.slug}`);
    }
  }, [dispatch, createResellerSuccess, deleteResellerSuccess]);


  // CREATE RESELLER HANDLER
  const resellerCreateHandler = () => {
    dispatch(resellerCreateAction());
  };

  // DELETE RESELLER HANDLER
  const resellerDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(resellerDeleteAction(id, slug));
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
        {createResellerError ? (
          <ErrorMessage type="error" error={createResellerError} />
        ) : createResellerError ? (
          <Loaders />
        ) : (
          <button onClick={resellerCreateHandler}>Create Reseller Post</button>
        )}
      </div>

      {listResellerLoading ? (
        <Loaders />
      ) : listResellerError ? (
        <ErrorMessage type="error" error={listResellerError} />
      ) : (
        <div className="post_table">
          {deleteResellerError && (
            <ErrorMessage type="error" error={deleteResellerError} />
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
              {listReseller.map((reseller) => (
                <tr>
                  <td>{reseller.id}</td>
                  <td>{reseller.title}</td>
                  <td>{reseller.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/reseller-update/${reseller.id}/${reseller.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteResellerLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => resellerDeleteHandler(reseller.id, reseller.slug)}>
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

export default ResellerCreate;
