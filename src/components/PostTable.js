import React from "react";
import "../css_styles/PostTable.css";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
const PostTable = ({ cat }) => {
  return (
    <Grid className="limiter">
      <Grid className="container-table100">
        <Grid item className="profile-table" md={12} sm={12} xs={12} lg={12}>
          <Grid
            className="profile-table-header-title"
            item
            md={4}
            sm={3}
            xs={12}
            lg={12}
          >
            <h2>Page View</h2>
          </Grid>
          <Grid className="profile-table-header-delete" item>
            <h2>1235</h2>
          </Grid>
        </Grid>
        <Grid classnName="wrap-table100">
          <Grid className="table100" >
            <table className="post_scroll">
              <thead>
                <tr className="table100-head">
                  <th className="column1">user</th>
                  <th className="column2">title</th>
                  <th className="column3">Approved</th>
                  <th className="column4">edit</th>
                  <th className="column5">delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="column1">cos</td>
                  <td className="column2">
                    This is the tkj s df gh k j sd h g ijd shgkjsd hgj kdshg j i dshgkjd shf gkjrj uile
                   </td>
                  <td className="column3">Yes</td>
                  <td className="column4">
                    <Link
                      className="link-text"
                      to="/productivity-create"
                      state={{ models: `${cat}` }}
                    >
                      edit
                    </Link>
                  </td>
                  <td className="column5">Delete</td>
                </tr>
                <tr>
                  <td className="column1">cos</td>
                  <td className="column2">
                    This is the
                    tkjsdfghkjsdhgijdshgkjsdhgjkdshgjidshgkjdshfgkjrjuile
                  </td>
                  <td className="column3">Yes</td>
                  <td className="column4">
                    <Link
                      className="link-text"
                      to="/productivity-create"
                      state={{ models: `${cat}` }}
                    >
                      edit
                    </Link>
                  </td>
                  <td className="column5">Yes</td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostTable;
