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
  EVENT_CREATE_RESET,
  EVENT_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  eventListAction,
  eventCreateAction,
  eventDeleteAction,
} from "../actions/advertiseActions";



const EventCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id,slug } = params;


  // EVENT CREATE

  const eventCreate = useSelector((state) => state.eventCreate);
  const {
    error:     createEventError,
    loading:   createEventLoading,
    event: createEvent,
    success: createEventSuccess,
  } = eventCreate;

  // EVENT LIST
  const eventList = useSelector((state) => state.eventList);
  const {
    error:      listEventError,
    loading:    listEventLoading,
    events:listEvent,
  } = eventList;

  // EVENT DELETE
  const eventDelete = useSelector((state) => state.eventDelete);
  const {
    error:     deleteEventError,
    loading:   deleteEventLoading,
    event: deleteEvent,
    success:   deleteEventSuccess,
  } = eventDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(eventListAction());
    dispatch({ type: EVENT_CREATE_RESET });
    dispatch({ type: EVENT_DELETE_RESET });

    if (createEventSuccess) {
      navigate(`/event-update/${createEvent.id}/${createEvent.slug}`);
    }
  }, [dispatch, createEventSuccess, deleteEventSuccess]);


  // CREATE EVENT HANDLER
  const eventCreateHandler = () => {
    dispatch(eventCreateAction());
  };

  // DELETE EVENT HANDLER
  const eventDeleteHandler = (id,slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(eventDeleteAction(id, slug));
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
        {createEventError ? (
          <ErrorMessage type="error" error={createEventError} />
        ) : createEventError ? (
          <Loaders />
        ) : (
          <button onClick={eventCreateHandler}>Create Event Post</button>
        )}
      </div>

      {listEventLoading ? (
        <Loaders />
      ) : listEventError ? (
        <ErrorMessage type="error" error={listEventError} />
      ) : (
        <div className="post_table">
          {deleteEventError && (
            <ErrorMessage type="error" error={deleteEventError} />
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
              {listEvent.map((event) => (
                <tr>
                  <td>{event.id}</td>
                  <td>{event.title}</td>
                  <td>{event.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/event-update/${event.id}/${event.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteEventLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => eventDeleteHandler(event.id, event.slug)}>
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

export default EventCreate;
