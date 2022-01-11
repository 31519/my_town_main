import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Loaders from "../components/Loader";
import "../css_styles/UserTable.css";
import { Button, Grid, Card, CardMedia } from "@mui/material";


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
                    <Link className="text-link" to={`/${redirect}-detail/${model.id}/${model.slug}/`}>
                      <h3>{model.title}</h3>
                    </Link>
                  </td>
                  <td>{model.createAt}</td>
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

      {/* <div>
        {createModelError ? (
          <ErrorMessage type="error" error={createModelError} />
        ) : createModelError ? (
          <Loaders />
        ) : (
          <button onClick={modelCreateHandler}>Create {redirect} Post</button>
        )}
      </div>

      {listModelLoading ? (
        <Loaders />
      ) : listModelError ? (
        <ErrorMessage type="error" error={listModelError} />
      ) : (
        <div className="post_table">
          {deleteModelError && (
            <ErrorMessage type="error" error={deleteModelError} />
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
              {listModel.map((model) => (
                <tr>
                  <td>{model.id}</td>
                  <td>{model.title}</td>
                  <td>{model.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/${redirect}-update/${model.id}`}>
                    <td>edit</td>
                  </Link>
                  {deleteModelLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => modelDeleteHandler(model.id)}>
                      Delete
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </>
  );
};

export default PostTable;

// import React from "react";
// import "../css_styles/PostTable.css";
// import { Link } from "react-router-dom";
// import { Grid, Button } from "@mui/material";
// const PostTable = ({ cat }) => {
//   return (
//     <Grid className="limiter">
//       <Grid className="container-table100">
//         <Grid item className="profile-table" md={12} sm={12} xs={12} lg={12}>
//           <Grid
//             className="profile-table-header-title"
//             item
//             md={4}
//             sm={3}
//             xs={12}
//             lg={12}
//           >
//             <h2>Page View</h2>
//           </Grid>
//           <Grid className="profile-table-header-delete" item>
//             <h2>1235</h2>
//           </Grid>
//         </Grid>
//         <Grid classnName="wrap-table100">
//           <Grid className="table100" >
//             <table className="post_scroll">
//               <thead>
//                 <tr className="table100-head">
//                   <th className="column1">user</th>
//                   <th className="column2">title</th>
//                   <th className="column3">Approved</th>
//                   <th className="column4">edit</th>
//                   <th className="column5">delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="column1">cos</td>
//                   <td className="column2">
//                     This is the tkj s df gh k j sd h g ijd shgkjsd hgj kdshg j i dshgkjd shf gkjrj uile
//                    </td>
//                   <td className="column3">Yes</td>
//                   <td className="column4">
//                     <Link
//                       className="link-text"
//                       to="/productivity-create"
//                       state={{ models: `${cat}` }}
//                     >
//                       edit
//                     </Link>
//                   </td>
//                   <td className="column5">Delete</td>
//                 </tr>
//                 <tr>
//                   <td className="column1">cos</td>
//                   <td className="column2">
//                     This is the
//                     tkjsdfghkjsdhgijdshgkjsdhgjkdshgjidshgkjdshfgkjrjuile
//                   </td>
//                   <td className="column3">Yes</td>
//                   <td className="column4">
//                     <Link
//                       className="link-text"
//                       to="/productivity-create"
//                       state={{ models: `${cat}` }}
//                     >
//                       edit
//                     </Link>
//                   </td>
//                   <td className="column5">Yes</td>
//                 </tr>
//               </tbody>
//             </table>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default PostTable;
