import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Loaders from "../components/Loader";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paginate from "../components/Pagination";
import "../css_styles/AdminDashboard.css";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({}));

const DataTable = ({
  createModelError,
  modelCreateHandler,
  listModelLoading,
  listModelError,
  deleteModelError,
  listModel,
  deleteModelLoading,
  modelDeleteHandler,
  redirect,
  keyword,
  page,
  pages,
  user,
  approvedHandler,
  isApprovedViews,
  name,
  isAdmin,
  reseller
}) => {
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
      {listModel && listModel.length !== 0 ? (
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                {createModelError ? (
                  <ErrorMessage type="error" error={createModelError} />
                ) : createModelError ? (
                  <Loaders />
                ) : (
                  <div className="createModel" onClick={modelCreateHandler}>
                    <button className="createModelText">
                      Create {redirect} Post
                    </button>
                  </div>
                )}
                <h4 className="card-title">
                  {redirect} List --- {listModel && listModel.length} items
                </h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="tableRow">
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
                        <th> User </th>
                        <th> Title </th>
                        <th> Created Date </th>
                        {isApprovedViews === true && <th> Approved Date </th>}
                        {isApprovedViews === true && <th> Expired Date </th>}
                        <th> Approved </th>
                        {isApprovedViews === true && <th> Days </th>}
                        {reseller === true && <th> Price </th>}
                        <th> Edit </th>
                        <th> Delete </th>
                        {isApprovedViews === true && <th> Contact </th>}
                        {isApprovedViews === true && <th> Address </th>}
                        {isAdmin === true && <th> Total Views </th>}
                      </tr>
                    </thead>

                    <tbody>
                      {listModel.map((model) => (
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
                            {user && (
                              <>
                                {/* <img src={user.image} alt="" /> */}
                                <span className="pl-2">{model.user.email}</span>
                              </>
                            )}
                          </td>
                          <td>
                            <Link
                              className={classes.textLink}
                              to={`/${name}/${model.id}/${model.slug}`}
                            >
                              <div className="tableTitle">
                                <h4
                                  className={classes.title}
                                  style={{
                                    fontSize: "0.875rem",
                                    color: "#6c7293",
                                    fontFamily: "Helvetica",
                                    overflowWrap: "break-word",
                                    wordBreak: "break-word",
                                  }}
                                >
                                  {model.title}
                                </h4>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Moment>{model.createdAt}</Moment>
                            {/* {" "}
                            {model.createdAt &&
                              model.createdAt.split("T", 1)}{" "}
                            {"Time"}{" "}
                            {model.createdAt && model.createdAt.substr(11, 8)}{" "} */}
                          </td>
                          {isApprovedViews === true && (
                            <td>
                              <Moment>{model.approvedDate}</Moment>
                              {/* {" "}
                                  {model.approvedDate &&
                                    model.approvedDate.split("T", 1)}{" "}
                                  {"Time"}{" "}
                                  {model.approvedDate &&
                                    model.approvedDate.substr(11, 8)}{" "} */}
                            </td>
                          )}

                          {isApprovedViews === true && (
                            <td>
                              <Moment>{model.expireDate}</Moment>
                              {/* {" "}
                                  {model.approvedDate &&
                                    model.approvedDate.split("T", 1)}{" "}
                                  {"Time"}{" "}
                                  {model.approvedDate &&
                                    model.approvedDate.substr(11, 8)}{" "} */}
                            </td>
                          )}
                          <td>
                            <div>
                              {isAdmin === true ? (
                                <p
                                  className={
                                    model.isApproved
                                      ? "isApproved"
                                      : "notApproved"
                                  }
                                  onClick={() =>
                                    approvedHandler(
                                      model.id,
                                      model.slug,
                                      model.isApproved
                                    )
                                  }
                                >
                                  {model.isApproved ? "Approved" : "Not yet"}
                                </p>
                              ) : (
                                <p
                                  className={
                                    model.isApproved
                                      ? "isApproved"
                                      : "notApproved"
                                  }
                                >
                                  {model.isApproved ? "Approved" : "Not yet"}
                                </p>
                              )}
                            </div>
                          </td>
                          {isApprovedViews === true && <td> {model.day} days </td>}
                          {reseller === true && <td>Rs {model.price}</td>}
                          <td>
                            <Link
                              to={`/${redirect}-update/${model.id}/${model.slug}`}
                              style={{ textDecoration: "none" }}
                            >
                              <h4
                                className={classes.edit}
                                style={{
                                  fontSize: "0.875rem",
                                  color: "#00e0ff",
                                  fontFamily: "Helvetica",
                                }}
                              >
                                Edit
                              </h4>
                            </Link>{" "}
                          </td>
                          <td>
                            {deleteModelLoading ? (
                              <Loaders />
                            ) : (
                              <h4
                                className="delete"
                                onClick={() =>
                                  modelDeleteHandler(model.id, model.slug)
                                }
                              >
                                Delete
                              </h4>
                            )}{" "}
                          </td>
                          {isApprovedViews === true && (
                          <td>
                            <div className="badge badge-outline-success">
                              {model.contact}
                            </div>
                          </td>
                          )}
                          {isApprovedViews === true && (
                          <td>
                            <div className="badge badge-outline-success">
                              {model.address} 
                            </div>
                          </td>
                          )}
                          {isAdmin === true && (
                          <td>
                            <div className="badge badge-outline-success">
                              {model.views} Views
                            </div>
                          </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Paginate keyword={keyword} page={page} pages={pages} />
          </div>
        </div>
      ) : (
        <div>
          <div className="noDataCreateModel" onClick={modelCreateHandler}>
            <button className="createModelText">
              {" "}
              No Data ? Create {redirect} Post
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DataTable;
