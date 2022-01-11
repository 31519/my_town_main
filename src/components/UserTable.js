import React from "react";
import "../css_styles/UserTable.css";
const UserTable = ({user}) => {
  return (
    <div className="user_table">
        <table className="user_scroll">
            
            <thead>
                <tr className="user_header">
                    <th>user</th>
                    <th>username</th>
                    <th>passwordjasdfjajfsajfslajflasjfksjadfjasljfsajdfsjfkljsafljsadjfsjflsjdflsjfasljfasljfslkdjflsdjf</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tr>
            </tbody>
        </table>
      
    </div>
  );
};

export default UserTable;
