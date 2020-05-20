import React, { Component } from "react";
import API from "../../utils/API";
import TableBody from "../TableBody/index"
// import workers from "./workers.json";

// styles if there is one
// import TableBody from "../TableBody.js";

export default class TableData extends Component {
  state = {
    search: "",
    users: [{}],
    filteredUsers: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    //  console.log(this.state)
    API.getUsers()
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  //I need to create a function that will allow the users to search for an employee
  // handleFormSubmit that will take in a user's input to look for someone

  render() {
    return (
      <div className="tableData">
        <TableBody users={this.state.users}>
        </TableBody>

      </div>
    );
  }
}

// Map function inside containing div on line 23, map over this.state.users, look at Pupster app at SearchForm.js

// export default TableData;
