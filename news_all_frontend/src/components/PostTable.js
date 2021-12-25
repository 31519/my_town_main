import React from "react";
import "../css_styles/PostTable.css";
import { Link } from "react-router-dom";
const PostTable = ({ cat }) => {
  return (
    <div className="post_table">
      <table className="post_scroll">
        <thead>
          <tr className="post_header">
            <th>user</th>
            <th>title</th>
            <th>isApproved</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <Link to="/productivity-create" state={{ models: `${cat}` }}>
              <td>edit</td>
            </Link>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>cos</td>
            <td>This is the tile</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
