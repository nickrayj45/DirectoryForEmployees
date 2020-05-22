import React, { Component } from "react";
import API from "../../utils/API";
import TableBody from "../TableBody";
// import TableBody from "../TableBody/index"
// import workers from "./workers.json";

// styles if there is one
// import TableBody from "../TableBody.js";

export default class TableData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users :[]
    }
  }
  // state = {
  //   // loading: true,
  //   person: {},
  //   results: [],
  //   id: ""
  //   // search: "",
  //   // users: {},
  //   // filteredUsers: [],
  //   // results: [],
  //   // error: "",
  // };
  

  componentDidMount() {
    //console.log(this.state)
    // const url = "https://randomuser.me/api/?results=200&nat=us";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({ person: data.results[0], loading: false })

    API.getEmployees()
      .then( res => {
        console.log(res);
        // console.log(results.results[0].id.value);
        // console.log(res.data.results[0].email);
        // console.log(res.data.results[0].picture.large);
        this.setState({ users: res.data.results })
      }).catch((err) => console.log(err));
  }

  //I need to create a function that will allow the users to search for an employee
  // handleFormSubmit that will take in a user's input to look for someone

  render() {

    // if (this.state.loading) {
    //   return <div>loading...</div>
    // }

    // if (!this.state.person) {
    //   return <div>didn't get a person</div>
    // }
    
    return (
      <div>

        <div>
          <TableBody users={this.state.users}/>
        </div>
        {/* {this.state.loading || this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <p>{this.state.person.name.title}</p>
          </div>  
        )
      } */}
      </div>
    )
    // (
    //   <div className="tableData">
    //     <TableBody users={this.state.users}>
    //     </TableBody>

    //   </div>
    // );
  };
};


// export default TableData;
