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
  JOBS_CREATE_RESET,
  JOBS_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  jobListAction,
  jobCreateAction,
  jobDeleteAction,
} from "../actions/advertiseActions2";



const JobCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id } = params;


  // JOB CREATE

  const jobCreate = useSelector((state) => state.jobCreate);
  const {
    error:     createJobError,
    loading:   createJobLoading,
    job     :  createJob,
    success:   createJobSuccess,
  } = jobCreate;

  // JOB LIST
  const jobList = useSelector((state) => state.jobList);
  const {
    error:      listJobError,
    loading:    listJobLoading,
    jobs   :    listJob,
  } = jobList;

  // JOB DELETE
  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    error:     deleteJobError,
    loading:   deleteJobLoading,
    job :      deleteJob,
    success:   deleteJobSuccess,
  } = jobDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(jobListAction());
    dispatch({ type: JOBS_CREATE_RESET });
    dispatch({ type: JOBS_DELETE_RESET });

    if (createJobSuccess) {
      navigate(`/job-update/${createJob.id}/${createJob.slug}`);
    }
  }, [dispatch, createJobSuccess, deleteJobSuccess, deleteJob]);


  // CREATE JOB HANDLER
  const jobCreateHandler = () => {
    dispatch(jobCreateAction());
  };

  // DELETE JOB HANDLER
  const jobDeleteHandler = (id,slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(jobDeleteAction(id,slug));
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
        {createJobError ? (
          <ErrorMessage type="error" error={createJobError} />
        ) : createJobError ? (
          <Loaders />
        ) : (
          <button onClick={jobCreateHandler}>Create Jobs Post</button>
        )}
      </div>

      {listJobLoading ? (
        <Loaders />
      ) : listJobError ? (
        <ErrorMessage type="error" error={listJobError} />
      ) : (
        <div className="post_table">
          {deleteJobError && (
            <ErrorMessage type="error" error={deleteJobError} />
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
              {listJob.map((job) => (
                <tr>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/job-update/${job.id}/${job.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteJobLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => jobDeleteHandler(job.id, job.slug)}>
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

export default JobCreate;
