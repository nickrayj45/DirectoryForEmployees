import React, { Component } from "react";
import API from "../../utils/API";
import TableBody from "../TableBody";
import SearchInput from "../SearchInput";

// import TableBody from "../TableBody/index"
// import workers from "./workers.json";

// styles if there is one
// import TableBody from "../TableBody.js";

export default class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: []
      // search: "",
      // error: ""
    };
  }
  

  componentDidMount() {

    API.getEmployees()
      .then((res) => {
        // console.log(res);
        // console.log(results.results[0].id.value);
        // console.log(res.data.results[0].email);
        // console.log(res.data.results[0].picture.large);
        this.setState({
          users: res.data.results,
          filteredUsers: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleOnChange = (event) => {
    // console.log(event)
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      // console.log(item)
      let values = Object.values(item)
      
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
    console.log(filteredList)
  };

  render() {
    return (
      <div>
        <SearchInput
          handleOnChange={this.handleOnChange}
          users={this.state.users}
        />
        <table>
          <TableBody users={this.state.filteredUsers} />
        </table>
      </div>
    );
  }
}

// export default TableData;
