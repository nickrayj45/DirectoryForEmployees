import React from "react";
import "./style.css";

function TableBody({ users }) {
  return (
    <div>
      {users.map(
        ({ gender, name, id, email, picture, index }) => (
          // Use beneath syntax
          (<tr key={index}>{gender}</tr>),
          (<tr key={index}>{name}</tr>), 
          (<tr key={index}>{id}</tr>), 
          (<tr key={index}>{email}</tr>),
          (<img key={index}>{picture}</img>)
        )
      )}
      ;
    </div>
  );
}

export default TableBody;
