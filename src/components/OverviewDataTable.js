import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Loaders from "../components/Loader";
import { makeStyles } from "@mui/styles";
import "../css_styles/AdminDashboard.css";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({}));

const OverviewDataTable = ({ model }) => {
  // const cats = cat;
  const classes = useStyles();


  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(15);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
      {model && model.length !== 0 ? (
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Page Views</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                            </label>
                          </div>
                        </th>
                        <th> Page </th>
                        <th> Timestamp </th>
                        <th style={{ width: "20px" }}> Ip Address </th>
                      </tr>
                    </thead>

                    <tbody>
                      {model.map((data) => (
                        <tr>
                          <td>
                            <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div>
                          </td>
                          <td>
                            <div
                              className="tableTitle"
                              style={{ width: "100px" }}
                            >
                              <h4
                                className={classes.title}
                                style={{
                                  fontSize: "0.875rem",
                                  color: "#00d25b",
                                  fontFamily: "Helvetica",
                                  overflowWrap: "break-word",
                                  wordBreak: "break-word",
                                }}
                              >
                                {data.page}
                              </h4>
                            </div>
                          </td>
                          <td>
                            <div
                              className="tableTitle"
                              style={{ width: "100px" }}
                            >
                              <h4
                                className={classes.title}
                                style={{
                                  fontSize: "0.875rem",
                                  color: "rgb(0, 224, 255)",
                                  fontFamily: "Helvetica",
                                  overflowWrap: "break-word",
                                  wordBreak: "break-word",
                                }}
                              >
                                {data.timestamp && data.timestamp.split("T", 1)}{" "}
                                {"Time"}{" "}
                                {data.timestamp && data.timestamp.substr(11, 8)}{" "}
                                {/* <Moment format="YYYY-MM-D HH:mm">{data.date}</Moment> */}
                              </h4>
                            </div>
                          </td>
                          <td>
                            <div
                              className="tableTitle"
                              style={{ width: "100px" }}
                            >
                              <h4
                                className={classes.title}
                                style={{
                                  fontSize: "0.875rem",
                                  color: "#fc424a",
                                  fontFamily: "Helvetica",
                                  overflowWrap: "break-word",
                                  wordBreak: "break-word",
                                }}
                              >
                                {data.ip_address}
                              </h4>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="noDataCreateModel">
            <h2 className="noDataCreateModelText"> No View Log</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default OverviewDataTable;
