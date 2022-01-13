import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Loaders from "../components/Loader";
import "../css_styles/UserTable.css";
import { Button, Grid,} from "@mui/material";


const PostTable = ({
  createModelError,
  modelCreateHandler,
  listModelLoading,
  listModelError,
  deleteModelError,
  listModel,
  deleteModelLoading,
  modelDeleteHandler,
  redirect,
}) => {
  // const cats = cat;

  return (
    <>
      <div className="user_table">
        <Grid>
          <h2>{redirect}</h2>
        </Grid>

        <table className="user_scroll">
          <Grid>
            {createModelError ? (
              <ErrorMessage type="error" error={createModelError} />
            ) : createModelError ? (
              <Loaders />
            ) : (
              <Button className="button" onClick={modelCreateHandler}>
                Create 
              </Button>
            )}
          </Grid>
          <thead>
            <tr className="user_header">
              <th width="30%">Title</th>
              <th>Created</th>
              <th>Approved</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listModel &&
              listModel.map((model) => (
                <tr key={model.id}>
                  <td width="30%">
                    {
                    model.isApproved
                    ?(
                      <Link className="text-link" to={`/${redirect}-detail/${model.id}/${model.slug}/`}>
                        <h3>{model.title}</h3>
                      </Link>
                    )
                    :(
                      <h3>{model.title}</h3>
                    )
                    }
                    
                  </td>
                  <td>{model.createdAt}</td>
                  {/* <td>{model.isApproved}</td> */}
                  <td
                    style={{
                      margin: "10px",
                      padding: "10px",
                      color:
                        (model.isApproved === true && "green") ||
                        (model.isApproved === false && "red"),
                    }}
                  >
                    {model.isApproved ? "Approved" : "Not yet"}
                  </td>
                  <td>
                    <Link
                      className="link-text"
                      to={`/${redirect}-update/${model.id}/${model.slug}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    {deleteModelLoading ? (
                      <Loaders />
                    ) : (
                      <Button
                        onClick={() => modelDeleteHandler(model.id, model.slug)}
                      >
                        Delete
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostTable;
