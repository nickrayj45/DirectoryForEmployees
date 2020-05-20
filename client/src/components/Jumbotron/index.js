import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Use search bar to filter out employees by name and id number.
      </p>
    </div>
  );
}

export default Jumbotron;
