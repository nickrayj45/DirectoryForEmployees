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
      users :[],
      // search: "",
      // error: ""
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

    // Beneath is where I tried to get the search input to work

    // handleInputChange = event => {
    //   this.setState({ search: event.target.value });
    // };

   

    API.getEmployees()
      .then( res => {
        console.log(res);
        // console.log(results.results[0].id.value);
        // console.log(res.data.results[0].email);
        // console.log(res.data.results[0].picture.large);
        this.setState({ users: res.data.results })
      }).catch((err) => console.log(err));
  }

  handleFormSubmit = event => {
    console.log(event.target.value)
    };

  render() {

    // if (this.state.loading) {
    //   return <div>loading...</div>
    // }

    // if (!this.state.person) {
    //   return <div>didn't get a person</div>
    // }
    
    return (
      <div>
      <SearchInput 
      handleFormSubmit={this.handleFormSubmit}
      users={this.state.users}
      />
      
        
      <TableBody users={this.state.users}/>
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
