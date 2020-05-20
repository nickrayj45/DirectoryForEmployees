import React, { Component } from "react";
import "./style.css";
import TableData from "../TableData/index";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1 class="display-4">Employees</h1>
        <TableData></TableData>
      </div>
    );
  }
}
