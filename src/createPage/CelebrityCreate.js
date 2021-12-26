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
  CELEBRITY_CREATE_RESET,
  CELEBRITY_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  celebrityListAction,
  celebrityCreateAction,
  celebrityDeleteAction,
} from "../actions/advertiseActions";



const CelebrityCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id } = params;
  // console.log("params", id);


  // CELEBRITIES CREATE

  const celebrityCreate = useSelector((state) => state.celebrityCreate);
  const {
    error: createCelebrityError,
    loading: createCelebrityLoading,
    celebrity: createCelebrity,
    success: createCelebritySuccess,
  } = celebrityCreate;

  // CELEBRITIES LIST
  const celebrityList = useSelector((state) => state.celebrityList);
  const {
    error: listCelebrityError,
    loading: listCelebrityLoading,
    celebrities:listCelebrities,
  } = celebrityList;

  // CELEBRITIES DELETE
  const celebrityDelete = useSelector((state) => state.celebrityDelete);
  const {
    error: deleteCelebrityError,
    loading: deleteCelebrityLoading,
    celebrity: deleteCelebrity,
    success: deleteCelebritySuccess,
  } = celebrityDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(celebrityListAction());
    dispatch({ type: CELEBRITY_CREATE_RESET });
    dispatch({ type: CELEBRITY_DELETE_RESET });

    if (createCelebritySuccess) {
      navigate(`/celebrity-update/${createCelebrity.id}/${createCelebrity.slug}`);
    }
  }, [dispatch, createCelebritySuccess, deleteCelebritySuccess]);


  // CREATE CELEBRITY HANDLER
  const celebrityCreateHandler = () => {
    dispatch(celebrityCreateAction());
  };

  // DELETE CELEBRITY HANDLER
  const celebrityDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(celebrityDeleteAction(id, slug));
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
        {createCelebrityError ? (
          <ErrorMessage type="error" error={createCelebrityError} />
        ) : createCelebrityError ? (
          <Loaders />
        ) : (
          <button onClick={celebrityCreateHandler}>Create Celebrity Post</button>
        )}
      </div>

      {listCelebrityLoading ? (
        <Loaders />
      ) : listCelebrityError ? (
        <ErrorMessage type="error" error={listCelebrityError} />
      ) : (
        <div className="post_table">
          {deleteCelebrityError && (
            <ErrorMessage type="error" error={deleteCelebrityError} />
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
              {listCelebrities.map((celebrity) => (
                <tr>
                  <td>{celebrity.id}</td>
                  <td>{celebrity.title}</td>
                  <td>{celebrity.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/celebrity-update/${celebrity.id}/${celebrity.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteCelebrityLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => celebrityDeleteHandler(celebrity.id, celebrity.slug)}>
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

export default CelebrityCreate;
